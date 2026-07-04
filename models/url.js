const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { timeStamp } = require("node:console");
const { type } = require("node:os");
const { RedirectHandler } = require("undici-types");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },

    RedirectURL: {
      type: String,
      required: true,
    },

    visitHistory: [{ Timestamp: { type: Number } }],
  },
  { timeStamps: true },
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
