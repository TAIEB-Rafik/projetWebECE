import express from "express";
import { getUser, updateUser, deleteUser, getAllUsers } from "../Controllers/UserController.js";


const router = express.Router()
 
//gestion de routes  module Users

router.get('/:id', getUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)



export default router;