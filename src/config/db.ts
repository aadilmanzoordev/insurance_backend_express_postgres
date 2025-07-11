import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/life'
});

export async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS user_submissions (
      id SERIAL PRIMARY KEY,
      age INT,
      income INT,
      dependents INT,
      risk VARCHAR(10),
      recommendation TEXT,
      explanation TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('Connected to DB and ensured schema.');
}