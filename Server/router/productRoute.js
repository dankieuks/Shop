import express from "express";
import { getAllProducts } from "../controllers/product";
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
export default productRouter;
