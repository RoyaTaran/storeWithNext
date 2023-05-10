function handler(req, res) {
    const DataBase = require("../../../../utils/db");
    DataBase.connect(() => {
      if (req.method === "PUT") {
        const orderId = req.query.orderId;
        const isActive = req.query.isActive;
        const updateisActiveQuery = `UPDATE orders SET isActive=${isActive}  WHERE id=${orderId}`;
        DataBase.query(updateisActiveQuery, (err, result) => {
          if (err) {
            console.log("query update isActive error :(", err);
          } else {
            res.send(result);
            console.log(`update isActive with id=${orderId}  successful :)`);
          }
        });
      }
    });
  }
  export default handler;
  