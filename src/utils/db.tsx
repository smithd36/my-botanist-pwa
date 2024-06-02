import { openDb } from '@/db/sqlite';
import { User } from '@/types';

export const createUser = async (user: User) => {
  const db = await openDb();
  await db.run('INSERT INTO users (email, password, date_created) VALUES (?, ?, ?)', [
    user.email,
    user.password,
    user.date_created
  ]);
  console.log(`User created: ${user.email}`);
};

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  const db = await openDb();
  const row = await db.get('SELECT * FROM users WHERE email = ?', email);

  if (!row) return undefined;

  const user: User = {
    id: row.id,
    email: row.email,
    password: row.password,
    date_created: row.date_created,
  };

  console.log(`User: ${JSON.stringify(user)}`);
  return user;
};
