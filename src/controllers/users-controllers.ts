import { Request, Response } from "express";

export class UsersController {
  create = async (req: Request, res: Response) => {
    
    
    return res.status(201).json({ message: "Usuário criado com sucesso" });
  }
}
