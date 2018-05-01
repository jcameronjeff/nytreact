import React from "react";

const SearchForm = props => (

  <div className="searchPanel panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title text-center">Article Search</h3>
    </div>
    <div className="panel-body">
      <form className="articleSearchForm">
        <div className="row my-5">
          <div className='col md-4 sm-4'>

            <h2>Topic</h2>
            <input
              onChange={props.handleInputChange}
              type="text"
              name="topic"
              placeholder="enter a topic"
              className="topic"/>

          </div>
          <div className='col md-4 sm-4'>
            <h2>Start Date</h2>
            <input
              onChange={props.handleInputChange}
              name="startDate"
              placeholder="i.e. YYYYMMDD"
              className="startDate"/>

          </div>
          <div className='col md-4 sm-4'>
            <h2>End Date</h2>
            <input
              onChange={props.handleInputChange}
              name="endDate"
              placeholder="i.e. YYYYMMDD"
              className="endDate"/>

          </div>
        </div>
        <button
          onClick={props.searchArticles}
          type="submit"
          className="btn btn-primary submit">
          Submit
        </button>
      </form>
      <hr/>
    </div>
  </div>
);

export default SearchForm;
