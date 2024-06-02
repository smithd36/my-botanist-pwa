import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Database } from 'sqlite3';

export async function openDb() {
  return open({
    filename: './botanist.db',
    driver: sqlite3.Database,
  });
}
