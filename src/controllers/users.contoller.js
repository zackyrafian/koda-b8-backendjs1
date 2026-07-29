import * as usersModel from "../models/user.model.js"
import qs from "qs"


export function getAll(req, res) {  
  const { search, page, limit, sort } = qs.parse(req.query)
  const query = { 
    page: page ? parseInt(page) : 1, 
    limit: limit ? parseInt(limit) : 5, 
  }
  console.log(sort)
  const users = usersModel.findAll(search, query, sort)
  res.json({ 
    "success": true, 
    "results": users
  })
}

export function getById(req, res) { 
  let id = Number(req.params.id)
  let user = usersModel.findById(id)
  res.json({ 
    "success": true,
    "result": user
  })
}

export function deleteUser(req, res) { 
  let id = Number(req.params.id)
  let user = usersModel.deleteUser(id)
  res.json({ 
    "result": user
  })
}

export function edit(req, res) { 
  let id = Number(req.params.id)
  const { fullname, email, password } = req.body; 
  if (fullname != undefined) data.fullname = fullname
  if (email != undefined) data.email = email
  if (password!= undefined) data.password = password
  
  let user = usersModel.editUser(id, data) 
  res.json({ 
    "result": user,
  })
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {*} res 
 */
export function updateProfile(req, res) { 
  let id = Number(req.params.id)
  if (req.file?.originalname != undefined) { 
    usersModel.editUser(id, { 
      picture: req.file.path
    }) 
  }

  res.status(201).json({ 
    "id": id,
    "success": true, 
    "message": "upload profile success"
  })
}


