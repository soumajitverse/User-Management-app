import pool from "../config/db.js";

const createUserTable = async () => {
    const queryText = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  role ENUM('admin','user') DEFAULT 'user',
  status ENUM('active','inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`

    try {
        pool.query(queryText)
        console.log("User table created if not exists.")
    } catch (error) {
        console.log("Error creating users table : ", error)
    }
}

export default createUserTable