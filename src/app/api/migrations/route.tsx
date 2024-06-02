import { openDb } from '@/db/sqlite';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await openDb();
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        date_created DATE DEFAULT CURRENT_DATE
      );
    `);

    return NextResponse.json({ message: 'Users table created successfully.' }, { status: 200 });
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json({ error: 'Failed to create users table.' }, { status: 500 });
  }
}