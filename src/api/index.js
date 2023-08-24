import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import dotenv from "dotenv";
import cors from "cors";
import UserModel from "./models/User.js";

const app = express();
dotenv.config();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "fasefraw4rdgdishewojfiashi";
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.post("/register", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { firstName, lastName, email, password } = req.body;

  try {
    const userDoc = await UserModel.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(422).json(err);
  }
});

app.post("/login", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { email, password } = req.body;
  const userDoc = await UserModel.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});

app.listen(4000);
