import accMod from "../models/accountModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await accMod.defaultQuery();
  res.json(data);
};

export { defaultController };
