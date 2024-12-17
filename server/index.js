const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/db");
const { userRouter } = require("./routers/user.route");
const productRoute = require("./routers/product.route");
const path = require("path");
const cartRoute = require("./routers/cart.route");
const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// base route
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("/", (req, res) => {
  res.status(200).json({ msg: "hello node js" });
});
app.use("/user", userRouter);
app.use("/products", productRoute);
app.use("/comments", CommentRouter);
app.use("/cart", cartRoute);

// Mount routes
app.use('/api/restaurants', require('./routes/restaurant'));
app.use('/api/food-items', require('./routes/foodItem'));



const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("listening on port ", PORT);
  connectDb();
});
