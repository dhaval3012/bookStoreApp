import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
console.log("MongoDB URI:", process.env.MongoDBURI);

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb

// const URI = "mongodb://localhost:27017/bookStore";
// console.log("Hardcoded URI:", URI);

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error :", error);
}

// defining Routes

app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
