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

export function findAll() { 
  return users
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