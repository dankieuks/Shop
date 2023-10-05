import express from "express";

import ProductSS from "../Model/ProductS.js";

const getAllProducts = async (req, res) => {
  const product = await ProductSS.find({}).then((data) => {
    return res.status(200).json({
      success: data ? true : false,
      productData: data ? data : "cannot find product",
    });
  });
};
const getOne = async (req, res) => {
  try {
    const id = req.params;
    const product = await ProductSS.findById(id);
  } catch (error) {}
};

const getBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    const brandProduct = await ProductSS.find({});
  } catch (error) {}
};
const createProduct = async (req, res) => {
  try {
    const newProduct = await ProductSS.creat(req.body);
    return res.status(200).json({
      success: true,
      productData: newProduct,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const updatedProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updateProduct = await ProductSS.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      productData: updateProduct,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await ProductSS.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      productData: deleteProduct,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const sortProduct = async (req, res) => {
  try {
    const { minPrice, maxPrice } = res.query;
    const sortProduct = await ProductSS.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });
  } catch (error) {
    res.sta
  }
};
const searchProduct = async (req, res) => {
  try {
  } catch (error) {}
};
export { getOne, getBrand, getAllProducts };
