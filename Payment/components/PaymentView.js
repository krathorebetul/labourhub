import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../../firebase";
import "../../Main/css/style.css";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const PaymentView = () => {
  const currentId = useParams();
  const [Payment, setPayment] = useState({});
  const { id } = currentId;

  useEffect(() => {
    firebaseDb.ref("payment").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setPayment({
          ...snapshot.val(),
        });
      } else {
        setPayment({});
      }
    });
  }, [id]);
  return (
    <div>
      {

        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

      }

      <div className="container mt-5 w-75">
        {Object.keys(Payment).map((userId) => {
          if (userId === id) {
            return (
              <div className="card text-center contain text-light">
                <div className="card-header lead">Payment Detail</div>
                <div className="card-body">
                  <p className="card-text">vehicle : {Payment[id].vehicle}</p>
                  <p className="card-text">state : {Payment[id].state}</p>
                  <Link to="/vehicletype/ReportVehicleType">
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

export default PaymentView;