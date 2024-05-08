require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const ProductModel = require("../models/Product");
const CategoryModel = require("../models/Category");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

class ProductController {
  // GET ALL PRODUCTS
  static getAllProducts = async (req, res) => {
    try {
      const product = await ProductModel.find();
      res.status(201).json({
        status: 'success',
        message: 'successful',
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(201).json({
        status: 'success',
        message: error,
      });
    }
  };
  // ADD NEW PRODUCTS
  static productInsert = async (req, res) => {
    try {
      const { name, description, price, category, stock, image, cImage } = req.body;
      if (name && description && price && category && stock) {
        if (req.files?.image != null) {
          const file = req.files.image;
          var imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'productImage'
          });
        }
        else {
          var imageUpload = await cloudinary.uploader.upload(image, {
            folder: 'productImage'
          });
        }
        // CREATE NEW CATEGORY IF NOT
        var existingCategory = await CategoryModel.findOne({ name: category });
        if (!existingCategory) {
          if (req.files?.categoryImage != null) {
            const file = req.files?.categoryImage;
            var categoryImageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
              folder: 'categoryImage'
            });
          }
          else {
            var categoryImageUpload = await cloudinary.uploader.upload(cImage || image, {
              folder: 'categoryImage'
            });
          }
          const newCategory = new CategoryModel({
            name: category,
            image: {
              public_id: categoryImageUpload.public_id,
              url: categoryImageUpload.secure_url
            }
          });
          await newCategory.save();
        }
        const newProduct = new ProductModel({
          name: name,
          description: description,
          price: price,
          category: category,
          stock: stock,
          image: {
            public_id: imageUpload.public_id,
            url: imageUpload.secure_url
          }
        });
        await newProduct.save();
        res.status(201).json({
          status: "success",
          message: `Product ${!existingCategory && "and Category"} Inserted Successfully`,
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
  static getProductDetails = async (req, res) => {
    try {
      const product = await ProductModel.findById(req.params.id);
      res.status(201).json({
        status: 'success',
        message: 'successful',
        product,
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
  static updateProduct = async (req, res) => {
    try {
      const { name, description, price, category, stock, image, cImage } = req.body;
      if (req.files?.image != null) {
        const file = req.files.image;
        // UPLOAD FOLDER TO IMAGE CLOUDINARY
        const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: 'productImage'
        }); // UPDATE NEW IMAGE
        // await cloudinary.uploader.destroy(req.data1.image.public_id); // DESTROY THE PREVIOUS IMAGE
        // await ProductModel.findByIdAndUpdate(req.params.id, {
        //   image: {
        //     public_id: imageUpload.public_id,
        //     url: imageUpload.secure_url
        //   }
        // });
        var data = {
          name: name,
          description: description,
          price: price,
          category: category,
          stock: stock,
          image: {
            public_id: imageUpload.public_id,
            url: imageUpload.secure_url
          }
        };
      }
      else if (image) {
        // UPLOAD FOLDER TO IMAGE CLOUDINARY
        const imageUpload = await cloudinary.uploader.upload(image, {
          folder: 'productImage'
        }); // UPDATE NEW IMAGE
        // await cloudinary.uploader.destroy(req.data1.image.public_id); // DESTROY THE PREVIOUS IMAGE
        // await ProductModel.findByIdAndUpdate(req.params.id, {
        //   image: {
        //     public_id: imageUpload.public_id,
        //     url: imageUpload.secure_url
        //   }
        // });
        var data = {
          name: name,
          description: description,
          price: price,
          category: category,
          stock: stock,
          image: {
            public_id: imageUpload.public_id,
            url: imageUpload.secure_url
          }
        };
      }
      else {
        var data = {
          name: name,
          description: description,
          price: price,
          category: category,
          stock: stock
        };
      }
      // CREATE NEW CATEGORY IF NOT
      var existingCategory = await CategoryModel.findOne({ name: category });
      if (!existingCategory) {
        if (req.files?.categoryImage != null) {
          const file = req.files?.categoryImage;
          var categoryImageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'categoryImage'
          });
        }
        else {
          var categoryImageUpload = await cloudinary.uploader.upload(cImage || image, {
            folder: 'categoryImage'
          });
        }
        const newCategory = new CategoryModel({
          name: category,
          image: {
            public_id: categoryImageUpload.public_id,
            url: categoryImageUpload.secure_url
          }
        });
        await newCategory.save();
      }
      // UPDATE PRODUCT
      await ProductModel.findByIdAndUpdate(req.params.id, data);
      res.status(201).json({
        status: 'success',
        message: `Product ${!existingCategory && "and Category"} Updated Successfully`,
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
  static deleteProduct = async (req, res) => {
    try {
      const user = await CategoryModel.findById(req.params.id)
      await cloudinary.uploader.destroy(user.image.public_id);
      await ProductModel.findByIdAndDelete(req.params.id);
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

module.exports = ProductController;