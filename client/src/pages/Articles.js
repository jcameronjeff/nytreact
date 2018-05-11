import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";

class Articles extends Component {
  state = {
    topic: "",
    startDate: "",
    endDate: "",
    articles: []
  };

  searchArticles = event => {
    event.preventDefault();
    API.searchArticles(
      this.state.topic,
      this.state.startDate,
      this.state.endDate
    )
      .then(res => this.setState({ articles: res.data.response.docs }))
      .catch(err => console.log(err))
      .then(() => {
        console.log(this.state.articles);
      });
  };

  handleInputChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  save = event => {
    event.preventDefault();
    API.save({
      title: event.target.dataset.title,
      date: event.target.dataset.date,
      url: event.target.dataset.url,
      snippet: event.target.dataset.snippet
    })
      .then(data => console.log(data))
      .catch(err => {
        console.log("caught");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          searchArticles={this.searchArticles}
        />
        <Results articles={this.state.articles} save={this.save} />
      </div>
    );
  }
}

export default Articles;
