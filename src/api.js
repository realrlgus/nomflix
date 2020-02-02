import axios from "axios";

const config = {
  params: {
    api_key: "72bd8a884f26215e9f8e71bde34af65f",
    language: "ko-KR"
  }
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing", config),
  upcoming: () => api.get("movie/upcoming", config),
  popular: () => api.get("movie/popular", config),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        api_key: "72bd8a884f26215e9f8e71bde34af65f",
        language: "ko-KR",
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        api_key: "72bd8a884f26215e9f8e71bde34af65f",
        language: "ko-KR",
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated", config),
  popular: () => api.get("tv/popular", config),
  airingToday: () => api.get("tv/airing_today", config),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        api_key: "72bd8a884f26215e9f8e71bde34af65f",
        language: "ko-KR",
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        api_key: "72bd8a884f26215e9f8e71bde34af65f",
        language: "ko-KR",
        query: encodeURIComponent(term)
      }
    })
};
