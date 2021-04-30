import React from 'react'
import "./Jumbotron.css"


function Jumbotron() {
    return (
    <div className="jumbotron jumbotron-fluid">
        <h1 className="container">Employee Directory</h1>
        <p className="lead">A list of the current employees. Use the search box to narrow down your results.</p>
    </div>
  );
}

export default Jumbotron
