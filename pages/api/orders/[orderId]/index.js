function handler(req, res) {
    const DataBase = require("../../../../utils/db");
    DataBase.connect(() => {
      if (req.method === "DELETE") {
        const orderId = req.query.orderId;
  
        const deleteorderQuery = `DELETE FROM orders WHERE id=${orderId}`;
        DataBase.query(deleteorderQuery, (err, result) => {
          if (err) {
            console.log("query delete order error :(");
          } else {
            res.send(result);
            console.log(`delete order with id=${orderId}  successful :)`);
          }
        });
      }

    });
  }
  export default handler;
  