function handler(req, res) {
  const DataBase = require("../../../utils/db");
  DataBase.connect(() => {
    const getProductQuery = `SELECT * FROM products`;
    DataBase.query(getProductQuery, (err, result) => {
      if (err) {
        console.log("query get products error :(");
      } else {
        // result.map((product) => console.log(`${product.name}=>${product.id}`));
        // console.log("result=>", result);
        res.send(result);
        console.log("get products successful :)");
      }
    });
    if (req.method === "POST") {
      const newProduct = req.body;
      const postProductQuery = `INSERT INTO products VALUES (null,"${newProduct.title}",${newProduct.price},"${newProduct.description}",${newProduct.count},"${newProduct.slug}",${newProduct.popularity},"${newProduct.img}",${newProduct.sale})`;
      DataBase.query(postProductQuery, (err, result) => {
        if (err) {
          console.log("query error :(");
        } else {
          res.send(result);
          console.log("send user data successful :)");
        }
      });
    }
  });
}
export default handler;
