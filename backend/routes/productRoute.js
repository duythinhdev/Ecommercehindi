const express = require('express');
const { getAllProducts, createAllProduct, updateProduct, deleteProduct, getProductDetail } = require('../controllers/productControllers');

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createAllProduct);
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getProductDetail);
module.exports = router;