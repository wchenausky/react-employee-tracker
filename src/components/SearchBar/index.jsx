import React from "react";


function Search(props) {
  return (
    <form>
      <div className="input-group mb-4">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="Search"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
