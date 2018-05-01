import React, {Component} from "react";
import API from "../utils/API";
import SavedArticles from "../components/SavedArticles";

class SavedPage extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    API
      .getSaved()
      .then(res => {
        this.setState({articles: res.data})
      })
      .catch(err => console.log(err))
  }

  handleDelete = (e) => {
    API
      .deleteSavedArticle(e.target.id)
      .then(res => {
        this.loadSaved();
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadSaved = () => {
    API
      .getSavedArticles()
      .then(res => {
        this.setState({articles: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (<SavedArticles handleDelete={this.handleDelete} articles={this.state.articles}/>);
  }
}

export default SavedPage;