import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  const body = await req.json();

  console.log(body)

  const chat = await prisma.chat.create({
    data: body,
  });

  console.log(chat)

  return NextResponse.json(chat);
};
