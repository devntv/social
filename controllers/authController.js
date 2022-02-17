const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "12h" });
};
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: "30d" });
};
const authController = {
  register: async (req, res) => {
    try {
      const { fullName, userName, password, email, gender } = req.body;

      let newUsertoLower = userName.toLowerCase().replace(/ /g, "");

      const user_name = await Users.findOne({ userName: newUsertoLower });
      if (user_name)
        return res.status(400).json({ msg: "This user name already exist." });

      const user_email = await Users.findOne({ email });
      if (user_email)
        return res.status(400).json({ msg: "This email already exist." });

      if (password.length < 8)
        return res
          .status(400)
          .json({ msg: "password must be at least 8 characters." });

      const hash_Password = await bcrypt.hash(password, 12);
      const newUser = new Users({
        fullName,
        userName: newUsertoLower,
        password: hash_Password,
        email,
        gender,
      });
      // console.log(newUser);
      const access_token = createAccessToken({ id: newUser._id });
      const refresh_token = createRefreshToken({ id: newUser._id });
      // console.log({ access_token, refresh_token });

      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/api/refresh_token",
        // maxAge: 60 * 60 * 24 * 7 // 1 week
        maxAge: 60 * 60 * 30 * 24 * 1000, // 1 week
      });

      res.json({
        msg: "Registed!",
        access_token,
        user: { ...newUser._doc, password: "" },
      });
      await newUser.save();
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { password, email } = req.body;

      const user = await Users.findOne({ email }).populate(
        "followers following",
        "-password"
      );
      if (!user)
        return res.status(400).json({ msg: " this email does not exist" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: " incorrect password" });

      const access_token = createAccessToken({ id: user._id });
      const refresh_token = createRefreshToken({ id: user._id });
      // console.log({ access_token, refresh_token });

      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/api/refresh_token",
        // maxAge: 60 * 60 * 24 * 7 // 1 week
        maxAge: 60 * 60 * 30 * 24 * 1000, // 1 week
      });

      res.json({
        msg: "Login Success!",
        access_token,
        user: { ...user._doc, password: "" },
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  logout: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  generateAccessToken: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = authController;
