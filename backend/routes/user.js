var express = require('express');
const { getAllUser, getUserById, updateUser, deleteUserById } = require('../controllers/userController');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');

const userRoute = express.Router();

userRoute.get("/", verifyAdmin, getAllUser);
userRoute.get("/:id", verifyUser, getUserById);
userRoute.put("/:id", verifyUser, updateUser);
userRoute.delete("/:id", verifyAdmin, deleteUserById);

module.exports = userRoute;