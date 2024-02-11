import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  const body = await req.json();
  const chat = await prisma.chat.findUnique({
    where: {
      id: body.id,
    },
    select: {
      id: true,
      reciever: true,
      sender: true,
      messages: true,
    },
  });

  console.log(chat);

  return NextResponse.json(chat);
};
