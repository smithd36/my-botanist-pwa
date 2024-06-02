import { SignJWT, jwtVerify } from 'jose';
import { MyJWTPayload } from '@/types/jwt';

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function signToken(payload: MyJWTPayload, expiresIn: string = '1h'): Promise<string> {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expiresIn)
    .sign(secretKey);
  return token;
}

export async function verifyToken(token: string): Promise<MyJWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload as MyJWTPayload;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
}