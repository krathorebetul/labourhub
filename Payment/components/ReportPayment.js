import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deletePayment, getPayment } from "../../Main/redux/actions";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../css/reportpay.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const ReportPayment = () => {
  const { loader: pay } = useSelector(state => state.pay);


  let dispatch = useDispatch();


  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deletePayment(id));
    }
  };
  return (

    <div>
      {
        global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />
      }


      <div className="container mt-5 ">
        <div className="jumbotron">
          <h1 className="text-center m-5  text-light">
            Payment  Mode</h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-bordered table-striped paytable">
              <thead className="thead-dark">
                <tr className="text-center ">
                  <th scope="col" className="text-light payth">No.</th>
                  <th scope="col" className="text-light payth">Mode</th>
                  <th scope="col" className="text-light payth">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(pay).map((id, index) => {
                  return (
                    <tr key={id} className="text-center ">
                      <td scope="row" className="text-light paytd">{index + 1}</td>
                      <td className="text-light paytd">{pay[id].payment}</td>
                      <td className="text-light paytd">{pay[id].paymentid}</td>
                      <td className="text-light paytd">
                        <Link to={`/Paymentregistration/RegistrationPayment/update/${id}`}>
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
                        <Link to={`/Paymentregistration/ReportPayment/view/${id}`}>
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
  )
}

export default ReportPayment;
