import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/utils/db';
import { hashPassword } from '@/utils/hash';
import { User } from '@/types/auth';
import { MyJWTPayload } from '@/types/jwt';
import { signToken } from '@/utils/jwt';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    // Hash the password before storing
    const hashedPassword = await hashPassword(password);

    // Create the user in the database
    const newUser: User = { name, email, password: hashedPassword, date_created: new Date().toISOString() };
    const createdUser = await createUser(newUser);

    if (createdUser && createdUser.id) {
      // JWT
      const payload: MyJWTPayload = { name: createdUser.name, email: createdUser.email, id: createdUser.id.toString() };
      const token = await signToken(payload);

      // Add cookie
      const response = NextResponse.json({
        user: { createdUser }
      }, { status: 200 });

      response.cookies.set('token', token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production' ? false : true, 
        sameSite: 'strict', 
        maxAge: 3600 
      });
    } else {
      return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
    }
  } catch (error: any) {
    console.error('Error creating user:', error.message);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
