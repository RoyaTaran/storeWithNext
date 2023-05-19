function handler(req, res) {
    const DataBase = require("../../../../utils/db");
    DataBase.connect(() => {
      if (req.method === "PUT") {
        console.log(req.query.userId)
        console.log(req.query.passwordCode)
        const userPhone = req.query.userId;
        const passwordCode = req.query.passwordCode;
        const updatepasswordCodeQuery = `UPDATE users SET passwordCode="${passwordCode}"  WHERE phone="${userPhone}"`;
        DataBase.query(updatepasswordCodeQuery, (err, result) => {
          if (err) {
            console.log("query update passwordCode error :(", err);
          } else {
            res.send(result);
            console.log(`update passwordCode with mobileNumber=${userPhone}  successful :)`);
          }
        });
      }
    });
  }
  export default handler;
  