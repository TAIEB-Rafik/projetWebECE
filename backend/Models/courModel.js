import mongoose from "mongoose";
const courSchema = mongoose.Model({
    userId: {
        type: String,
        require: true
    },
    desc: String,
    suivipar: [],
    image: String,
},
    {
        timestamps: true
    });