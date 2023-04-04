import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import { useSelector, useDispatch } from 'react-redux';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
import Header from "./Header";
import HeaderAdmin from "./HeaderAdmin";

const AdminLoaderView = () => {
  const currentId = useParams();
  const [vehicles, setVehicle] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.ref("vehicle_reg").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setVehicle({
          ...snapshot.val(),
        });
      } else {
        setVehicle({});
      }
    });
  }, [id]);
  return (
    <div>
      {

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }

      <div className="container mt-5 w-75">
        {Object.keys(vehicles).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead "><h2>Admin Labour Detail</h2> </div>
                <div className="card-body">
                  <p className="card-text"><img src={vehicles[id].vehiclepic} height={80} width={80} /></p>
                  <p className="card-text"><h6>Labur Name: {vehicles[id].name}</h6></p>
                  <p className="card-text"><h6>Contact number: {vehicles[id].contact}</h6></p>
                  <p className="card-text"><h6>Emergency number: {vehicles[id].emergency}</h6></p>
                  <p className="card-text"><h6>Password: "{vehicles[id].contactid}"</h6></p>
                  <p className="card-text"><h6>Labour Type: {vehicles[id].vehicle}</h6></p>
                  <p className="card-text"><h6>Area Pincode: {vehicles[id].areapincode}</h6></p>
                  <p className="card-text"><h6>Registered Date: {vehicles[id].registereDate}</h6></p>
                  <p className="card-text"><h6>Registered Time: {vehicles[id].registerTime}</h6></p>
                  <p className="card-text"><h6 className="text-warning">Registered by : {vehicles[id].MemberName}</h6></p>
                   <Link to="/adminloaderReport">
                    <button className="btn btn-info">Go Back</button>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminLoaderView;