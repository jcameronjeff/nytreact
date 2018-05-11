import React from "react";
import { Card } from "mdbreact";

const SavedPanel = props => (
  <div className="savePanel panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title text-center">Saved Articles</h3>
    </div>
    <div className="card-deck m-5">
      {!props.articles.length ? (
        <h1>No results to display</h1>
      ) : (
        props.articles.map((thisArticle, i) => {
          return (
            <Card style={props.cardStyle} key={thisArticle._id}>
              <h1>{thisArticle.title}</h1>
              <p>Date published: {thisArticle.date}</p>
              <p>Date accessed: {thisArticle.dateAccessed}</p>
              <a href={thisArticle.url} target="_blank">
                <p>{thisArticle.url}</p>
              </a>
              <button
                onClick={props.handleDelete}
                id={thisArticle._id}
                className="btn btn-danger"
              >
                Delete
              </button>
            </Card>
          );
        })
      )}
    </div>
  </div>
);

export default SavedPanel;
