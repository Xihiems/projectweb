"use strict";

import { Products } from "../models.js";

const newProduct = async (req, res) => {
  const price = req.body.price;
  const name = req.body.name;
  const image = req.body.image;
  const brand = req.body.brand;
  const type = req.body.type;
  await new Products({
    price,
    name,
    image,
    brand,
    type,
  }).save();
  res.status(201).end();
};

const AllProducts = async (req, res) => {
  const products = await Products.fetchAll();
  res.json(products).end();
};

export default {
  newProduct,
  AllProducts,
};
