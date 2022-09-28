
import express from "express";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

// Sign-up
Router.post("/signup", async (req, res) => {
  try {
    await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Sign-In
Router.post("/signin", async (req, res) => {
  try {
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();
    return res.status(200).json({token, status:'success'})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;