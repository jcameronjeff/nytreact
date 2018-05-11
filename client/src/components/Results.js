import React from "react";
import { Card } from "mdbreact";

const Results = props => (
  <section>
    <div className="searchPanel panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title text-center">Article Results</h3>
      </div>
      <div className="card-deck">
        {!props.articles.length ? (
          <h1>Enter a Search to Begin</h1>
        ) : (
          props.articles.map((thisArticle, i) => {
            while (i < 20) {
              return (
                <Card
                  id={"article" + i}
                  key={thisArticle._id}
                  className="article"
                  style={props.cardStyle}
                >
                  <h1 className="card-title" name="title">
                    {thisArticle.headline.main}
                  </h1>
                  <h3 name="date">{thisArticle.pub_date}</h3>
                  <h4 name="snippet">{thisArticle.snippet}</h4>
                  <a name="url" target="_blank" href={thisArticle.web_url}>
                    <button className="btn btn-primary">Read More</button>
                  </a>
                  <button
                    data-title={thisArticle.headline.main}
                    data-date={thisArticle.pub_date}
                    data-url={thisArticle.web_url}
                    data-snippet={thisArticle.snippet}
                    type="submit"
                    name="submit"
                    className="articleSave btn btn-success pull-right"
                    onClick={props.save}
                  >
                    Save Article
                  </button>
                </Card>
              );
            }
          })
        )}
      </div>
    </div>
  </section>
);

export default Results;
