import db from "../config/db.js";
import * as q from "./queries/materialQueries.js"

class mtrMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }
}

export default mtrMod;
