import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail } from '@/utils/db';
import { comparePassword } from '@/utils/hash';
import { signToken } from '@/utils/jwt';
import { UserCredentials } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json() as UserCredentials;
    const user = await getUserByEmail(email);

    if (!user) {
      console.error('User not found:', email);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (!user.password) {
      console.error('Hashed Password is undefined for user:', email);
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      console.error('Invalid password for user:', email);
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    if (user && user.id) {
      const token = await signToken({ email: user.email, id: user.id.toString() });

      const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
      response.cookies.set('token', token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'strict', 
        maxAge: 3600 
      });
      return response;
    }
  } catch (error: any) {
    console.error('Error during login:', error.message);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
