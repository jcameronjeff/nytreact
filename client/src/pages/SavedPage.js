import React, { Component } from "react";
import API from "../utils/API";
import SavedArticles from "../components/SavedArticles";

class SavedPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    API.getSaved()
      .then(res => {
        this.setState({ articles: res.data });
      })
      .catch(err => console.log(err));
  }

  handleDelete = e => {
    API.delete(e.target.id)
      .then(res => {
        this.getSaved();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const cardStyle = { minWidth: "300px" };
    return (
      <SavedArticles
        handleDelete={this.handleDelete}
        articles={this.state.articles}
        style={cardStyle}
      />
    );
  }
}

export default SavedPage;
