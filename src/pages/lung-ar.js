import React from "react";
import { Helmet } from "react-helmet";
import FooterAr from "./footer-ar";

const LungAr = () => {
  return (
    <>
      <Helmet>
        <html lang="ar" amp />
        <title>إشفاء</title>

        <style type="text/css">{`

          @media (max-width: 767px) {
            a.navbar-brand {
              width: 100%;
              display: flex;
              align-items: center;
            }

            .about .section-heading p {
              text-align: right !important;
            }

            .navbar-brand img {
              margin-top: 0px !important;
              margin-right: 5px !important;
            }

            .menu_area.home-blog .navbar-default .navbar-nav>li>a {
              font-size: 20px !important;
            }
          }

          .navbar-collapse.collapse {
            margin-bottom: 10px;
          }

          .row {
            direction: rtl
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

          p {
            direction: rtl;
            font-size: 18px;
          }

          .card p {
            text-align: right !important;
          }

          .navbar-default .navbar-nav>li>a {
            font-size: 18px;
          }

          .footer-service .pup-footer span {
            margin: 0 0 0 8px;
          }

          #header,
          .footer-middle .footer-copyright p {
            direction: ltr;
        }

        `}</style>
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
        <div className="menu_area home-blog">
          <nav
            className="navbar navbar-default navbar-fixed-top"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header">
                {/* LOGO */}
                {/* TEXT BASED LOGO */}
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
                  <li>
                    <a href="/Ar">الصفحة الرئيسية</a>
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
                  <h2>مقالات</h2>
                </div>
                <div className="blog-breadcrumbs-right">
                  <ol className="breadcrumb">
                    <li>انت هنا الان</li>
                    <li>
                      <a href="/Ar">الصفحة الرئيسية</a>
                    </li>
                    <li className="active">مقالات</li>
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
                            <h1 className="title-main">سرطان الرئة</h1>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-10.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              هل تعرف ما هو سرطان الرئة؟ وما ومدي خطورته؟ كيف
                              يمكن أن تصاب به؟ ما هى أعراضه؟ كم فرصة الشفاء منه؟
                              <br />
                              كل ذلك وأكثرعن سرطان الرئة سنستعرضه بالتفصيل في
                              هذا المقال، فهيا أبدأ معنا ولا تتردد.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">ما هو سرطان الرئة؟</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-10.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              سرطان الرئة هو نوع من أكثر أنواع السرطانات الخبيثة
                              انتشارا،والذي يصيب الرئتين وينتشر داخلهما ويمكنه
                              بعد ذلك أن يهاجروينتشرالى باقي أعضاء الجسم، وشأنه
                              شأن الأورام الخبيثة، يبدأ باضطراب في نمو خلايا
                              الرئتين والقصبة الهوائية، حيث تنمو وتنقسم بشكل
                              متسارع غير طبيعي، مما يؤدي الى انتشار الخلايا
                              السرطانية وتكون الأورام داخل الرئتين. <br />
                              ويعتبر سرطان الرئة من السرطانات القاتلة، حيث يصنف
                              من أكثر أنواع السرطانات التي تؤدي للوفاة، لما لا
                              وهو يدمرخلايا الرئتين الاسفنجيتين اللتان تمدان
                              الجسم بالأكسجين وتخلصه من ثاني أكسيد الكربون
                              ليستطيع القيام بوظائفه الحيوية، ويفقدهما القدرة
                              على أداء دورهما. <br />
                              والمسؤول الأكبر عن سرطان الرئة في أكثر من 90% من
                              الحالات هو التدخين، ويمكن أيضا أن يصاب به الاشخاص
                              الغير مدخنين، ولكن فرصة الاصابة ترتفع مع زيادة
                              فترة التدخين.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">ما هى أعراض سرطان الرئة؟</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-06.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              قد يكون سرطان الرئة من السرطانات الصامتة التي يمكن
                              أن تتطور دون ظهور أي أعراض حتى تصل لمراحل متطورة
                              خطيرة من المرض، وذلك من العوامل التي تؤدي لتصنيفه
                              ضمن الأمراض شديدة الخطورة. <br />
                              وهناك بعض الأعراض التي يمكن أن تظهر في المراحل
                              الأولى من المرض والتى تشير وجود الاصابة: <br />
                            </p>
                            <ul className="ul-blog">
                              <li>ضيق في النفس</li>
                              <li>سعال مزمن بدون تحسن، بل يسوء أكثر.</li>
                              <li>اصطحاب السعال ببلغم أو دم أحيانا.</li>
                              <li>بحه وتغير في الصوت.</li>
                              <li>ألم في الصدر يزداد مع التنفس أو السعال.</li>
                              <li>صوت صفير في الصدر مع التنفس.</li>
                              <li>
                                تكرر العدوى مثل التهاب الشعب الهوائية والالتهاب
                                الرئوي.
                              </li>
                              <li>ضعف وارهاق عام.</li>
                              <li>فقدان للشهية وفقدان للوزن.</li>
                            </ul>
                            <p className="p-blog">
                              ولكن هناك بعض الأعراض التي تعتبر نذير خطر عند
                              ظهورها، فتشير الى وصول سرطان الرئة لمرحلة متقدمة
                              وتشيرأيضا الى انتشاره باجزاء اخرى من الجسم، ويعتمد
                              ظهور هذه الأعراض على الجزء الذى انتشر به المرض:
                            </p>
                            <ul className="ul-blog">
                              <li>وجود كتل حول منطقة الرقبة والترقوة.</li>
                              <li>صداع.</li>
                              <li>دوخة.</li>
                              <li>اضطراب في التوازن.</li>
                              <li>تنميل في الأطراف.</li>
                              <li>ألم في منطقة الكتف.</li>
                              <li>الام في عظام الظهر.</li>
                              <li>
                                انتفاخ وتورم في الوجه والجزء العلوي من الجسم.
                              </li>
                              <li>اصفرار في العيون والجلد.</li>
                            </ul>
                            <p className="p-blog">
                              وهناك ايضا بعض الاعراض التي قد تظهر نتيجة افراز
                              الورم لمواد تشبه الهرمونات والتي تؤدي لخلل في بعض
                              وظائف الجسم، ومن هذه الأعراض:
                            </p>
                            <ul className="ul-blog">
                              <li>ضعف في العضلات.</li>
                              <li>عثيان وقئ.</li>
                              <li>ارتفاع ضغط الدم.</li>
                              <li>ارتفاع سكر الدم.</li>
                              <li>نوبات من الصرع.</li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              والان وبعد أن تعرفنا على الأعراض، فما هى أسباب
                              الاصابة بسرطان الرئة؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-09.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              كل الأشخاص معرضون للاصابة بسرطان الرئة، ولكن وجد
                              أن 90% من الاصابات ناتجة عن التدخين، فخلايا
                              الرئتين يتم تدميرها مع أول تعرض لخلايا الرئة لدخان
                              السجائر الملئ بالمواد المسرطنة، وهنا تزداد فرصة
                              الاصابة بالمرض. <br />
                              <br />
                              قد يكون جسمك في البداية قادر على التعامل مع
                              التدمير والتغير الذي يحدث في خلايا الرئتين، ولكن
                              مع التعرض المتكرروالمستمر للتلف الناتج عن دخان
                              السجائر، تتغير طبيعة الخلايا بشكل غير طبيعي مؤديا
                              الى تكون الخلايا السرطانية. <br />
                              والاقلاع عن التدخين في أي مرحلة حتى وان طالت
                              المدة، يقلل من نسبة الاصابة بسرطان الرئة.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              ومن عوامل الخطر التي تزيد من معدل الاصابة:
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-03.WebP"
                              alt=""
                            />
                            <p className="p-blog"></p>
                            <ul className="ul-blog">
                              <li>
                                استنشاق بعض الغازات والمواد المسرطنة مثل،
                                الزرنيخ والكروم والنيكل.
                              </li>
                              <li>وجود بعض الطفرات الجينية.</li>
                              <li>
                                العلاج الاشعادي المستخدم في علاج بعض السرطانات
                                الأخرى يمكن أن يزيد من معدل الاصابة بسرطان
                                الرئة.
                              </li>
                              <li>التدخين السلبي.</li>
                              <li>
                                وجود تاريخ مرضي ببعض الأمراض المزمنة التي تصيب
                                الرئة مثل، التدرن والالتهاب الرئوي المزمن
                                والتهاب الشعب الهوائية المزمن.
                              </li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">ما هى أنواع سرطان الرئة؟</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-11.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يوجد العديد من أنواع سرطان الرئة ومنها:
                              <br />
                              1_ سرطان الرئة ذو الخلايا الغير صغيرة: <br />
                              ويمثل 80_85% من أنواع سرطان الرئة، وينقسم الى
                              العيد من الأنواع، أكثرهم يستجيب بصورة كبيرة للعلاج
                              اذا تم تشخيصه في المراحل الأولى من المرض. <br />
                              2_ سرطان الرئة ذو الخلايا الصغيرة: <br />
                              يمثل حوالي 15-20 % من أنواع سرطان الرئة، ويعتبر
                              أكثر خطورة من سرطان الرئة ذو الخلايا الغير صغيرة.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              كيف يتم تشخيص سرطان الرئة؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-04.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              اذا ظهرت عليك أعراض من التي تم ذكرها مسبقا أو كان
                              لديك بعض عوامل الخطورة التي يمكن أن تزيد من
                              الاصابة بسرطان الرئة، فبالتأكيد ستذهب لزيارة
                              الطبيب للاطمئنان. <br />
                              ويبدأ تشخيص سرطان الرئة بفحص الطبيب للمريض ومعرفة
                              الأعراض وأخذ التاريخ المرضي كاملا، وفي حالة الشك
                              في الاصابة بالمرض سيتطلب ذلك اجراء بعض الفحوصات
                              الاخرى لاثبات أو نفي الاصابة. <br />
                              1. فحص كيمياء الدم. <br />
                              2. فحص تركيز غازات الدم. <br />
                              3. الفحوصات التصويرية: والتي يمكن من خلالها اكتشاف
                              كتل الورم <br />
                            </p>
                            <ul className="ul-blog">
                              <li>التصوير بالأشعة السينية.</li>
                              <li>التصوير بالرنين المغناطيسي.</li>
                              <li>التصوير بالأشعة المقطعية .</li>
                            </ul>
                            <p className="p-blog">
                              4. منظار القصبة الهوائية:والذي يتيح فرصة لفحص
                              خلايا الرئة عن قرب. <br />
                              5. الفحص المخبري للبلغم المصاحب للسعال. <br />
                              6. أخذ عينة نسيجية من الرئة لفحصها تحت الميكروسكوب
                              وتحديد ما اذا كانت الخلايا سرطانية ام لا.
                              <br />
                              7. اذا كانت نتيجة فحص العينة ايجابية، فذلك سيستدعي
                              عمل مسح ذري للعظام لتحديد مرحلة المرض ومدى
                              انتشاره.
                            </p>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              وهنا يأتي دور التشخيص المبكر لسرطان الرئة
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-07.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يجب على الأشخاص المعرضين بشكل أكبرللاصابة بسرطان
                              الرئة، اجراء فحص سنوي عن طريق التطوير بالاشعة
                              المقطعية وذلك للأشخاص الاتية:
                              <br />
                            </p>
                            <ul className="ul-blog">
                              <li>من هم في سن 50 ل80 عام.</li>
                              <li>المدخنين.</li>
                              <li>من سبق وتوقف عن التدخين خلال اخر 15 عام.</li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">علاج سرطان الرئة</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-05.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يعتمد البرنامج العلاجي لسرطان الرئة على عدة عوامل،
                              يضع على أساسها الطبيب المعالج البرنامج المناسب لكل
                              مريض، ومن هذة العوامل ما يلي:
                            </p>
                            <ul className="ul-blog">
                              <li>عمر المريض.</li>
                              <li>الحالة الصحية العامة.</li>
                              <li>نوع سرطان الرئة.</li>
                              <li>مرحلة المرض.</li>
                              <li>مدى انتشاره.</li>
                              <li>موضع الورم وحجمه.</li>
                            </ul>
                            <p className="p-blog">
                              1. التدخل الجراحي: <br />
                              التدخل الجراحي من أول الاختيارات خاصة لذا كان
                              المرض في المرحلة الأولى أو الثانية، فيتم استئصال
                              الورم وجزء من الخلايا السليمة من حوله ، ويمكن أيضا
                              أن يتم ازالة العقد الليمفاوية لفحصها. <br />
                              أما بالنسبة للعلاج الكيميائي أو الاشعاعي فيستخدم
                              قبل الجراحة في حالة كبر حجم الورم لتقليص حجمه قبل
                              استئصاله، ويمكن أن يستخدم أيضا بعد التدخل الجراحي
                              اذا كان هناك فرصة لعودة الخلايا السرطانية مرة
                              أخرى. <br />
                              2. العلاج الاشعاعي: <br />
                              يتم استخدام حزما طاقة مرتفعة من الأشعة السينية
                              والبروتونات ويتم توجيهها لنقاط دقيقة من الجسم
                              لتدمير الخلايا السرطانية. <br />
                              وقد يساعد في التخفيف من الأعراض المصاحبة للسرطان
                              مثل الألم، ويتم استخدامه قبل أو بعد الجراحة وعادة
                              ما يصاحبه العلاج الكيميائي. <br />
                              3. العلاج الكيميائي: <br />
                              عبارة عن أدوية معينة تؤخذ عن طريق الفم أو يتم
                              حقنها في الوريد لقتل الخلايا السرطانية، ويتم
                              استخدامة بعد الجراحة لقتل أي خلايا سرطانية متبقية
                              ولمنع معادوة انتشارها مرة أخرى. <br />
                              4. العلاج المناعي: <br />
                              في بعض مراحل السرطان المتقدمة قد يعجز الجهاز
                              المناعي في الجسم عن مواجهة الخلايا السرطانية التي
                              تعتمد طريقة للهروب من الجهاز المناعي، ففي هذه
                              الحالات يتم اللجوء للعلاج المناعي لمساعدة الجسم في
                              السيطرة على المرض. <br />
                              5. الرعاية التلطيفية: <br />
                              يتسبب سرطان الرئة والأثار الجانبية للعلاجات في
                              أعراض حادة ومؤلمة للمرضى مما يلزم التركيز على بعض
                              طرق العلاج لتخفيف حدة هذه الأعراض. <br />
                              فالاضافة الى أنه يمكن للأشخاص في المراحل المتقدمة
                              من المرض أن يختاروا عدم استكمال خطة العلاج، فهنا
                              يأتي دور الرعاية التلطيفية في تخفيف أعراض المرض
                              وليس معالجة السرطان نفسه.
                            </p>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              فرص النجاة ونسبة الشفاء من سرطان الرئة
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-08.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              دائما التشخيص المبكر لأي مرض يرفع من نسبة الشفاء،
                              وكذلك الأمر في حالة سرطان الرئة. <br />
                              وفرصة النجاة من سرطان الرئة عامة تعتمد على نوع
                              السرطان ومرحلته حين تم اكتشافه، ويعتمر طول عمر
                              مريض سرطان الرئة على سنه وحالته الصحية العامة ومدى
                              استجابة المرض للعلاج. <br />
                              لذا اذا تم الكشف المبكر عن سرطان الرئة وتلقى
                              المريض العلاج المناسب لحالته فذلك يرفع نسبة الشفاء
                              وفرصة النجاة لمدة خمس سنوات الي 50-53 %
                            </p>
                          </div>
                          <div className="box-blog">
                            <h2 className="title">
                              ما هى مضاعفات سرطان الرئة؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-01.WebP"
                              alt=""
                            />
                            <p className="p-blog"></p>
                            <ul className="ul-blog">
                              <li>
                                تكرار الاصابة بعدوى الجهاز التنفسي مثل الالتهاب
                                الرئوي.
                              </li>
                              <li>
                                زيادة معدل تجلط الدم وزيادة فرصة الاصابة بجلطات
                                الرئة.
                              </li>
                              <li>زيادة مستوى الكالسيوم في الدم.</li>
                              <li>
                                الضغط على العمود الفقري، مما ينتج عنه ألم ومشاكل
                                في الحركة.
                              </li>
                              <li>
                                زيادة الضغط على عضلة القلب مما يؤدي الى فشلها.
                              </li>
                              <li>
                                التأثير على الأعصاب وظهور أعراض مثل التنميل.
                              </li>
                              <li>
                                صعوبة في البلع بسبب انتشار المرض الى
                                المرئ./li&gt;
                              </li>
                              <li>تورم في الوجه.</li>
                            </ul>
                            <p />
                          </div>
                          <div className="box-blog">
                            <h2 className="title">الوقاية من سرطان الرئة</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/Lung-cancer/lung-02.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يمكنك تقليل خطر الاصابة بسرطان الرئة عن طريق اتباع
                              بعض من النصائح الاتية: <br />
                            </p>
                            <ul className="ul-blog">
                              <li>الاقلاع عن التدخين.</li>
                              <li>تجنب التعرض للمواد المسرطنة والاشعاعات.</li>
                              <li>اتباع نظام غذائي صحي.</li>
                              <li>ممارسة الرياضة والتخلص من الوزن الزائد.</li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">المراجع</h2>
                            <p className="p-blog"></p>
                            <ul className="ul-blog">
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.healthline.com/health/lung-cancer#risk-factors"
                                >
                                  https://www.healthline.com
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.mayoclinic.org/diseases-conditions/lung-cancer/symptoms-causes/syc-20374620"
                                >
                                  https://www.mayoclinic.org
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.mayoclinic.org/diseases-conditions/lung-cancer/diagnosis-treatment/drc-20374627 "
                                >
                                  https://www.mayoclinic.org
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.healthline.com/health/lung-cancer-causes"
                                >
                                  https://www.healthline.com
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.clevelandclinicabudhabi.ae/ar/health-hub/health-library/pages/lung-cancer.aspx"
                                >
                                  https://www.clevelandclinicabudhabi
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://altibbi.com/%D9%85%D8%B5%D8%B7%D9%84%D8%AD%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%84%D8%A7%D9%88%D8%B1%D8%A7%D9%85-%D8%A7%D9%84%D8%AE%D8%A8%D9%8A%D8%AB%D8%A9-%D9%88%D8%A7%D9%84%D8%AD%D9%85%D9%8A%D8%AF%D8%A9/%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D8%A7%D9%84%D8%B1%D8%A6%D8%A9"
                                >
                                  https://altibbi.com
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

      {/*=========== Start Footer SECTION ================*/}
      <FooterAr />
      {/*=========== End Footer SECTION ================*/}
    </>
  );
};

export default LungAr;
