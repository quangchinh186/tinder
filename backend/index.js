const mongoose = require('mongoose');
const express = require('express');
const photoAlbum = [
'https://i.postimg.cc/t41WPqxG/IMG-20230315-084712.jpg',
'https://i.postimg.cc/FH2cVMyd/IMG-20230307-131444.jpg',
'https://i.postimg.cc/kMcQPhmz/IMG-20230124-215320.jpg',
'https://i.postimg.cc/sxw7P1ms/IMG-20230124-215304.jpg',
'https://i.postimg.cc/3wvjM88F/IMG-20230116-195946.jpg'
];

mongoose.pluralize(null);
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3001)

const userSchema = new mongoose.Schema({
  account: {
    username: String,
    password: String,
    email: String,
  },
  displayName: String,
  age: Number,
  gender: String,
  imageURL: [String],
  candidatesId: [String],
  potentialMatchesId: [String],
});
const User = new mongoose.model('user', userSchema);

function getUsers(req, res) {
  const filter = req.body
  User.find(filter).then(users => res.json(users))
}
app.post("/getUsers", getUsers);

function addUser(req, res) {
  User.find({"account.username": req.body.username})
    .then(users => {
      if (users.length !== 0) {
        res.json("Username taken!!1!")
      } else {
        const user = new User({
          account: {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
          },
          displayName: '',
          age: '',
          gender: '',
          imageURL: '',
          candidatesId: [],
          potentialMatchesId: [],
        });
        res.json(user.save());
      }
    })
}
app.post("/addUser", addUser);

main().then(users => {
  app.get('/', (req, res) => {
    res.json(users);
  })
})

async function addUserDebug(username, password, email, name, age, gender) {
  const test1 = new User({
    account: {
      username: username,
      password: password,
      email: email,
    },
    displayName: name,
    age: age,
    gender: gender,
    imageURL: photoAlbum,
    candidatesId: [],
    potentialMatchesId: [],
  });
  await test1.save();
}

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // Create test data set
  await User.collection.drop()
  await addUserDebug('test1', 'test1', 'test1', 'test1', 69, 'Male')
  await addUserDebug('test2', 'test2', 'test2', 'test2', 68, 'Female')
  await addUserDebug('test3', 'test3', 'test3', 'test3', 18, 'Male')
  await addUserDebug('test4', 'test4', 'test4', 'test4', 73, 'Female')
  await addUserDebug('test5', 'test5', 'test5', 'test5', 70, 'Male')
  var users = await User.find()

  // Create candidates list
  for (var i = 0; i < 5; i = i + 1) {
    var candidates = []
    for (var j = 0; j < 5; j = j + 1) {
      if (j != i) {
        candidates.push(users[j].id)
      }
    }
    console.log(candidates)
    console.log(await User.updateOne(users[i], { candidatesId: candidates }))
  }

  // Return edited data
  users = await User.find()
  console.log(users)
  return users
}
