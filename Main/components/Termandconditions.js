import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import Header from './Header';
import "../css/style.css";

const Termandconditions = () => {
    return (
        <>
            <div>
                {

                    global.registered_member_contact === '6261257241' ? <HeaderAdmin /> : <Header />

                }
            </div>

            <div >
                <div>
                    <h1 className='text-center m-4'>Term's And Conditions</h1>
                </div>

                <div>
                    <h4 className='m-4'>WELCOME TO LABOURHUBs AND THANK YOU FOR REGISTERING WITH US IT IS IMPORTANT THAT YOU
                        REVIEW THIS AGREEMENT BECAUSE, BY ACCESSING THIS APPLICATION, BY PLACING AN BOOKING WITH
                        US BY TELEPHONE, EMAIL, OR THROUGH THIS APP, YOU ARE AGREEING TO THE TERMS AND CONDITIONS
                        THAT GOVERN THE USE OF THE APPLICATION AND THE TERMS UPON WHICH WE AGREE TO DELIVER TO YOU.
                    </h4>
                </div>

                <div>
                    <p className='m-4'>
                        By placing a booking with us by telephone, email, or online, you agree to the terms of this
                        Agreement (the “Agreement”) which shall cover the terms of orders to you and your use of our
                        application. This Agreement is between you and LabourHubs, (the “Company” or “LabourHubs”)
                        that states the terms and conditions under which you may use the Application and receive booking
                        from us. MILDSTONE SOFTWARE PVT. LTD. COMPANY is the owner of the following trademarks: LabourHubs, https://labourportal-2809d.web.app  .
                      The App ("LabourHubs") is operated by MildStone Software Pvt. Ltd. Company having its registered office
                        located in R-56, 1st Floor, Beside the Rajbhog Restaurant, M.P. Nagar, Zone-II, Bhopal, India (462011).
                    </p>
                </div>

                <div>
                    <p className='m-4'>
                        The LabourHubs App offers a different categories of Labour . Along with the wide range of
                        Labour  are available for providing services to you,
                        LabourHubs also offers in future labour services for digital marketing, payments, technology, and customer support ("Services").
                        Labour information contained on the Application or in our advertisements is offered as a
                        convenience and should not be deemed as accurate. Information contained on the
                        Application or in our advertisements should not be used by you to evaluate labour information.
                        The Company assumes no responsibility for such information.
                         The Services, access, and use of LabourHubs by the labour for the purpose of serving information and
                        services to LabourHub's end users are governed by these terms and conditions of labours (the "Terms")
                        ("Customer"). Before using the Services, carefully read these Terms.

                    </p>
                </div>

                <div>
                    <h2 className='text-center m-4'>Term's And Conditions For Customer</h2>
                </div>

                <div>
                    <p className='m-4'>
                         All the labour’ Images are uploaded by the Labour (its may be an imaginary image) there is no responsibilities of LabourHubs App.
                         LabourHubs is not providing the GPS Navigation Facility. Customer have to communicate with the labour for booking.
                        Notices
                         We may give notice to you of a change in this Agreement and any other matter through a general posting on the LabourHubs Web Portal, or other means determined by the Company.
                    </p>
                </div>
                <div>
                    <h2 className='text-center m-4'>Changes to This Privacy Policy</h2>
                </div>

                <div>
                    <p className='m-4'>
                    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. 
                    We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </div>
            </div>


        </>
    )
}
export default Termandconditions;