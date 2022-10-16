import mongoose from "mongoose";
export const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error.message);
    }

}