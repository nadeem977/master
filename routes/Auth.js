const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 5),
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      return res.status(200).json(savedUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send("Please Enter a Valid Email or Password");

    if (bcrypt.compareSync(password, user.password)) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.TOKEN_ID,
        { expiresIn: "3d" }
      ); // Set expiration time to 3 days

      const { password, ...others } = user._doc;
      return res.status(200).json({ ...others, accessToken });
    } else {
      return res.status(401).send("Incorrect password");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.post("/google/auth", async (req, res) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const newUser = new User({ 
      username: req.body.username,
      email: req.body.email, 
      picture: req.body.profile,
      password: bcrypt.hashSync(req.body.password, 5),
    });   
    newUser.save();
    const accessToken = jwt.sign( 
      {
        id: newUser._id, 
      },
      process.env.TOKEN_ID,
      { expiresIn: "3d" }
    ); 
    const val = newUser._doc;
    res.status(200).send({ ...val, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  } 
});  
   
module.exports = router;
