import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  const phone = (await req.json()).phone;

  const user = await prisma.user.findUnique({
    where: {
      phone: phone,
    },
    select: {
      id: true,
      chats: true,
    },
  });

  return NextResponse.json(user);
};
