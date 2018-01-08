import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

// Express setup, including JSON body parsing.
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Tells express to add the "Access-Control-Allow-Origin" header to allow requests from anywhere.
app.use(cors())

// Connect to MongoDB, on the "products-api" database. If the db doesn't exist, mongo will create it.
mongoose.connect("mongodb://localhost/products-api", { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

// This is the beginning of a model for the Product object.
const Product = mongoose.model("Product", {
  name: String,
  // Add more attributes to your product here.
})

app.get("/", (req, res) => {
  res.send("Products API")
})

// Endpoint to create a product. Send a POST to /products with a JSON body
// with the keys and values you want to persist in the database.
app.post("/products", (req, res) => {
  const product = new Product(req.body)

  product.save()
    .then(() => { res.status(201).send("Product created") })
    .catch(err => { res.status(400).send(err) })
})

// Add more endpoints here!

app.listen(8080, () => console.log("Products API listening on port 8080!"))
