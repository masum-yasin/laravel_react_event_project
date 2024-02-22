import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';

const About = () => {
    return (
        <div>
            <Header></Header>
           <div>
  {/* BreadCrumb Starts */}  
  <section className="breadcrumb-main" style={{backgroundImage: 'url({{asset("frontend/assets/images/pexels-wendy-wei-1190297.jpg")}})'}}>
    <div className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content text-center pt-14 pb-2">
          <h5 className="theme mb-0">Eventiz</h5>
          <h1 className="mb-0 white">About Us</h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay" />
  </section>
  {/* BreadCrumb Ends */} 
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
            <div className="about-features" style={{backgroundImage: 'url({{asset("frontend/assets/images/contentbg.png")}})'}}>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4">
                  <img src="{{asset('frontend/assets/images/about/busi-3.jpg')}}" alt />
                </div>
                <div className="col-lg-6">
                  <img src="{{asset('frontend/assets/images/about/busi-1.jpg')}}" alt className="mb-4" />
                  <img src="{{asset('frontend/assets/images/about/busi-2.jpg')}}" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about-us ends */}
  {/* about-us starts */}
  <section className="about-us about-features pt-12 pb-8" style={{backgroundImage: 'url({{asset("frontend/assets/images/testimonial-1.png")}})'}}>
    <div className="container">
      <div className="about-image-box">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-6 pe-lg-4">
            <div className="about-features">
              <div className="features-infobox border-all d-flex align-items-center p-4 box-shadow bg-white mb-4">
                <div className="infobox-icon me-3">
                  <i className="fas fa-lightbulb fs-1 theme" />
                </div>
                <div className="box-body">
                  <h4 className="infobox-title mb-1">Our Vision </h4>
                  <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
              <div className="features-infobox border-all d-flex align-items-center p-4 box-shadow bg-white mb-4">
                <div className="infobox-icon me-3">
                  <i className="fas fa-users fs-1 theme" />
                </div>
                <div className="box-body">
                  <h4 className="infobox-title mb-1">Community Sharing</h4>
                  <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
              <div className="features-infobox border-all d-flex align-items-center p-4 box-shadow bg-white">
                <div className="infobox-icon me-3">
                  <i className="fas fa-gear fs-1 theme" />
                </div>
                <div className="box-body">
                  <h4 className="infobox-title mb-1">Exchange the Idea </h4>
                  <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-4">
            <div className="about-content text-center text-lg-start mb-4">
              <h3 className="h-title">Culture</h3>
              <h4 className="theme">Our Culture</h4>
              <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
                <h2 className="ah-headline">
                  <span>Learn More About Our</span>
                  <span className="ah-words-wrapper white theme">
                    <b className="is-visible textcap">Values</b>
                    <b>Values</b>
                  </span>
                </h2>
              </div>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ip suspendisse ultrices gravida. Risus commodo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about-us ends */}
  {/* our teams starts */}
  <section className="event-team pt-2" style={{backgroundImage: 'url({{asset("frontend/assets/images/manbg.png")}})'}}>
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
                <img src="{{asset('frontend/assets/images/team/img6.jpg')}}" alt="team" />
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
                <img src="{{asset('frontend/assets/images/team/img2.jpg')}}" alt="team" />
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
                <img src="{{asset('frontend/assets/images/team/img3.jpg')}}" alt="team" />
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
                <img src="{{asset('frontend/assets/images/team/img4.jpg')}}" alt="team" />
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
                <img src="{{asset('frontend/assets/images/team/img1.jpg')}}" alt="team" />
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
                <img src="{{asset('frontend/assets/images/team/img5.jpg')}}" alt="team" />
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
                  <img src="{{asset('frontend/assets/images/reviewer/1.jpg')}}" alt />
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
                  <img src="{{asset('frontend/assets/images/reviewer/2.jpg')}}" alt />
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
            <img src="{{asset('frontend/assets/images/testi-image.png')}}" alt className="opacity-50" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* testimonial ends */}
</div>
<Footer></Footer>
        </div>
        
    );
};

export default About;