# User Management App

A full-stack **User Management System** built with modern web technologies. This application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on user profiles with a responsive UI and robust backend API.

## 🎯 Project Overview

This is a comprehensive user management application that demonstrates a complete full-stack development workflow. The application features user authentication, profile management, and real-time data operations with a clean, intuitive interface.

**Live Demo:**
- Frontend: [https://user-management-app-woad-iota.vercel.app/](https://user-management-app-woad-iota.vercel.app/)
- Backend API: [https://user-management-app-519e.onrender.com/](https://user-management-app-519e.onrender.com/)

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for building REST APIs
- **MySQL** - Relational database

- **CORS** - Cross-Origin Resource Sharing for frontend-backend communication

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **TailwindCSS** - Styling

### Deployment
- **Render** - Backend hosting (Node.js/Express.js server)
- **Vercel** - Frontend hosting (React application)
- **Aivon** - Database hosting

## ✨ Features

### User Management
- ✅ **Create Users** - Add new user profiles with validation
- ✅ **Read/View Users** - Display all users in a list view
- ✅ **Update Users** - Edit existing user information
- ✅ **Delete Users** - Remove users from the system
- ✅ **Search & Filter** - Find users by name, email, or other criteria

### User Experience
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Form Validation** - Client and server-side validation
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Loading States** - Visual feedback during API calls

## 📁 Project Structure

```
User-Management-app/
├── backend/                    # Node.js Express server
│   ├── controllers/           # Business logic
│   ├── routes/               # API endpoints
│   ├── models/               # Database models
│   ├── middleware/           # Authentication & validation middleware
│   ├── config/               # Database configuration
│   ├── server.js             # Express app entry point
│   └── package.json          # Backend dependencies
│
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service calls (Axios)
│   │   ├── App.jsx          # Main App component
│   │   └── index.jsx        # React entry point
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
│
└── README.md                # This file
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MySQL** - Database server or use [Free SQL Database](https://www.freesqldatabase.com/)
- **Git** - Version control

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/soumajitverse/User-Management-app.git
   cd User-Management-app/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables file**
   ```bash
   # Create a .env file in the backend root directory
   touch .env
   ```

4. **Configure environment variables** (`.env` file)
   ```
   # Database Configuration
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=user_management_db
   DB_PORT=3306

   # Server Configuration
   PORT=5000
   ORIGIN = add the local host vite url



5. **Create MySQL Database** (if not using Free SQL Database)
   ```sql
   CREATE DATABASE user_management_db;
   USE user_management_db;

   CREATE TABLE users (
     id INT PRIMARY KEY AUTO_INCREMENT,
     firstName VARCHAR(100) NOT NULL,
     lastName VARCHAR(100) NOT NULL,
     email VARCHAR(100) UNIQUE NOT NULL,
     password VARCHAR(255) NOT NULL,
     phone VARCHAR(20),
     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

6. **Start the backend server**
   ```bash
   npm run dev
   ```

   The backend server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables file** (`.env` file)
   ```
   VITE_BACKEND_URL=http://localhost:5000
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:5173`

## 📦 Dependencies

### Backend
```json
{
  "express": "^4.18.2",
  "mysql2": "^3.0.0",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.0",
  "dotenv": "^16.0.3",
  "cors": "^2.8.5"
}
```

### Frontend
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.0.0",
  "axios": "^1.3.0",
  "tailwindcss": "^3.3.0"
}
```

## 🚢 Deployment

### Deploy Backend to Render

1. Push your code to GitHub
2. Go to [Render.com](https://render.com/)
3. Create new Web Service
4. Connect your GitHub repository
5. Set environment variables
6. Deploy

### Deploy Frontend to Vercel

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com/)
3. Import your GitHub repository
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Add environment variables
6. Deploy

## 📋 Usage Guide

### Creating a User
1. Navigate to the "Add User" page
2. Fill in the user details (First Name, Last Name, Email, Phone, etc.)
3. Click "Create" button
4. User will be added to the database and displayed in the user list

### Viewing Users
1. Go to the Users list page
2. All registered users will be displayed in a table/card format
3. Click on a user to view detailed information

### Updating a User
1. Click the "Edit" button on a user card/row
2. Modify the user information
3. Click "Update" to save changes

### Deleting a User
1. Click the "Delete" button on a user
2. Confirm the deletion
3. User will be removed from the system

## 🐛 Troubleshooting

### Backend Connection Issues
- Check MySQL service is running
- Verify database credentials in `.env` file
- Ensure database exists and is accessible
- Check port 5000 is not in use

### Frontend API Connection Issues
- Verify backend server is running
- Check `REACT_APP_API_URL` in `.env` file
- Check CORS is properly configured
- Inspect browser console for errors

### Database Connection Failed
- Verify connection string
- Check username and password
- Ensure MySQL service is running
- For Free SQL Database, verify hosted credentials

## 📝 Example .env Files

**Backend (.env)**
```
DB_HOST=remotemysql.com
DB_USER=username
DB_PASSWORD=password123
DB_NAME=user_management_db
DB_PORT=3306
PORT=5000
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
```

**Frontend (.env)**
```
VITE_BACKEND_URL=http://localhost:5000
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Soumajit Verse**
- GitHub: [@soumajitverse](https://github.com/soumajitverse)
- Email: majumdersoumajit09@gmail.com

## 🔗 Live Links

- **Frontend**: [https://user-management-app-woad-iota.vercel.app/](https://user-management-app-woad-iota.vercel.app/)
- **Backend API**: [https://user-management-app-519e.onrender.com/](https://user-management-app-519e.onrender.com/)
- **GitHub Repository**: [https://github.com/soumajitverse/User-Management-app](https://github.com/soumajitverse/User-Management-app)

---

**Last Updated**: November 2025