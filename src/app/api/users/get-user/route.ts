import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  const user = await prisma.user.findUnique({
    where: {
      phone: (await req.json()).phone,
    },
    select: {
      id: true,
      phone: true,
      chats: true,
    },
  });

  return NextResponse.json(user);
};
