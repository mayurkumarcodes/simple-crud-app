const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
	getProducts,
	getProductsById,
	updateProduct,
	deletProduct,
	createProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductsById);
router.put("/:id", updateProduct);
router.delete("/:id", deletProduct);

module.exports = router;
