import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisamdb';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        phone: body.phone,
      },
      include: {
        chats: true,
      },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Такого пользователя не существует",
      });
    }

    if (!(await bcrypt.compare(body.password, user?.password))) {
      return NextResponse.json({
        success: false,
        message: "Неверный пароль",
      });
    }

    const chats = await prisma.chat.findMany({
      where: {
        reciever: user.id,
      },
    });

    console.log(user);

    return NextResponse.json({
      id: user.id,
      username: user.username,
      phone: user.phone,
      chats: [...user.chats, ...chats],
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: error });
  }
};
