import {z} from "zod"

export const signupSchema = z.object({
    fullname:z.string().min(3,"Fullname must be at least 3 characters."),
    email:z.string().email("Invalid Email address"),
    password:z.string().min(6,"Password must atleast 6 characters.")
})

