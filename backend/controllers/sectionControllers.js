import secMod from "../models/sectionModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await secMod.defaultQuery();
  res.json(data);
};

export { defaultController };