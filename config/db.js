import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://subhash:oXqW0RSZj6gtirIf@cluster0.fjeho.mongodb.net/navigation').then(()=>{
        console.log("DB connected")
    })
}

export default connectDB