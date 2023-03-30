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
app.listen(3001)

const userSchema = new mongoose.Schema({
  account: {
    username: String,
    password: String,
  },
  displayName: String,
  age: Number,
  gender: String,
  imageURL: String,
  candidatesId: [String],
  potentialMatchesId: [String],
});
const User = new mongoose.model('user', userSchema);

function getUsers(req, res) {
  const filter = req.body
  User.find(filter).then(users => res.json(users))
}
app.post("/getUsers", getUsers);

main().then(users => {
  app.get('/', (req, res) => {
    res.json(users);
  })
})

async function addUser(username, password, name, age, gender, imageURL) {
  const test1 = new User({
    account: {
      username: username,
      password: password,
    },
    displayName: name,
    age: age,
    gender: gender,
    imageURL: imageURL,
    candidatesId: [],
    potentialMatchesId: [],
  });
  await test1.save();
}

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // Create test data set
  await User.collection.drop()
  await addUser('test1', 'test1', 'test1', 69, 'Male', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a33-5g-600x600.jpg')
  await addUser('test2', 'test2', 'test2', 68, 'Female', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/c/9/c91ba5bf721d5b2d4eae4f821b8e4ced.png')
  await addUser('test3', 'test3', 'test3', 18, 'Male', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/2/s22_3_1.jpg')
  await addUser('test4', 'test4', 'test4', 73, 'Female', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_i_xu_ng_2_18.png')
  await addUser('test5', 'test5', 'test5', 70, 'Male', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_fold_4-7.jpg')
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
