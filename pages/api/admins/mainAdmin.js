function handler(req, res) {
  const DataBase = require("../../../utils/db");
  DataBase.connect(() => {
    const adminToken=req.headers.authorization

    const getadminQuery = `SELECT * FROM admins WHERE token=${adminToken}`;
    DataBase.query(getadminQuery, (err, result) => {
      if (err) {
        console.log("query get admin error :(");
      } else {
        res.send(result);
        console.log("get admin successful :)");
      }
    });
  });
}
export default handler;
