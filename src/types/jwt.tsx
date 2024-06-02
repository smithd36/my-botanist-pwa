import { JWTPayload } from 'jose';

export interface MyJWTPayload extends JWTPayload {
  id: string;
  name: string;
  email: string;
}