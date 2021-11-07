"use strict";

import apiController from "./controllers/api.js";

const routes = (app) => {
  app.post("/newProduct", apiController.newProduct);
  app.get("/products", apiController.AllProducts);
  app.post("/register", apiController.Register);
  app.post("/login", apiController.login);
  app.post("/addToCart", apiController.addToCart);
  app.get("/getCart", apiController.getCart);
};

export { routes };
