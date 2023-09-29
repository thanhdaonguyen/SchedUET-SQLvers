import db from "../config/db.js";

class Post {
  static findAll() {
    let q = "select * from customers;";
    return db.query(q);
  }

  static findById(id) {
    let pt = [id];
    let q = `select * from customers
            where customerNumber = ?`;
    return db.execute(q, pt);
  }
}

export default Post;
