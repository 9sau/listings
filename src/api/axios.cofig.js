import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  //baseURL: process.env.PUBLIC_URL + '/assets/json'
  headers: {
    Authorization:
      "Client-ID 9f236289b764ec3e884027087a199b0ff583d30869d00bb5ea8751956de72a61"
  }
});
