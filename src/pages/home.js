import React from "react";
import { Helmet } from "react-helmet";
const Home = () => {
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

  const hide_pup_1 = () => {
    document.getElementById("pup_1").classList.remove("open");
  };
  const hide_pup_2 = () => {
    document.getElementById("pup_2").classList.remove("open");
  };
  const hide_pup_3 = () => {
    document.getElementById("pup_3").classList.remove("open");
  };
  const hide_pup_4 = () => {
    document.getElementById("pup_4").classList.remove("open");
  };
  const hide_pup_5 = () => {
    document.getElementById("pup_5").classList.remove("open");
  };
  const hide_pup_6 = () => {
    document.getElementById("pup_6").classList.remove("open");
  };
  const hide_pup_7 = () => {
    document.getElementById("pup_7").classList.remove("open");
  };
  const hide_pup_8 = () => {
    document.getElementById("pup_8").classList.remove("open");
  };
  const hide_pup_9 = () => {
    document.getElementById("pup_9").classList.remove("open");
  };
  const hide_pup_10 = () => {
    document.getElementById("pup_10").classList.remove("open");
  };
  return (
    <>
      <Helmet>
        <script src="../js/jquery.js" type="text/javascript" />
        <script src="../js/programs_pup.js" type="text/javascript" />
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
                        <p
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p className="tdoctor btn-show" onClick="show_pup_7()">
                          <figure>
                            <img
                              src="images/programs/programs-07.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onClick="show_pup_7()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <p
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
                        </p>
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
      <div className="doctors-card">
        <div className="card" id="pup_1">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_1();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-01.WebP"
            alt=""
          />
          <h2>Eshfaa Plus for companies</h2>
          <p>
            A productive employee is a real treasure in the company that must be
            preserved, his presence is a step to guarantee a longer productive
            life for the company , for this the first priority of productivity
            is a good health for a focus productive mind without annoying
            diseases that disrupt the continuity of his giving. For all of that
            we introduce : <br />
            Eshfaa Plus program, a medical program for SMEs &amp; startups, to
            support their employees &amp; their families with on-demand
            discounted services, without annual, monthly subscription fees or
            discount cards.
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_1();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_2">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_2();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-02.WebP"
            alt=""
          />
          <h2>Eshfaa on-site</h2>
          <p>
            Are you seeking highly qualified onsite Healthcare service provider?{" "}
            <br />
            Discover our onsite healthcare program: <br />
            "Eshfaa Onsite" which is specifically designed for corporates &amp;
            factories which have working sites either in near or remote areas,
            where we can deliver digital integrated occupational healthcare
            services, starting from establishing onsite clinics, preparing it
            with required equipments and medications, then hiring onsite doctors
            (DOS) and nurses, availing portable radiology &amp; laboratory
            services, enhancing ergonomics &amp; onsite physiotherapy services,
            up to establishing complete telemedicine units supported by digital
            ambulance cars or aeroplanes, applying highest quality standars of
            ISO 45001/2018 for occupational health care &amp; safety management
            systems, with well-trained experienced staff.
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_2();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_3">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_3();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-03.WebP"
            alt=""
          />
          <h2>Eshfaa charity:</h2>
          <p>
            Do you have a charity or work with NGO interested in supporting
            medical cases? <br />
            Discover #Eshfaa_Charity program This program is specially designed
            for professional Charities &amp; NGOs which serve poor cases who
            need various medical &amp;surgical services at different
            governorates, to support their medical cases with best case
            management &amp; care coordination with good quality, least availabe
            prices &amp;highest discounts, to save donations &amp; let poor
            cases have best patient experience management as same as rich ones,
            Because their health is a shared responsibility, &amp; they deserve
            to have a unique integrated healthcare experience that is no less
            than others. Therefore, we proudly want you to discover our program
            "Eshfaa Charity"
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_3();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_4">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_4();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-04.WebP"
            alt=""
          />
          <h2>Eshfaa Home care</h2>
          <p>
            Homecare services arrangement &amp; coordination is not an easy job
            at all! If you have a patient needs different homecare services, you
            will have to call different entities to arrange each of these
            services &amp; after exerting big efforts &amp; hassle, you won't
            can assure quality! <br />
            We are proud to announce about Eshfaa_Homecare program for Digital
            integrated home Healthcare services with highest quality, affordable
            cost &amp; peace of mind, Where you can request all what you need
            from availabe homecare services &amp; find them from one place with
            one team of professional case managers &amp; care coordinators.{" "}
            <br />
            Now, with "Eshfaa Homecare" program you can design your customized
            homecare program &amp;request what you need from the following
            services: <br />
            1.Doctors at home: "Residents, specialists &amp; consultants" in
            different specialities. <br />
            2. Physiotherapy &amp; rehabilitation at home: <br />
            for all physiotherapy specialities &amp;healing sports' injuries
            with best manual maneuvers &amp; availabe portable devices,
            performed by well-trained experienced registered physiotherapists
            only. 3. Nursing at home: <br />
            with qualified staff of "nursing specialists, technicians &amp;
            nurse aids" 4. Laboratory services at home. <br />
            5. Radiology &amp; imaging at home: <br />
            including portable Xray, ultrasound, Doppler &amp; Duplex, under
            supervision of radiology consultants &amp; professors at cairo &amp;
            alex, ECG &amp; ECHO at home, Echo is performed by experienced
            cardiology specialists &amp; consultants only. 6. Rental of portable
            equipments to establish intermdiate care unit at home. <br />
            7. Renal_Dialysis at home: <br />
            unique outstanding advanced homecare service, performed by
            professional experienced team of renal dialysis at home, with
            advanced portable dialysis machines, under supervision of urology
            &amp; nephrology consultants. "This service is availabe now at Alex
            &amp; north coast, soon will be availabe at cairo". 8. Ambulance
            cars: <br />
            for cold cases transportation from home to hospitals &amp; vice
            versa. All homecare services are supervised by both: 1. Our team of
            doctors at Eshfaa Medical directory &amp; medical director, with
            daily reporting system for long term cases. <br />
            2. Our team of quality specialists &amp; case managers under
            supervision of quality director for best quality control &amp;
            quality assurance. Our homecare services aren't for B2C only, but
            also for B2B, corporates, hospitals &amp; other Healthcare
            providers, we are ready to be your trusted homecare arm, with
            reliable quality for your employees &amp; customers.
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_4();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_5">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_5();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-05.WebP"
            alt=""
          />
          <h2>Eshfaa Tele-medicine</h2>
          <p>
            Telemedicine isn't a telephone call or merely online consultation!
            Telemedicine is a complete program with different modalities, it
            becomes essential, mandatory, required &amp; preferred at mild cases
            or follow up of chronic diseases for many people, specially after
            COVID19 pandemic, which transformed consumer behaviour of most of
            us, it's now more accepted as a vital transient step untill the
            patient reaches the doctor or vice versa. <br />
            Discover "Eshfaa Telemedicine" program <br />
            &amp; choose what is fit for you &amp; your business from the
            following: <br />
            1. For individuals: <br />
            You can request for an online consultation with one of our doctors
            at different specialities, either resident, specialist or consultant
            &amp; you can choose your preferred doctor with best reviews &amp;
            you can choose to contact him/her either video-call or phone-call or
            chat, either through your phone, tablet, laptop or using convinient
            App. <br />
            2. For Corporates: <br />
            You can enjoy attractive packages with competitive prices &amp;
            great discounts on higher packages, availabe for all of your
            employees, with high quality &amp; cost reduction. 3. For onsite
            workers at factories, wells &amp; mines at remote areas: <br />
            Supporting onsite clinics with telemedicine devices, which enable
            doctors &amp; nurses onsite to contact other consultants at referral
            hospitals for second opinion &amp; follow up till reaching them,
            either by digital ambulance cars or aeroplanes. 4. Teleradiology for
            hospitals &amp; Radiology centers: <br />
            Supporting hospitals &amp;radiology centers for reporting system of
            their cases, by an experienced team of radiology consultants who are
            experts in this domain. 5. Telemedicine at home: <br />
            Using telemedicine devices at home care services &amp; visits to
            connect nurses with doctors &amp; residents, specialists with
            consultants, for best monitoring of patients. 6. Telemedicine with
            forign experts: <br />
            You can have second opinion online consultations with forign experts
            at different medical specialities from different countries like UK,
            Germany &amp; USA, through strong network of forign experts with our
            partners. 7. Telemedicine for ICUs &amp; NICUs:
            <br />
            Establishing telemedicine systems &amp; devices for ICUs, CCUs,
            PICUs, NICUs &amp; stroke units, to have follow up &amp; second
            opinion real-time online consultation with our team of ICU experts
            at Egypt, KSA, Europe &amp; USA. 8. Telemedicine for Hospitals:
            <br />
            To establish satellite units for mega hospitals at remote areas or
            at specific campaigns, to connect doctors &amp; nurses at these
            satellite units with consultants at the main hospitals using
            telemedicine devices. 9. Telemedicine for Ambulance services:
            <br />
            Enabling paramedics to connect doctors during rescue patients using
            AR/VR goggles which enable real-time transmission of vital data to
            enable doctors to make &amp; take quick decisions to save lives, in
            addition to equipping ambulance cars &amp; aeroplanes with
            telemedicine devices to monitor patients inside throughout their way
            for emergency hospitals.
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_5();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_6">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_6();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-06.WebP"
            alt=""
          />
          <h2>Eshfaa Family</h2>
          <p>
            Are you searching for customized healthcare insurance plan for your
            family? Would you love to design your family insurance program
            according to your needs &amp; availabe budget? <br />
            Do you want to have specific family doctor for consultations of your
            family, knowing EMR of each family member &amp; medical support team
            for case management &amp; care coordination for all healthcare
            services your family needs with variable choices, guidance, best
            offers &amp; highest discounts? Or even full insurance coverage?{" "}
            <br />
            Discover "Eshfaa_family" program <br />
            For designing specifically tailored customized healthcare services
            assurance program or insurance plans, You can choose for your
            family, what is more suitable for you from the following options:
            <br />
            1. Having customized medical support group for your family case
            management, care coordination &amp; requesting "on-demand discounted
            medical services" up to 60% discounts, <br />
            Without any monthly or annual subscriptions, without buying cards,
            pay only for the service you need with discouts &amp; enjoy
            "Value-based care" <br />
            2. Buying discount cards for your family, enjoy discounts upto 70%,
            go by yourself to hospitals &amp; healthcare providers of strong
            wide-spread network. <br />
            3. Subscribe to specific family insurance plans, with one of our
            partners from different insurance corporates, enjoy from 80% to 100%
            insurance coverage, according to your budget &amp; your choice of
            what is more suitable for you &amp; your family, enjoying supporting
            &amp; advising from our insurance advisors.
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_6();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_7">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_7();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-07.WebP"
            alt=""
          />
          <h2>Eshfaa Geriatric</h2>
          <p>
            Our parents gave us dedicated care when we were young, &amp; It's
            our turn to give them back best care they deserve, when they are
            elderly. For this purpose, we created #Eshfaa_Geriatric program, for
            integrated healthcare service management for elderly, to make case
            management &amp; care coordination to deliver best elderly care,
            with best patient experience management to make our fathers,
            mothers, grandpas &amp; grandmas enjoy best "Person-centered care"
            with empathy &amp; compassion to their feelings &amp; their needs,
            considering their sensitivities to accept care from others. This
            program is managed by highly qualified experienced staff of
            "Geriatric medicine" specialists &amp; consultants -who are very
            rare &amp; very professional in medical managing elderly cases- with
            other specific specialities like neurology. psychiatry, urology,
            ophthalmology, ENT, internal medicine, cardiology &amp; other
            geriatric relevant specialities. We manage care coordination between
            geriatric doctors, physiotherapists &amp; nurses to deliver
            integrated compatible long-term elderly care with all needed
            specialities either in geriatric medicine, physiotherapy or nursing,
            either at home care services or at centers or hospitals. In
            addition, we provide other diagnostic &amp; theraputic services that
            our senior patients may need, like laboratory or radiology services
            either at home or at labs or centers, with medication management by
            our pharmacists &amp; medication delivery at home with discounts
            from our pharmacies, even if their condition requires surgical
            operation or admission at hospital for ICU or CCU or needs ambulance
            for transportation from home to hospital in cold cases or vice
            versa, Don't worry, we will manage all of that &amp; coordinate what
            you need, just enjoy peace of mind, professional guidance &amp;
            receive reports of each step &amp; make your parents enjoy best
            patient experience management. Subscription to Eshfaa Geriatric
            program is free! without any monthly or annual subscription fees,
            with no need for any prior approvals to subscribe, without any upper
            limit of age or health condition, just pay only for the service that
            is really needed, with discounts &amp; enjoy "Value-based care". If
            you are travelling abroad &amp; not present in Egypt, searching for
            who cares for your parents with free charge on them, only with you,
            with continuous follow up &amp; reporting system for you even on
            daily basis, Don't worry, just contact Eshfaa &amp; we will handle
            everything, we will take care of them loke our families and enjoy
            concentration in your work &amp; activities with peace of mind with
            Eshfaa medical team
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_7();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_8">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_8();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-08.WebP"
            alt=""
          />
          <h2>Eshfaa C.D.M</h2>
          <p>
            Integrated health care with education and support They are the basis
            of our program to care for those with chronic diseases (Eshfaa CDM),
            which was specially designed to care for our elderly
            mothers&amp;fathers and help them live in better health with their
            chronic health conditions, Our medical team supported and helping
            them to slow down their conditions and direct them to a healthy
            lifestyle while providing all means of sponsoring their health.
            Learn about our program now..and enjoy the experience With the
            following Services: 1.Doctors at home: "Residents, specialists &amp;
            consultants" In different specialities. 2. Physiotherapy &amp;
            rehabilitation at home: For all physiotherapy specialities
            &amp;healing sports' injuries with best manual maneuvers &amp;
            availabe portable devices, performed by well-trained experienced
            registered physiotherapists only. 3. Nursing at home: With qualified
            staff of "nursing specialists, technicians &amp; nurse aids" 4.
            Laboratory services at home. 5. Radiology &amp; imaging at home:
            Including portable Xray, ultrasound, Doppler &amp; Duplex, under
            supervision of radiology consultants &amp; professors at cairo &amp;
            alex, ECG &amp; ECHO at home, Echo is performed by experienced
            cardiology specialists &amp; consultants only. 6. Rental of portable
            equipments to establish intermdiate care unit at home. 7.
            Renal_Dialysis at home: Unique outstanding advanced homecare
            service, performed by professional experienced team of renal
            dialysis at home, with advanced portable dialysis machines, under
            supervision of urology &amp; nephrology consultants. "This service
            is availabe now at Alex &amp; north coast, soon will be availabe at
            cairo". 2. Ambulance cars: For cold cases transportation from home
            to hospitals &amp; vice versa. All homecare services are supervised
            by both: 1. Our team of doctors at Eshfaa Medical directory &amp;
            medical director, with daily reporting system for long term cases.
            2. Our team of quality specialists &amp; case managers under
            supervision of quality director for best quality control &amp;
            quality assurance.
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_8();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_9">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_9();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-09.WebP"
            alt=""
          />
          <h2>Eshfaa Peri-natal</h2>
          <p>
            In a World Health Organization report for the year 2015 The
            organization explained that 830 women lose their lives daily due to
            pregnancy and childbirth problems Therefore, It is a decisive and
            destiny period in the life of every woman It deserves and calls for
            special medical attention and care from doctors and a specialized
            medical team, professional, and keen, In Eshfaa, you do not need to
            worry about that any more In Eshfaa a specialized medical team for
            periodic care and a follow -up customer service team around the
            clock …only for your safety <br />
            Now meet Eshfaa Peri-natal
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_9();
            }}
          >
            Close
          </button>
        </div>
        <div className="card" id="pup_10">
          <button
            type="button"
            className="close"
            onClick={() => {
              hide_pup_10();
            }}
          >
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-10.WebP"
            alt=""
          />
          <h2>Eshfaa Special</h2>
          <p>
            The 1st healthcare program specially designed for people with
            disabilities, for professional case management &amp; care
            coordination for everyone of them, What ever his/her disability is,
            either congenital or accidental, starting from monitoring &amp;
            follow up from the 1st moment that a pregnant mother discovered that
            her baby will have congenital anomaly, genetic disorder, mental or
            physical disability, then post-natal care of this mother &amp; her
            baby, coordinating all diagnostic &amp; theraputic medical services,
            continuous follow up &amp; monitoring during the journey of this
            special son/ daughter through infancy, childhood, adolescence &amp;
            different stages of their life, before all of that we don't forget
            psychological &amp; spiritual support for those special parents. We
            pay great attention for people with accidental or pathological
            acquired disabilities, managing their medical cases, coordinating
            all healthcare services they need, even at home, we are their
            medical companion through their long journey of physiotherapy &amp;
            rehabilitation providing their with all prothesis &amp; medical
            equipments they need, supporting them to restore their lives &amp;
            return back to resume their work &amp; activities, with peace of
            mind &amp; enjoying Person-centered care.
          </p>
          <button
            className="btn-close"
            onClick={() => {
              hide_pup_10();
            }}
          >
            Close
          </button>
        </div>
      </div>
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
                          <a>Integrated homecare services</a>
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
                          <a>Laboratory Services</a>
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
                          <a>Radiology &amp; Imaging Services</a>
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
                          <a>Physiotherapy &amp; Rehabilitation </a>
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
                          <a>Medication Management</a>
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
                          <a>Hospital and Clinic booking</a>
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
                          <a>Telemedicine Services</a>
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
                          <a>ICUs, NICUs booking</a>
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
                          <a>Surgical Operations Coordination</a>
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
                          <a>On-Site Ambulance &amp; Services</a>
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
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-01.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-02.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-04.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-05.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-06.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-08.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-09.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-10.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-11.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-12.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-13.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-14.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-15.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-16.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-17.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-18.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-19.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-20.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
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
      <footer id="footer">
        {/* Start Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row footer">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="single-footer-widget">
                  <div className="section-heading">
                    <h2>Contact Info</h2>
                    <div className="line" />
                  </div>
                  <address className="contact-info">
                    <p>
                      <span className="fa fa-home" /> 3 Makram Ebeid Street,
                      Nasr City, Cairo, Egypt
                    </p>
                    <p>
                      <a href="tel:+201200777738">
                        <span className="fa fa-phone" /> 01200777738
                      </a>
                    </p>
                    <p>
                      <a href="https://wa.me/+201200777738">
                        <i className="fa-brands fa-whatsapp" /> 01200777738
                      </a>
                    </p>
                    <p>
                      <a href="http://www.linkedin.com/company/eshfaa">
                        <i className="fa-brands fa-linkedin" />
                        www.linkedin.com/eshfaa
                      </a>
                    </p>
                    <p>
                      <a href="http://www.facebook.com/eshfaa1">
                        <i className="fa-brands fa-facebook" />
                        www.facebook.com/eshfaa1
                      </a>
                    </p>
                    <p>
                      <a href="http://www.Instagram.com/eshfaa1">
                        <i className="fa-brands fa-instagram" />
                        www.Instagram.com/eshfaa1
                      </a>
                    </p>
                    <p>
                      <a href="https://m.youtube.com/channel/UCVeABOOrwFsw3gaHesQ8m9g/videos">
                        <i className="fa-brands fa-youtube" />
                        youtube.com/channel
                      </a>
                    </p>
                    <p>
                      <a href="http://www.twitter.com/eshfaa_app">
                        <i className="fa-brands fa-twitter" />
                        www.twitter.com/eshfaa
                      </a>
                    </p>
                    <p>
                      <a href="mailto:Info@eshfaa.com">
                        <i className="fa-solid fa-envelope" /> Info@eshfaa.com
                      </a>
                    </p>
                  </address>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="single-footer-widget">
                  <div className="section-heading">
                    <h2>Services</h2>
                    <div className="line" />
                  </div>
                  <ul className="footer-service">
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        Integrated home care services
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        Laboratory Services
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        Radiology &amp; Imaging
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        Physiotherapy &amp; Rehabilitation
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        Medication Management
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        Hospital &amp; Clinic booking
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        Telemedicine services
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        ICUs &amp; NICUs Booking
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a style={{ fontSize: "13px" }} href="#service">
                        <span className="fa fa-check" />
                        Surgical operations coordination
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        On-site &amp; Ambulance Services
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="single-footer-widget">
                  <div className="section-heading">
                    <h2>Our Programs</h2>
                    <div className="line" />
                  </div>
                  <ul className="footer-service">
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_1();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa plus <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_2();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa on-site
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_3();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa charity
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_4();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa Homecare
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_5();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa Tele medicin
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_6();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa Family
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_7();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa geriatric
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_8();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa CDM <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_9();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa peri-natal
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                    <li>
                      <span
                        className="pup-footer"
                        onClick={() => {
                          show_pup_10();
                        }}
                      >
                        <span className="fa fa-check" />
                        Eshfaa special
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="footer-copyright col-md-12">
                <p>
                  © Copyright 2022 &amp; Developed By
                  <a href="https://yehia-gamal.github.io/CodeTechStation/" rel="noreferrer" target="_blank">
                      CodeTechStation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
