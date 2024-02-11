import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  const body = await req.json();
  const user = await prisma.user.create({ data: body });

  return NextResponse.json(user);
};
