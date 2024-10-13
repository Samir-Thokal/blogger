import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://samirthokal10:samirthokal123@cluster0.ptypu.mongodb.net/');
    console.log("DB Connected");
}
