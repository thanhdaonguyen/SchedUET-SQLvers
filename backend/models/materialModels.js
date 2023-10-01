import db from "../config/db.js";

class mtrMod {
  static defaultQuery() {
    let q = "show databases;";
    return db.query(q);
  }
}

export default mtrMod;
