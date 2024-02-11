import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: {
        phone: body.phone,
      },
      select: {
        id: true,
        phone: true,
      },
    });

    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "Такой пользователь уже есть",
      });
    }

    try {
      const salt = await bcrypt.genSalt(10);

      const newUser = await prisma.user.create({
        data: {
          username: body.username,
          phone: body.phone,
          password: await bcrypt.hash(body.password, salt),
        },
      });

      return NextResponse.json({
        newUser,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        success: false,
        error: "Не удалось создать пользователя",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: error });
  }
};
