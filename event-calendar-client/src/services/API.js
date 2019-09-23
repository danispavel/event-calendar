import axios from "axios";

const serverUrl = "http://localhost:3005/";

const customFetch = options =>
  axios({ ...options, url: `${serverUrl}${options.url}` }).then(
    res => res.data
  );

const API = {
  async get(url) {
    const result = await customFetch({ url });

    return result;
  },

  async post(url, data) {
    const result = await customFetch({ url, method: "POST", data });

    return result;
  },

  async delete(url) {
    const result = await customFetch({ url, method: "DELETE" });
    
    return result;
  }
};

export default API;
