import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/utils/jwt';
import { getUserById } from '@/utils/db';
import { MyJWTPayload } from '@/types/jwt';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyToken(token) as MyJWTPayload;

    if (!payload || !payload.id) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const user = await getUserById(payload.id);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user } , { status: 200 });
  } catch (error: any) {
    console.error('Error verifying token:', error.message);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}