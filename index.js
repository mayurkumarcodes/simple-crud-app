const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./Routes/product.route");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello frpm server");
});

//routes

app.use("/api/products", productRoute);

mongoose
	.connect(
		"mongodb+srv://mayurkmrp:mayuryogi%40123@backenddb.rnw0lkh.mongodb.net/?retryWrites=true&w=majority&appName=backendDB"
	)
	.then(() => {
		console.log("DB connected");
		app.listen(3000, () => {
			console.log("sever started on port:3000");
		});
	})
	.catch((err) => console.log("DB connection failed", err));
