import CourModel from '../Models/courModel.js';
import mongoose from 'mongoose';


//nouveaux cour

export const createCour = async (req, res) => {
    const newCour = new CourModel(req.body)

    try {
        await newCour.save()
        res.status(200).json("<INFO> cours ajouter [OK] ")
    } catch (error) {
        res.status(500).json(error)
    }
}

//get cour

export const getCour = async (req, res) => {
    const id = req.params.id;
    try {
        const cour = await CourModel.findById(id)
        res.status(200).json(cour)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get all cours 
export const getAllCours = async (req, res) => {
    try {
        const cours = await CourModel.find()
        res.status(200).json(cours)
    } catch (error) {
        res.status(500).json(error)

    }

}

//update cour autoriser que pour celui qui cree le cour

export const updateCour = async (req, res) => {
    const courId = req.params.id;
    const { userId } = req.body;


    try {
        const cour = await CourModel.findById(courId)
        if (cour.userId === userId) {
            await cour.updateOne({ $set: req.body }) //fonction mongo
            res.status(200).json("<INFO> Mise a jour du cour confirmer [OK] ")
        } else {
            res.status(403).json('<INFO> modification non autoriser')
        }
    } catch (error) {
        res.status(500).json(error)
    }

}

//supprission de cour
export const deleteCour = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        const cour = await CourModel.findById(id);
        if (cour.userId === userId) {
            await cour.deleteOne();//fonction mongo
            res.status(200).json("<INFO> Cours supprimer [OK] ")
        } else {
            res.status(403).json('<INFO> suppresion  non autoriser')
        }

    } catch (error) {
        res.status(500).json(error);
    }

}
//noter cour
export const likeCour = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        const cour = await CourModel.findById(id);
        if (!cour.likes.includes(userId)) {
            await cour.updateOne({ $push: { likes: userId } })
            res.status(200).json("<INFO> Cour liker [ok]")
        }

    } catch (error) {
        res.status(500).json(error)
    }

}