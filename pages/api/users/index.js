const { v4: uuidv4 } = require("uuid");
import bcrypt from "bcryptjs";
function handler(req, res) {
  const DataBase = require("../../../utils/db");
  DataBase.connect(() => {
    const getusersQuery = `SELECT * FROM users`;
    DataBase.query(getusersQuery, (err, result) => {
      if (err) {
        console.log("query get users error :(");
      } else {
        res.send(result);
        console.log("get users successful :)");
      }
    });
    if (req.method === "POST") {
      const newuser = req.body;
      const postuserQuery = `INSERT INTO users VALUES (null,"${uuidv4()}","${bcrypt.hashSync(
       toString( newuser.passwordCode)
      )}","${newuser.firstName}","${newuser.lastName}",${newuser.phone},"${
        newuser.email
      }","${newuser.password}",${newuser.buy},"${newuser.city}","${
        newuser.address
      }")`;
      DataBase.query(postuserQuery, (err, result) => {
        if (err) {
          console.log("query user send error :(", err);
        } else {
          res.send(result);
          console.log("send users data successful :)");
        }
      });
    }
  });
}
export default handler;
