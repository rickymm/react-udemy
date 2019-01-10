import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e2dc1ad0ffa3c6750b09e3ffb1769e5ea03515d7505d5b0d2a11d88bacb84275"
  }
});
