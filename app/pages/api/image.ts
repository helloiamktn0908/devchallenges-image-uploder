import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const prisma = new PrismaClient();
  console.log(req.body);
  const data = await prisma.image.create({
    data: {
      image: req.body.image,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  res.status(200).json(data);
}
