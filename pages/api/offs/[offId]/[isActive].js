function handler(req, res) {
    const DataBase = require("../../../../utils/db");
    DataBase.connect(() => {
      if (req.method === "PUT") {
        const offId = req.query.offId;
        const isActive = req.query.isActive;
        const updateisActiveQuery = `UPDATE offs SET isActive=${isActive}  WHERE id=${offId}`;
        DataBase.query(updateisActiveQuery, (err, result) => {
          if (err) {
            console.log("query update isActive error :(", err);
          } else {
            res.send(result);
            console.log(`update isActive with id=${offId}  successful :)`);
          }
        });
      }
    });
  }
  export default handler;
  