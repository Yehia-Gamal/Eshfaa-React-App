import React from "react";
import { Helmet } from "react-helmet";
import CardPupAr from "./card-pup-ar";
import FooterAr from "./footer-ar";

const HomeAr = () => {
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
        <html lang="ar" amp />
        <title>إشفاء</title>

        <style type="text/css">{`
          body {
            direction: rtl
          }
      
          #testimonial,
          #header,
          .doctors-area,
          .service-icon,
          .footer-middle .footer-copyright p,
          #sliderArea {
            direction: ltr;
          }
      
          p {
            direction: rtl;
            font-size: 18px;
          }
      
          .card p {
            text-align: right !important;
          }
      
          .navbar-default .navbar-nav>li>a {
            font-size: 16px;
          }
      
          .single-footer-widget p i {
            margin-left: 5px;
          }
      
          .footer-service li>a span {
            margin: 0 0 0 5px !important;
          }
      
          i.fa.fa-angle-double-left {
            margin: 0 5px 0 0 !important;
            color: var(--blue-theme);
          }

          .footer-service .pup-footer span {
            margin-left: 8px;
          }
      
          @media (max-width: 767px) {
            .navbar-collapse.collapse {
              text-align: right;
            }
          }
    `}</style>

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
      {/* Start Social media Buttons */}
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
                <a title="Choose english" className="icon-lang" href="/">
                  <button>En</button>
                </a>
                {/* LOGO */}
                <a className="navbar-brand" href="/Ar">
                  <img src="images/icons/logo.png" alt="logo" />
                  <span>إشفاء</span>
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul
                  id="top-menu"
                  className="nav navbar-nav navbar-right main-nav"
                >
                  <li title="Choose english" className="lang-earth">
                    <a href="/">
                      <p>Choose english </p>
                      <img src="./images/icons/lang.ico" alt="lang.icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#sliderArea">الصفحة الرئيسية</a>
                  </li>
                  <li>
                    <a href="#about">من نحن</a>
                  </li>
                  <li>
                    <a href="#meetDoctors ">البرامج</a>
                  </li>
                  <li>
                    <a href="#service">الخدمات</a>
                  </li>
                  <li>
                    <a href="#whychooseSection">لماذا اشفاء</a>
                  </li>
                  <li>
                    <a href="#counterSection">شركاء النجاح</a>
                  </li>
                  <li>
                    <a href="#homeBLog">مقالات</a>
                  </li>
                  <li>
                    <a href="#footer">تواصل معنا</a>
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
              <img src="images/cover/cover-08.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-09.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-10.WebP" alt="cover-img" />
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
                <h2>حول إشفاء</h2>
                <div className="line" />
                <p>
                  إشفاء هي عبارة عن منصة رعاية صحية رقمية متخصصة في إدارة
                  الحالات وتنسيق الرعاية لخدمات الرعاية الصحية المختلفة ، لتقديم
                  خدمات رعاية صحية متكاملة ، تم تأسيسها لتكون رفيقك الطبي في
                  رحلتك للتعافي من الألف إلى الياء ، للحصول على أفضل إدارة
                  لتجربة المريض (PEM) والاستمتاع بالرعاية التي تركزعلى الشخص
                  (PCC) مع الامتثال لمعايير جودة الرعاية الصحية الدولية ، والتي
                  يديرها فريق دعم عملاء طبي محترف ومدرب تدريباً عالياً. تقدم
                  إشفاء برامج رعاية صحية مخصصة لأنواع مختلفة من العملاء ،
                  المنظمات والشركات الناشئة ومنظمات العمل المدني ، تقدم خدمات
                  الرعاية الصحية المنزلية الرقمية المتكاملة ، والتطبيب عن بعد
                  وخدمات الرعاية الصحية في الموقع لمواقع الشركات ، بالإضافة إلى
                  خدمات الرعاية الصحية الأخرى من خلال شبكات طبية ضخمة مع شركات
                  مقدمي الرعاية الصحية الشريكة (أكثر من 4500 مقدم خدمة) ، تغطي
                  جميع المحافظات في مصر وقريبا في المملكة العربية السعودية.
                </p>
              </div>
            </div>
            <div id="about" className="row-box">
              <div className="box">
                <div className="vision">
                  <div className="section-heading">
                    <h2>رؤيتنا</h2>
                    <div className="line" />
                    <p>
                      أن نكون أفضل منصة خدمات رعاية صحية رقمية في منطقة الشرق
                      الأوسط وشمال إفريقيا ، مما يتيح الوصول الرقمي إلى خدمات
                      رعاية صحية متكاملة بجودة عالية وبتكلفة معقولة
                    </p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="mission">
                  <div className="section-heading">
                    <h2>رسالتنا</h2>
                    <div className="line" />
                    <p>
                      توفير أفضل إدارة لتجربة المريض ورعاية تتمحور حول الشخص من
                      خلال إدارة الحالة المهنية وتنسيق الرعاية وفقًا لأعلى
                      معايير جودة الرعاية الصحية
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-heading">
              <h2>قيمنا</h2>
              <div className="line line-values" />
            </div>
            <div className="row-box">
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">الجودة والإحترافية</h2>
                  <div className="line" />
                  <p>
                    نهجنا الرئيسي في قيادة أعمالنا هو من خلال القيادة عالية
                    الجودة ، لتقديم أعلى جودة بأفضل الأسعار المعقولة ، بطريقة
                    احترافية عالية من خلال فريق دعم طبي محترف ومدرب جيدًا.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">التعاطف والرحمة</h2>
                  <div className="line" />
                  <p>
                    نحن نهتم بعملائنا مثل عائلاتنا ، ونتفهم ونشارك مشاعرهم
                    وآلامهم ، بالشفقة والقلق على معاناتهم أو مصائبهم.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">
                    الرعاية المرتكزة حول الشخص <br /> إدارة تجربة المريض
                  </h2>
                  <div className="line" />
                  <p>
                    عملائنا هم جوهر تركيزنا ، فنحن نقدم أفضل إدارة لكل رحلة عميل
                    في جميع نقاط الإتصال من البداية إلى النهاية ، للوصول إلى
                    أعلى مستوى من رضاء العملاء.
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
                <h3>الملف التعريفي</h3>
                <p>
                  يمكنك الآن التعرف على جميع خدماتنا وبرامجنا بشكل مفصّل، قم
                  بتحميل الملف التعريفي الخاص بإشفاء..
                </p>
                <div className="readmore_area">
                  <a
                    href="https://drive.google.com/file/d/1MTxyW0dH0xzlMFRHKVeEXCgmDUJVc9st/view?usp=drivesdk"
                    target="_blank"
                    data-hover="الملف التعريفي"
                    rel="noreferrer"
                  >
                    <span>الملف التعريفي</span>
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
                <h3>إستمارة الحجز</h3>
                <p>
                  فقط بضغطة زر واحدة <br />
                  يمكنك الحصول على كل خدماتك للرعاية الصحية المتكاملة، في أفضل
                  وأكبر المراكز الطبية، أو في المنزل <br />
                  احجز خدمتك الآن..من إشفاء
                </p>
                <div className="readmore_area">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc7cZv482uTvTS8dOB8JiGcxfXESGp6TH8FAHWV700Cn3BHyA/viewform"
                    data-hover="الحجز"
                  >
                    <span>الحجز</span>
                  </a>
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
                  <h2>لماذا إشفاء؟</h2>
                  <div className="line" />
                </div>
              </div>
            </div>
            <div className="why-eshfaa col-lg-12 col-md-12">
              <div className="project-card">
                <div className="info">
                  <p>
                    فريق دعم طبي من ذوي الخبرة المدربين تدريباً جيداً ،
                    المحترفين في إدارة الحالات وتنسيق الرعاية
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    متخصصو الرعاية الصحية المؤهلين تأهيلاً عالياً والمختارين
                    بعناية من الأطباء وأخصائيي العلاج الطبيعي والصيادلة
                    والممرضات والكيميائيين والفنيين.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    شبكة طبية قوية وواسعة الانتشار تضم أكثر من4500 مقدم خدمات
                    تغطي جميع المحافظات ، بما في ذلك المستشفيات الكبيرة والمراكز
                    الطبية والعيادات والمختبرات ومراكز الأشعة وسلاسل الصيدليات
                    العملاقة.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    تطبيق أعلى معايير جودة الرعاية الصحية لتقديم الخدمة وإدارة
                    الحالات وتنسيق الرعاية لضمان أفضل إدارة لتجربة المريض لتحقيق
                    رعاية تتمحور حول الشخص.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    التركيز على القيمة للعملاء ، وتقديم المزيد من الفوائد
                    والتكاليف الأقل لضمان رعاية قائمة على القيمة.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    توفير برامج خدمات رعاية صحية متكاملة ، تجمع بين جميع الخدمات
                    الطبية اللازمة في مكان واحد ، سواء في المنزل أو في الموقع أو
                    في مقرات الرعاية الصحية المختلفة.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    رقمنة خدمات الرعاية الصحية ، مع نظام غير ورقي لإدارة الحالات
                    من خلال السجلات الطبية الإلكترونية (EMR) ، مع نظام إدارة
                    معلومات الرعاية الصحية المختص (HIMS) ، مما يضمن الأمان
                    والخصوصية.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    الاشتراك في برامج إشفاء مجاني ، بدون أي اشتراكات سنوية أو
                    شهرية ، دون الدفع لبطاقات الخصم ، ادفع فقط مقابل الخدمة
                    المطلوبة مع أعلى الخصومات المتوفرة.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    تغطية جميع أفراد الأسرة دون استثناء أي قريب ، وتغطية جميع
                    الأعمار دون قيود على العمر ، وتغطية جميع الأمراض دون حصر لأي
                    حالة طبية أو حالة صحية مزمنة، والاستفادة من جميع الأدوية
                    المطلوبة دون قيود أو موافقات مسبقة ، والتمتع بنظام إدارة
                    الرعاية الصحية الرقمية غير الورقي.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    الاستفادة من جميع طرق الدفع الآمن من خلال بوابة الدفع
                    الرقمية
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
                  <h2>تعرف على برامج إشفاء</h2>
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
      <CardPupAr />
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
                  <h2>خدمات إشفاء</h2>
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
                          <span>خدمات الرعاية المنزلية المتكاملة</span>
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
                          <span>التحاليل الطبية بالمنزل والمعمل</span>
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
                          <span>الآشعات بالمنزل والمركز</span>
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
                          <span>خدمات العلاج الطبيعي وإعادة التأهيل</span>
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
                          <span>خدمات إدارة وتوصيل الأدوية</span>
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
                          <span>حجز العيادات والمستشفيات</span>
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
                          <span>خدمات التطبيب عن بعد</span>
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
                          <span>
                            حجز العنايات المركزة والعنايات المركزة لحديثي
                            الولادة
                          </span>
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
                          <span>تنسيق العمليات الجراحية</span>
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
                          <span>خدمات وإسعافات المواقع</span>
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
                    <div className="counter-label">الشبكات الطبية</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">7000</div>
                    <div className="counter-label">مقدمي الخدمات</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">10000</div>
                    <div className="counter-label">العملاء</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">1000</div>
                    <div className="counter-label">تجارب المرضى</div>
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
                  <h2>شركاء النجاح</h2>
                  <div className="line" />
                  <p className="p-success">
                    للوصول لأعلى درجات الراحة والأمان وتحقيق رؤية إشفاء.. في
                    توفير الرعاية الصحية المتكاملة من الألف للياء تعاون مع كبرى
                    الكيانات الطبية في كل المحافظات <br />
                    تعرّف على شركاء النجاح
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
                  <h2>تعرفوا علي جمعيات ومؤسسات إشفاء</h2>
                  <div className="line" />
                  <p className="p-success">
                    إيماناً منا بالمسئولية المجتمعية للشركة تتشرّف إشفاء بتقديم
                    خدماته لهذه الكيانات
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
                  <h2>آراء عملائنا</h2>
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
                  <h2>مقالات اشفاء</h2>
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
                              <a href="/HeartAr">
                                <img
                                  src="images/gallery/heart/heart-06.WebP"
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
                            <h2>فشل عضلة القلب </h2>
                            <p>
                              فشل عضلة القلب لا يعني أن القلب لم يعد يعمل بعد
                              ولكنه يحتاج لبعض المساعدة ليعمل بشكل أفضل، عادة ما
                              يكون مرضًا مزمنًا لا تتحسن أعراضه ولكن يمكن
                              السيطرة عليها لسنوات عديدة خاصة إذا تم إكتشافه في
                              وقت مبكر وتم إتباع الخطة العلاجية المناسبة...
                            </p>
                            <div className="readmore_area">
                              <a href="/HeartAr" data-hover="قراءة المزيد">
                                <span>قراءة المزيد</span>
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
                              <a href="/LungAr">
                                <img
                                  src="images/gallery/Lung-cancer/lung-10.WebP"
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
                            <h2>سرطان الرئة</h2>
                            <p>
                              هل تعرف ما هو سرطان الرئة؟ وما ومدي خطورته؟ كيف
                              يمكن أن تصاب به؟ ما هى أعراضه؟ كم فرصة الشفاء منه؟
                              كل ذلك وأكثرعن سرطان الرئة سنستعرضه بالتفصيل في
                              هذا المقال، فهيا أبدأ معنا ولا تتردد.
                            </p>
                            <div className="readmore_area">
                              <a href="/LungAr" data-hover="قراءة المزيد">
                                <span>قراءة المزيد</span>
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
                              <a href="/AntibioticAr">
                                <img
                                  src="images/gallery/antibiotic/antibiotic-01.WebP"
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
                            <h2>مقاومة المضادات الحيوية</h2>
                            <p>
                              تستخدم المضادات الحيوية في علاج الأمراض الناتجة عن
                              البكتيريا حيث أنها تمنع نمو الميكروبات أو تبطئ من
                              معدل تكاثرها. وتعتبر المضادات الحيوية غير فعالة في
                              حالة الأمراض التي تنتج من عدوى فيروسية مثل
                              الانفلونزا ونزلات البرد.
                            </p>
                            <div className="readmore_area">
                              <a href="/AntibioticAr" data-hover="قراءة المزيد">
                                <span>قراءة المزيد</span>
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
      <FooterAr />
      {/*=========== End Footer SECTION ================*/}
    </>
  );
};

export default HomeAr;
