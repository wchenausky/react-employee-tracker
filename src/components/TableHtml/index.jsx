import React from "react";
import "./style.css";

function TableHtml() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee.picture}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.nationality}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableHtml;
