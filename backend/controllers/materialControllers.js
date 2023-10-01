import mtrMod from "../models/materialModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await mtrMod.defaultQuery();
  res.json(data);
};

export { defaultController };