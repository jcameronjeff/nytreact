import React from "react";
import {ListGroup, ListGroupItem} from "mdbreact";

const Results = props => (
  <section>
    <div className="searchPanel panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title text-center">Article Results</h3>
      </div>
      <ListGroup>
        {!props.articles.length
          ? (
            <h1>Enter a Search to Begin</h1>
          )
          : (props.articles.map((thisArticle, i) => {
            while (i < 20) {
              return (
                <ListGroupItem id={"article" + i} key={thisArticle._id} className="article">
                  <h1 name="title">{thisArticle.headline.main}</h1>
                  <p name="date">{thisArticle.pub_date}</p>
                  <p name="snippet">{thisArticle.snippet}</p>
                  <a name="url" target="_blank" href={thisArticle.web_url}>
                    <button className="btn btn-primary">Read More</button>
                  </a>
                  <button
                    data-title={thisArticle.headline.main}
                    data-date={thisArticle.pub_date}
                    data-url={thisArticle.web_url}
                    type="submit"
                    name="submit"
                    className="articleSave btn btn-success pull-right"
                    onClick={props.save}>
                    Save Article
                  </button>
                </ListGroupItem>
              );
            }
          }))}
      </ListGroup>
    </div>
  </section>
);

export default Results;
