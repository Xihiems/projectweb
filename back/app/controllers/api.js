"use strict";

import { Products, Users, Cart } from "../models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    type
  }).save();
  res.status(201).end();
};

const AllProducts = async (req, res) => {
  const products = await Products.fetchAll();
  console.log(products)
  res.json(products).end();
};

const Register = async (req, res) => {
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10);
  const request = await Users.where("email", req.body.email).fetch({
    require: false
  });
  if (request == null) {
    await new Users({
      email,
      password
    }).save();
    res.status(201).end();
  } else {
    res.status(409).end();
  }
};

const login = async (req, res) => {
  const request = await Users.where("email", req.body.email).fetch();
  const passwordIsValid = await bcrypt.compare(
    req.body.password,
    request.attributes.password
  );
  if (!passwordIsValid) {
    res.status(401).send(null);
  } else {
    const token = jwt.sign({ id: request.attributes.id }, "trestressecret", {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send(token);
  }
};

async function authenticate(token, res) {
  try {
    const verif = await jwt.verify(token, "trestressecret");
    return verif;
  } catch (err) {
    res.status(401);
  }
}

const addToCart = async (req, res) => {
  const verif = await authenticate(req.headers.authorization, res)
  const iduser = verif.id
  const idproduct = req.body.idproduct
  await new Cart({
    iduser,
    idproduct
  }).save()
  res.status(200).end()
};

const getCart = async (req, res) => {
  var verif = await authenticate(req.headers.authorization, res);
  const request = await Cart.where("iduser",verif.id).fetchAll();
  var returnArray = [];
  for (const product of request.models) {
    var current = await Products.where("id", product.attributes.idproduct).fetch();
    returnArray.push(current.attributes);
  }
  res.json(returnArray).end();
};

export default {
  newProduct,
  AllProducts,
  Register,
  login,
  addToCart,
  getCart
};
