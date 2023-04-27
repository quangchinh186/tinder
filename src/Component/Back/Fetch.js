//account
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

//matching
export function addPotential(userId, potentialId, callback) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: userId,
      potentialUser: potentialId,
    }),
  }
  fetch("http://localhost:3001/liked", fetchOptions)
    .then(res => res.json())
    .then(result => callback(result))
}

export function matching(userId, newMatched, callback) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      newMatched: newMatched
    }),
  }
  fetch("http://localhost:3001/matching", fetchOptions)
    .then(res => res.json())
    .then(result => callback(result))
}

export function dislike(userId, disLike, callback) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: userId,
      disLike: disLike
    }),
  }
  fetch("http://localhost:3001/dislike", fetchOptions)
    .then(res => res.json())
    .then(result => callback(result))
}

//chatting
export function getConversation(participant, callback){
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(participant),
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

  fetch("http://localhost:3001/addMessage", fetchOptions)
    .then(res => res.json())
    .then(messages => callback(messages))
}

