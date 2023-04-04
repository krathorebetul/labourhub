import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVehicle, getVehicle } from "../redux/actions";
import Header from "./Header";
import HeaderAdmin from "./HeaderAdmin";
import { Link } from "react-router-dom";
import "../css/AdminLoaderReport.css";
import firebaseDb from "../../firebase";


const AdminLoaderReport = () => {

  const { loader: vehicles } = useSelector((state) => state.vehicles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicle());

  }, [dispatch]);


  const onDelete = (id) => {
    if (window.confirm("you confirm to delete Loader Detail")) {
      firebaseDb.ref(`vehicle_reg/${id}`).remove((err) => {
        if (err) {
          alert("Loader Details not deleted successfully");
        } else {
          alert("Loader Details deleted successfully");
          dispatch(getVehicle());
        }

      })
    }

  }

  return (
    <>

      <div>
        {

          <HeaderAdmin />

        }
        <div className="container-fluid mt-5 ">
          <div className="jumbotron">
            <h1 className="text-center m-5 text-light">
              Admin Labour Report
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <table className=".admintable table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr className="text-center">
                    <th scope="col" className="adminth text-light">No.</th>
                    <th scope="col" className="adminth text-light">Labour pic.</th>
                    <th scope="col" className="adminth text-light">Labour Name</th>
                    <th scope="col" className="adminth text-light">Contact No.</th>
                    <th scope="col" className="adminth text-light">Emergency No.</th>
                    <th scope="col" className="adminth text-light">Password</th>
                    <th scope="col" className="adminth text-light">Labour type</th>
                    <th scope="col" className="adminth text-light">AreaPincode</th>
                    <th scope="col" className="adminth text-light">Registred Date </th>
                    <th scope="col" className="adminth text-light">Registred Time</th>
                    <th scope="col" className="adminth text-light bg-warning">Registred By</th>
                   
                   
                    <th scope="col" className="adminth text-light">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(vehicles).map((id, index) => {
                    return (
                      <tr key={id} className="text-center">
                        <td scope="row" className="admintd text-light">{index + 1}</td>
                        <td className="admintd text-light"><img src={vehicles[id].vehiclepic} height={80} width={80} /></td>
                        <td className="admintd text-light">{vehicles[id].name}</td>
                        <td className="admintd text-light">{vehicles[id].contact}</td>
                        <td className="admintd text-light">{vehicles[id].emergency}</td>
                        <td className="admintd text-light">{vehicles[id].contactid}</td>
                        <td className="admintd text-light">{vehicles[id].vehicle}</td>
                        <td className="admintd text-light">{vehicles[id].areapincode}</td>
                        <td className="admintd text-light">{vehicles[id].registereDate}</td>
                        <td className="admintd text-light">{vehicles[id].registerTime}</td>
                        <td className="admintd text-warning">{vehicles[id].MemberName}</td>
                      
                        <td className="admintd text-light">
                          <Link to={`/vehicleRegistration/Registration/update/${id}` || {}}>
                            <p className="btn text-primary">
                              <i className="bi bi-pencil" />
                            </p>
                          </Link>

                          <p
                            className="btn text-danger"
                            onClick={() => onDelete(id)}
                          >
                            <i className="bi bi-trash" />

                          </p>
                          <Link to={`/adminloaderview/${id}`}>
                            <p className="btn text-info">
                              <i className="bi bi-eye" />

                            </p>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default AdminLoaderReport;