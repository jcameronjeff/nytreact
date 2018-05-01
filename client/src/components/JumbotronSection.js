import React from "react";
import {Jumbotron} from 'mdbreact';

const JumbotronSection = (props) => {
  return (
    <div className="container-fluid text-center">
      <Jumbotron className='indigo lighten-5'>
        <h1 className="display-3">New York Times Search</h1>
        <p className="lead">Search and save articles from the NYtimes API</p>
        <hr className="my-2"/>
        <p>This App uses React, React Router, MongoDB and Axios.</p>

      </Jumbotron>
    </div>
  );
};

export default JumbotronSection;