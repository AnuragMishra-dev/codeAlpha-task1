import express from "express";
import Url from "../models/urlSchema.js";
import { nanoid } from "nanoid";

const LongtoShortrouter = express.Router();

LongtoShortrouter.post("/acceptlongURLs", async (req, res) => {
  try {
    const { originalUrl } = req.body;
    console.log(originalUrl);

    const existingUrl = await Url.findOne({
      originalURLs: originalUrl,
    });

    if (existingUrl) {
      return res.status(200).json({
        success: true,
        shortcode: existingUrl.shortCodes,
      });
    }

    

    const shortcode = nanoid(7);

    const newUrl = await Url.create({
      originalURLs: originalUrl,
      shortCodes: shortcode,
    });

    res.status(200).json({
      success: true,
      message: "Shortcodes created!",
      shortcode,
      shortUrls: `http://localhost:${process.env.PORT}/${shortcode}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

LongtoShortrouter.get("/:shortcode", async (req, res) => {
  try {
    const { shortcode } = req.params;

    const searchcode = await Url.findOne({ shortCodes: shortcode });

    if (!searchcode) {
      return res.status(404).json({
        message: "searchcode not found!",
      });
    }

    console.log(searchcode.originalURLs);
    res.redirect(searchcode.originalURLs);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default LongtoShortrouter;
