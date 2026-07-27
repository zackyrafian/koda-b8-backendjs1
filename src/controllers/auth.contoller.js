import * as userModel from "../models/user.model.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

export function register(req, res) { 
  const { fullname, email, password } = req.body;
  const exsisting = userModel.users.find((u) => u.email === email) 
  if (exsisting) { 
    res.status(409).json({
      "message": "Email lain"
    })
    return
  }
  if (!fullname) { 
    res.status(400).json({
      "message": "Harus punya nama"
    })
    return
  }
  
  if (email.indexOf('@') === -1) {
    res.status(400).json({
      "message": "Email tidak valid"
    })
    return
  }
  
  if (password.length < 8) { 
    res.status(400).json({
      "message": "Password harus minimal 8 karakter"
    })
    return
  }
  
  const user = { 
    id: userModel.users[userModel.users.length - 1].id + 1,
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



