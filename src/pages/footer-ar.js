import React from "react";

const FooterAr = () => {
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
            الموظف المنتج هو كنز حقيقي في الشركة يجب الحفاظ عليه ، فوجوده هو
            خطوة لضمان حياة إنتاجية أطول للشركة ، لذلك فإن الأولوية الأولى
            للإنتاجية هي صحة جيدة لعقل منتِج مركّز دون إزعاج الأمراض التي يعطل
            استمرارية عطائه. لكل ذلك نقدم: برنامج إشفاء للشركات ، وهو برنامج طبي
            للشركات الصغيرة والمتوسطة والشركات الناشئة ، لدعم موظفيهم وعائلاتهم
            بخدمات مخفضة عند الطلب ، بدون رسوم اشتراك سنوية أو شهرية أو بطاقات
            خصم.
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
            هل تبحث عن مقدم خدمة رعاية صحية مؤهل تأهيلاً عاليًا في الموقع؟ اكتشف
            برنامج الرعاية الصحية في الموقع: "إشفاء لخدمات المواقع" المصمم
            خصيصًا للشركات والمصانع التي لديها مواقع عمل إما في المناطق القريبة
            أو النائية ، حيث يمكننا تقديم خدمات رعاية صحية مهنية رقمية متكاملة ،
            بدءًا من إنشاء عيادات في الموقع ، وتجهيزها بالمعدات والأدوية
            المطلوبة ، ثم التوظيف في الموقع الأطباء (DOS) والممرضات ، والاستفادة
            من خدمات الأشعة والمختبرات المحمولة ، وتعزيز بيئة العمل وخدمات
            العلاج الطبيعي في الموقع ، حتى إنشاء وحدات كاملة للطب عن بعد مدعومة
            بسيارات الإسعاف الرقمية أو الطائرات ، وتطبيق أعلى معايير الجودة ISO
            45001/2018 للرعاية الصحية والسلامة المهنية لأنظمة الإدارة ، مع
            موظفين مدربين تدريباً جيداً.
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
          <h2>Eshfaa charity</h2>
          <p>
            هل لديك مؤسسة خيرية أو تعمل مع منظمة غير حكومية مهتمة بدعم الحالات
            الطبية؟ اكتشف برنامج "إشفاء للمنظمات الخيرية والمجتمعية" هذا
            البرنامج مصمم خصيصًا للجمعيات الخيرية والمنظمات غير الحكومية التي
            تخدم الحالات الفقيرة التي تحتاج إلى خدمات طبية وجراحية مختلفة في
            مختلف المحافظات، لدعم حالاتهم الطبية بأفضل إدارة للحالات وتنسيق
            الرعاية بأعلى جودة وأقل الأسعار المتاحة وأعلى الخصومات ، لحفظ
            التبرعات والسماح للحالات الفقيرة بتحقيق أفضل إدارة لتجربة المريض
            مثلها مثل الأغنياء ، لأن صحتهم مسؤولية مشتركة ، وهم يستحقون الحصول
            على تجربة رعاية صحية متكاملة وفريدة من نوعها لا تقل عن الآخرين. لذلك
            نفتخر بأن تكتشف معنا برنامجنا الخاص بهم
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
            ترتيب وتنسيق خدمات الرعاية المنزلية ليس بالأمر السهل على الإطلاق!
            إذا كان لديك مريض يحتاج إلى خدمات رعاية منزلية مختلفة ، فسيتعين عليك
            الاتصال بكيانات مختلفة لترتيب كل من هذه الخدمات وبعد بذل جهود كبيرة
            ومشاحنات ، لن تتمكن من ضمان الجودة! <br />
            نحن فخورون بالإعلان عن برنامج إشفاء للخدمات المنزلية لخدمات الرعاية
            الصحية المنزلية الرقمية المتكاملة بأعلى جودة وتكلفة معقولة وراحة
            البال ، حيث يمكنك طلب كل ما تحتاجه من خدمات الرعاية المنزلية المتاحة
            والعثور عليها من مكان واحد مع فريق واحد من مديري الحالات المحترفين
            ومنسقي الرعاية. <br />
            الآن مع برنامج " إشفاء للرعاية المنزلية ، يمكنك تصميم برنامج الرعاية
            المنزلية المخصص لك 1. الأطباء في المنزل: "المقيمون ، المتخصصون ،
            الاستشاريون" في تخصصات مختلفة. <br />
            2. العلاج الطبيعي وإعادة التأهيل في المنزل: <br />
            لجميع تخصصات العلاج الطبيعي وشفاء الإصابات الرياضية مع أفضل
            المناورات اليدوية والأجهزة المحمولة المتوفرة ، والتي يتم إجراؤها من
            قبل أخصائيي العلاج الطبيعي المسجلين المدربين تدريباً جيداً. <br />
            3. خدمات التمريض في المنزل 4. خدمات التحاليل في المنزل. <br />
            5. الأشعة والتصوير بالمنزل: <br />
            بما في ذلك الأشعة السينية المحمولة ، والموجات فوق الصوتية ، والدوبلر
            ، والدوبلكس ، تحت إشراف استشاريي واساتذة الأشعة في القاهرة
            والإسكندرية ، و رسم القلب و الإيكو في المنزل ، يتم تنفيذ الإيكو من
            قبل متخصصين واستشاريين في أمراض القلب ذوي الخبرة فقط. <br />
            6. تأجير الأجهزة المحمولة لإنشاء وحدة رعاية متعددة في المنزل. <br />
            7. غسيل الكلى في المنزل: <br />
            خدمة رعاية منزلية متطورة فريدة من نوعها ، يقوم بها فريق محترف من ذوي
            الخبرة لغسيل الكلى في المنزل ، مع أجهزة غسيل الكلى المحمولة المتقدمة
            ، تحت إشراف استشاريي أمراض الكلى والمسالك البولية. <br />
            "هذه الخدمة متوفرة الآن في الإسكندرية والساحل الشمالي ، وستتوفر
            قريبًا في القاهرة". <br />
            8. سيارات الإسعاف: <br />
            لنقل الحالات من المنزل الى المستشفيات وبالعكس. يتم الإشراف على جميع
            خدمات الرعاية المنزلية من قبل كل من: <br />
            1. فريق الأطباء لدينا في دليل إشفاء الطبي والمدير الطبي ، مع نظام
            إبلاغ يومي للحالات طويلة الأجل. <br />
            2. لدينا فريق من المتخصصين في الجودة ومديري الحالات تحت إشراف مدير
            الجودة لأفضل مراقبة الجودة وضمان الجودة. <br />
            خدمات الرعاية المنزلية لدينا ليست مخصصة لـ B2C فقط ، ولكن أيضًا
            للشركات والمؤسسات والمستشفيات ومقدمي الرعاية الصحية الآخرين ، نحن
            على استعداد لنكون ذراعك في مجال الرعاية المنزلية الموثوق به ، مع
            جودة موثوقة لموظفيك وعملائك.
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
            التطبيب عن بعد ليس مكالمة هاتفية أو مجرد استشارة عبر الإنترنت!
            التطبيب عن بعد هو برنامج كامل بطرق مختلفة ، يصبح ضروريًا وإلزاميًا
            ومطلوبًا ومفضلًا في الحالات الخفيفة أو متابعة الأمراض المزمنة للعديد
            من الأشخاص ،خاصة بعد جائحة COVID19 ، الذي غيّر سلوك المستهلك لدى
            معظمنا ، أصبح الآن مقبولًا أكثر على أنه خطوة حيوية ضرورية حتى يصل
            المريض إلى الطبيب أو العكس. اكتشف برنامج "إشفاء للتطبيب عن بعد"
            واختر ما يناسبك وعملك مما يلي: <br />
            1. للأفراد: <br />
            يمكنك طلب استشارة عبر الإنترنت مع أحد أطبائنا في تخصصات مختلفة ،
            سواء كان مقيمًا أو متخصصًا أو استشاريًا ويمكنك اختيار طبيبك المفضل
            مع أفضل التقييمات ويمكنك اختيار الإتصال به إما مكالمة ڤيديو أو
            مكالمة هاتفية أو قم بالدردشة ، إما من خلال هاتفك أو جهازك اللوحي أو
            الكمبيوتر المحمول أو باستخدام تطبيق ملائم. <br />
            2. للشركات: <br />
            يمكنك الاستمتاع بباقات جذابة بأسعار تنافسية وخصومات كبيرة على
            الباقات الأعلى ، متوفرة لجميع موظفيك ، بجودة عالية وخفض التكلفة.{" "}
            <br />
            3. للعاملين في الموقع في المصانع والآبار والمناجم في المناطق
            النائية: <br />
            دعم العيادات في الموقع بأجهزة التطبيب عن بعد ، والتي تمكن الأطباء
            والممرضات في الموقع من الاتصال بمستشارين آخرين في مستشفيات الإحالة
            للحصول على رأي ثانٍ والمتابعة حتى الوصول إليهم ، إما عن طريق سيارات
            الإسعاف الرقمية أو الطائرات. <br />
            4. علم الأشعة عن بعد للمستشفيات ومراكز الأشعة: <br />
            دعم المستشفيات ومراكز الأشعة في نظام الإبلاغ عن حالاتهم من قبل فريق
            من استشاريي الأشعة ذوي الخبرة في هذا المجال. 5. التطبيب عن بعد في
            المنزل: <br />
            استخدام أجهزة التطبيب عن بعد في خدمات الرعاية المنزلية والزيارات
            لربط الممرضين والممرضات بالأطباء والمقيمين والمتخصصين والاستشاريين
            من أجل مراقبة أفضل للمرضى. <br />
            6. التطبيب عن بعد مع خبراء أجانب: <br />
            يمكنك الحصول على استشارات الرأي الثاني عبر الإنترنت مع خبراء أجانب
            في تخصصات طبية مختلفة من دول مختلفة مثل المملكة المتحدة وألمانيا
            والولايات المتحدة الأمريكية ، من خلال شبكة قوية من الخبراء الأجانب
            مع شركائنا. <br />
            7. التطبيب عن بعد لوحدات العناية المركزة: <br />
            إنشاء أنظمة وأجهزة التطبيب عن بعد لوحدات العناية المركزة ، ووحدات
            السكتة الدماغية ، والمتابعة والتشاور في الوقت الفعلي عبر الإنترنت مع
            فريق خبراء العناية المركزة لدينا في مصر والمملكة العربية السعودية
            وأوروبا والولايات المتحدة الأمريكية. <br />
            8. التطبيب عن بعد للمستشفيات: <br />
            إنشاء وحدات الأقمار الصناعية للمستشفيات العملاقة في المناطق النائية
            أو في حملات محددة لربط الأطباء وأخصائيي التمريض في هذه الوحدات
            الفضائية بالاستشاريين في المستشفيات الرئيسية باستخدام أجهزة التطبيب
            عن بعد. <br />
            9. التطبيب عن بعد لخدمات الإسعاف: <br />
            تمكين المسعفين من توصيل الأطباء أثناء إنقاذ المرضى باستخدام نظارات
            AR / VR التي تتيح نقل البيانات الحيوية في الوقت الفعلي لتمكين
            الأطباء من اتخاذ قرارات سريعة لإنقاذ الأرواح ، بالإضافة إلى تجهيز
            سيارات الإسعاف والطائرات بأجهزة التطبيب عن بعد لمراقبة المرضى
            بالداخل. طوال طريقهم إلى مستشفيات الطوارئ.
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
            هل تبحث عن خطة تأمين رعاية صحية مخصصة لعائلتك؟ هل تحب تصميم برنامج
            تأمين لأسرتك وفقًا لاحتياجاتك وميزانيتك المتوفرة؟ هل ترغب في الحصول
            على طبيب أسرة محدد للاستشارات الخاصة بأسرتك ، ومعرفة السجلات الطبية
            الإلكترونية (EMR) لكل فرد من أفراد الأسرة <br />
            وفريق الدعم الطبي لإدارة الحالة وتنسيق الرعاية لجميع خدمات الرعاية
            الصحية التي تحتاجها أسرتك مع خيارات وإرشادات متنوعة وأفضل العروض
            وأعلى الخصومات؟ أو حتى تغطية تأمينية كاملة؟ <br />
            اكتشف برنامج "إشفاء للعائلة" لتصميم برنامج ضمان خدمات الرعاية الصحية
            أو خطط التأمين المصممة خصيصًا ، يمكنك اختيار ما يناسبك لعائلتك من
            الخيارات التالية: <br />
            1. وجود مجموعة دعم طبي مخصصة لإدارة حالة عائلتك وتنسيق الرعاية وطلب
            "خدمات طبية مخفضة عند الطلب" تصل إلى 60٪ خصومات ، <br />
            بدون أي اشتراكات شهرية أو سنوية ، بدون شراء بطاقات ، ادفع فقط مقابل
            الخدمة التي تحتاجها مع خصومات واستمتع بـ "الرعاية القائمة على
            القيمة" <br />
            2. شراء بطاقات الخصم لعائلتك ، والتمتع بخصومات تصل إلى 70٪ ، اذهب
            بنفسك إلى المستشفيات ومقدمي الرعاية الصحية من شبكة قوية واسعة
            الانتشار. <br />
            3. اشترك في خطط تأمين عائلي محددة ، مع أحد شركائنا من شركات تأمين
            مختلفة ، واستمتع بتغطية تأمينية تتراوح من 80٪ إلى 100٪ ، وفقًا
            لميزانيتك واختيارك لما هو أكثر ملاءمة لك ولعائلتك ، واستمتع بالدعم و
            تقديم المشورة من مستشاري التأمين لدينا. <br />
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
            قد كرّس لنا آباؤنا حياتهم وقدموا لنا رعاية عظيمة عندما كنا صغارًا ،
            وحان دورنا لنقدم لهم أفضل رعاية يستحقونها، لهذا، أنشأنا برنامج
            "إشفاء لكبار السن" لإدارة خدمات الرعاية الصحية المتكاملة لكبار السن،
            مع أفضل إدارة للحالات ولتجربة المرضى لجعل آبائنا وأمهاتنا وأجدادنا
            وجداتنا يتمتعون بأفضل ما لدينا. <br />
            حول "الرعاية المرتكزة عليهم والتعاطف مع مشاعرهم واحتياجاتهم ،
            ومراعاة حساسياتهم لقبول الرعاية من الآخرين" يدار هذا البرنامج من قبل
            موظفين ذوي خبرة عالية من المتخصصين والإستشاريين في "طب المسنين"، وهم
            نادرون جداً و محترفون للغاية في التعامل مع حالات كبار السن الطبية{" "}
            <br />
            مع تخصصات أخرى محددة مثل طب الأعصاب والطب النفسي والمسالك البولية
            وطب العيون والأنف والأذن والحنجرة والطب الباطني وأمراض القلب وغيرها
            من التخصصات ذات الصلة بالمسنين. <br />
            نحن ندير تنسيق الرعاية بين أطباء المسنين وأخصائيي العلاج الطبيعي
            والممرضات لتقديم رعاية متكاملة ومتوافقة طويلة الأجل مع جميع التخصصات
            المطلوبة سواء في طب المسنين أو العلاج الطبيعي أو التمريض ، سواء في
            خدمات الرعاية المنزلية أو في المراكز أو المستشفيات <br />
            بالإضافة إلى ذلك ، نقدم خدمات تشخيصية وعلاجية أخرى قد يحتاجها مرضانا
            الكبار ، مثل خدمات التحاليل أو الأشعة سواء في المنزل أو في المعامل
            أو المراكز ، مع إدارة الأدوية من قبل الصيادلة لدينا و توصيل الأدوية
            في المنزل مع خصومات من صيدلياتنا ، <br />
            حتى إذا كانت حالاتهم تتطلب عملية جراحية أو دخول المستشفى لوحدات
            العناية المركزة أو احتاجوا إلى سيارات إسعاف للإنتقال من المنزل إلى
            المستشفى أو العكس، <br />
            لا تقلق ، سنقوم بإدارة كل شيء من ذلك وتنسيق ما تحتاجه ، فقط تمتع
            براحة البال والتوجيه المهني وتلقي التقارير عن كل خطوة واجعل والديك
            يستمتعان بأفضل إدارة لتجربة المريض. <br />
            الإشتراك في برنامج "إشفاء لكبار السن" مجاني! <br />
            بدون أي رسوم اشتراك شهرية أو سنوية، دون الحاجة إلى أي موافقات مسبقة،
            دون أي حد أقصى للسن أو حالة صحية، ادفع فقط مقابل الخدمة المطلوبة
            حقًا ، مع الخصومات والاستمتاع بـ "الرعاية القائمة على القيمة".
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
            الرعاية الصحية المتكاملة مع التعليم والدعم هم أساس برنامجنا لرعاية
            المصابين بأمراض مزمنة، والذي تم تصميمه خصيصًا لرعاية أمهاتنا وآباءنا
            المسنين ومساعدتهم على العيش بصحة أفضل مع ظروفهم الصحية المزمنة ،
            يقوم الفريق الطبي بدعمهم ومساعدتهم على إبطاء حالتهم وتوجيههم إلى نمط
            حياة صحي مع توفير جميع وسائل رعاية صحتهم. تعرف على برنامجنا الآن ..
            واستمتع بالتجربة مع الخدمات التالية: <br />
            1. الأطباء في المنزل: "المقيمون والمتخصصون والاستشاريون" في تخصصات
            مختلفة. <br />
            2. العلاج الطبيعي وإعادة التأهيل في المنزل: لجميع تخصصات العلاج
            الطبيعي ورياضات الشفاء " الإصابات باستخدام أفضل المناورات اليدوية
            والأجهزة المحمولة المتوفرة ، والتي يتم إجراؤها من قبل أخصائيي العلاج
            الطبيعي المسجلين والمدربين تدريباً جيداً فقط. <br />
            3. التمريض في المنزل: مع طاقم مؤهل من "أخصائيي التمريض والفنيين
            ومساعدات التمريض" <br />
            4. خدمات المعامل في المنزل. <br />
            5. الأشعة والتصوير في المنزل: بما في ذلك الأشعة السينية المحمولة
            والموجات فوق الصوتية والدوبلر والدوبلكس ، تحت
            <br />
            إشراف استشاريي وأساتذة الأشعة في القاهرة والإسكندرية ، وورسم القلب و
            الإيكو في المنزل ، يتم تنفيذ الإيكو من قبل متخصصين واستشاريين
            متخصصين في أمراض القلب فقط. <br />
            6. تأجير الأجهزة المحمولة لإنشاء وحدة رعاية متعددة في المنزل. <br />
            7. غسيل الكلى في المنزل: خدمة رعاية منزلية متطورة فريدة من نوعها ،
            يتم إجراؤها من قبل فريق متخصص من ذوي الخبرة من غسيل الكلى في المنزل
            ، مع أجهزة غسيل الكلى المحمولة المتقدمة ، تحت إشراف استشاريي أمراض
            الكلى والمسالك البولية. "هذه الخدمة متوفرة الآن في الإسكندرية
            والساحل الشمالي ، وستتوفر قريبًا في القاهرة". <br />
            9. سيارات الإسعاف: لنقل الحالات من المنزل إلى المستشفيات والعكس. يتم
            الإشراف على جميع خدمات الرعاية المنزلية من قبل كل من: <br />
            1. فريق الأطباء لدينا في دليل إشفاء الطبي والمدير الطبي ، مع نظام
            إبلاغ يومي للحالات طويلة الأجل. <br />
            2. لدينا فريق من المتخصصين في الجودة ومديري الحالات تحت إشراف مدير
            الجودة لأفضل مراقبة الجودة وضمان الجودة. <br />
            استشاريين أمراض الكلى. "هذه الخدمة متوفرة الآن في الإسكندرية والساحل
            الشمالي ، وستتوفر قريبًا في القاهرة".
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
            في تقرير لمنظمة الصحة العالمية لعام 2015 أوضحت المنظمة أن 830 امرأة
            تفقد حياتها اليومية بسبب مشاكل الحمل والولادة ، لذلك فهي فترة حاسمة
            ومصيرية في حياة كل امرأة وتستدعي عناية طبية خاصة و رعاية من أطباء
            وفريق طبي متخصص ومحترف وحريص ، في إشفاء لا داعي للقلق بعد الآن في
            إشفاء فريق طبي متخصص للرعاية الدورية وفريق خدمة عملاء متابع على مدار
            الساعة ... فقط من أجل سلامتك <br />
            <br />
            تعرفي الآن على Eshfaa peri_natal
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
            برنامج رعاية صحية مصمم خصيصًا للأشخاص ذوي الإعاقة ، لإدارة الحالات
            الطبية وتنسيق الرعاية للجميع ، مهما كانت إعاقته ، سواء كانت خلقية أو
            عرضية ، بدءًا من المراقبة والمتابعة من اللحظة الأولى التي تكون فيها
            الأم الحامل قد اكتشفت أن طفلها سيصاب بتشوه خلقي ، واضطراب وراثي ،
            وإعاقة عقلية أو جسدية ، ثم رعاية ما بعد الولادة لهذه الأم وطفلها ،
            وتنسيق جميع الخدمات الطبية التشخيصية والعلاجية ، والمتابعة المستمرة
            والمراقبة خلال رحلة هذا الابن الخاص خلال الطفولة والمراهقة ومراحل
            مختلفة من حياته ، قبل كل ذلك لا ننسى الدعم النفسي والروحي لهؤلاء
            الوالدين المميزين. <br />
            نحن نولي اهتمامًا كبيرًا للأشخاص الذين يعانون من إعاقات عرضية أو
            مرضية مكتسبة ، وإدارة حالاتهم الطبية ، وتنسيق جميع خدمات الرعاية
            الصحية التي يحتاجون إليها ، حتى في المنزل ، فنحن رفيقهم الطبي من
            خلال رحلتهم الطويلة في العلاج الطبيعي وإعادة التأهيل ، ونوفر لهم
            جميع الأجهزة والمعدات الطبية. يحتاجون إليها ، ودعمهم لاستعادة حياتهم
            والعودة لاستئناف عملهم وأنشطتهم ، مع راحة البال والاستمتاع بالرعاية
            التي تركز على الشخص.
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

      {/*=========== Start Footer SECTION ================*/}
      <footer id="footer">
        {/* Start Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row footer">
            <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="single-footer-widget">
                  <div className="section-heading">
                    <h2>تواصل معنا</h2>
                    <div className="line" />
                  </div>
                  <address className="contact-info">
                    <p className="home-location">
                      <span className="fa fa-home" /> 3 شارع مكرم عبيد، مدينة
                      نصر، القاهرة ،مصر
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
                        <i className="fa-brands fa-youtube" />{" "}
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
                    <h2>خدماتنا</h2>
                    <div className="line" />
                  </div>
                  <ul className="footer-service">
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات الرعاية المنزلية المتكاملة
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        التحاليل الطبية بالمنزل والمعمل
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        الآشعات بالمنزل والمركز
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات العلاج الطبيعي وإعادة التأهيل{" "}
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات إدارة وتوصيل الأدوية
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        حجز العيادات والمستشفيات
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات التطبيب عن بعد
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        حجز العنايات المركزة والعنايات المركزة لحديثي الولادة
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a style={{ fontSize: "16px" }} href="#service">
                        <span className="fa fa-check" />
                        تنسيق العمليات الجراحية
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات وإسعافات المواقع
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="single-footer-widget">
                  <div className="section-heading">
                    <h2>برامجنا</h2>
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
                        Eshfaa plus <i className="fa fa-angle-double-left" />
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
                        <i className="fa fa-angle-double-left" />
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
                        <i className="fa fa-angle-double-left" />
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
                        <i className="fa fa-angle-double-left" />
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
                        <i className="fa fa-angle-double-left" />
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
                        <i className="fa fa-angle-double-left" />
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
                        <i className="fa fa-angle-double-left" />
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
                        Eshfaa CDM <i className="fa fa-angle-double-left" />
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
                        <i className="fa fa-angle-double-left" />
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
                        <i className="fa fa-angle-double-left" />
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
                  <a
                    href="https://yehia-gamal.github.io/CodeTechStation/"
                    rel="noreferrer"
                    target="_blank"
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
    </>
  );
};

export default FooterAr;
