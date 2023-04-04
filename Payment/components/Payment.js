import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addPayment, editPayment } from "../../Main/redux/actions";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Main/css/style.css';
import shortid from "shortid";
import Header from "../../Main/components/Header";
import HeaderAdmin from "../../Main/components/HeaderAdmin";

const Payment = () => {
   const values = {
      payment: "",

   };
   const [initialState, setState] = useState({
      paymentid: '',
      payment: ''

   });

   const paymentid = shortid.generate();


   const { loader: pay } = useSelector((state) => state.pay);
   const { payment } = initialState;
   let dispatch = useDispatch();

   const currentId = useParams();
   const history = useHistory();

   const { id } = currentId;

   useEffect(() => {
      if (isEmpty(id)) {
         setState({ ...values, paymentid });
      } else {
         setState({ ...pay[id] });


      }
   }, [id, pay]);

   const handleInputChange = (e) => {
      let { name, value } = e.target;
      setState({
         ...initialState,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isEmpty(id)) {
         dispatch(addPayment(initialState));
      } else {
         dispatch(editPayment(initialState, id));
      }
      alert("Payment Mode inserted", addPayment());
      // history.push("/Paymentregistration/ReportPayment/");
   };
   return (
      <div>
         {

            global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

         }

         <div className="container p-5 my-5  border text-light border w-75">

            <h1 className="text-center"> Payment Mode</h1>
            <form autoCapitalize="off"
               onSubmit={handleSubmit}
            >

               <div className="mb-3">
                  <label  className="form-label"> Mode </label>
                  <select
                     className="form-select"
                     value={payment}
                     name='payment'
                     onChange={handleInputChange}
                  >
                     <option>---Select---</option>
                     <option> Cash</option>
                     <option> UPI</option>
                     <option> Credit Card</option>
                     <option> Debit Card</option>


                  </select>
               </div>

               <div className='text-center mb-2'>

                  <button
                     type="submit"
                     className="btn btn-warning"
                  > Save</button>
               </div>
            </form>
         </div>

      </div>
   )
}

export default Payment;
