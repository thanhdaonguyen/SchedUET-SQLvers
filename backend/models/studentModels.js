import db from "../config/db.js";

class stuMod {
  static defaultQuery() {
    let q = "show databases;";
    return db.query(q);
  }
}

export default stuMod;
