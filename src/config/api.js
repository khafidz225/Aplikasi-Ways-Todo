import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/220efa44-4567-4ed7-8198-b72f9f3aa62d",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorizaton"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorizaton"];
  }
};
