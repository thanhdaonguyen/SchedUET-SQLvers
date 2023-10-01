import db from "../config/db.js";

class accMod {
  static defaultQuery() {
    let q = "show databases;";
    return db.query(q);
  }
}

export default accMod;
