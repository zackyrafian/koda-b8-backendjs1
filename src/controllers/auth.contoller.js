import * as userModel from "../models/user.model.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

export function register(req, res) { 
  const { fullname, email, password } = req.body;
  const user = { 
    id: userModel.users.length + 1,
    fullname: fullname, 
    email: email, 
    password: password
  }
  
  const users = userModel.create(user)
  res.json({
    "message": "success",
    "results": users
  })
}



