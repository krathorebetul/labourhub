import React from "react";
import "../css/header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../image/logo.png';
import { useDispatch } from "react-redux";
import { getArea, getCity, getState, getVehicle, getVehicleType } from "../redux/actions";


const Header = () => {
  


  return (

    <Navbar collapseOnSelect expand="lg" bg="warning" className="header">
      <img
          className="rounded-cricle border border-light border-1 m-2" 
          src={logo} alt="logo.jpng" 
          style={{ height: "70px", weight: "80px", borderRadius: "75px" }} 
      />

      <Navbar.Brand>
       LabourHubs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">


        <Nav className="mr-auto">

          <NavDropdown title="Member Loader Report" id="collasible-nav-dropdown">
          <Link to="/memberloaderReport" className="btn btn-dark">Labour Report</Link>
          
          </NavDropdown>
        </Nav>

  <Nav className="mr-auto">

          <NavDropdown title="Loader Registration" id="collasible-nav-dropdown">
            <NavDropdown.Item ><Link to="/vehicleRegistration/Registration" className="btn btn-dark">Registration</Link>
            </NavDropdown.Item>


          </NavDropdown>


          <Nav  id="collasible-nav-dropdown">
                        <Link to ="/terms&conditions" className=" btn font-weight-bold">Terms&Conditons</Link>
         </Nav>

          <Link to="/" className="btn btn-dark">Logout</Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
