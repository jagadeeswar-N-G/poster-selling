import mongoose from "mongoose";
import React from "react";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connection is successful");
    });
    connection.on("error", (err) => {
      console.log("mongo connectoin error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
};
