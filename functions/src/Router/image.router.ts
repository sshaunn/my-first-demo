import express = require("express");
import { addImage } from "../Controller/imageUpload.controller";

const router = express.Router();
router.post("/upload", addImage);

export { router };