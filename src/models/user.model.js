export const users = [ 
  {
    id: 1,
    name: "Satu", 
    email: "satu@mail.com", 
    password: "satu1"
  },
  {
    id: 2,
    name: "Dua", 
    email: "dua@mail.com", 
    password: "dua2"
  }
]

export function findAll() { 
  return users
}

export function findById(id) { 
  return users.find((u) => u.id === id)
}

export function create(req) { 
  users.push(req)
  return users
}

export function editUser(id, user) { 
  const exsisting = users.findIndex((u) => u.id === id); 
  users[exsisting] = { 
    ...users[exsisting],
    ...user
  }
  return users
}

export function deleteUser(id) { 
  const exsisting = users.findIndex((u) => u.id == id); 
  users.splice(exsisting, 1)
  return users
}