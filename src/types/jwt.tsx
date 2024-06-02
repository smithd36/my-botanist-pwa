import { JWTPayload } from 'jose';

export interface MyJWTPayload extends JWTPayload {
  email: string;
  id: string;
}
