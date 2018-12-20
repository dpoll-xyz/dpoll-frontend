import axios from "axios";

export default axios.create({
  baseURL: "https://dpoll.xyz/api/v1/",
  timeout: 1000
});
