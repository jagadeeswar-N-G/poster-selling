import {z} from "zod"

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "password must be at least 8 charectors long" }),
  });


export  type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>; // we are inferign the type form the AuthCredentialsValidator