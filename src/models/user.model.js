import fs from "node:fs"

const data = fs.readFileSync("data.json", 'utf-8')
export const users = JSON.parse(data)

// export const users = [ 
//   {
//     id: 1,
//     name: "Satu", 
//     email: "satu@mail.com", 
//     password: "satu1"
//   },
//   {
//     id: 2,
//     name: "Dua", 
//     email: "dua@mail.com", 
//     password: "dua2"
//   }
// ]
// 

console.log(users)

export function findAll(search, query, sort) {  
  const { page = 1, limit = 5 } = query || {}
  const offset = (page - 1) * limit
  let result = users
  if (search?.name) { 
    result = users.filter((u) => u.fullname?.toLowerCase().includes(search.name.toLowerCase()))
  } else if (search?.email) { 
    result = users.filter((u) => u.email?.toLowerCase().includes(search.email.toLowerCase()))
  } 
  return result.slice(offset, offset + limit)
}

export function findById(id) { 
  return users.find((u) => u.id === id)
}

export function create(req) { 
  users.push(req)
  fs.writeFileSync("data.json", JSON.stringify(users, null, 2));
  return users
}

export function editUser(id, user) { 
  const exsisting = users.findIndex((u) => u.id === id); 
  fs.writeFileSync("data.json", JSON.stringify(users, null, 2));
  users[exsisting] = { 
    ...users[exsisting],
    ...user
  }
  return users
}

export function deleteUser(id) { 
  const exsisting = users.findIndex((u) => u.id == id); 
  users.splice(exsisting, 1)
  fs.writeFileSync("data.json", JSON.stringify(users, null, 2));
  return users
}