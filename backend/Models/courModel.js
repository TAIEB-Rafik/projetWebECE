import mongoose from "mongoose";
const courSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    title: String,
    desc: String,
    note: Number,
    image: String,
},
    {
        timestamps: true,
    });



const CourModel = mongoose.model("Cours", courSchema);
export default CourModel