const axios = require("axios");

export default {
  searchArticles : (topic, beginDate, endDate) => {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": "3d18b69255a54a70b618943840ed2390",
        q: topic,
        begin_date: beginDate,
        end_date: endDate
      }
    });
  },
  save : (data) => {
    return axios.post("/api/articles", data);
  },
  delete : (id) => {
    return axios.delete("/api/articles/" + id);
  },
  getSaved : () => {
    return axios.get("/api/articles")
  }

};
