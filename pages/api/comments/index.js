function handler(req, res) {
  const DataBase = require("../../../utils/db");
  DataBase.connect(() => {
    const getcommentsQuery = `SELECT comments.id,comments.body,comments.date,comments.hour,comments.isActive,users.firstName as userId,products.title as productId FROM comments INNER JOIN users ON users.id=comments.userId INNER JOIN products ON products.id=comments.productId`;
    DataBase.query(getcommentsQuery, (err, result) => {
      if (err) {
        console.log("query get comments error :(");
      } else {
        // result.map((comment) => console.log(`${comment.name}=>${product.id}`));
        // console.log("result=>", result);
        res.send(result);
        console.log("get comments successful :)");
      }
    });
    if (req.method === "POST") {
      const newcomment = req.body;
      const postcommentQuery = `INSERT INTO comments VALUES (null,"${newcomment.body}","${newcomment.date}","${newcomment.hour}",0,${newcomment.userId},${newcomment.productId})`;
      DataBase.query(postcommentQuery, (err, result) => {
        if (err) {
          console.log("query comment send error :(", err);
        } else {
          res.send(result);
          console.log("send comments data successful :)");
        }
      });
    }
  });
}
export default handler;
