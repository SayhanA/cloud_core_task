const { default: axios } = require("axios");

const baseUrl = axios.create({
  baseURL: "https://admin.refabry.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseUrl;
