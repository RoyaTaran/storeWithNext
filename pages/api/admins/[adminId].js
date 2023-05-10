function handler(req, res) {
    const DataBase = require("../../../utils/db");
    DataBase.connect(() => {
      if (req.method === "DELETE") {
        const adminId = req.query.adminId;
  
        const deleteadminQuery = `DELETE FROM admins WHERE id=${adminId}`;
        DataBase.query(deleteadminQuery, (err, result) => {
          if (err) {
            console.log("query delete admin error :(");
          } else {
            res.send(result);
            console.log(`delete admin with id=${adminId}  successful :)`);
          }
        });
      }
  
      if (req.method === "PUT") {
        const adminId = req.query.adminId;
        const updateadmin = req.body;
        const updateadminQuery = `UPDATE admins SET firstName="${updateadmin.firstName}",lastName="${updateadmin.lastName}",phone=${updateadmin.phone},password="${updateadmin.password}",task="${updateadmin.task}" WHERE id=${adminId}`;
        DataBase.query(updateadminQuery, (err, result) => {
          if (err) {
            console.log("query update admin error :(",err);
          } else {
            res.send(result);
            console.log(`update admin with id=${adminId}  successful :)`);
          }
        });
      }
    });
  }
  export default handler;
  