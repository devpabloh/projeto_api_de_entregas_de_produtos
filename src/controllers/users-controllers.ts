import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { prisma} from "@/database/prisma"
import {z} from "zod"
import { hash } from "bcrypt"

export class UsersController {
  async create (req: Request, res: Response) {

    const bodySchema = z.object({
      name: z.string().min(3).max(255),
      email: z.string().email(),
      password: z.string().min(6)
    })
    
    const {name, email, password} = bodySchema.parse(req.body)

    const userWithSameEmail = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(userWithSameEmail) {
      throw new AppError("User With same email already exists")
    }

    const passwordHash = await hash(password, 8)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      }
    })

    return res.status(201).json(user);
  }
}
