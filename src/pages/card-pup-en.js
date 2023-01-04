import React from "react";

const CardPupEn = () => {
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
    </>
  );
};

export default CardPupEn;
