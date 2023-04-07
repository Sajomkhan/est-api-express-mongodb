const express = require('express')
const router = express.Router()

const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require("../controllers/user.controller");


router.get("/", getAllUsers)
router.get("/:id", getOneUser)
router.post("/", createUser)
router.delete("/:id", deleteUser)
router.patch("/:id", updateUser)

module.exports = router
