const usersCollection = require('./Model/UserModel');
const messageCollection = require('./Model/MessageModel');

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
    console.log("Connected to MongoDB Atlas")
  })

//GET USER
function getUsers(req, res) {
  const filter = req.body
  usersCollection.find(filter).then(users => res.json(users))
}
app.post("/getUsers", getUsers);


//ADD USER
function addUser(req, res) {
  usersCollection.find({"account.username": req.body.username})
    .then(users => {
      if (users.length !== 0) {
        res.json('Username is taken!!!')
      } else {
        const newUser = new usersCollection({
          account: {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
          },
          profile: {
            displayName: '',
            age: '',
            gender: '',
            genderInterest: '',
            description: '',
            photos: [],
            hobby: [],
          },
          matched: [],
          potentialUser: [],
        });
        newUser.save();
        res.json(newUser._id);
      }
    })
}
app.post("/addUser", addUser);


//EDIT USER
function editProfile(req, res) {
  let queryObject = {_id : req.body._id };
  let newValue = {$set: {profile: req.body.profile}}
  usersCollection.updateOne(queryObject, newValue)
    .then((result) => console.log(result))
}
app.post("/editProfile", editProfile);


//GET MESSAGES
function getMessages(req, res) {
  const address = req.body
  messageCollection.find(address).then(mess => res.json(mess))
}
app.post("/getMessages", getMessages);


//ADD MESSAGE
function addMessage(req, res) {
  const newMessage = new messageCollection({
    address: {
      from: req.body.address.from,
      to: req.body.address.to
    },
    message: req.body.message,
    time: new Date()
  })
  newMessage.save();
  res.json(newMessage); 
}
app.post("/addMessage", addMessage);


//UPDATE USERS COLLECTION

usersCollection.watch()
  .on('change', () => {
    updateUser();
  })

updateUser();

async function updateUser() {
  var users = await usersCollection.find()
  console.log(users);
  app.get('/', (req, res) => {
    res.json(users);
  })
}

