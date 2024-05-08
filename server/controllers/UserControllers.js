require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cloudinary = require('cloudinary').v2;
const UserModel = require("../models/User");
const AddressModel = require("../models/Address");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

class UserController {
  // GET ALL USERS
  static getAllUser = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(201).json({
        status: 'success',
        message: 'successful',
        users
      });
    } catch (error) {
      console.log(error);
    }
  };

  // GET SPECIFIC USER DATA BY ID
  static getUser = async (req, res) => {
    try {
      const user = await UserModel.findById(req.data1.id).select({ password: 0 });
      res.status(201).json({
        status: 'success',
        message: 'successful',
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // NEW USER REGISTRATION
  static register = async (req, res) => {
    try {
      const file = req.files.image;
      console.log(file);
      // UPLOAD FOLDER TO IMAGE CLOUDINARY
      const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'profileImageApi'
      });
      const { n, e, p, cp } = req.body;
      console.log(n, e, p, cp);
      const user = await UserModel.findOne({ email: e });
      if (user) {
        res
          .status(401)
          .json({ status: "failed", message: "This Email is Already Exists" });
      }
      else {
        if (n && e && p && cp) {
          if (p === cp) {
            const hashPassword = await bcrypt.hash(p, 10);
            const user = new UserModel({
              name: n,
              email: e,
              password: hashPassword,
              image: {
                public_id: imageUpload.public_id,
                url: imageUpload.secure_url
              }
            });
            await user.save();
            const token = jwt.sign({ ID: user.id }, process.env.JWT_SECRET, { expiresIn: 900 });
            return res
              .status(201)
              .cookie('token', token, { expiresIn: 900 })
              .json({ status: "success", message: "Registration Successfully" });
          }
          else {
            res
              .status(401)
              .json({ status: "failed", message: "Incorrect Password" });
          }
        }
        else {
          res
            .status(401)
            .json({ status: "failed", message: "All Fields are Required" });
        }
      }

    } catch (error) {
      console.log(error);
    }
  };

  // FOR USER LOGIN
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const isMatched = await bcrypt.compare(password, user.password);
          if (isMatched) {
            const token = jwt.sign({ ID: user.id }, process.env.JWT_SECRET, { expiresIn: 900 });
            res.cookie('token', token, { expiresIn: 900 });
            return res
              .status(201)
              .json({ status: "success", message: "Successfully Logged In!" });
          }
          else {
            return res
              .status(401)
              .json({ status: "failed", message: "Email & Password does not Matched, Try Again!" });
          }
        }
        else {
          return res
            .status(401)
            .json({ status: "failed", message: "You are not Registered User, Please Register", redirect: "/register" });
        }
      }
      else {
        return res
          .status(401)
          .json({ status: "failed", message: "All Fields are Required!" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ status: "failed", message: error.message });
    }
  };

  // FOR UPDATE PROFILE
  static updateProfile = async (req, res) => {
    try {
      const { name, password, newPassword } = req.body;
      console.log(req.body)
      const isMatched = await bcrypt.compare(password, req.data1.password);
      if (!isMatched) {
        return res
          .status(401)
          .json({ status: "failed", message: "Incorrect Password" });
      }
      if (req.files?.image != null) {
        const file = req.files.image;
        // UPLOAD FOLDER TO IMAGE CLOUDINARY
        const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: 'profileImage'
        }); // UPDATE NEW IMAGE
        await cloudinary.uploader.destroy(req.data1.image.public_id); // DESTROY PREVIOUS IMAGE
        await UserModel.updateOne({ email: req.data1.email }, {
          image: {
            public_id: imageUpload.public_id,
            url: imageUpload.secure_url
          }
        });
      }
      if (name != req.data1.name) {
        await UserModel.updateOne({ email: req.data1.email }, {
          name: name
        });
      }
      if (newPassword) {
        const hashPassword = await bcrypt.hash(newPassword, 10);
        await UserModel.updateOne({ password: hashPassword }, {
          name: name
        });
      }
      res.status(201).json({
        status: 'success',
        message: 'user update successful',
        // user,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ status: "failed", message: error.message });
    }
  };
  // FOR UPDATE PASSWORD
  static updatePassword = async (req, res) => {
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body;
      const user = req.data1;
      if (oldPassword && newPassword && confirmPassword) {
        if (newPassword == confirmPassword) {
          const isMatched = await bcrypt.compare(oldPassword, user.password);
          if (isMatched) {
            if (newPassword == oldPassword) {
              res.redirect("/profile");
            }
            else {
              const hashPassword = await bcrypt.hash(newPassword, 10);
              await UserModel.updateOne({ email: user.email }, {
                password: hashPassword
              });
              res.redirect("/logout");
            }
          }
        }
        else {
          res.redirect("/profile");
        }

      }
      else {
        res.redirect('/profile');
      }
    } catch (error) {
      console.log(error);
      res.redirect("/profile");
    }
  };

  // NEW ADDRESS
  static newAddress = async (req, res) => {
    try {
      const address = await new AddressModel({ user: req.data1._id, ...req.body }).save();
      res.status(201).json({
        status: 'success',
        message: 'successful',
        address
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        status: 'failed',
        message: error.message,
      });
    }
  };
  // GET ALL ADDRESS
  static getAllAddress = async (req, res) => {
    try {
      const address = await AddressModel.find({ user: req.data1._id });
      res.status(201).json({
        status: 'success',
        message: 'successful',
        address
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        status: 'failed',
        message: error.message,
      });
    }
  };
}

module.exports = UserController;