const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "product name cant be empty"],
		},
		quanitiy: {
			type: Number,
			required: [true],
			default: 0,
		},
		price: {
			type: Number,
			required: [true],
		},
	},
	{
		timestamps: true,
	}
);
const product = mongoose.model("Product", productSchema);

module.exports = product;
