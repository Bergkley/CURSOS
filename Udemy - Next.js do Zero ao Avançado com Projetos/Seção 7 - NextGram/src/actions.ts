"use server"

import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client"
import path from "path"

const prisma = new PrismaClient()

type FormState = {
    message: string,
    type: string
}

export async function getUserByEmail(email: string | null):Promise<User | null>  {
    if(!email)  return null

    const user = await prisma.user.findFirst({ where: { email:email }})

    return user
}

export async function updateUserProfile(formState: FormState,formData: FormData):Promise<FormState>  {
    return {message: "Perfil autualizado com sucesso", type: "success"}
}