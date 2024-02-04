<<<<<<< HEAD
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/delta-hack');

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		await User.create({
			name: req.body.name,
      email: req.body.email,
			password: req.body.password,
      bottles:0,
      total:0,
      coins:0,
      capacity:0,
      character:"Dino",
      got:[1,0,0,0],
		})
		res.json({ status: 'ok' })
	} catch (err) {
        console.log(err)
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  
  if (user){
    return res.json({status:'ok', user:user})
  }else{
    return res.json({status:'error', user:null})
  }
});

app.listen(1337, () => {
  console.log("Server started on 1337");
});
=======
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/delta-hack');

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		await User.create({
			name: req.body.name,
      email: req.body.email,
			password: req.body.password,
		})
		res.json({ status: 'ok' })
	} catch (err) {
        console.log(err)
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user){
    const token=jwt.sign({
      name:user.name,
      email: user.email,
    },'secret123')
    user.bottles=56
    await user.save()

    return res.json({status:'ok', user:user})
  }else{
    return res.json({status:'error', user:null})
  }
});

app.listen(1337, () => {
  console.log("Server started on 1337");
});
>>>>>>> 1ba2e416a27534417d1da6eb3d7b0914af42ee09
