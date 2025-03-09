import { getEnvVar } from "../utils/getEnvVar.js";
import mongoose from "mongoose";

export const mongoDB = async () => {
  try {
    const user = getEnvVar("MONGODB_USER");
    const pwd = getEnvVar("MONGODB_PASSWORD");
    const url = getEnvVar("MONGODB_URL");
    const db = getEnvVar("MONGODB_DB");
    // console.log(user, pwd, url, db);

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`
    );

    console.log("Mongo connection successfully established!");
  } catch (error) {
    console.log("Error while setting up mongo connection", error);
    throw error;
  }
};
