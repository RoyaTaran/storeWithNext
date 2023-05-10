function handler(req, res) {
  const DataBase = require("../../../utils/db");
  DataBase.connect(() => {
    const getordersQuery = `SELECT orders.id,orders.date,orders.hour,orders.price,orders.sale,orders.count,orders.popularity,orders.off,orders.sale_count,orders.isActive,users.firstName as userId,products.title as productId FROM orders INNER JOIN users ON users.id=orders.userId INNER JOIN products ON products.id=orders.productId`;
    DataBase.query(getordersQuery, (err, result) => {
      if (err) {
        console.log("query get orders error :(");
      } else {
        res.send(result);
        console.log("get orders successful :)");
      }
    });
    if (req.method === "POST") {
      const neworder = req.body;
      const postorderQuery = `INSERT INTO orders VALUES (null,${neworder.userId},${neworder.productId},"${neworder.date}","${neworder.hour}",${neworder.price},${neworder.sale},${neworder.count},${neworder.popularity},${neworder.off},${neworder.sale_count},0)`;
      DataBase.query(postorderQuery, (err, result) => {
        if (err) {
          console.log("query order send error :(", err);
        } else {
          res.send(result);
          console.log("send orders data successful :)");
        }
      });
    }
  });
}
export default handler;
