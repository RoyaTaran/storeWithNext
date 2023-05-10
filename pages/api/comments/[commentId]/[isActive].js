function handler(req, res) {
  const DataBase = require("../../../../utils/db");
  DataBase.connect(() => {
    if (req.method === "PUT") {
      const commentId = req.query.commentId;
      const isActive = req.query.isActive;
      const updateisActiveQuery = `UPDATE comments SET isActive=${isActive}  WHERE id=${commentId}`;
      DataBase.query(updateisActiveQuery, (err, result) => {
        if (err) {
          console.log("query update isActive error :(", err);
        } else {
          res.send(result);
          console.log(`update isActive with id=${commentId}  successful :)`);
        }
      });
    }
  });
}
export default handler;
