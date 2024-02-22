import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const Home = (props) => {
    const { eventtype , categories } = usePage().props
    console.log(categories,eventtype);
    return (
        <>
            <Header></Header>
          <div>
  {/* Preloader */}
  {/* <div id="preloader">
    <div id="status" />
  </div> */}
  {/* Preloader Ends */}
  {/* header starts */}
  
  {/* header ends */}
  {/* banner starts */}
  <section className="banner pt-10 pb-0 overflow-hidden" style={{backgroundImage: 'url(frontend/assets/images/banner_img.png)'}}>
    <div className="container">
      <div className="banner-in pt-6">
        <div className="row align-items-end">
          <div className="col-lg-7 mb-10">
            <div className="banner-content text-lg-start text-center">
              <h4 className="theme mb-0">Big Event 2022</h4>
              <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
                <h1 className="ah-headline white">
                  <span>World Biggest 2023</span>
                  <span className="ah-words-wrapper white">
                    <b className="is-visible textcap">Conference</b>
                    <b>Conference</b>
                  </span>
                </h1>
              </div>
              <p className="mb-0 white">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="banner-image" style={{backgroundImage: 'url(frontend/assets/images/manbg.png)'}}>
              <img src="frontend/assets/images/banner_img.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="color-overlay" />
  </section>
  {/* banner ends */}
  {/* coming counter starts */}
  <section className="coming-countermain p-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-lg-offset-5">
          <div className="coming-counter d-md-flex align-items-center justify-content-between p-4 py-5 text-md-start text-center" data-date="2023-12-28 00:00:00">
            <div className="counter-box"><span className="days" /><br /> Days</div>
            <div className="counter-box"><span className="hours" /><br /> Hours</div>
            <div className="counter-box"><span className="minutes" /><br /> Minutes</div>
            <div className="counter-box"><span className="seconds" /><br /> Seconds</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* coming counter Ends */}
  {/* about-us starts */}
  <section className="about-us about-features pt-12 pb-8" style={{backgroundImage: 'url(frontend/assets/images/testimonial-1.png)'}}>
    <div className="container">
      <div className="about-image-box">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-7 pe-lg-4">
            <div className="about-features" style={{backgroundImage: 'url(frontend/assets/images/contentbg.png)'}}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="features-infobox border-all p-5 box-shadow bg-white text-center mb-4">
                    <div className="infobox-icon mb-2">
                      <i className="fa fa-users fs-1 theme" />
                    </div>
                    <div className="box-body">
                      <h4 className="infobox-title">Event Conferences </h4>
                      <p className="mb-2">Duis aute irure dolor in reprehenderit </p>
                      <a href="#" className="theme">Learn More <i className="fa fa-angle-right " /></a>
                    </div>
                  </div>
                  <div className="features-infobox border-all p-5 box-shadow bg-white text-center mb-4">
                    <div className="infobox-icon mb-2">
                      <i className="fa fa-flag fs-1 theme" />
                    </div>
                    <div className="box-body">
                      <h4 className="infobox-title">Culture Leadership</h4>
                      <p className="mb-2">Duis aute irure dolor in reprehenderit </p>
                      <a href="#" className="theme">Learn More <i className="fa fa-angle-right " /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="features-infobox border-all p-5 box-shadow bg-white text-center mb-4">
                    <div className="infobox-icon mb-2">
                      <i className="fa fa-gear fs-1 theme" />
                    </div>
                    <div className="box-body">
                      <h4 className="infobox-title">Digital Marketing</h4>
                      <p className="mb-2">Duis aute irure dolor in reprehenderit </p>
                      <a href="#" className="theme">Learn More <i className="fa fa-angle-right " /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-4">
            <div className="about-content text-center text-lg-start mb-4">
              <h4 className="h-title">Events</h4>
              <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
                <h2 className="ah-headline">
                  <span>Why You Should Join The</span>
                  <span className="ah-words-wrapper white theme">
                    <b className="is-visible textcap">Events?</b>
                    <b>Events?</b>
                  </span>
                </h2>
              </div>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ip suspendisse ultrices gravida. Risus commodo</p>
              <a href="event-detail.html" className="nir-btn">Join Event <i className="fa fa-angle-right " /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about-us ends */}
  {/* about-us starts */}
  <section className="about-us about-before pt-12">
    <div className="container">
      <div className="about-image-box">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-5 pe-4">
            <div className="about-content section-title text-lg-start text-center mb-4">
              <h3 className="h-title">About</h3>
              <h4 className="theme"> Conference Organisation</h4>
              <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
                <h2 className="ah-headline">
                  <span>Conference, Seminars &amp;</span>
                  <span className="ah-words-wrapper white theme">
                    <b className="is-visible textcap">Events</b>
                    <b>Events</b>
                  </span>
                </h2>
              </div>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ip suspendisse ultrices gravida. Risus commodo</p>
              <a href="about.html" className="nir-btn">Discover Now <i className="fa fa-angle-right " /></a>
            </div>
          </div>
          <div className="col-lg-7 ps-4">
            <div className="about-features" style={{backgroundImage: 'url(frontend/assets/images/contentbg.png)'}}>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4">
                  <img src="frontend/assets/images/about/busi-3.jpg" alt />
                </div>
                <div className="col-lg-6">
                  <img src="frontend/assets/images/about/busi-1.jpg" alt className="mb-4" />
                  <img src="frontend/assets/images/about/busi-2.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about-us ends */}
  {/* Counter Starts*/}
  <section className="counter-section bg-white pb-6">
    <div className="container">
      <div className="counter">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="counter-item">
              <div className="counter-content text-center">
                <h2 className="value mb-0">520</h2>
                <span className="m-0">Daily Visitors</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="counter-item">
              <div className="counter-content text-center">
                <h2 className="value mb-0">120</h2>
                <span className="m-0">Delivery Monthly</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="counter-item">
              <div className="counter-content text-center">
                <h2 className="value mb-0 ">100</h2>
                <span className="m-0">Positive Feedback</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="counter-item">
              <div className="counter-content text-center">
                <h2 className="value mb-0">250</h2>
                <span className="m-0">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Counter ends*/}
  {/* event-schedule starts */}
  <section className="event-schedule pb-8 about-after">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-4">
          <div className="section-title mb-5 text-center text-lg-start">
            <h3 className="h-title">Event Booking</h3>
            <h4 className="theme">Event Conference Organisation</h4>
            <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
              <h2 className="ah-headline mb-0">
                <span>List Of Planned Events Thay Are </span>
                <span className="ah-words-wrapper white theme">
                  <b className="is-visible textcap">Expected</b>
                  <b>Expected</b>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="schedule-item">
        <div className="about-image-box bg-white mb-4">
  {
    eventtype.map((item)=>(

          <div className="row">
            <div className="col-lg-3 d-flex">
              <div className="about-content text-center text-lg-start p-4 py-8 ">
               <img src={"uploads/" + item.image} alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="schedule-content text-lg-start text-center py-4">
                <h4 className="mb-1"> Introduce the Event</h4>
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <ul className="schedule-items d-flex justify-content-lg-start justify-content-center">
                  <li className="d-flex align-items-center me-4">
                    <i className="icon-location-pin theme pe-1" />
                    <span className="theme1">Exploration Hall</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="icon-location-pin theme pe-1" />
                    <span className="theme1">Hall 01</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="schedule-speaker d-lg-flex p-4 align-items-center text-center text-lg-start w-100 border-start">
                <img src="frontend/assets/images/reviewer/1.jpg" alt className="rounded-circle img-circle" />
                <div className="speaker-content ms-3">
                  <h6 className="mb-0 theme">Jesus Holland</h6>
                  <small>Host &amp; Speaker</small>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      
        
        
      </div>
    </div>
  </section>
  {/* event-schedule ends */}
  {/* our teams starts */}
  <section className="event-team" style={{backgroundImage: 'url(frontend/assets/images/manbg.png)'}}>
    <div className="container">
      <div className="section-title mb-5 w-75 mx-auto text-center">
        <h3 className="h-title">Speakers</h3>
        <h4 className="theme">Featured Speaker</h4>
        <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
          <h2 className="ah-headline mb-0">
            <span>Experience Speaker With </span>
            <span className="ah-words-wrapper white theme">
              <b className="is-visible textcap">Knowledge</b>
              <b>Knowledge</b>
            </span>
          </h2>
        </div>
      </div>
      <div className="team-main">
        <div className="row align-items-center">
          <div className="col-lg-3 mb-4">
            <div className="team-list position-relative">
              <div className="team-image border-all p-2 bg-white">
                <img src="frontend/assets/images/team/img6.jpg" alt="team" />
              </div>
              <div className="team-content text-center p-4">
                <h4 className="mb-0 theme">Gerardo Ambrose </h4>
                <p className="mb-3 white">Senior Agent</p>
                <div className="social-links">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="team-list position-relative mb-4">
              <div className="team-image border-all p-2 bg-white">
                <img src="frontend/assets/images/team/img2.jpg" alt="team" />
              </div>
              <div className="team-content text-center p-4">
                <h4 className="mb-0 theme">Horke Pels</h4>
                <p className="mb-3 white">Head Officer</p>
                <div className="social-links">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="overlay" />
            </div>
            <div className="team-list position-relative">
              <div className="team-image border-all p-2 bg-white">
                <img src="frontend/assets/images/team/img3.jpg" alt="team" />
              </div>
              <div className="team-content text-center p-4">
                <h4 className="mb-0 theme">Horke Pels</h4>
                <p className="mb-3 white">Head Officer</p>
                <div className="social-links">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="team-list position-relative mb-4">
              <div className="team-image border-all p-2 bg-white">
                <img src="frontend/assets/images/team/img4.jpg" alt="team" />
              </div>
              <div className="team-content text-center p-4">
                <h4 className="mb-0 theme">Horke Pels</h4>
                <p className="mb-3 white">Head Officer</p>
                <div className="social-links">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="overlay" />
            </div>
            <div className="team-list position-relative">
              <div className="team-image border-all p-2 bg-white">
                <img src="frontend/assets/images/team/img1.jpg" alt="team" />
              </div>
              <div className="team-content text-center p-4">
                <h4 className="mb-0 theme">Horke Pels</h4>
                <p className="mb-3 white">Head Officer</p>
                <div className="social-links">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="team-list position-relative">
              <div className="team-image border-all p-2 bg-white">
                <img src="frontend/assets/images/team/img5.jpg" alt="team" />
              </div>
              <div className="team-content text-center p-4">
                <h4 className="mb-0 theme">Horke Pels</h4>
                <p className="mb-3 white">Head Officer</p>
                <div className="social-links">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="overlay" />
            </div>
          </div>
        </div>
        <div className="speaker-btn text-center">
          <a href="speaker-detail.html" className="nir-btn">View All Speakers <i className="fa fa-angle-right " /></a>
        </div>
      </div>
    </div>
    <div className="white-overlay" />
  </section>
  {/* our teams Ends */}
  {/* event-pricing starts */}
  <section className="event-pricing bg-grey pb-6">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-4">
          <div className="section-title text-lg-start text-center mb-5">
            <h3 className="h-title">Pricing</h3>
            <h4 className="theme">Pricing Tablen</h4>
            <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
              <h2 className="ah-headline mb-0">
                <span>Explore Flexible Our Pricing</span>
                <span className="ah-words-wrapper white theme">
                  <b className="is-visible textcap">Plans</b>
                  <b>Plans</b>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-main">
        <div className="row">
          <div className="col-lg-4 mb-6">
            <div className="pricing-item text-center p-5 bg-white position-relative">
              <div className="pricing-top" />
              <h3 className="mb-0">Basic Ticket</h3>
              <p className="mb-0">Standard Package </p>
              <div className="pricing-price py-4">
                <h2 className="mb-0 theme d-flex align-items-start justify-content-center lh-1">
                  <span className="pricing-currency theme">$</span> 39. <span className="fs-5">99</span></h2>
                <p className="mb-0">Person</p>
              </div>
              <ul className="pricing-features-list mb-4">
                <li className="d-block border-b pb-2 mb-2">Second Balcony Seat </li>
                <li className="d-block border-b pb-2 mb-2">Snack &amp; Softdrink</li>
                <li className="d-block border-b pb-2 mb-2">Certificates</li>
                <li className="d-block">Private Access</li>
              </ul>
              <div className="pricing-btn mb-1">
                <a href="#" className="nir-btn">Purchase</a>
              </div>
              <small>*Please read our term and condition before order ticket</small>
            </div>
          </div>
          <div className="col-lg-4 mb-6">
            <div className="pricing-item text-center p-5 bg-theme1 position-relative">
              <div className="pricing-top" style={{backgroundImage: 'url(frontend/assets/images/pricebox-topblue.png)'}} />
              <h3 className="mb-0 white">Silver Ticket</h3>
              <p className="mb-0 white">Pro Package </p>
              <div className="pricing-price py-4">
                <h2 className="mb-0 theme d-flex align-items-start justify-content-center lh-1">
                  <span className="pricing-currency theme">$</span> 59. <span className="fs-5">99</span></h2>
                <p className="mb-0 white">Person</p>
              </div>
              <ul className="pricing-features-list mb-4">
                <li className="d-block border-b pb-2 mb-2 white">Second Balcony Seat </li>
                <li className="d-block border-b pb-2 mb-2 white">Snack &amp; Softdrink</li>
                <li className="d-block border-b pb-2 mb-2 white">Certificates</li>
                <li className="d-block border-b pb-2 mb-2 white">Printed Materials</li>
                <li className="d-block white">Private Access</li>
              </ul>
              <div className="pricing-btn mb-1">
                <a href="#" className="nir-btn">Purchase</a>
              </div>
              <small className=" white">*Please read our term and condition before order ticket</small>
            </div>
          </div>
          <div className="col-lg-4 mb-6">
            <div className="pricing-item text-center p-5 bg-white position-relative">
              <div className="pricing-top" />
              <h3 className="mb-0">Gold Ticket</h3>
              <p className="mb-0">Enterprise Package </p>
              <div className="pricing-price py-4">
                <h2 className="mb-0 theme d-flex align-items-start justify-content-center lh-1">
                  <span className="pricing-currency theme">$</span> 199. <span className="fs-5">99</span></h2>
                <p className="mb-0">Person</p>
              </div>
              <ul className="pricing-features-list mb-4">
                <li className="d-block border-b pb-2 mb-2">Second Balcony Seat </li>
                <li className="d-block border-b pb-2 mb-2">Snack &amp; Softdrink</li>
                <li className="d-block border-b pb-2 mb-2">Certificates</li>
                <li className="d-block">Private Access</li>
              </ul>
              <div className="pricing-btn mb-1">
                <a href="#" className="nir-btn">Purchase</a>
              </div>
              <small>*Please read our term and condition before order ticket</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* event-pricing ends */}
  {/* event-calltoaction starts */}
  <section className="event-calltoaction pb-0" style={{backgroundImage: 'url(frontend/assets/images/pexels-sascha.jpg)'}}>
    <div className="container">
      <div className="section-title mb-5 w-60 mx-auto text-center">
        <h3 className="h-title theme-stroke">Expo</h3>
        <h4 className="theme">Join Expo 2023</h4>
        <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
          <h2 className="ah-headline mb-0">
            <span className="white">Join Us At 20th Hero Nada Expo </span>
            <span className="ah-words-wrapper white theme">
              <b className="is-visible textcap">2023</b>
              <b>2023</b>
            </span>
          </h2>
        </div>
      </div>
      <div className="event-expo w-60 mx-auto mb-7">
        <div className="event-expo-item mb-4" style={{backgroundColor: '#FFFFFF1F'}}>
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3">
              <div className="expo-icon p-4 py-5 bg-theme text-center">
                <i className="fa fa-calendar white fs-1" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <p className="mb-0 white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
            </div>
          </div>
        </div>
        <div className="event-expo-item" style={{backgroundColor: '#FFFFFF1F'}}>
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3">
              <div className="expo-icon p-4 py-5 bg-white text-center">
                <i className="fa fa-bar-chart theme fs-1" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <p className="mb-0 white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
            </div>
          </div>
        </div>
      </div>
      <div className="video-expo w-75 mx-auto position-relative mb-minus">
        <img src="frontend/assets/images/blog/blog1.jpg" alt className="p-2 bg-white" />
        <div className="video-button text-center position-absolute top-50 start-50 z-index2 translate-50">
          <div className="call-button text-center">
            <button type="button" className="play-btn js-video-button" data-video-id={152879427} data-channel="vimeo">
              <i className="fa fa-play bg-blue" />
            </button>
          </div>
          <div className="video-figure" />
        </div>
      </div>
    </div>
    <div className="theme-overlay" />
  </section>
  {/* event-calltoaction ends */}
  {/* event-gallery starts */}
  <section className="event-gallery pb-0 pt-18" style={{backgroundImage: 'url(frontend/assets/images/speaker_bg.png)'}}>
    <div className="container">
      <div className="section-title mb-5 w-75 mx-auto text-center">
        <h3 className="h-title">Gallery</h3>
        <h4 className="theme">Event Gallery</h4>
        <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
          <h2 className="ah-headline mb-0">
            <span>Beautiful Snapshot Of Recent </span>
            <span className="ah-words-wrapper white theme">
              <b className="is-visible textcap">Events</b>
              <b>Events</b>
            </span>
          </h2>
        </div>
      </div>
      <div className="event-gallerystart mb-minus">
        <div className="row gallery-main">
          <div className="col-lg-4 col-md-6 mansonry-item p-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <a href="frontend/assets/images/blog/blog1.jpg" data-lightbox="gallery" data-title="Title">
                  <img src="frontend/assets/images/blog/blog1.jpg" alt="image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mansonry-item p-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <a href="frontend/assets/images/blog/blog2.jpg" data-lightbox="gallery" data-title="Title">
                  <img src="frontend/assets/images/blog/blog2.jpg" alt="image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mansonry-item p-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <a href="frontend/assets/images/blog/blog3.jpg" data-lightbox="gallery" data-title="Title">
                  <img src="frontend/assets/images/blog/blog3.jpg" alt="image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mansonry-item p-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <a href="frontend/assets/images/blog/blog4.jpg" data-lightbox="gallery" data-title="Title">
                  <img src="frontend/assets/images/blog/blog4.jpg" alt="image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mansonry-item p-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <a href="frontend/assets/images/blog/blog3.jpg" data-lightbox="gallery" data-title="Title">
                  <img src="frontend/assets/images/blog/blog3.jpg" alt="image" />
                </a>
                <div className="overlay" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mansonry-item p-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <a href="frontend/assets/images/blog/blog4.jpg" data-lightbox="gallery" data-title="Title">
                  <img src="frontend/assets/images/blog/blog4.jpg" alt="image" />
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
  {/* event-pricing ends */}
  {/* testomonial start */}
  <section className="event-testimonial pt-18 pb-7 bg-grey">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-4">
          <div className="section-title text-center text-lg-start">
            <h3 className="h-title">Testimonials</h3>
            <h4 className="theme">Our Testimonials</h4>
            <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
              <h2 className="ah-headline mb-0">
                <span>What Peoples's Says About</span>
                <span className="ah-words-wrapper white theme">
                  <b className="is-visible textcap">Eventiz</b>
                  <b>Eventiz</b>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-7 pe-lg-5">
          <div className="row review-slider">
            <div className="col-sm-4 item">
              <div className="testimonial-item bg-white p-5">
                <div className="testi-details mb-4">
                  <i className="fa fa-quote-left fs-1" />
                  <p className="m-0">Lorem Ipsum is simply dummy
                    text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum
                    has been the industry's standard dummy hic et quidem. Dignissimos maxime velit
                    unde inventore quasi vero dolorem.</p>
                </div>
                <div className="author-info d-flex align-items-center">
                  <img src="frontend/assets/images/reviewer/1.jpg" alt />
                  <div className="author-title ms-3">
                    <h5 className="m-0 theme">Jared Erondu</h5>
                    <span>Supervisor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 item">
              <div className="testimonial-item bg-white p-5">
                <div className="testi-details mb-4">
                  <i className="fa fa-quote-left me-2 fs-1" />
                  <p className="m-0">Lorem Ipsum is simply dummy
                    text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum
                    has been the industry's standard dummy hic et quidem. Dignissimos maxime velit
                    unde inventore quasi vero dolorem.</p>
                </div>
                <div className="author-info d-flex align-items-center">
                  <img src="frontend/assets/images/reviewer/2.jpg" alt />
                  <div className="author-title ms-3">
                    <h5 className="m-0 theme">Jared Erondu</h5>
                    <span>Supervisor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 ps-lg-5">
          <div className="testimonial-image">
            <img src="frontend/assets/images/testi-image.png" alt className="opacity-50" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* testimonial ends */}
  {/* partner starts */}
  <section className="event-partners pb-8" style={{backgroundImage: 'url(frontend/assets/images/contentbg.png)'}}>
    <div className="container">
      <div className="section-title mb-5 w-75 mx-auto text-center">
        <h3 className="h-title">Partners</h3>
        <h4 className="theme">Our Partners</h4>
        <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
          <h2 className="ah-headline mb-0">
            <span>Our Perfect Partners &amp; </span>
            <span className="ah-words-wrapper white theme">
              <b className="is-visible textcap">Sponsors</b>
              <b>Sponsors</b>
            </span>
          </h2>
        </div>
      </div>
      <div className="partners_inner">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="partner-list border-all mb-4">
              <img src="frontend/assets/images/cl-5.png" alt />
            </div>
            <div className="partner-list border-all">
              <img src="frontend/assets/images/cl-3.png" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="partner-list border-all mb-4">
              <img src="frontend/assets/images/cl-5.png" alt />
            </div>
            <div className="partner-list border-all">
              <img src="frontend/assets/images/cl-4.png" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="partner-list border-all mb-4">
              <img src="frontend/assets/images/cl-1.png" alt />
            </div>
            <div className="partner-list border-all">
              <img src="frontend/assets/images/cl-2.png" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="partner-list border-all mb-4">
              <img src="frontend/assets/images/cl-2.png" alt />
            </div>
            <div className="partner-list border-all">
              <img src="frontend/assets/images/cl-1.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="white-overlay opacity-75" />
  </section>
  {/* partner ends */}
  <div className="event-seperator">
    <div className="container">
      <div className="event-seperator-divider d-flex border-b pt-2">
        <div className="event-seperator-icon position-absolute start-50 top-0 bg-white p-1">
          <i className="fas fa-star theme fs-5" />
        </div>
      </div>
    </div>
  </div>
  {/* recent-articles starts */}
  <section className="event-articles pb-8">
    <div className="container">
      <div className="section-title mb-5 w-75 mx-auto text-center">
        <h3 className="h-title">News</h3>
        <h4 className="theme">Our News &amp; Articles</h4>
        <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
          <h2 className="ah-headline mb-0">
            <span>Our News &amp; </span>
            <span className="ah-words-wrapper white theme">
              <b className="is-visible textcap">Articles</b>
              <b>Articles</b>
            </span>
          </h2>
        </div>
      </div>
      <div className="recent-articles-inner">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="articles-item border-all bg-white overflow-hidden position-relative">
              <div className="articles-image">
                <img src="frontend/assets/images/blog/blog1.jpg" alt="image" />
                <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Ecommerce</div>
              </div>
              <div className="articles-content-main">
                <div className="articles-content p-4 pb-2">
                  <h4><a href="detail-1.html">How To Optimize Your Blog For High Ranking</a></h4>
                  <a href="#" className="theme textupper small">Continue Reading</a>
                </div>
                <ul className="border-top d-block w-100 p-4 py-2">
                  <li>August 25, 2022</li> |
                  <li> No Comments</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="articles-item border-all bg-white overflow-hidden position-relative">
              <div className="articles-image">
                <img src="frontend/assets/images/blog/blog2.jpg" alt="image" />
                <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Inspiration</div>
              </div>
              <div className="articles-content-main">
                <div className="articles-content p-4 pb-2">
                  <h4><a href="detail-1.html">Runner with Autism Graces of Women</a></h4>
                  <a href="#" className="theme textupper small">Continue Reading</a>
                </div>
                <ul className="border-top d-block w-100 p-4 py-2">
                  <li>August 25, 2022</li> |
                  <li> No Comments</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="articles-item border-all bg-white overflow-hidden position-relative">
              <div className="articles-image">
                <img src="frontend/assets/images/blog/blog3.jpg" alt="image" />
                <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">Public</div>
              </div>
              <div className="articles-content-main">
                <div className="articles-content p-4 pb-2">
                  <h4><a href="detail-1.html">Services To Grow Your Business Sell Affiliate</a></h4>
                  <a href="#" className="theme textupper small">Continue Reading</a>
                </div>
                <ul className="border-top d-block w-100 p-4 py-2">
                  <li>August 25, 2022</li> |
                  <li> No Comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* recent-articles ends */}
  {/* event-contact ends */}
  <section className="event-contact bg-grey pb-8">
    <div className="container">
      <div className="event-contact-main">
        <div className="row align-items-end">
          <div className="col-lg-6 pe-lg-4 mb-4">
            <div className="section-title mb-5 text-center text-lg-start">
              <h3 className="h-title">Venue</h3>
              <h4 className="theme">Reach Us</h4>
              <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
                <h2 className="ah-headline mb-0">
                  <span>Get Direction To The Event </span>
                  <span className="ah-words-wrapper white theme">
                    <b className="is-visible textcap">Location</b>
                    <b>Location</b>
                  </span>
                </h2>
              </div>
            </div>
            <div className="event-expo-item mb-4">
              <div className="row align-items-center border-all m-0">
                <div className="col-lg-3 d-flex bg-theme p-4 py-5">
                  <div className="expo-icon text-center w-100">
                    <i className="fa fa-map-marker-alt white fs-1" />
                  </div>
                </div>
                <div className="col-lg-9 p-4 text-center text-lg-start">
                  <h5 className="mb-1">Galleria Mall Conference Center</h5>
                  <p className="mb-0">19 By Pass NR, Bali, Indonesia, BC 22196</p>
                </div>
              </div>
            </div>
            <div className="event-expo-item">
              <div className="row align-items-center border-all m-0">
                <div className="col-lg-3 d-flex bg-theme p-4 py-5">
                  <div className="expo-icon text-center w-100">
                    <i className="fa fa-map-pin white fs-1" />
                  </div>
                </div>
                <div className="col-lg-9 p-4 text-center text-lg-start">
                  <h5 className="mb-1">Reception Info</h5>
                  <p className="mb-0">Phone Number: (+62) 1919-2022, (+62) 1919-2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-4 mb-4">
            <div className="map">
              <div style={{width: '100%'}}>
                <iframe height={500} style={{filter: 'grayscale(1)'}} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(mangal%20bazar)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* event-contact ends */}
  <Footer></Footer>
</div>


        </>
    );
};

export default Home;