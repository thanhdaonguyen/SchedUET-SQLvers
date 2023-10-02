import db from "../config/db.js";
import * as q from "./queries/takesQueries.js"

class takeMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }
}

export default takeMod;