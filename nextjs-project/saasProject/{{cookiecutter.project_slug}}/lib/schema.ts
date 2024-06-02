import { z } from 'zod';

export const FormDataSchema = z.object({
  username: z
  .string()
  .min(2, {message: "Renseignez votre nom d'utilisateur"}),
  email: z
    .string()
    .min(1, {message:'Renseignez votre email'})
    .email({message: "l'email n'est pas correct"}),
  message: z
    .string()
    .min(1, {message:'laissez-nous un message avant'})
    .min(3, { message: "c'est tout, vous êtes sûr..?"})
})