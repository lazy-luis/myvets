import axios from "axios";

// const baseUrl = "http://localhost/myVetsBE";
const baseUrl = "https://myvets.thrida.com";

export const myVetsApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
