import dotenv from "dotenv"
dotenv.config()
import mysql from "mysql2/promise"

const pool = mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const connectDB = async () => {
    try {
        const connection = await pool.getConnection()
        console.log("Connection pool established with Database")
        connection.release()
    } catch (error) {
        console.error("Database connection failed:", error.message)
    }
}

connectDB()

export default pool
