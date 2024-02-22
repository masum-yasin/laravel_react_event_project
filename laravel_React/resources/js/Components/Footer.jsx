import React from 'react';

const Footer = () => {
    return (
        <>
         {/* footer starts */}
  <footer className="pt-12 pb-7" style={{backgroundImage: 'url(frontend/assets/images/pexels-sascha.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5 pe-lg-4">
          <div className="footer-about">
            <img src="frontend/assets/images/logo-white.png" alt />
            <p className="mt-3 mb-3 white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque
              iaculis molestie sagittis maecenas aenean eget molestie sagittis.
            </p>
            <div className="social-links">
              <ul>
                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-5">
          <div className="footer-links">
            <h4 className="white mb-4">Quick link</h4>
            <ul className="list">
              <li className="pb-2"><a href="about-us.html">About Us</a></li>
              <li className="pb-2"><a href="about-us.html">Services</a></li>
              <li className="pb-2"><a href="about-us.html">Speakers</a></li>
              <li className="pb-2"><a href="about-us.html">Schedule</a></li>
              <li className="pb-2"><a href="about-us.html">Ticket Pricing</a></li>
              <li><a href="#about-us.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <div className="footer-links">
            <h4 className="white mb-4">get In Touch</h4>
            <p className="mb-3">1616 Broadway NY, New York United States of America</p>
            <div className="footer-contact d-flex align-items-center mb-3">
              <i className="fa fa-phone white fs-4" />
              <div className="footer-contact-content ps-3">
                <h6 className="white mb-0">955 444 1245</h6>
                <small className="white">For Information</small>
              </div>
            </div>
            <div className="footer-contact d-flex align-items-center">
              <i className="fa fa-envelope white fs-4" />
              <div className="footer-contact-content ps-3">
                <h6 className="white mb-0">info@eventiz.com</h6>
                <small className="white">Email Address</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <div className="footer-links">
            <h4 className="white mb-4">Subscribe To Our Newsletter</h4>
            <div className="newsletter-form ">
              <p className="mb-3">New subscribers get 10% off your next order</p>
              <form action="#" method="get" acceptCharset="utf-8" className="border-0">
                <input type="text" placeholder="Email Address" className="w-100 mb-2" />
                <button className="nir-btn w-100">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-overlay opacity-90" />
  </footer>
  <div className="footer-copyright bg-theme1">
    <div className="container">
      <p className="m-0 white text-center py-3">Copyright ©2023 Eventiz. All Rights Reserved Copyright</p>
    </div>
  </div>
  {/* footer ends */}
  {/* Back to top start */}
  <div id="back-to-top">
    <a href="#" />
  </div>
  {/* Back to top ends */}
  {/* search popup */}
  <div id="search1">
    <button type="button" className="close">×</button>
    <form>
      <input type="search" defaultValue placeholder="type keyword(s) here" />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  </div>   
        </>
    );
};

export default Footer;