const Product = require('../models/productModel');
const ErrorHander = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require('../utils/apifeatures');
//create Product Admin 
exports.createAllProduct = catchAsyncError(async(req, res, next) => {
    const Products = await Product.create(req.body);
    res.status(200).json({
        success: true,
        Products
    });

});
//Get All Admin 
exports.getAllProducts = catchAsyncError(async(req, res, next) => {
    const apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter();
    const product = await apiFeatures.query;

    res.status(200).json({
        message: "mern stack that la real",
        products: product
    });
});
// Get Detail Product
exports.getProductDetail = catchAsyncError(async(req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        message: product
    });
});

//update Product

exports.updateProduct = catchAsyncError(async(req, res, next) => {
    let product = Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        productUpdate
    });
});

//delete Product
exports.deleteProduct = async(req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }
    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Delete Success"
    });
};