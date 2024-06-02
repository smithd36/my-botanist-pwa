import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/utils/db';
import { hashPassword } from '@/utils/hash';
import { UserCredentials } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json() as UserCredentials;
    const hashedPassword = await hashPassword(password);

    createUser({ email, password: hashedPassword });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error: any) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
    } else {
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }
}
