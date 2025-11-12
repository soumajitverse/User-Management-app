import { getAllUserService, createUserService, updateUserService, deleteUserService, getUserByEmailService } from "../models/userModel.js";
import handleResponse from "../util.js/handleResponse.js";

// Get all users (only active ones) (GET) : /api/user/
export const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUserService();
        handleResponse(res, true, "Users fetched successfully", users, 200);
    } catch (error) {
        console.error("Error fetching users:", error);
        handleResponse(res, false, "Internal server error", null, 500);
    }
};

// Create new user (POST) : /api/user/create-user
export const createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    // Validate inputs
    if (!name || !email)
      return handleResponse(res, false, "Name and email are required", null, 400);

    // Check if email already exists
    const existingUser = await getUserByEmailService(email);
    if (existingUser)
      return handleResponse(res, false, "Email already exists", null, 409);

    // Create user if email is unique
    const newUser = await createUserService(name, email, role);
    handleResponse(res, true, "User created successfully", newUser, 201);

  } catch (error) {
    console.error("Error creating user:", error);
    handleResponse(res, false, "Internal server error", null, 500);
  }
};


// Update user (only if active) (PUT) : /api/update-user/id
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, role } = req.body;

        if (!name || !email)
            return handleResponse(res, false, "Name and email are required", null, 400);

        const updatedUser = await updateUserService(id, name, email, role);

        if (!updatedUser)
            return handleResponse(res, false, "User not found or inactive", null, 404);

        handleResponse(res, true, "User updated successfully", updatedUser, 200);
    } catch (error) {
        console.error("Error updating user:", error);
        handleResponse(res, false, "Internal server error", null, 500);
    }
};

// Soft delete user (set status = 'inactive') (PUT) : /api/delete-user/id
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUserService(id);

        if (!deletedUser)
            return handleResponse(res, false, "User not found or already inactive", null, 404);

        handleResponse(res, true, "User deleted successfully", deletedUser, 200);
    } catch (error) {
        console.error("Error deleting user:", error);
        handleResponse(res, false, "Internal server error", null, 500);
    }
};
