const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const mvcRoutes = require("./routes/mvcRoutes.js");
const productsRouter = require("./routes/productRoutes.js");
const categoriesRouter = require("./routes/categoryRouter.js");
const authRouter = require("./routes/userRouter.js");
const connectDB = require("./models/db.js");
const protectedRoutes = require("./middleware/protectedRoutes.js");

app.set("view engine", "pug");
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = 8000;

app.use(
  "/",
  authRouter,
  protectedRoutes,
  mvcRoutes,
  productsRouter,
  categoriesRouter
);
connectDB();

app.listen(port);


