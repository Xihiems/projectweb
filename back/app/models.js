import { Bookshelf } from "./config.js";

const Products = Bookshelf.model("Products", {
  tableName: "products",
});

export { Products };
