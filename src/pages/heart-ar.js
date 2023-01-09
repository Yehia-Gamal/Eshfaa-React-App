import React from "react";
import { Helmet } from "react-helmet";
import FooterAr from "./footer-ar";

const HeartAr = () => {
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
                {/* IMG BASED LOGO  */}
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
                            <h1 className="title-main">فشل عضلة القلب </h1>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-06.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              فشل عضلة القلب لا يعني أن القلب لم يعد يعمل بعد
                              ولكنه يحتاج لبعض المساعدة ليعمل بشكل أفضل، عادة ما
                              يكون مرضًا مزمنًا لا تتحسن أعراضه ولكن يمكن
                              السيطرة عليها لسنوات عديدة خاصة إذا تم إكتشافه في
                              وقت مبكر وتم إتباع الخطة العلاجية المناسبة فإن ذلك
                              يقلل من المضاعفات ويزيد من مستوى التحسن .
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">ما هو فشل عضلة القلب ؟</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-05.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              سبب ما يصبح القلب غير قادر على ضخ كمية الدم
                              اللازمة لباقي أعضاء الجسم،فيتراكم الدم في حجرات
                              القلب ويتراجع منها ليتراكم داخل الرئتين مسببًا
                              العديد من المشكلات الصحية، وتتأثر باقي أعضاء
                              الجسم، لما لا والدم هو سبيلها للحصول على الأكسجين
                              اللازم لقيامها بوظائفها الحيوية بشكل صحيح. يحدث كل
                              ذلك إما نتيجة أن عضلة القلب أصبحت ضعيفة لا تستطيع
                              الإنقباض لضخ الدم بالشكل الطبيعي، أو أصبحت أكثر
                              صلابة فلا تستطيع الإنبساط ليتم تعبئة حجرات القلب
                              بالدم. كما يمكن لفشل عضلة القلب أن يحدث في الجانب
                              الأيمن فقط من القلب أو في الجانب الأيسر فقط أو
                              كلاهما. فشل عضلة القلب يمكنه أنه يكون مرضًا مزمنًا
                              تظل أعراضه باقية على المدى البعيد وهذا يمثل معظم
                              الحالات، كما يمكنه أنه يحدث بشكل مفاجئ وحاد نتيجة
                              حدوث نوبة قلبية أو وجود بعض المشاكل في صمامات
                              القلب وفي هذه الحالة عادة ما تتحسن الأعراض في وقت
                              قصير.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">أعراض فشل عضلة القلب</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-04.WebP"
                              alt=""
                            />
                            <p className="p-blog"></p>
                            <ul className="ul-blog">
                              <li>الارهاق والضعف العام</li>
                              <li>عدم القدرة على بذل مجهود</li>
                              <li>
                                زيادة مفاجئة في الوزن بسبب تراكم السوائل في
                                الجسم
                              </li>
                              <li>فقدان في الشهية</li>
                              <li>سعال مزمن</li>
                              <li>إضطراب وزيادة في معدل ضربات القلب</li>
                              <li>انتفاخ في البطن</li>
                              <li>تورم في القدمين والساقين</li>
                              <li>انتفاخ أوردة الرقبة وظهورها بشكل ملاحظ</li>
                              <li>ضيق في النفس</li>
                              <li>
                                عدم القدرة على التنفس بشكل جيد عند الاستلقاء على
                                الظهر
                              </li>
                              <li>
                                استخدام أكثر من وسادة أثناء النوم لتحسين التنفس
                              </li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">أسباب فشل عضلة القلب</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-03.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              فشل عضلة القلب عادة ما يكون نتيجة الإصابة بمرض أخر
                              تسبب في عدم قدرة القلب على القيام بوظيفته
                              الطبيعية، ومن أشهر هذا الأمراض هو تصلب الشرايين
                              التاجية والذي يتسبب في ضيق الشرايين التي تغذي
                              القلب بالدم والأكسجين ويحدث ذلك نتيجة تراكم
                              الرواسب الدهنية في الشرايين ويتسبب في نقص تدفق
                              الدم للقلب وقد يؤدي إلى حدث نوبة قلبية إذا حدث
                              إنسداد كامل في الشريان التاجي. <br />
                              وهناك العديد من الأسباب الأخرى مثل: <br />
                            </p>
                            <ul className="ul-blog">
                              <li>وجود بعض العيوب الخلقية في عضلة القلب</li>
                              <li>
                                اعتلال صمامات القلب <br />
                                <br /> لأن صمامات القلب السليمة تحافظ على تدفق
                                الدم في الاتجاه الصحيح وعندما يحدث بها أي تلف
                                يضطر القلب للعمل بجهد أكبر سيؤدي إلى ضعفه.
                              </li>
                              <li>
                                تلف عضلة القلب <br /> نتيجة أسباب كثيرة كالعدوى
                                وتعاطي الكحوليات وبعض أنواع علاجات السرطان
                                كالعلاج الكيميائي
                              </li>
                              <li>إلتهاب عضلة القلب</li>
                              <li>تضخم عضلة القلب </li>
                              <li>عدم انتظام ضربات القلب</li>
                              <li>
                                ارتفاع ضغط الدم <br /> ويؤدي ذلك إلى إضطرار
                                القلب للعمل بجهد أكبر لضخ الدم للجسم وبمرور
                                الوقت لتصبح عضلة القلب أكثر ضعفًا أو أكثر تيبسًا
                                وغير قادرة على أداء وظيفتها.
                              </li>
                              <li>مرض السكري </li>
                              <li>الإصابة بفيروس نقص المناعة البشرية</li>
                              <li>الإصابة بفقر دم حاد</li>
                              <li>الزيادة المفرطة في الوزن</li>
                              <li>زيادة نشاط الغدة الدرقية </li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">أنواع فشل عضلة القلب</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-07.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              فشل عضلة القلب يمكن أن يحدث في الجانب الأيمن من
                              القلب أو الجانب الأيسر أو كلاهما معًا. وسنتعرف
                              أيضًا على فشل عضلة القلب الإنقباضي والإنبساطي. 1.
                              فشل الجانب الأيسر من عضلة القلب <br />
                              وهو الأكثر شيوعًا، ويعتبر البطين الأيسر الموجود في
                              الجزء السفلي من الجانب الأيسر من القلب هو المسؤول
                              عن ضح الدم المحمل بالأكسجين للجسم. <br />
                              فيحدث فشل الجانب الأيسر من عضلة القلب عندما يصبح
                              البطين الأيسر غير قادر على ضخ الدم بشكل كافً،
                              وبالتالي يتراجع الدم ليتراكم في الرئتين ويتسبب في
                              صعوبة التنفس وتراكم السوائل في الجسم. <br />
                              2.فشل الجانب الأيمن من عضلة القلب <br />
                              البطين الأيمن هو المسؤول عن ضح الدم الغير مؤكسد من
                              القلب للرئتين ليحدث تبادل الغازات ويتم تحميله
                              بالأكسجين، ويحدث فشل الجانب الأيمن من عضلة القلب
                              عندما يصبح البطين الأيمن غير قادر على أداء وظيفته.
                              ويحدث ذلك عادة نتيجة فشل الجانب الأيسر من عضلة
                              القلب وتراكم السوائل داخل الرئتين مما يعيق قدرة
                              البطين الأيمن على ضخ الدم للرئتين ويجعلها أكثر
                              صعوبة. <br />
                              وفي هذه الحالة يحدث إرتداد للسوائل إلى البطن
                              والقدمين والساقين مسببًا التورم. <br />
                              3.فشل عضلة القلب الإنقباضي <br />
                              يحدث عندما تصبح عضلة القلب ضعيفة فاقدة لقدرتها على
                              الإنقباض لضخ الدم للجسم، ويعتبر هذا النوع أكثر
                              شيوعًا في الرجال عن السيدات. <br />
                              4.فشل عضلة القلب الإنبساطي <br />
                              وفي هذه الحالة تصبح عضلة القلب أكثر صلابة عن
                              الطبيعي نتيجة أمراض أخرى تصيب القلب، ويفقد القلب
                              قدرته على الانبساط للإمتلاء بالدم مما يؤدي إلى نقص
                              وصول الدم لباقي أعضاء الجسم، ويعتبر أكثر شيوعًا في
                              السيدات.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              عوامل الخطر التي تزيد من معدل الإصابة بفشل عضلة
                              القلب
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-02.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يمكن لفشل عضلة القلب أن يحدث لأي شخص ولكن هناك بعض
                              الأمراض التي تزيد من خطر الإصابة:
                              <br />
                            </p>
                            <ul className="ul-blog">
                              <li>ارتفاع ضغط الدم</li>
                              <li>مرض السكري </li>
                              <li>امراض الشرايين التاجية</li>
                              <li>أمراض صمامات القلب</li>
                              <li>فقر الدم</li>
                              <li>زيادة نشاط الغدة الدرقية</li>
                              <li>نقص نشاط الغدة الدرقية</li>
                            </ul>
                            <p className="p-blog">
                              أيضا بعض السلوكيات السلبية في أسلوب الحياة مثل:
                            </p>
                            <ul className="ul-blog">
                              <li>التدخين</li>
                              <li>النظام الغذائي الملئ بالدهون والكوليسترول</li>
                              <li>الزيادة المفرطة في الوزن</li>
                              <li>الكسل وعدم ممارسة الرياضة </li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              كيف يتم تشخيص فشل عضلة القلب ؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-09.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يبدأ الطبيب بمعرفة التاريخ الطبي للمريض ومن ثم
                              يبدأ الفحص الإكلينيكي، متفقدًا علامات فشل عضلة
                              القلب ،مثل عدم انتظام ضربات القلب، تورم القدمين
                              والساقين ، انتفاخ أوردة الرقبة
                              <br />
                              بعد ذلك يطلب الطبيب بعض الفحوصات الطبية لتأكيد
                              التشخيص مثل: <br />
                              1.الموجات فوق الصوتية على القلب(الإيكو) وهى أكثر
                              الفحوصات الدقيقة لتشخيص فشل عضلة القلب، وتستخدم
                              موجات تعطي صورة كاملة عن القلب تتيح للطبيب معرفة
                              التلف الموجود بالقلب ويعرف من خلالها أيضًا القدرة
                              الإنقباضية والإنبساطية للقلب.
                              <br />
                              2.أشعة سينية على الصدر
                              <br />
                              3.رسم القلب <br />
                              4.أشعة رنين مغناطيسي على القلب <br />
                              5.مسح ذري على القلب <br />
                              6.القسطرة التشخيصية للقلب <br />
                              7.اختبار الجهد <br />
                              عبارة عن اختبار لقياس وظائف القلب أثناء بذل مجهود.
                              8.قياس مستوى الكوليسترول بالدم <br />
                              9.قياس مستوى بعض الببتدات بالدم والتي يمكن أن تكون
                              مؤشر لفشل عضلة القلب BNP blood test))
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">علاج فشل عضلة القلب</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-08.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يعتبر فشل عضلة القلب مرض مزمن يحتاج إلى خطة علاجية
                              مستمرة مدى الحياة، وتعتمد الخطة العلاجية على مدة
                              خطورة الحالة ونوع فشل عضلة القلب. الإكتشاف المبكر
                              للمرض والبدء في العلاج المناسب يحسن من الأعراض
                              بصورة كبيرة ويقلل من المضاعفات المتوقعة، وتحتاج
                              خطة العلاج إلى متابعة وتكرار للفحوصات بصورة منتظمة
                              كل ثلاثة إلى ستة أشهر. وتتضمن الخطة العلاجية واحد
                              أو أكثر من أنواع العلاجات الآتية: <br />
                              1.العلاج الدوائي <br />
                              ويمكن أن يتم الإعتماد عليه في خطة العلاج في
                              المراحل الأولى من المرض لتخفيف الأعراض ومنع تطور
                              الحالة للأسوأ حيث: <br />
                            </p>
                            <p className="p-blog">
                              2.الجراحة <br />
                              قد يلجأ الطبيب إلى التدخل الجراحي في بعض الحالات،
                              لاستبدال صمامات القلب أو جراحات خاصة بالشرايين
                              التاجية أو زرع أجهزة تنظيم ضربات القلب ومزيل
                              الرجفان القابل للزراعة. وقد تفشل كل طرق العلاج
                              السابقة في بعض الحالات ليتبقى خيار زراعة القلب
                              ولكن لا تعد العملية مناسبة للجميع وسيتم تقييم حالة
                              المريض أولا لمعرفة ما إذا كانت العملية خيارًا
                              آمنًا أم لا.
                            </p>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              ما هى مضاعفات فشل عضلة القلب ؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-06.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يمكن أن يؤدي فشل عضلة القلب إلى مشاكل صحية عديدة
                              في حالة عدم إتباع الخطة العلاجية المناسبة:
                              <br />
                            </p>
                            <ul className="ul-blog">
                              <li>سكتة أو نوبة قلبية.</li>
                              <li>فشل كلوي.</li>
                              <li>عدم انتظام ضربات القلب.</li>
                              <li>الجلطات الدموية</li>
                              <li>ضرر في الكبد</li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">الوقاية من فشل عضلة القلب</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/heart/heart-01.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              إتباع أسلوب حياة صحي يساعد في الوقاية من أمراض
                              القلب ويمنع حدوث المضاعفات. <br />
                            </p>
                            <ul className="ul-blog">
                              <li>الحفاظ على وزن معتدل</li>
                              <li>ممارسة الرياضة</li>
                              <li>تقليل الملح في الطعام</li>
                              <li>تقليل الدهون في الطعام</li>
                              <li>الإقلاع عن التدخين</li>
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
                                  href="https://www.healthline.com/health/heart-failure/"
                                >
                                  https://www.healthline.com
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.nhs.uk/conditions/heart-failure/"
                                >
                                  https://www.nhs.uk
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.mayoclinic.org/diseases-conditions/heart-failure/symptoms-causes/syc-20373142 "
                                >
                                  https://www.mayoclinic.org
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://altibbi.com/%D9%85%D8%B5%D8%B7%D9%84%D8%AD%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%82%D9%84%D8%A8-%D9%88-%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D9%8A%D9%8A%D9%86/%D9%82%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D9%82%D9%84%D8%A8 "
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

export default HeartAr;
