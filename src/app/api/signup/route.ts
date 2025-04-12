import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import {z} from "zod";

const userSchema = z.object({
    name: z.string().min(1, "Required").max(100),
    email: z.string().min(1, "Required").email('Invalid email'),
    password: z.string().min(8, 'Password must have 8 characters'),
})

export async function POST(req: Request){
    try {
        const body = await req.json();
        const {email, name, password} = userSchema.parse(body);

        const existingUser = await prisma.user.findUnique({
            where: {email: email}
        });
         if(existingUser){
            return NextResponse.json({ user: null, message: "User already exist"}, {status: (409)})
         }

         const hashedPassword = await hash(password, 10);

         const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
         });
         const {password: newUserPassword, ...rest} = newUser;
        return NextResponse.json({ user: rest, message: 'user created Successfully'}, {status: 201})
    } catch (error) {
        return NextResponse.json({ message: 'Some error while creating User'}, {status: 500})
    }
}