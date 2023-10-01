import db from "../config/db.js";

class secMod {
  static defaultQuery() {
    let q = "show databases;";
    return db.query(q);
  }
}

export default secMod;
