"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner";
import { FormDataSchema } from "@/lib/schema"
import { addEntry, sendEmail } from "@/app/api/_actions"


type Inputs = z.infer<typeof FormDataSchema>



export default function ContactForm() {

  const form = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await sendEmail(data)
    if (result?.success) {
      toast.success("message envoyé")
      form.reset()
      return
    }
    toast.success("une erreur s'est produite")
  }



  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input 
                    placeholder=""
                    {...field} 
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="mon.email@site.fr" 
                    {...field} 
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Dites nous tout ce que vous voulez savoir."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  Votre message
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? 'En cours d\'envoi...' : 'Envoyer le message'}</Button>
        </form>
      </Form>
    </div>
  )
}
