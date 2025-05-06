import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "dev" ? ["query"] : [], //logar as querys em produ
});

// Observação: Arquivo de configuração do prisma, onde é feita a conexão com o banco de dados e é exportado o prisma para ser usado em outros arquivos.