const { Router } = require("express");
const {
  GetUser,
  Signup,
  Login,
  deleteUser,
  verifyUser,
  getAdmins,
  verifyAdmin,
} = require("../controllers/user.controllers");
const { decode } = require("../middlewares/decodeJwt");
const { isSuperAdmin } = require("../middlewares/admin");
const userRouter = Router();

userRouter.get("/", GetUser);
userRouter.post("/signup", Signup);
userRouter.post("/login", Login);
userRouter.delete("/:id", decode, isSuperAdmin, deleteUser);
userRouter.get("/verify/:token/:otp", verifyUser);
userRouter.get("/all-admin", decode, isSuperAdmin, getAdmins);
userRouter.patch("/verifyadmin/:adminId", decode, isSuperAdmin, verifyAdmin);
module.exports = { userRouter };
