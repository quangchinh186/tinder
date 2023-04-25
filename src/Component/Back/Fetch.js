export function getUsers(filter, callback) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filter),
  }

  fetch("http://localhost:3001/getUsers", fetchOptions)
    .then(res => res.json())
    .then(users => callback(users))
}

export function addUser(account, callback) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(account),
  }

  fetch("http://localhost:3001/addUser", fetchOptions)
    .then(res => res.json())
    .then(result => callback(result))
}

export function editProfile(userId, profile, callback) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: userId,
      profile: profile,
    }),
  }

  fetch("http://localhost:3001/editProfile", fetchOptions)
    .then(res => res.json())
    .then(result => callback(result))
}

export function getMessages(address, callback){
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(address),
  }

  fetch("http://localhost:3001/getMessages", fetchOptions)
    .then(res => res.json())
    .then(messages => callback(messages))
}

export function sendMessage(message, callback){
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  }

  fetch("http://localhost:3001/addMessages", fetchOptions)
    .then(res => res.json())
    .then(messages => callback(messages))
}