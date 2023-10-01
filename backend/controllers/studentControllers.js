import stuMod from "../models/studentModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await stuMod.defaultQuery();
  res.json(data);
};

export { defaultController };