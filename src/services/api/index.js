import axios from "axios";

export const api = axios.create({
  baseURL: "https://capstone-reppy.herokuapp.com/",
});
