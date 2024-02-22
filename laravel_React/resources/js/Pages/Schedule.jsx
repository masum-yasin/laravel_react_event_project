import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { usePage } from '@inertiajs/react';
import React from 'react';

const Schedule = (props) => {
    const {schedule} =usePage().props
    console.log(schedule);
    return (
        <div>
            <Header></Header>
           <div>
  <section className="breadcrumb-main" style={{backgroundImage: 'url(frontend/assets/images/pexels-wendy-wei-1190297.jpg)'}}>
    <div className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content text-center pt-14 pb-2">
          <h5 className="theme mb-0">Eventiz</h5>
          <h1 className="mb-0 white">Event Schedules</h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay" />
  </section>
  {/* BreadCrumb Ends */} 
  {/* event-schedule starts */}
  <section className="event-schedule pb-8 about-after">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-4">
          <div className="section-title mb-5 text-center text-lg-start">
            <h3 className="h-title">Schedule</h3>
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
        {
            schedule.map((item)=>(
        
        <div className="about-image-box bg-white mb-4">
          <div className="row">
            <div className="col-lg-3 d-flex">
              <div className="about-content text-center text-lg-start p-4 py-8 bg-theme w-100">
                <small className="white mb-2">Start Time: {item.start_time}</small><br></br>
                {/* <h4 className="white mb-0">{item.category.name}</h4> */}
                <small className="white mb-2"> Ending Time: {item.ending_time}</small>
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
        </div>
        ))}
       
        
       
      </div>
    </div>
  </section>
  {/* event-schedule ends */}
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
                    <i className="fa fa-map-marker white fs-1" />
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
</div>
<Footer></Footer>
        </div>
    );
};

export default Schedule;