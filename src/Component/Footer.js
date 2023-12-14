import React from "react";

import foot from './images/logo-footer@2x.png'
 function Footer(){
    return(
      <>
      
      <section className="container-fluid bg-primary mt-5 py-5 pb-5 "> 
        
        
        <div className="col-lg-6 col-md-8 col-sm-12  mt-4 p-4 m-auto">
            <h1 className="text-center  mt-1  fs-1 text-white ready pt-2">Are You Ready To Growth Hack Your Business?</h1>
        </div>
        <div className="text-center  pt-3 pb-3">
            <p className="text-white get">WE HAVE IN-DEPTH EXPERIENCE IN OUR CORE SPECIALTIES</p>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-5">
            
        <button className="btn btn-light d-inline-block text-center text-primary px-5 py-3 fs-5 m-auto"> Schedule it Today<i class="fa-solid fa-arrow-right text-primary mt-2 px-2"></i></button>
        </div>

        
     </section>

     <section className="container-fluid  footer-container">
        <section className="container py-5">
            <div className="d-lg-flex d-md-flex">
                <div className="col-lg-5 col-md-4 col-sm-12 mt-3">
                   <img src={foot} alt="" className="img-fluid footer-img"/>
                   <p className="pt-4">
                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                   </p>
                   <p>
                    © 2021 Growthy. All rights reserved.
                   </p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
                   <h4>COMPANY</h4>
                   <p className="pt-4">About Us</p>
                   <p>Our Phlosophy</p>
                   <p>Job Vacancy</p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
                  <h4>SERVICES</h4>
                  <p className="pt-4">Digital Markiting</p>
                  <p> User Acquisition</p>
                  <p>Brand Activation</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 mt-3">
                  <h4>FOLLOW US</h4>
                  <div className="text3">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-google-plus-g"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>

                </div>
            </div>
        </section>

     </section>


      </>

    );
  }
  export default Footer;