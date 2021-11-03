"use strict";

import express from "express";
import { routes as routes } from "./app/routes.js";

const app = express();

app.use(express.json());

routes(app);

const server = app.listen(3000, () => {
  let port = server.address().port;
  console.log("Example app listening at http://localhost:%s", port);
});
