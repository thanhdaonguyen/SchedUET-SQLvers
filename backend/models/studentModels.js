import db from "../config/db.js";
import * as q from "./queries/studentQueries.js"

class stuMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }
}

export default stuMod;
