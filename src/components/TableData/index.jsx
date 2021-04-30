import React, { Component } from "react";
import TableHtml from "../TableHtml";
import API from "../../utils/api";

class TableData extends Component {
  state = {
    rows: [[]],
    headings: ["Picture", "Name", "Email", "Phone", "Nationality"],
    format: "",
    search: "",
    filteredUsers: [{}],
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.getEmployee()
      .then((employees) => {
        console.log(employees.data.results);
        const rows = employees.data.results.map((employee) => {
          console.log(employee);
          return [
            <img src={employee.picture.thumbnail} alt={employee.name}></img>,
            `${employee.name.first} ${employee.name.last}`,
            employee.email,
            employee.phone,
            employee.nat,
          ];
        });

        console.log(rows);
        this.setState({ rows, filteredUsers: employees.data });
      })
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <TableHtml
        headings={this.state.headings}
        rows={this.state.rows}
        format={this.state.format}
      />
    );
  }
}

export default TableData;
