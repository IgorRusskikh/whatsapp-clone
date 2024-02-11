import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const GET = async (req: Request) => {
  const users = await prisma.user.findMany();

  console.log(users);

  return NextResponse.json(users);
};
