import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import errorHandling from "./middlewares/errorHandler.js"
import createUserTable from "./data/createUserTable.js"
import userRouter from "./routes/userRoutes.js"

const app = express()
const port = process.env.PORT || 5000
const allowedOrigin = [process.env.ORIGIN ]

// Middlewares
app.use(express.json())
app.use(cors({
    origin: allowedOrigin,
    credentials: true // backend allows cookies to be sent
}))

// Routes
app.get("/", (req, res) => {
    res.send("Server is working")
})
app.use('/api/user', userRouter)

// Error handling middleware
app.use(errorHandling)

// Create table before starting server
createUserTable()

// Server running
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})