import axios from "axios";

const KEY = "AIzaSyA3HwB3RSoE_6P72HznftT4lVg7ZJqQM2w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
