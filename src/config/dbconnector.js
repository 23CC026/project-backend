import mongoose from "mongoose";
import 'dotenv/config'

const DBconnector = async () => {
    try {
        await console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Not Connected to MongoDB");
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }   

};
DBconnector();
export default DBconnector; 
