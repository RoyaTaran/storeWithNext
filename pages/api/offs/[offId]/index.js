function handler(req, res) {
    const DataBase = require("../../../../utils/db");
    DataBase.connect(() => {
      if (req.method === "DELETE") {
        const offId = req.query.offId;
  
        const deleteoffQuery = `DELETE FROM offs WHERE id=${offId}`;
        DataBase.query(deleteoffQuery, (err, result) => {
          if (err) {
            console.log("query delete off error :(");
          } else {
            res.send(result);
            console.log(`delete off with id=${offId}  successful :)`);
          }
        });
      }
  
      if (req.method === "PUT") {
        const offId = req.query.offId;
        const updateoff = req.body;
        const updateoffQuery = `UPDATE offs SET code="${updateoff.code}",percent=${updateoff.percent} WHERE id=${offId}`;
        DataBase.query(updateoffQuery, (err, result) => {
          if (err) {
            console.log("query update off error :(",err);
          } else {
            res.send(result);
            console.log(`update off with id=${offId}  successful :)`);
          }
        });
      }
    });
  }
  export default handler;
  