import React from "react";

const Antibiotic = () => {

  
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
        <div className="menu_area home-blog">
          <nav
            className="navbar navbar-default navbar-fixed-top"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header">
                {/* LOGO */}
                {/* TEXT BASED LOGO */}
                <a className="navbar-brand" href="index.html">
                  <img src="images/icons//logo.png" alt="logo" />
                  <span>ESHFAA</span>
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul
                  id="top-menu"
                  className="nav navbar-nav navbar-right main-nav"
                >
                  <li>
                    <a href="/">Home</a>
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
      {/*=========== START BLOG SECTION ================*/}
      <section id="blogArchive">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="blog-breadcrumbs-area">
              <div className="container">
                <div className="blog-breadcrumbs-left">
                  <h2>Blog</h2>
                </div>
                <div className="blog-breadcrumbs-right">
                  <ol className="breadcrumb">
                    <li>You are here</li>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active">Blog</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  {/* Start Blog Archive Area */}
                  <div className="blogArchive-area">
                    <div className="row">
                      {/* Start Blog Content */}
                      <div className="col-md-12 col-sm-12">
                        <div className="blog-content">
                          {/* Start blog pagination  */}
                          <div className="box-blog">
                            <h1 className="title-main">
                              Antibiotic Resistance
                            </h1>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-06-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              Before we begin to our main topic about antibiotic
                              resistance, we will talk about ,what antibiotics
                              are?, how they work?, and their types.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">What are antibiotics?</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-06-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              They are therapeutic materials obtained in several
                              ways, whether they are completely manufactured or
                              extracted from natural plants or even using
                              microbs to produce them. <br />
                              Antibiotics come in many forms:
                            </p>
                            <ul className="ul-blog">
                              <li>Tablets</li>
                              <li>Capsules</li>
                              <li>Syrups</li>
                              <li>Creams</li>
                              <li>Topical ointments</li>
                              <li>Intravenous injections</li>
                            </ul>
                            <p className="p-blog">
                              Antibiotics are used to treat diseases caused by
                              bacteria, as they prevent the growth of microbes
                              or slow the rate of their reproduction. <br />
                              Antibiotics are considered ineffective in the case
                              of diseases that result from viral infections such
                              as influenza and the common cold. <br />
                              The choice of the type of antibiotic depends on
                              the type of bacteria causing the disease, the
                              health status of the patient, and whether bacteria
                              are resistant to antibiotics or not.
                            </p>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              What are the types of antibiotics?
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-11-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. Broad spectrum antibiotics <br />
                              For the treatment of a wide variety of bacterial
                              infections. <br />
                              2. Narrow spectrum antibiotics <br />
                              It is only effective against a specific group of
                              bacteria. <br />
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">How do antibiotics work?</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-07-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              There are two types of antibiotics depending on
                              how they work: <br />
                              1. Bactericidal antibiotics <br />
                              It kills and destroys bacteria by preventing the
                              formation of bacterial cell components. <br />
                              2. Bacteriostatic antibiotics <br />
                              It inhibits the growth of bacteria and thus limits
                              their ability to multiply and spread. <br />
                              The mechanism of antibiotic effect against
                              bacteria include the following: <br />
                            </p>
                            <ul className="ul-blog">
                              <li>
                                Attacking and destroying the cell membrane.
                              </li>
                              <li>
                                Preventing the reproduction and growth of
                                bacteria.
                              </li>
                              <li>
                                Preventing the formation of proteins inside the
                                bacterial cell.
                              </li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              How long do antibiotics take to work?
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-08-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              Antibiotics begin to work against the bacteria as
                              soon as they are taken, but their effect do not
                              appear until after 2 to 3 days. <br />
                              How quickly you get better after using antibiotics
                              depends on the type of infection being treated.
                              <br />
                              Usually, the appropriate period for using the
                              antibiotic is from 7 to 14 days, and it can be
                              less than that, and the doctor determines the type
                              of antibiotic appropriate for the infection and
                              the appropriate period. <br />
                              Even if you start to feel better after a few days
                              of using the antibiotic, you must complete the
                              full dose as directed by your doctor to make sure
                              that the infection is completely eliminated and
                              this also helps in reducing the resistance of
                              bacteria to the antibiotics. <br />
                              Therefore, the use of antibiotics should always be
                              under the supervision of a physician.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              What is antibiotic resistance?
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-05-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              With the misusing of antibiotics and , of some
                              types of bacteria change and mutate
                              morphologically, this change protects them from
                              being affected by the drug and weakening its
                              effect on them. <br />
                              Thus, the mutated type of bacteria survives and
                              multiplies, causing the spread of a new type of
                              bacteria that is resistant to antibiotics.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              What are the causes of antibiotic resistance?
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-04-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. Gene mutations <br />
                              Changing the DNA of bacteria leads to a mutation
                              that allows bacteria to resist the action of
                              antibiotics, so they can multiply and spread.
                              <br />
                              2. Excessive use of antibiotics <br />
                              Using antibiotisc without doctor's instructions or
                              unnecessarily in cases of viral infection.
                              <br />
                              3. Misuse of broad spectrum antibiotics <br />
                              Instead of using narrow-spectrum antibiotics that
                              target the infection-causing bacteria more
                              specifically. <br />
                              4. Overuse of antibiotics in hospitals <br />
                              This also increases the opportunity for many types
                              of microbes to develop resistance to antibiotics.
                              <br />
                              5. Using antibiotics for other incorrect purposes,
                              such as adding them to some types of agricultural
                              feed. <br />
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              How can you misuse antibiotics?
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-01-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              Excessive using of antibiotics and using them
                              without doctor's instructions has led to the
                              emergence of a serious problem, which is
                              increasing number of antibiotic-resistant
                              bacteria, which has made many drugs lose their
                              effectiveness against many types of bacteria.
                              <br />
                              So there are a lot of bacterial infections that
                              antibiotics can't completely cure. <br />
                              These types of bacteria are called
                              antibiotic-resistant bacteria. <br />
                              Antibiotics treat infections caused by bacteria,
                              It is misuse of antibiotics for viral infections
                              such as: <br />
                            </p>
                            <ul className="ul-blog">
                              <li>Colds and flu.</li>
                              <li>Bronchitis</li>
                              <li>Most types of cough.</li>
                              <li>Whooping cough.</li>
                              <li>Some infections of the nose and ear.</li>
                              <li>
                                Most types of sore throat except for sore
                                throats caused by streptococcus bacteria.
                              </li>
                            </ul>
                            <p className="p-blog">
                              In the case of using antibiotics in a viral
                              infection, this will cause the drug to attack the
                              beneficial bacteria in the body, in addition, it
                              will not improve the symptoms of the viral
                              infection, but may result in other side effects.
                            </p>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              What are the defensive ways for bacteria to resist
                              antibiotics?
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-12-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. Preventing the entry of the antibiotic into the
                              cell by changing the size of the openings of the
                              cell wall. <br />
                              2. Elimination of drug molecules that already
                              cross the wall via pumps in the bacterial cell
                              wall. <br />
                              3. If the cell is unable to expel the antibiotic
                              out, it uses enzymes that break down and destroy
                              the antibiotic and lose its effectiveness. <br />
                              4. A morphological change in the antibiotic
                              receptors in the cell so that the drugs cannot
                              recognize them.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              Types of antibiotic-resistant bacteria:
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-10-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. MRSA <br />
                              Methicillin-resistant Staphylococcus aureus. 2.
                              VRE <br />
                              Vancomycin-resistant enterococcal bacteria. <br />
                              3. Bacteria transmitted through sexual contact
                              that cause gonorrhea. <br />
                              4. Penicillin-resistant streptococci that cause
                              pneumonia.
                            </p>
                          </div>
                          <div className="box-blog">
                            <h2 className="title">
                              Diagnosis of antibiotic-resistant infection:
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-09-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              The type of microbe causing the infection and the
                              type of antibiotics to which there may be
                              resistance must be determined by: <br />
                              1. Examination of blood, urine, stool, sputum, or
                              other samples according to the type of infection
                              <br />
                              The examination is done under the microscope.
                              <br />
                              2.Culture of samples to allow the microbe to grow
                              and multiply and to determine its type and test
                              its resistance to different types of antibiotics.
                            </p>
                          </div>
                          <div className="box-blog">
                            <h2 className="title">
                              Risks of antibiotic resistance:
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-02-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. Increasing the number of infections and high
                              death rates. <br />
                              2. Increasing the severity of the disease. <br />
                              3. Treatment fails and the disease turns into a
                              chronic problem. <br />
                              4. Recurring infection. <br />
                              5. Increase the period needed to recover. <br />
                              6. Staying in hospitals for longer periods. <br />
                              7. Increasing the incidence of side effects of
                              medicines. <br />
                              8. Increasing the cost of treatment.
                            </p>
                          </div>
                          <div className="box-blog">
                            <h2 className="title">
                              Proper use of antibiotics:
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-03-en.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              Rules must be established for the correct use of
                              antibiotics to maintain their efficacy against
                              microbes and to reduce the side effects that will
                              result from antibiotic resistance.
                              <br />
                              1. Do not use antibiotics in cases of viral
                              infection. <br />
                              2. Follow the type of antibiotic prescribed by the
                              doctor <br />
                              And follow the doctor's instructions about doses
                              and duration of use and not stop it until
                              completing the specified dose even if symptoms
                              improve. <br />
                              3. Take preventive measures to avoid infection
                              <br />
                              By maintaining regular hand washing, maintaining
                              personal hygiene, and following preventive
                              measures in cases of the spread of certain
                              infections. <br />
                              4. Taking vaccinations helps prevent some
                              diseases. <br />
                              5. Physicians should prescribe antibiotics only if
                              necessary. <br />
                              6. Educate the patient about how to use
                              antibiotics correctly. <br />
                              7. Awareness of the dangers of antibiotic
                              resistance.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">References</h2>
                            <p className="p-blog"></p>
                            <ul className="ul-blog">
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.healthline.com/health/how-do-antibiotics-work/"
                                >
                                  https://www.healthline.com/health/how-do-antibiotics-work
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/antibiotics/art-20045720"
                                >
                                  https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/antibiotics/art-20045720
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://altibbi.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%B5%D9%8A%D8%AF%D9%84%D8%A9/%D9%85%D9%82%D8%A7%D9%88%D9%85%D8%A9-%D8%A7%D9%84%D9%85%D8%B6%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D9%8A%D8%A9-7484"
                                >
                                  https://altibbi.com/%D9%85%D9%82%D8
                                </a>
                              </li>
                            </ul>
                            <p />
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
      {/*=========== END BLOG SECTION ================*/}
      {/*=========== Start Programs card.open SECTION ================*/}
      <div className="doctors-card">
        <div className="card" id="pup_1">
          <button type="button" className="close" onclick="hide_pup_1()">
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
          <button className="btn-close" onclick="hide_pup_1()">
            Close
          </button>
        </div>
        <div className="card" id="pup_2">
          <button type="button" className="close" onclick="hide_pup_2()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-02.WebP"
            alt=""
          />
          <h2>Eshfaa on-site</h2>
          <p>
            Are you seeking highly qualified onsite Healthcare service provider?
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
          <button className="btn-close" onclick="hide_pup_2()">
            Close
          </button>
        </div>
        <div className="card" id="pup_3">
          <button type="button" className="close" onclick="hide_pup_3()">
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
          <button className="btn-close" onclick="hide_pup_3()">
            Close
          </button>
        </div>
        <div className="card" id="pup_4">
          <button type="button" className="close" onclick="hide_pup_4()">
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
            one team of professional case managers &amp; care coordinators.
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
          <button className="btn-close" onclick="hide_pup_4()">
            Close
          </button>
        </div>
        <div className="card" id="pup_5">
          <button type="button" className="close" onclick="hide_pup_5()">
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
            partners. 7. Telemedicine for ICUs &amp; NICUs: <br />
            Establishing telemedicine systems &amp; devices for ICUs, CCUs,
            PICUs, NICUs &amp; stroke units, to have follow up &amp; second
            opinion real-time online consultation with our team of ICU experts
            at Egypt, KSA, Europe &amp; USA. 8. Telemedicine for Hospitals:
            <br />
            To establish satellite units for mega hospitals at remote areas or
            at specific campaigns, to connect doctors &amp; nurses at these
            satellite units with consultants at the main hospitals using
            telemedicine devices. 9. Telemedicine for Ambulance services: <br />
            Enabling paramedics to connect doctors during rescue patients using
            AR/VR goggles which enable real-time transmission of vital data to
            enable doctors to make &amp; take quick decisions to save lives, in
            addition to equipping ambulance cars &amp; aeroplanes with
            telemedicine devices to monitor patients inside throughout their way
            for emergency hospitals.
          </p>
          <button className="btn-close" onclick="hide_pup_5()">
            Close
          </button>
        </div>
        <div className="card" id="pup_6">
          <button type="button" className="close" onclick="hide_pup_6()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-06.WebP"
            alt=""
          />
          <h2>Eshfaa Family</h2>
          <p>
            Would you love to design your family insurance program according to
            your needs &amp; availabe budget? <br />
            Do you want to have specific family doctor for consultations of your
            family, knowing EMR of each family member &amp; medical support team
            for case management &amp; care coordination for all healthcare
            services your family needs with variable choices, guidance, best
            offers &amp; highest discounts? Or even full insurance coverage?
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
          <button className="btn-close" onclick="hide_pup_6()">
            Close
          </button>
        </div>
        <div className="card" id="pup_7">
          <button type="button" className="close" onclick="hide_pup_7()">
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
          <button className="btn-close" onclick="hide_pup_7()">
            Close
          </button>
        </div>
        <div className="card" id="pup_8">
          <button type="button" className="close" onclick="hide_pup_8()">
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
          <button className="btn-close" onclick="hide_pup_8()">
            Close
          </button>
        </div>
        <div className="card" id="pup_9">
          <button type="button" className="close" onclick="hide_pup_9()">
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
          <button className="btn-close" onclick="hide_pup_9()">
            Close
          </button>
        </div>
        <div className="card" id="pup_10">
          <button type="button" className="close" onclick="hide_pup_10()">
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
          <button className="btn-close" onclick="hide_pup_10()">
            Close
          </button>
        </div>
      </div>
      {/*=========== End Programs card.open SECTION ================*/}
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
                      <a onclick="show_pup_1()">
                        <span className="fa fa-check" />
                        Eshfaa plus <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_2()">
                        <span className="fa fa-check" />
                        Eshfaa on-site
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_3()">
                        <span className="fa fa-check" />
                        Eshfaa charity
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_4()">
                        <span className="fa fa-check" />
                        Eshfaa Homecare
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_5()">
                        <span className="fa fa-check" />
                        Eshfaa Tele medicin
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_6()">
                        <span className="fa fa-check" />
                        Eshfaa Family
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_7()">
                        <span className="fa fa-check" />
                        Eshfaa geriatric
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_8()">
                        <span className="fa fa-check" />
                        Eshfaa CDM <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_9()">
                        <span className="fa fa-check" />
                        Eshfaa peri-natal
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_10()">
                        <span className="fa fa-check" />
                        Eshfaa special
                        <i className="fa fa-angle-double-right" />
                      </a>
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
                  <a
                    rel="nofollow"
                    target="_blank"
                    href="https://yehia-gamal.github.io/CodeTechStation/"
                  >
                    CodeTechStation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*=========== End Footer SECTION ================*/}
      {/* JS file Programs Prups */}
    </>
  );
};

export default Antibiotic;
