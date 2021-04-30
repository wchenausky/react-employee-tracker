import React from 'react'
import "./style.css"
import API from "../../utils/api";

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Picture", "Name", "Email", "Phone", "Nationality"],
        format: "",
        search: "",
        filteredUsers: [{}]
    };

    componentDidMount() {
        this.searchEmployee();
    }
    
    searchEmployee = () => {
        API.getEmployee()
        .then(employees => {
            console.log(employees.data.results);
            const rows = employees.data.results.map(employee => {
                console.log(employee);
                return [<img src={employee.picture.thumbnail} alt={employee.name}></img>, `${employee.name.first} ${employee.name.last}`, employee.email, employee.phone, employee.nat]})

            console.log(rows);
            this.setState({ rows, filteredUsers: employees.data })})
        .catch(err => console.log(err));
    };
