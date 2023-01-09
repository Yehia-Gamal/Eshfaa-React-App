import React from "react";
import { Helmet } from "react-helmet";
import FooterAr from "./footer-ar";

const AntibioticAr = () => {
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
                            <h1 className="title-main">
                              مقاومة المضادات الحيوية
                            </h1>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-06.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              قبل أن نبدأ في سرد موضوعنا الرئيسي عن مقاومة
                              المضادات الحيوية سنتعرف على ماهية المضادات الحيوية
                              وطريقة عملها وأنواعها.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">ما هي المضادات الحيوية</h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-06.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              هى عبارة عن مواد علاجية يتم الحصول عليها بعدة طرق
                              سواء تصنيعها بشكل كامل أم استخلاصها من نباتات
                              طبيعية أو حتى استخدام الميكروبات لإنتاجها. <br />
                              وتتواجد المضادات الحيوية في عدة أشكال: <br />
                            </p>
                            <ul className="ul-blog">
                              <li>أقراص</li>
                              <li>كبسولات</li>
                              <li>شراب</li>
                              <li>كريمات</li>
                              <li>مراهم موضعية</li>
                              <li>حقن وريدية</li>
                            </ul>
                            <p className="p-blog">
                              تستخدم المضادات الحيوية في علاج الأمراض الناتجة عن
                              البكتيريا حيث أنها تمنع نمو الميكروبات أو تبطئ من
                              معدل تكاثرها. <br />
                              وتعتبر المضادات الحيوية غير فعالة في حالة الأمراض
                              التي تنتج من عدوى فيروسية مثل الانفلونزا ونزلات
                              البرد. <br />
                              ويعتمد اختيار نوع المضاد الحيوي على نوع البكتيريا
                              المسببة للمرض والحالة الصحية للمريض واحتمالية وجود
                              مقاومة البكتيريا للمضادات الحيوية من عدمها.
                            </p>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              ما هى أنواع المضادات الحيوية ؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-11.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. مضادات حيوية واسعة المجال
                              <br />
                              لعلاج مجموعة متعددة وواسعة من العدوى البكتيرية.
                              <br />
                              2. مضادات حيوية ضيقة المجال
                              <br />
                              تقتصر فاعليتها ضد مجموعة محددة من أنواع البكتيريا.
                              <br />
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              كيف تعمل المضادات الحيوية ؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-07.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              هناك نوعان من المضادات الحيوية حسب طريقة عملها:
                              <br />
                              1. مضادات حيوية قاتلة للميكروبات <br />
                              تقوم بقتل وتدمير البكتيريا عن طريق منع تكون مكونات
                              الخلية البكتيرية. 2. مضادات حيوية مثبطة للميكروبات
                              <br />
                              تقوم بتثبيط نمو البكتيريا وبالتالي تحد قدرتها على
                              التكاثر والانتشار. <br />
                              وطريقة عملهما ضد البكتيريا تكون كالاتي: <br />
                            </p>
                            <ul className="ul-blog">
                              <li>مهاجمة الجدار الخارجي للخلية وتدميره</li>
                              <li>منع تكاثر ونمو البكتيربا</li>
                              <li>
                                منع تكوين البروتينات داخل الخلية البكتيرية
                              </li>
                            </ul>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              ما هى المدة التي تحتاجها المضادات الحيوية كي تعمل؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-08.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              تبدأ المضادات الحيوية في العمل ضد البكتيريا بمجرد
                              تناولها ولكن لا تظهر أعراض التحسن الا بعد 2 ل3
                              أيام. <br />
                              وتعتمد سرعة التحسن بعد استخدام المضادات الحيوية
                              على نوع العدوى التي يتم علاجها.
                              <br />
                              وعادة ما تكون الفترة المناسبة لاستخدام المضاد
                              الحيوي هى من 7ل14 يوم ويمكن أن تكون أقل من ذلك
                              ويقوم الطبيب بتحديد نوع المضاد الحيوي المناسب
                              للعدوى والفترة الازمة للاستمرار على الأدوية.
                              <br />
                              حتى وان يدأت تشعر بالتحسن بعد بضعة أيام من استخدام
                              المضاد الحيوي، فيجب عليك استكمال الجرعة كاملة حسب
                              ارشادات الطبيب للتأكد من التخلص التام من العدوي
                              ويساعد ذلك ايضا في الحد من مقاومة البكتيريا
                              للمضادات الحيوية. <br />
                              لذا استخدام المضادات الحيوية يجب أن يكون دائما تحت
                              اشراف الطبيب.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              ما هي مقاومة المضادات الحيوية ؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-05.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              مع الاستخدام الغير صحيح للمضادات الحيوية ووجود بعض
                              أنواع البكتيريا التي تتغير وتتحور شكليا، يصبح هذا
                              التغير عامل قوة للبكتيريا ضد المضاد الحيوي ويحميها
                              من وصول الدواء إليها ويضعف تأثيره عليها.
                              <br />
                              وبذلك ينجو نوع البكتيريا المتطور ويتكاثر مسببا
                              انتشار نوع جديد من البكتيريا مقاوم للمضادات
                              الحيوية.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              ما هي أسباب مقاومة المضادات الحيوية ؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-04.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. الطفرات الجينية <br />
                              تغير الحمض النووي للبكتيريا يؤدي إلى حدوث طفرة
                              وتطور يسمح للبكتيريا بمقاومة عمل المضادات الحيوية
                              فتستطيع التكاثر والانتشار. <br />
                              2. الإفراط في إستخدام المضادات الحيوية استخدامها
                              بدون ارشادات الطبيب أو بغير ضرورة في حالات العدوى
                              الفيروسية. <br />
                              3. سوء الاستخدام للمضادات الحيوية واسعة المجال بدل
                              من استخدام المضادات الحيوية ضيقة المجال التي
                              تستهدف البكتريا المسببة للعدوى بشكل أكثر تحديدا.
                              <br />
                              4. فرط استخدام المضادات الحيوية في المستشفيات أدى
                              ذلك أيضا إلى إتساع فرصة أنواع كثيرة من الميكروبات
                              للتطور ومقاومة المضادات الحيوية. <br />
                              5. استخدام المضادات الحيوية لأغراض أخرى غير صحيحة
                              مثل إضافتها لبعض أنواع الأعلاف الزراعية.
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              كيف يمكن أن تسيء استخدام المضادات الحيوية ؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-01.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              الإفراط في استخدام المضادات الحيوية واستخدامها
                              بدون ارشادات الطبيب أدى إلى ظهور مشكلة خطيرة وهى
                              ارتفاع عدد أنواع البكتيريا المقاومة للمضادات
                              الحيوية وذلك الأمر الذي أفقد كثير من الأدوية
                              فاعليتها مقابل أنواع عديدة من البكتيريا. <br />
                              لذا أصبح هناك الكثير من حالات العدوى البكتيرية
                              التي لا تنجح المضادات الحيوية في علاجها بشكل تام
                              أو حتى تفشل الأدوية في علاجها تمامًا. <br />
                              و يطلق على هذة الأنواع من البكتيريا اسم البكتيريا
                              المقاومة للمضادات الحيوية. <br />
                              تعالج المضادات الحيوية العدوى الناتجة عن البكتيريا
                              ومن سوء الاستخدام أن يتم استخدام المضادات
                              <br />
                              الحيوية في حالات العدوى الفيروسية مثل: <br />
                            </p>
                            <ul className="ul-blog">
                              <li>نزلات البرد والانفلونزا.</li>
                              <li>التهاب القصبات الهوائية.</li>
                              <li>معظم أنواع السعال.</li>
                              <li>السعال الديكي.</li>
                              <li>بعض إلتهابات الأنف والأذن.</li>
                              <li>
                                معظم أنواع التهابات الحلق ما عدا إلتهاب الحلق
                                العديد الناتج عن البكتيريا العقدية.
                              </li>
                            </ul>
                            <p className="p-blog">
                              وفي حالة استخدام المضادات الحيوية في العدوى
                              الفيروسية فإن ذلك سيتسبب في مهاجمة الدواء للبكتريا
                              النافعة الموجودة في الجسم بالإضافة لأنه لن يحسن من
                              أعراض العدوى الفيروسية بل قد ينتج عنه أعراض جانبية
                              أخرى.
                            </p>
                            <p />
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              ما هي الطرق الدفاعية للبكتيريا لمقاومة المضادات
                              الحيوية ؟
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-12.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. منع دخول المضاد الحيوي إلى الخلية عن طريق تغيير
                              حجم فتحات جدار الخلية. <br />
                              2. التخلص من جزيئات الأدوية التي تعبر الجدار
                              بالفعل عن طريق المضخات الموجودة في جدار الخلية
                              البكتيرية. <br />
                              3. إذا لم تستطع الخلية طرد المضاد الحيوي للخارج
                              فإنها تلجأ لإستخدام الإنزيمات التي تعمل على تفكيك
                              وتدمير المضاد الحيوي وتفقده فاعليته. <br />
                              4. تغيير شكلي في مستقبلات المضاد الحيوي في الخلية
                              حتى لا تستطيع الأدوية التعرف عليها
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">
                              أنواع البكتيريا المقاومة للمضادات الحيوية:
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-10.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. MRSA <br />
                              بكتيريا المكورات العنقودية الذهبية المقاومة
                              للميثيسيلين. 2. VRE <br />
                              بكتيريا المكورات المعوية المقاومة للفانكومايسين.
                              <br />
                              3. البكتيريا المنتقلة عن طريق الاتصال الجنسي
                              المسببة لمرض السيلان. <br />
                              4. المكورات العقدية المقاومة البنسلين والتي تسبب
                              الإلتهاب الرئوي.
                            </p>
                          </div>
                          <div className="box-blog">
                            <h2 className="title">
                              تشخيص العدوى المقاومة للمضادات الحيوية
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-09.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يجب تحديد نوع الميكروب المسبب للعدوى ونوع المضادات
                              الحيوية التي يمكن أن يكون هناك مقاومة لها وذلك عن
                              طريق: <br />
                              1. فحص عينات دم، بول، براز، بلغم، أو غيره حسب نوع
                              العدوى ويتم الفحص تحت الميكروسكوب. <br />
                              2. زراعة العينات لإتاحة الفرصة الميكروب كي ينمو
                              ويتكاثر ويتم تحديد نوعه واختبار مقاومته لأنواع
                              المضادات الحيوية المختلفة .
                            </p>
                          </div>
                          <div className="box-blog">
                            <h2 className="title">
                              أضرار مقاومة المضادات الحيوية
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-02.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              1. زيادة أعداد الإصابة بالعدوى وارتفاع نسب الوفاه.
                              <br />
                              2. زيادة حدة المرض. <br />
                              3. فشل العلاج وتحول المرض لمشكلة مزمنة. <br />
                              4. تكرار الإصابة بالعدوى. <br />
                              5. زيادة الفترة اللازمة للتعافي. <br />
                              6. المكوث بالمستشفيات لفترات أطول. <br />
                              7. زيادة الإصابة بالآثار الجانبية للأدوية. <br />
                              8. زيادة تكلفة العلاج .
                            </p>
                          </div>
                          <div className="box-blog">
                            <h2 className="title">
                              الاستخدام الصحيح للمضادات الحيوية
                            </h2>
                            <img
                              className="img-blog"
                              src="images/gallery/antibiotic/antibiotic-03.WebP"
                              alt=""
                            />
                            <p className="p-blog">
                              يجب وضع قواعد للإستخدام الصحيح للمضادات الحيوية
                              للحفاظ على فاعليتها تجاه الميكروبات وللحد من
                              الأثار الجانبية التي ستنتج عن مقاومة المضادات
                              الحيوية. <br />
                              1. عدم استخدام المضادات الحيوية في حالات العدوى
                              الفيروسية. <br />
                              2. الاتزام بنوع المضاد الحيوي الذي بوصفه الطبيب
                              <br />
                              واتباع ارشادات الطبيب في الاستخدام من حيث الجرعات
                              ومدة الاستخدام وعدم التوقف عنه إلا بعد إستكمال
                              الجرعة المحددة حتى لو تحسنت الأعراض. <br />
                              3. إتخاذ الإجراءات الوقائية لتجنب العدوى <br />
                              من خلال المحافظة على غسل الأيدي بشكل منتظم
                              والمحافظة على النظافة الشخصية وإتباع التدابير
                              الوقائية في حالات انتشار عدوى معينة. <br />
                              4. أخذ اللقاحات يساعد في الوقاية من بعض الأمراض .
                              <br />
                              5. يجب على الاطباء وصف المضادات الحيوية في حالة
                              اللزوم فقط. <br />
                              6. توعية المريض حول كيفية استخدام المضادات الحيوية
                              بشكل صحيح. <br />
                              7. التوعية عن خطورة مقاومة المضادات الحيوية.
                              <br />
                            </p>
                          </div>
                          <hr />
                          <div className="box-blog">
                            <h2 className="title">المراجع</h2>
                            <p className="p-blog"></p>
                            <ul className="ul-blog">
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.healthline.com/health/how-do-antibiotics-work/"
                                >
                                  https://www.healthline.com
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/antibiotics/art-20045720"
                                >
                                  https://www.mayoclinic.org
                                </a>
                              </li>
                              <li>
                                <a
                                  className="a-blog"
                                  href="https://altibbi.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%B5%D9%8A%D8%AF%D9%84%D8%A9/%D9%85%D9%82%D8%A7%D9%88%D9%85%D8%A9-%D8%A7%D9%84%D9%85%D8%B6%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D9%8A%D8%A9-7484"
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
export default AntibioticAr;
