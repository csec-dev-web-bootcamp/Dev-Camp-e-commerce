import express from "express";
// import { createuserPipe, updateuserPipe } from "./users.pipe";
import {
  createser,
  deleteuser,
  getManyUsers,
  getOneuser,
  updateuser,
} from "./users.service";
import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { asyncHandler } from "../common/async-handler";

const generateFilename = (originalName) => {
  const ext = path.extname(originalName);
  return `user-${new Date().getUTCMilliseconds()}${ext}`;
};

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/gif"];

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const filename = generateFilename(file.originalname);
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Please upload an image of type jpeg, png, or gif"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

cloudinary.config({
  cloud_name: "dvp8pddmz",
  api_key: "923656227925561",
  api_secret: "UfrVwGDFx_EEOk8cF6ZPosiOhfk",
});

const getUsersController = express.Router();

getUsersController.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await getManyUsers();

    res.json(users);
  })
);

export default getUsersController;
