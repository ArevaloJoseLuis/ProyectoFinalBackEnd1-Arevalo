const express = require("express");
const fs = require("fs");
const {router:productsRouter} = require("./routes/products.router.js")
const {router:cartsRouter} = require("./routes/carts.router.js")
const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use ("/api/products",productsRouter);
app.use ("/api/carts",cartsRouter);


app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send('Home Page');
});

//El servidor se levanta escuchando por el puerto 8080. Segundo argumento es un callback que mustra que el servidor esta arriba.
const server = app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});
