import mongoose from "mongoose";

export const ConnectDB = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable");
    }

    await mongoose.connect(MONGODB_URI);
    console.log("DB Connected");
}