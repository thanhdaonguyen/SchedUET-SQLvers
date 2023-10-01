import schMod from "../models/scheduleModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await schMod.defaultQuery();
  res.json(data);
};

export { defaultController };