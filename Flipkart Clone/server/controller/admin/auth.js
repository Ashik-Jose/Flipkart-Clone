import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "../../models/userschema.js";
import dotenv from "dotenv";

dotenv.config();

export const signIn = async (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password) && user.role === "admin") {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.AUTH_TOKEN,
          { expiresIn: "1h" }
        );
        res.cookie("token", token, { expiresIn: "1h" });
        const { _id, firstName, lastName, email, role, fullName } = user;

        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else return res.status(400).json({ message: "Invalid Credentials" });
    } else {
      return res.status(400).json({ message: "Cannot Login" });
    }
  });
};

export const signUp = async (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) return res.status(400).json({ message: "Already Registered" });
  });

  const { firstName, lastName, email, password } = req.body;

  const _user = new User({
    firstName,
    lastName,
    email,
    password,
    username: Math.random().toString(),
    role: "admin",
  });

  _user.save((error, data) => {
    if (error) return res.status(400).json({ message: "Error in Registering" });
    if (data)
      return res.status(201).json({ message: "Created Admin successfully" });
  });
};

export const signOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Signed Out successfully" });
};
