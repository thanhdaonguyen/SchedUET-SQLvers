import takeMod from "../models/takesModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await takeMod.defaultQuery();
  res.json(data);
};

export { defaultController };