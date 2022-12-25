import express from "express";
import { createCour, deleteCour, getAllCours, getCour, updateCour } from "../Controllers/CourController.js";




const router = express.Router();

//routes
router.post('/', createCour)
router.get('/:id', getCour)
router.get('/', getAllCours)
router.put('/:id', updateCour)
router.delete('/:id',deleteCour)





export default router;
