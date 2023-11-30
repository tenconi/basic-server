import mongoose from "mongoose";
import config from "../../config.js";

const URI = config.MONGO_URI; // url con user y pass


try {
    await mongoose.connect(URI);
    console.log('Conectado a Mongo DB');
  } catch (error) {
    console.log(error);
  }