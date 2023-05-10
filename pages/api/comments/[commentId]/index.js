function handler(req, res) {
    const DataBase = require("../../../../utils/db");
    DataBase.connect(() => {
      if (req.method === "DELETE") {
        const commentId = req.query.commentId;
  
        const deletecommentQuery = `DELETE FROM comments WHERE id=${commentId}`;
        DataBase.query(deletecommentQuery, (err, result) => {
          if (err) {
            console.log("query delete comment error :(");
          } else {
            res.send(result);
            console.log(`delete comment with id=${commentId}  successful :)`);
          }
        });
      }
  
      if (req.method === "PUT") {
        const commentId = req.query.commentId;
        const updatecomment = req.body;
        const updatecommentQuery = `UPDATE comments SET body="${updatecomment.body}" WHERE id=${commentId}`;
        DataBase.query(updatecommentQuery, (err, result) => {
          if (err) {
            console.log("query update comment error :(",err);
          } else {
            res.send(result);
            console.log(`update comment with id=${commentId}  successful :)`);
          }
        });
      }
    });
  }
  export default handler;
  