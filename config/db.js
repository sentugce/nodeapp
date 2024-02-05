import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

/* const postgresClient = new pg.Pool({
    connectionString: process.env.DB_CONNECTION_STRING
}); */

 const postgresClient = new pg.Pool({
    user: '',
    database: '',
    password: '',
    port: 5432,
    host: 'localhost',
  })

export default postgresClient;