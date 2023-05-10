function handler(req, res) {
  const DataBase = require("../../../utils/db");
  DataBase.connect(() => {
    const getoffsQuery = `SELECT offs.id,offs.code,offs.percent,offs.date,offs.isActive,admins.firstName as adminId FROM offs INNER JOIN admins ON admins.id=offs.adminId`;
    DataBase.query(getoffsQuery, (err, result) => {
      if (err) {
        console.log("query get offs error :(");
      } else {
        // result.map((off) => console.log(`${off.name}=>${product.id}`));
        // console.log("result=>", result);
        res.send(result);
        console.log("get offs successful :)");
      }
    });
    if (req.method === "POST") {
      const newoff = req.body;
      const postoffQuery = `INSERT INTO offs VALUES (null,"${newoff.code}",${newoff.percent},"${newoff.date}",0,${newoff.adminId})`;
      DataBase.query(postoffQuery, (err, result) => {
        if (err) {
          console.log("query off send error :(", err);
        } else {
          res.send(result);
          console.log("send offs data successful :)");
        }
      });
    }
  });
}
export default handler;
