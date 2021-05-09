import React from 'react';
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends React.Component{

	state = {
		employees: []
	}

	componentDidMount() {
		EmployeeService.getEmployees().then((res) => {
			this.setState({
				employees: res.data
			})
		});
	}

	render() {
		return(
			<div className="mt-5">
				<h3 className="text-center">Employees List</h3>
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
						{
							this.state.employees.map(employee =>
							 <tr>
								 <td>{ employee.firstName }</td>
								 <td>{ employee.lastName }</td>
								 <td>{ employee.emailId }</td>
								 <td>#</td>
							 </tr>
							)
						}
						</tbody>
					</table>
				</div>
			</div>
		)
	}

}

export default ListEmployeeComponent;