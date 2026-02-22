import {z} from "zod"

export const signupSchema = z.object({
    fullname:z.string().min(3,"Fullname must be at least 3 characters."),
    email:z.string().email("Invalid Email address"),
    password:z.string().min(6,"Password must atleast 6 characters.")
})

export const signinSchema=z.object({
    email:z.string().email('This field is required.'),
    password:z.string().min(1,"This field is required.")
})