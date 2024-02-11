import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const GET = async (req: Request) => {
  const data = await prisma.user.findMany();

  console.log(data);

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  const body = await req.json();
  const data = await prisma.user.create({ data: body });

  console.log(data);

  return NextResponse.json(data);
};
