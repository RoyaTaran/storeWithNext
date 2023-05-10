function handler(req, res) {
  const DataBase = require("../../../utils/db");
  DataBase.connect(() => {
    const getadminsQuery = `SELECT * FROM admins`;
    DataBase.query(getadminsQuery, (err, result) => {
      if (err) {
        console.log("query get admins error :(");
      } else {
        res.send(result);
        console.log("get admins successful :)");
      }
    });
    if (req.method === "POST") {
      const newadmin = req.body;
      const postadminQuery = `INSERT INTO admins VALUES (null,"${newadmin.token}","${newadmin.firstName}","${newadmin.lastName}",${newadmin.phone},"${newadmin.password}","${newadmin.task}")`;
      DataBase.query(postadminQuery, (err, result) => {
        if (err) {
          console.log("query admin send error :(", err);
        } else {
          res.send(result);
          console.log("send admins data successful :)");
        }
      });
    }
  });
}
export default handler;
