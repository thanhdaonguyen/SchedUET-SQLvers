import db from "../config/db.js";

class schMod {
  static defaultQuery() {
    let q = "show databases;";
    return db.query(q);
  }
}

export default schMod;
