import express from "express";
import * as brandCtrls from "../Controller/Brand.js"
const brandRouter= express.Router();
brandRouter.get("/",brandCtrls.getOne );

export default brandRouter;
