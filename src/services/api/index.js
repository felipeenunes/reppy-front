import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://reppy-cors-server.herokuapp.com/https://capstone-reppy.herokuapp.com/",
  // "https://capstone-reppy.herokuapp.com/"
});
