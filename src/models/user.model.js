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

export function findAll(search, query) {  
  if (search === undefined) { 
    return users
  }
  
  if (search.name) { 
    const filtered = users.filter((u) => u.fullname?.toLowerCase().includes(search.name?.toLowerCase()))
    return filtered
  }

  if (search.email) { 
    const filtered = users.filter((u) => u.email?.toLowerCase().includes(search.email.toLowerCase()))
    return filtered
  }
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