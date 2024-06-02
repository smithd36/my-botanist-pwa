import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail } from '@/utils/db';
import { comparePassword } from '@/utils/hash';
import { UserCredentials } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json() as UserCredentials;
    const user = await getUserByEmail(email);

    if (!user) {
      console.error('User not found:', email);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    console.log('User:', user);

    if (!user.password) {
      console.error('Hashed Password is undefined for user:', email);
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      console.error('Invalid password for user:', email);
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Create a simple token or session (this is a placeholder, use a proper JWT or session management in production)
    const token = 'fake-jwt-token'; // Replace with actual token generation logic

    return NextResponse.json({ message: 'Login successful', token }, { status: 200 });
  } catch (error: any) {
    console.error('Error during login:', error.message);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
