"use strict";

import api from "./controllers/api.js";
import apiController from "./controllers/api.js";

const routes = (app) => {
  app.post("/newProduct", apiController.newProduct);
  app.get("/products", apiController.AllProducts);
};

export { routes };
