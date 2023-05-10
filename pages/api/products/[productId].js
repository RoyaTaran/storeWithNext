function handler(req, res) {
  const DataBase = require("../../../utils/db");
  DataBase.connect(() => {
    if (req.method === "DELETE") {
      const productId = req.query.productId;

      const deleteProductQuery = `DELETE FROM products WHERE id=${productId}`;
      DataBase.query(deleteProductQuery, (err, result) => {
        if (err) {
          console.log("query delete product error :(");
        } else {
          res.send(result);
          console.log(`delete product with id=${productId}  successful :)`);
        }
      });
    }

    if (req.method === "PUT") {
      const productId = req.query.productId;
      const updateProduct = req.body;
      const updateProductQuery = `UPDATE products SET title="${updateProduct.title}",price=${updateProduct.price},description="${updateProduct.description}",count=${updateProduct.count},slug="${updateProduct.slug}",popularity=${updateProduct.popularity},img="${updateProduct.img}",sale=${updateProduct.sale} WHERE id=${productId}`;
      DataBase.query(updateProductQuery, (err, result) => {
        if (err) {
          console.log("query update product error :(",err);
        } else {
          res.send(result);
          console.log(`update product with id=${productId}  successful :)`);
        }
      });
    }
  });
}
export default handler;
