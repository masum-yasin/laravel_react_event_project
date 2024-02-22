import { Link } from '@inertiajs/react';
import React from 'react';

const Header = () => {
    return (
        <div>
           <header className="main_header_area">
  {/* Navigation Bar */}
  <div className="header_menu" id="header_menu">
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
              <img src="frontend/assets/images/logo-white.png" alt="image" />
              <img src="frontend/assets/images/logo.png" alt="image" />
            </a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav" id="responsive-menu">
              <li className="dropdown submenu active">
                <Link href={route('home')} className>Home</Link>
              </li>
              <li><Link href={route('about')} className>About Us</Link></li>
              <li><a href="{{route('userreview.create')}}" className>Review</a></li>
              <li><Link href={route('eventschedule')} className=''>Schedule</Link></li>
              {/* <li className="submenu dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Schedule<i className="fas fa-caret-down ms-1" aria-hidden="true" /></a> 
                <ul className="dropdown-menu">
              
                  {'{'}{'{'}-- <li><a href="{{route('eventdetail')}}">Event Detail</a></li> --{'}'}{'}'}
                  {'{'}{'{'}-- <li><a href="speakers.html">Speaker Lists</a></li>
                  <li><a href="speaker-detail.html">Speaker Detail</a></li>
                  <li><a href="sponsors.html">Sponsors</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="testimonials.html">Testimonials</a></li>
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="comingsoon.html">Coming Soon</a></li>
                  <li><a href="search-result.html">Search Result</a></li>
                  <li><a href="404.html">404 Error</a></li> --{'}'}{'}'}
                </ul> 
              </li> */}
              <li className="submenu dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">News <i className="fas fa-caret-down ms-1" aria-hidden="true" /></a> 
                <ul className="dropdown-menu">
                  <li><a href="{{route('allpost')}}">All Posts</a></li>
                  <li><a href="{{route('singlepost')}}">Single Post</a></li>
                </ul>
              </li>
              <li><a href="{{route('contact.create')}}" className>Contact</a></li>
              <li className="submenu dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin dashboard<i className="fas fa-caret-down ms-1" aria-hidden="true" /></a> 
                <ul className="dropdown-menu">
                  <li>
                    <Link href={route('dashboard')} className="btn" style={{width: 100}}>Super Admin</Link>
                  </li>
                  <li>
                    <Link href={route('editor_login_form')} className="btn" style={{width: 100, margin: '0 3px'}}>Editor</Link>
                  </li>
                  <li>
                    <Link href={route('admin_login_form')} className="btn btn-warning " style={{width: 100}}>Admin</Link>
                  </li>
                </ul>
              </li>
{/*               
              @if(Auth::guard('customer')-&gt;check())
              <li><a href="{{route('customer.mybooking')}}">My Booking</a></li>
              @endif
              <li>
                @if(Auth::guard('customer')-&gt;check())
                <form method="POST" action="{{route('customer.logout')}}">
                  @csrf
                  <button type="submit" className="btn btn-warning"> Logout </button>
                </form>
                @else <a href="{{route('customer_login_form')}}"> Login </a>
                @endif
              </li> */}
            </ul>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </nav>
  </div>
  {/* Navigation Bar Ends */}
</header>

        </div>
    );
};

export default Header;