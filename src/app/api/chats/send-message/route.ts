import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const message = await prisma.message.create({
      data: body,
    });

    console.log(message.createdAt.getDay())

    return NextResponse.json(message);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      error: error.message,
    });
  }
};
