require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const CategoryModel = require("../models/Category");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

class CategoryController {
  // GET ALL CATEGORIES
  static getAllCategories = async (req, res) => {
    try {
      const category = await CategoryModel.find();
      res.status(201).json({
        status: 'success',
        message: 'successful',
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(201).json({
        status: 'success',
        message: error,
      });
    }
  };
  // ADD NEW CATEGORY
  static categoryInsert = async (req, res) => {
    try {
      const { name, image } = req.body;
      if (!image) {
        const file = req.files.image;
        var imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: 'categoryImage'
        });
      }
      else {
        var imageUpload = await cloudinary.uploader.upload(image, {
          folder: 'categoryImage'
        });
      }
      if (name) {
        const result = new CategoryModel({
          name: name,
          image: {
            public_id: imageUpload.public_id,
            url: imageUpload.secure_url
          }
        });
        await result.save();
        res.status(201).json({
          status: "success",
          message: "Category Inserted Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "Failed",
        message: error,
      });
    }
  };
  // GET ALL PRODUCT DETAILS
  static getCategoryDetails = async (req, res) => {
    try {
      const category = await CategoryModel.findById(req.params.id);
      res.status(201).json({
        status: 'success',
        message: 'successful',
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: 'failed',
        message: error,
      });
    }
  };
  // UPDATE PRODUCTS
  static updateCategory = async (req, res) => {
    try {
      const { name, image } = req.body;
      if (req.files?.image != null) {
        const file = req.files.image;
        // UPLOAD FOLDER TO IMAGE CLOUDINARY
        const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: 'categoryImage'
        }); // UPDATE NEW IMAGE
        await cloudinary.uploader.destroy(req.data1.image.public_id); // DESTROY THE PREVIOUS IMAGE
        // await CategoryModel.findByIdAndUpdate(req.params.id, {
        //   image: {
        //     public_id: imageUpload.public_id,
        //     url: imageUpload.secure_url
        //   }
        // });
        var data = {
          name: name,
          image: {
            public_id: imageUpload.public_id,
            url: imageUpload.secure_url
          }
        };
      }
      else if (image) {
        var data = {
          name: name,
          image: image
        };
      }
      else {
        var data = {
          name: name,
        };
      }
      await CategoryModel.findByIdAndUpdate(req.params.id, data);
      res.status(201).json({
        status: 'success',
        message: 'Product Updated Successfully',
        update,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: 'Failed',
        message: error,
      });
    }
  };
  // DELETE PRODUCTS
  static deleteCategory = async (req, res) => {
    try {
      const user = await CategoryModel.findById(req.params.id)
      await cloudinary.uploader.destroy(user.image.public_id);
      await CategoryModel.findByIdAndDelete(req.params.id);
      res.status(201).json({
        status: 'success',
        message: 'Deleted Successfully',
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: 'Failed',
        message: error,
      });
    }
  };
}

module.exports = CategoryController;