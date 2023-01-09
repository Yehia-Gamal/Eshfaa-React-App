import React from "react";
import { Helmet } from "react-helmet";
import CardPupEn from "./card-pup-en";
import FooterEn from "./footer-en";
const Home = () => {
  // Pup Box Functions
  const show_pup_1 = () => {
    document.getElementById("pup_1").classList.add("open");
  };
  const show_pup_2 = () => {
    document.getElementById("pup_2").classList.add("open");
  };
  const show_pup_3 = () => {
    document.getElementById("pup_3").classList.add("open");
  };
  const show_pup_4 = () => {
    document.getElementById("pup_4").classList.add("open");
  };
  const show_pup_5 = () => {
    document.getElementById("pup_5").classList.add("open");
  };
  const show_pup_6 = () => {
    document.getElementById("pup_6").classList.add("open");
  };
  const show_pup_7 = () => {
    document.getElementById("pup_7").classList.add("open");
  };
  const show_pup_8 = () => {
    document.getElementById("pup_8").classList.add("open");
  };
  const show_pup_9 = () => {
    document.getElementById("pup_9").classList.add("open");
  };
  const show_pup_10 = () => {
    document.getElementById("pup_10").classList.add("open");
  };
  return (
    <>
      <Helmet>
        <script src="../js/jquery.js" type="text/javascript" />
        <script src="../js/bootstrap.min.js" type="text/javascript" />
        <script src="../js/custom.js" type="text/javascript" />
        <script src="../js/jquery.counterup.min.js" type="text/javascript" />
        <script src="../js/modernizr.custom.79639.js" type="text/javascript" />
        <script src="../js/photoswipe-gallery.js" type="text/javascript" />
        <script
          src="../js/photoswipe-ui-default.min.js"
          type="text/javascript"
        />
        <script src="../js/photoswipe.min.js" type="text/javascript" />
        <script src="../js/slick.min.js" type="text/javascript" />
        <script src="../js/waypoints.min.js" type="text/javascript" />
      </Helmet>
      ;{/* Start Social media Buttons */}
      <a className="Whatsapp-conact" href="https://wa.me/+201200777738">
        <i className="fa-brands fa-whatsapp" />
      </a>
      <a className="phone-conact" href="tel:+201200777738">
        <i className="fa fa-phone" />
      </a>
      {/* End Social media Buttons */}
      {/*=========== BEGIN HEADER SECTION ================*/}
      <header id="header">
        {/* BEGIN MENU */}
        <div className="menu_area">
          <nav
            className="navbar navbar-default navbar-fixed-top"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header">
                {/* FOR MOBILE VIEW COLLAPSED BUTTON */}
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a title="اختر اللغة العربية" className="icon-lang" href="/Ar">
                  <button>Ar</button>
                </a>
                {/* LOGO */}
                {/* TEXT BASED LOGO */}
                <a className="navbar-brand" href="/">
                  <img src="images/icons/logo.png" alt="logo" />
                  <span>Eshfaa</span>
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul
                  id="top-menu"
                  className="nav navbar-nav navbar-right main-nav"
                >
                  <li title="اختر اللغة العربية" className="lang-earth">
                    <a href="/Ar">
                      <p>اختر اللغة العربية </p>
                      <img src="./images/icons/lang.ico" alt="lang.icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#sliderArea">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#meetDoctors">Programs</a>
                  </li>
                  <li>
                    <a href="#service">Services</a>
                  </li>
                  <li>
                    <a href="#whychooseSection">why Eshfaa</a>
                  </li>
                  <li>
                    <a href="#counterSection">Partners</a>
                  </li>
                  <li>
                    <a href="#homeBLog">Blog</a>
                  </li>
                  <li>
                    <a href="#footer">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/*/.nav-collapse */}
            </div>
          </nav>
        </div>
        {/* END MENU */}
      </header>
      {/*=========== END HEADER SECTION ================*/}
      {/*=========== BEGIN SLIDER SECTION ================*/}
      <section id="sliderArea">
        {/* Start slider wrapper */}
        <div className="top-slider">
          {/* Start Cover slide */}
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-00.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-01.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-02.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-03.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-04.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-05.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-06.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-07.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              {/* <img src="images/cover/cover-08.WebP" alt="cover-img" /> */}
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              {/* <img src="images/cover/cover-09.WebP" alt="cover-img" /> */}
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              {/* <img src="images/cover/cover-10.WebP" alt="cover-img" /> */}
            </div>
          </div>
          {/* End Cover slide */}
        </div>
        {/* /top-slider */}
      </section>
      {/*=========== END SLIDER SECTION ================*/}
      <section className="about">
        <div className="container">
          <div className="content">
            <div className="box">
              <div className="section-heading">
                <h2>About Us</h2>
                <div className="line" />
                <p>
                  Eshfaa is a digital healthcare platform specialized in case
                  management &amp; care coordination for different healthcare
                  services, to deliver integrated healthcare services, it's
                  founded to be your medical companion at your journey for
                  recovery from A to Z, to have best Patient Experience
                  Management (PEM) &amp; enjoy Person-centered care (PCC) with
                  compliance for international healthcare quality standards,
                  managed by highly qualified well-trained professional medical
                  customer support team. <br />
                  <br />
                  Eshfaa is providing specially customized healthcare programs
                  for different types of customers, <br />
                  Organizations &amp; self-insured corporates, delivering
                  digital integrated Home Health care services, telemedicine and
                  on-site health care services for corporate sites, in addition
                  to other health care services through huge medical networks
                  with partner health care provider companies (+4500 providers),
                  covering all governorates in Egypt &amp; soon at KSA.
                </p>
              </div>
            </div>
            <div id="about" className="row-box">
              <div className="box">
                <div className="vision">
                  <div className="section-heading">
                    <h2>Vision</h2>
                    <div className="line" />
                    <p>
                      to be the best Digital Healthcare service platform in
                      MENA, that enables digital access to have integrated
                      healthcare services with high quality &amp;affordable cost
                    </p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="mission">
                  <div className="section-heading">
                    <h2>Mission</h2>
                    <div className="line" />
                    <p>
                      to provide best patient experience management &amp;
                      person-centered care with professional case management
                      &amp; care coordination with highest Healthcare Quality
                      standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-heading">
              <h2>Values</h2>
              <div className="line line-values" />
            </div>
            <div className="row-box">
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">Quality &amp; Professionalism</h2>
                  <div className="line" />
                  <p>
                    Our main approach in leading our business is through quality
                    leadership, to deliver highest quality with best affordable
                    prices, in high professional manner by well-trained
                    experienced professional medical support team
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">Empathy &amp; Compassion</h2>
                  <div className="line" />
                  <p>
                    We care our customers like our families, we understand
                    &amp;share their feelings &amp;pains, with sympathetic pity
                    &amp; concern for their sufferings or misfortunes.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">Person-Centered Care</h2>
                  <div className="line" />
                  <p>
                    &amp;Patient Experience Management: Our customers is the
                    core of our concentration, we provide best management of
                    each customer journey at all touch points from end to end,
                    to reach best customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== BEGIN Top Feature SECTION ================*/}
      <section id="topFeature">
        <div className="row">
          {/* Start Single Top Feature */}
          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="single-top-feature">
                <span className="fa-solid fa-download" />
                <h3>Portfolio</h3>
                <p>
                  You can know all our services and programs in detail, Download
                  Eshfaa Portfolio..
                </p>
                <div className="readmore_area">
                  <a
                    href="https://drive.google.com/file/d/1MTxyW0dH0xzlMFRHKVeEXCgmDUJVc9st/view?usp=drivesdk"
                    target="_blank"
                    data-hover="Portfolio"
                    rel="noreferrer"
                  >
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Top Feature */}
          {/* Start Single Top Feature */}
          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="single-top-feature opening-hours">
                <iframe
                  className="video-youtube"
                  src="https://www.youtube.com/embed/evR7hcvyjCM"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          {/* End Single Top Feature */}
          {/* Start Single Top Feature */}
          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="single-top-feature">
                <span className="fa-solid fa-house-medical-circle-check" />
                <h3>Booking</h3>
                <p>
                  With just a push of a button you can get all your integrated
                  health care services, in the best and biggest medical centers,
                  or at home Book your service now from Eshfaa
                </p>
                <div className="readmore_area">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfMlwDwbm3aKOLM8VUMhRtw36vkfQTiAta17pHU2lDukaPnrA/viewform?usp=sf_link"
                    data-hover="Booking"
                  >
                    <span>Booking</span>
                  </a>
                  {/* <a data-toggle="modal" data-target="#myModal" href="#" data-hover="Appoinment"><span>Appoinment</span></a> */}
                </div>
              </div>
            </div>
          </div>
          {/* End Single Top Feature */}
        </div>
      </section>
      {/*=========== END Top Feature SECTION ================*/}
      {/*=========== BEGAIN Why Choose Us SECTION ================*/}
      <section id="whychooseSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="service-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>Why Eshfaa ?</h2>
                  <div className="line" />
                </div>
              </div>
            </div>
            <div className="why-eshfaa col-lg-12 col-md-12">
              <div className="project-card">
                <div className="info">
                  <p>
                    Experienced well-trained medical support team, professional
                    in case management &amp; care coordination.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Highly Qualified carefully selected Healthcare professionals
                    of doctors, physiotherapists, pharmacists, nurses, chemists
                    &amp; technicians.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Strong wide-spread Medical network combines +4500 providers
                    covering all governorates, including high class hospitals,
                    medical centers, clinics, labs, radiology centers &amp;
                    giant pharmacy chains.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Applying highest healthcare quality standards of service
                    delivey, case management &amp; care coordination to ensure
                    best patient experience management to achieve
                    Person-centered care.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Focusing on value for customers, providing more benefits
                    &amp; less costs to ensure Value-based care.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Providing Integrated healthcare service programs, combines
                    all needed medical services at one place, either at home,
                    on-site or at different healthcare facilities.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Digitalization of healthcare services, with paperless system
                    of case management through Electronic Medical Records (EMR),
                    with competent Healthcare Information Management System
                    (HIMS), ensuring security, privacy &amp; confedentiality.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Subscription at Eshfaa programs is free, without any annual
                    or monthly subscriptions, without paying for discount cards,
                    pay only for needed service with highest availabe discounts.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Covering all family members without exclusion of any
                    relative, Covering all ages without limitation for age,
                    Covering all diseases without limitation for any chronic
                    medical status or health condition, availing all required
                    medications without limitations or prior approvals, enjoying
                    paperless digital healthcare management system for soft copy
                    approvals, claims.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    Availing all methods of secured payment through digital
                    payment gateway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== END Why Choose Us SECTION ================*/}
      {/*=========== BEGAIN Programs SECTION ================*/}
      <section id="meetDoctors">
        <div id="programs" className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="meetDoctors-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>Discover our Programs</h2>
                  <div className="line" />
                </div>
                <div className="doctors-area">
                  <ul className="doctors-nav">
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_1();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-01.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_1();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_2();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-02.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_2();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_3();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-03.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_3();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_4();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-04.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_4();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_5();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-05.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_5();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_6();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-06.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_6();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_7();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-07.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_7();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_8();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-08.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_8();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_9();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-09.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_9();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div
                          className="tdoctor btn-show"
                          onClick={() => {
                            show_pup_10();
                          }}
                        >
                          <figure>
                            <img
                              src="images/programs/programs-10.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick={() => {
                                  show_pup_10();
                                }}
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== Start Programs card.open SECTION ================*/}
      <CardPupEn />
      {/*=========== End Programs card.open SECTION ================*/}
      {/*=========== End Programs SECTION ================*/}
      {/*=========== BEGIN Service SECTION ================*/}
      <section id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="service-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>Our Services</h2>
                  <div className="line" />
                </div>
                {/* Start Service Content */}
                <div className="service-content">
                  <div className="row">
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img src="images/icons/home.WebP" alt="homecare" />
                          </span>
                        </div>
                        <h3>
                          <span>Integrated homecare services</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/laporatory.WebP"
                              alt="laporatory"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>Laboratory Services</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/radiology.WebP"
                              alt="radiology"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>Radiology &amp; Imaging Services</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/physiotherapy.WebP"
                              alt="physiotherapy"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>Physiotherapy &amp; Rehabilitation </span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              className="icon-mid"
                              src="images/icons/medication.WebP"
                              alt="medication"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>Medication Management</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/hospital.WebP"
                              alt="hospital"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>Hospital and Clinic booking</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/tele-Consulting.WebP"
                              alt="tele-Consulting"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>Telemedicine Services</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/booking.WebP"
                              alt="ICUs, NICUs booking"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>ICUs, NICUs booking</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/surgical.WebP"
                              alt="surgical"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>Surgical Operations Coordination</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/on-site.WebP"
                              alt="on-site"
                            />
                          </span>
                        </div>
                        <h3>
                          <span>On-Site Ambulance &amp; Services</span>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End Service SECTION ================*/}
      {/*=========== BEGAIN Counter SECTION ================*/}
      <section id="counterSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="counter-area">
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">4500</div>
                    <div className="counter-label">Net work</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">7000</div>
                    <div className="counter-label">Providers</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">10000</div>
                    <div className="counter-label">Customers</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">1000</div>
                    <div className="counter-label">Happy patient</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End Counter SECTION ================*/}
      {/*=========== BEGAIN partners of success SECTION ================*/}
      <section id="success" className="meetDoctors success">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="meetDoctors-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>Meet our Partners</h2>
                  <div className="line" />
                  <p className="p-success">
                    To reach the highest levels of comfort and safety Achieving
                    a vision of Eshfaa.. in providing integrated health care
                    from A to Z Cooperation with major medical entities in all
                    governorates Get to know our success partners
                  </p>
                </div>
                <div className="doctors-area">
                  <ul className="doctors-nav">
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-01.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-02.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-04.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-05.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-06.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-08.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-09.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-10.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-11.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-12.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-13.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-14.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-15.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-16.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-17.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-18.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-19.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-20.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End partners of success SECTION ================*/}
      {/*=========== BEGAIN partners of success SECTION ================*/}
      <section id="meetDoctors">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="meetDoctors-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>Meet our Charities &amp; NGOs</h2>
                  <div className="line" />
                  <p className="p-success">
                    We believe in the corporate social responsibility Eshfaa is
                    honored to provide its services to these entities
                  </p>
                </div>
                <div className="doctors-area">
                  <ul className="doctors-nav">
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-03.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-02.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-01.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-04.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-05.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <div className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-06.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End partners of success SECTION ================*/}
      {/*=========== BEGAIN Testimonial SECTION ================*/}
      <section id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="testimonial-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>Testimonials</h2>
                  <div className="line" />
                </div>
                <div className="testimonial-area">
                  <ul className="testimonial-nav">
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-01.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-02.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-03.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-04.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-05.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-06.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-07.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End Testimonial SECTION ================*/}
      {/*=========== BEGAIN Home Blog SECTION ================*/}
      <section id="homeBLog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="homBlog-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>Eshfaa Blog</h2>
                  <div className="line" />
                </div>
                {/* Start Home Blog Content */}
                <div className="homeBlog-content">
                  <div className="row">
                    {/* Start Single Blog */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="single-Blog">
                        <div className="single-blog-right">
                          <div className="blog-img">
                            <figure className="blog-figure">
                              <a href="/Heart">
                                <img
                                  src="images/gallery/heart/heart-06-en.WebP"
                                  alt="img"
                                />
                              </a>
                              <span className="image-effect" />
                            </figure>
                          </div>
                          <div className="blog-author">
                            <ul>
                              <li>
                                By <span>Eshfaa</span>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-content">
                            <h2>Heart failure</h2>
                            <p>
                              Heart failure does not mean that the heart is not
                              working anymore, but it needs some help to
                              function better, it is usually a chronic disease
                              whose symptoms do not cure but can be controlled
                              for many years, especially if it is detected early
                              and the appropriate treatment plan is followed...
                            </p>
                            <div className="readmore_area">
                              <a href="/Heart" data-hover="Read More">
                                <span>Read More</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Start Single Blog */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="single-Blog">
                        <div className="single-blog-right">
                          <div className="blog-img">
                            <figure className="blog-figure">
                              <a href="/Lung">
                                <img
                                  src="images/gallery/Lung-cancer/lung-10-en.WebP"
                                  alt="img"
                                />
                              </a>
                              <span className="image-effect" />
                            </figure>
                          </div>
                          <div className="blog-author">
                            <ul>
                              <li>
                                By <span>Eshfaa</span>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-content">
                            <h2>Lung cancer</h2>
                            <p>
                              Do you know what lung cancer is? What and how
                              dangerous is it? How can you get infected with it?
                              What are its symptoms? How much chance of recovery
                              from it? We will answer all those questions and
                              more about lung cancer in details in this article,
                              so let's start with us and do not hesitate...
                            </p>
                            <div className="readmore_area">
                              <a href="/Lung" data-hover="Read More">
                                <span>Read More</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Start Single Blog */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="single-Blog">
                        <div className="single-blog-right">
                          <div className="blog-img">
                            <figure className="blog-figure">
                              <a href="/Antibiotic">
                                <img
                                  src="images/gallery/antibiotic/antibiotic-01-en.WebP"
                                  alt="img"
                                />
                              </a>
                              <span className="image-effect" />
                            </figure>
                          </div>
                          <div className="blog-author">
                            <ul>
                              <li>
                                By <span>Eshfaa</span>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-content">
                            <h2>Antibiotic Resistance</h2>
                            <p>
                              Antibiotics are used to treat diseases caused by
                              bacteria, as they prevent the growth of microbes
                              or slow the rate of their reproduction.
                              Antibiotics are considered ineffective in the case
                              of diseases that result from viral infections such
                              as influenza and the common cold...
                            </p>
                            <div className="readmore_area">
                              <a href="/Antibiotic" data-hover="Read More">
                                <span>Read More</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End Home Blog SECTION ================*/}
      {/*=========== Start Footer SECTION ================*/}
      <FooterEn />
      {/*=========== End Footer SECTION ================*/}
    </>
  );
};

export default Home;
