import mongoose from "mongoose";


const connectDB = () => {
    try{
        mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
          })
        console.log("Database connected")
    }
    catch(error){
        console.log("Failed to connect")
        process.exit(1);
    }
}

export default connectDB;