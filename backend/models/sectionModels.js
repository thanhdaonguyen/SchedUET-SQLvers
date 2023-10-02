import db from "../config/db.js";
import * as q from "./queries/sectionQueries.js"

class secMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }
}

export default secMod;
