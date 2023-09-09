import express from "express";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});