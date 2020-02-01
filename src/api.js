import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themovie.org/3/",
  params: {
    api_key: "72bd8a884f26215e9f8e71bde34af65f",
    language: "ko-KR"
  }
});

export default api;
