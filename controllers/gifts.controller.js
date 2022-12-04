import Gift from "../DB/models/gift.js";

const findAll = async (req, res, next) => {
  const gifts = await Gift.findAll();
  return res.json(gifts);
};

const addGift = async (req, res, next) => {
  const response = await Gift.create(req.body);
  return res
    .status(response.status)
    .send({ message: response.message, info: response.info });
};

const giftController = { findAll, addGift };
export default giftController;
