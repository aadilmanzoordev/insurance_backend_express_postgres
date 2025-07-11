"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.initDB = initDB;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/life'
});
async function initDB() {
    await exports.pool.query(`
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
