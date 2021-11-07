import { Bookshelf } from "./config.js";

const Products = Bookshelf.model("Products", {
  tableName: "products",
});

const Users = Bookshelf.model("Users", {
  tableName: "users",
});

const Cart = Bookshelf.model("Cart", {
  tableName: "cart"
})

export { Products, Users, Cart };
