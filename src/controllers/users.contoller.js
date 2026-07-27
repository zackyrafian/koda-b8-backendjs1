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
  let id =  Number(req.params.id)
  let user = usersModel.editUser(id, req.body) 
  res.json({ 
    "result": user,
  })
}

