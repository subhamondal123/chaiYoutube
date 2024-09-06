import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" })) //to limit json request
app.use(express.urlencoded({ extended: true, limit: "16kb" }))// to limit the url data request
app.use(express.static("public"))// to store assets in public folder
app.use(cookieParser()) //cookie-parser is a middleware for Express.js that parses cookies attached to the client request object (req) and makes them available in req.cookies as a JavaScript object

export { app }