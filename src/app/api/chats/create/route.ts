import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  const body = await req.json();

  const chat = await prisma.chat.create({
    data: body,
  });

  return NextResponse.json(chat);
};
