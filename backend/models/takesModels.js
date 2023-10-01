import db from "../config/db.js";

class takeMod {
  static defaultQuery() {
    let q = "show databases;";
    return db.query(q);
  }
}

export default takeMod;