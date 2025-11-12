import pool from "../config/db.js";

// get all active users
export const getAllUserService = async () => {
    const [rows] = await pool.query("SELECT * FROM users WHERE status = 'active'");
    return rows;
};

// get user by email
export const getUserByEmailService = async (email) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
};


// create a new user
export const createUserService = async (name, email, role, status = 'active') => {
    const [result] = await pool.query(
        "INSERT INTO users (name, email, role, status) VALUES (?, ?, ?, ?)",
        [name, email, role, status]
    );

    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [result.insertId]);
    return rows[0];
};

// update user — only if active
export const updateUserService = async (id, name, email, role, status) => {
    // check if user is active
    const [existing] = await pool.query("SELECT * FROM users WHERE id = ? AND status = 'active'", [id]);
    if (existing.length === 0) {
        // user not found or inactive
        return null;
    }

    // proceed with update
    await pool.query(
        "UPDATE users SET name = ?, email = ?, role = ? WHERE id = ? AND status = 'active'",
        [name, email, role, id]
    );

    // Return updated user
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
};

// soft delete user (set status = 'inactive' instead of deleting)
export const deleteUserService = async (id) => {
    await pool.query("UPDATE users SET status = 'inactive' WHERE id = ?", [id]);

    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
};
