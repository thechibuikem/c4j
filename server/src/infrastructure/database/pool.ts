// import "dotenv/config";
// dotenv.config()

import { Pool } from "pg";
import { getUrls } from "../../config/urls.js";
// 


export async function getPool (){
  const { databaseUrl } = getUrls();
  console.log("databaseUrl", databaseUrl);
  const pool = new Pool({ connectionString: databaseUrl });
  return pool
}

export async function connectDB() {
  // Tests the pool to make sure Postgres is actually online and responding
  const pool = await getPool()
  await pool.query("SELECT 1");
  console.log("Database connected successfully");
}
