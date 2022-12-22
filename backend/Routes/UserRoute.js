import express from "express";
import { getUser,updateUser,deleteUser } from "../Controllers/UserController.js";
//import { deleteUser, followUser, getUser, UnFollowUser, updateUser } from "../Controllers/UserController.js";

const router = express.Router()

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
export default router;