import { z } from "zod";


// Registration form schema
export const formSchema = z.object({
    fullname: z.string().min(6, {
    message: "Full name must be at least 6 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(10, {
    message: "Email must be at least 10 characters.",
  }).email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export type FormSchema = z.infer<typeof formSchema>;


// Login form schema
export const loginSchema = z.object({
  email: z.string().min(10, {
    message: "Email must be at least 10 characters.",
  }).email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export type LoginSchema = z.infer<typeof loginSchema>;
