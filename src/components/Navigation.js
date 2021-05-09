import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends React.Component{
	render() {
		return(
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">SRC</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to="/" className="nav-link">Home</Link>
						<Link to="/create" className="nav-link">Create</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Navigation;