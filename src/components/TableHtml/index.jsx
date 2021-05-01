import React from "react";


function TableHtml(props) {
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
            <td>{props.employee.picture}</td>
            <td>{props.employee.name}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.nationality}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableHtml;
