'use server'
import { FormDataSchema } from "@/lib/schema";
import { z } from "zod";
import { Resend } from "resend";
import { ContactFromEmail } from "@/emails/contact-form-email"

type Inputs = z.infer<typeof FormDataSchema>

const resend = new Resend(process.env.RESEND_API_KEY);

export async function addEntry(data:Inputs) {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: true, error: result.error.format() };
  }

}

export async function sendEmail(data: Inputs) {
  const result = FormDataSchema.safeParse(data)

  if (result.success) {
    const { message, username, email } = result.data
    try {
      const {data} = await resend.emails.send({
        from: 'hello@monbouet.com',
        to: ['oliver.keb@icloud.com'], // to: email
        subject: `${username} vous a envoyé un message`,
        react: ContactFromEmail({
          username: username,
          message: message
        })
      })
      return { success: true, data}
    } catch (error) {
      return { success: false, error}
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format()}
  }
}