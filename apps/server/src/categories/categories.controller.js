import express from "express";
import { createCategoryPipe, updateCategoryPipe } from "./categories.pipe";
import {
  createCategory,
  deleteCategory,
  getManyCategories,
  getOneCategory,
  updateCategory,
} from "./categories.service";

const categoriesController = express.Router();

<<<<<<< HEAD
categoriesController.get("/", async (req, res) => {
=======
categoriesController.get("/", async (eq, res) => {
>>>>>>> c8bfd8e7c21b4333862670d095532b30b064778e
  const categories = await getManyCategories();
  return res.json(categories);
});

<<<<<<< HEAD
categoriesController.post("/", createCategoryPipe, async (req, res) => {
=======
categoriesController.post("/", createCategoryPipe, async (eq, res) => {
>>>>>>> c8bfd8e7c21b4333862670d095532b30b064778e
  const data = req.body;
  const category = await createCategory(data);
  return res.json(category);
});

<<<<<<< HEAD
categoriesController.get("/:id", async (req, res) => {
=======
categoriesController.get("/:id", async (eq, res) => {
>>>>>>> c8bfd8e7c21b4333862670d095532b30b064778e
  const { id } = req.params;
  const category = await getOneCategory(id);
  return res.json(category);
});

<<<<<<< HEAD
categoriesController.put("/:id", updateCategoryPipe, async (req, res) => {
=======
categoriesController.put("/:id", updateCategoryPipe, async (eq, res) => {
>>>>>>> c8bfd8e7c21b4333862670d095532b30b064778e
  const data = req.body;
  const { id } = req.params;
  const category = await updateCategory(id, data);
  return res.json(category);
});

<<<<<<< HEAD
categoriesController.delete("/:id", async (req, res) => {
=======
categoriesController.delete("/:id", async (eq, res) => {
>>>>>>> c8bfd8e7c21b4333862670d095532b30b064778e
  const { id } = req.params;
  const category = await deleteCategory(id);
  return res.json(category);
});

<<<<<<< HEAD
export default categoriesController;
=======
export default categoriesController;
>>>>>>> c8bfd8e7c21b4333862670d095532b30b064778e
