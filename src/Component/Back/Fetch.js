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
