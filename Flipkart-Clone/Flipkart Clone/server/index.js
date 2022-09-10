import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin/auth.js';
import categoryRouter from "./routes/category.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use('/api',authRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/category',categoryRouter);

app.get('/',(req,res,next) => {
    res.status(200).json({
        message: "Hello"
    });
});

const PORT = process.env.PORT || 2000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT,() => console.log(PORT)))
.catch((error) => console.log(error.message));