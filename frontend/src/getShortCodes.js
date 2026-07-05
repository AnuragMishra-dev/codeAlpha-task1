import React from "react";
import axios from "axios";

const GetShortCode = async (originalUrl) => {
  const response = await axios.post(
    `http://localhost:5000/api/url/acceptlongURLs`,
    {
      originalUrl,
    },
  );

  return response.data.shortcode;

 // console.log(response.data.shortcode);
};
export default GetShortCode;
