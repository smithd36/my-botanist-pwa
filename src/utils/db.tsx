import { openDb } from '@/db/sqlite';
import { User } from '@/types';

export async function createUser(user: User): Promise<User> {
  const db = await openDb();
  const result = await db.run('INSERT INTO users (name, email, password, date_created) VALUES (?, ?, ?, ?)', [
    user.name,
    user.email,
    user.password,
    user.date_created,
  ]);
  
  return {
    id: result.lastID,
    ...user,
  };
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const db = await openDb();
  const row = await db.get('SELECT * FROM users WHERE email = ?', email);

  if (!row) return undefined;

  const user: User = {
    id: row.id,
    name: row.name,
    email: row.email,
    password: row.password,
    date_created: row.date_created,
  };

  return user;
}
