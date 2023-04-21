const mongoose = require('mongoose');
const express = require('express');

mongoose.pluralize(null);
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://quangchinh1122:chinh2003@uetinder.bmmhsoe.mongodb.net/uetinder-data?retryWrites=true&w=majority')
  .then(() => {
    app.listen(3001)
    console.log("connected to mongoDB Atlas")
  })

const userSchema = mongoose.Schema({
  displayName: String,
  account: {
    username: String,
    password: String,
    email: String,
  },
  age: Number,
  gender: String,
  genderInterest: String,
  photos: [String],
  Matched: [String],
  hobby: [String],
  potentialUser: [String],
});

const usersCollection = new mongoose.model('users', userSchema);

function getUsers(req, res) {
  const filter = req.body
  usersCollection.find(filter).then(users => res.json(users))
}
app.post("/getUsers", getUsers);

function addUser(req, res) {
  usersCollection.find({"account.username": req.body.account.username})
    .then(users => {
      if (users.length !== 0) {
        res.json(`Username is taken!!!`)
      } else {
        const newUser = new usersCollection({
          displayName: req.body.displayName,
          account: {
            username: req.body.account.username,
            password: req.body.account.password,
          },
          email: req.body.account.email,
          age: req.body.age,
          gender: req.body.age,
          photos: req.body.photos,
          Matched: [],
          potentialUser: [],
          hobby: req.body.hobby
        });
        res.json(newUser.save());
      }
    })
  
}
app.post("/addUser", addUser);

usersCollection.watch()
  .on('change', () => {
    update();
  })

update();

async function update() {
  var users = await usersCollection.find()
  console.log(users);
  app.get('/', (req, res) => {
    res.json(users);
  })
}


