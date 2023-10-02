import db from "../config/db.js";
import * as q from "./queries/accountQueries.js";

class accMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }
}

export default accMod;
