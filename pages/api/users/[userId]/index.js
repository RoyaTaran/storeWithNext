function handler(req, res) {
    const DataBase = require("../../../../utils/db");
    DataBase.connect(() => {
      if (req.method === "DELETE") {
        const userId = req.query.userId;
  
        const deleteuserQuery = `DELETE FROM users WHERE id=${userId}`;
        DataBase.query(deleteuserQuery, (err, result) => {
          if (err) {
            console.log("query delete user error :(");
          } else {
            res.send(result);
            console.log(`delete user with id=${userId}  successful :)`);
          }
        });
      }
  
      if (req.method === "PUT") {
        const userId = req.query.userId;
        const updateuser = req.body;
        const updateuserQuery = `UPDATE users SET firstName="${updateuser.firstName}",lastName="${updateuser.lastName}",phone=${updateuser.phone},email="${updateuser.email}",password="${updateuser.password}",buy=${updateuser.buy},city="${updateuser.city}",address="${updateuser.address}" WHERE id=${userId}`;
        DataBase.query(updateuserQuery, (err, result) => {
          if (err) {
            console.log("query update user error :(",err);
          } else {
            res.send(result);
            console.log(`update user with id=${userId}  successful :)`);
          }
        });
      }
    });
  }
  export default handler;
  