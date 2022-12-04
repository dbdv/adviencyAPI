import * as DB from "../data.json" assert { type: "json" };
import fs from "fs";
import STATUS from "../../assets/statusCodes.js";

export default class Gift {
  _id;
  _title;

  static async findAll() {
    return DB.default.Gifts;
  }

  static async create({ newGift }) {
    const prevGifts = DB.default.Gifts;
    try {
      fs.writeFileSync(
        ".\\DB\\data.json",
        JSON.stringify({ Gifts: [...prevGifts, newGift] }),
        {
          encoding: "utf8",
          flag: "w",
        }
      );
      return {
        status: STATUS.OK,
        message: "Gift created succesfully",
        info: {
          created: newGift,
        },
      };
    } catch (err) {
      return {
        status: STATUS.ERROR,
        message: "Gift don't created.",
        info: {
          error: err,
        },
      };
    }
  }
}
