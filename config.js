// config.js — مصنع صفحات الهبوط v3
const CONFIG = {
  appName: "مصنع صفحات الهبوط",
  version: "3.0.0",

  templates: [
    {
      id: "saas",
      name: "SaaS — مداري ثلاثي الأبعاد",
      description: "للأدوات والتطبيقات التقنية · تأثير orbital 3D + bento",
      emoji: "🚀",
      color: "#6d28d9",
      file: "templates/template1.html",
      fields: [
        { key:"TITLE",       label:"عنوان التبويب",       type:"text",     placeholder:"أداتي الرائعة",             required:true  },
        { key:"HERO_TITLE",  label:"العنوان الرئيسي",     type:"text",     placeholder:"وفّر ساعات من عملك يومياً", required:true  },
        { key:"HERO_SUB",    label:"وصف قصير",             type:"textarea", placeholder:"أداة ذكية تساعدك على...",   required:true  },
        { key:"CTA_TEXT",    label:"نص الزر",              type:"text",     placeholder:"ابدأ مجاناً",               required:true  },
        { key:"CTA_LINK",    label:"رابط الزر",            type:"url",      placeholder:"https://example.com",       required:false },
        { key:"FEATURE_1",   label:"الميزة الأولى",         type:"text",     placeholder:"سرعة فائقة",               required:true  },
        { key:"FEATURE_2",   label:"الميزة الثانية",        type:"text",     placeholder:"سهل الاستخدام",            required:true  },
        { key:"FEATURE_3",   label:"الميزة الثالثة",        type:"text",     placeholder:"آمن بالكامل",              required:true  },
        { key:"FOOTER_NAME", label:"اسم الشركة / المنتج",  type:"text",     placeholder:"مؤسستي",                    required:true  },
      ]
    },
    {
      id: "product",
      name: "منتج رقمي — شرائح 3D",
      description: "كورسات ومنتجات رقمية · cursor مخصص + بطاقة دوارة",
      emoji: "💎",
      color: "#ff6b6b",
      file: "templates/template2.html",
      fields: [
        { key:"TITLE",        label:"عنوان التبويب",      type:"text",     placeholder:"كورسي المتميز",             required:true  },
        { key:"PRODUCT_NAME", label:"اسم المنتج",          type:"text",     placeholder:"كورس التسويق الرقمي",      required:true  },
        { key:"TAGLINE",      label:"شعار قصير",           type:"text",     placeholder:"من صفر إلى محترف في 30 يوم",required:true  },
        { key:"DESCRIPTION",  label:"وصف المنتج",          type:"textarea", placeholder:"ستتعلم في هذا الكورس...",  required:true  },
        { key:"PRICE",        label:"السعر",               type:"text",     placeholder:"297 ريال",                 required:true  },
        { key:"CTA_TEXT",     label:"نص زر الشراء",        type:"text",     placeholder:"اشتري الآن",               required:true  },
        { key:"CTA_LINK",     label:"رابط الشراء",         type:"url",      placeholder:"https://payment.link",     required:false },
        { key:"BONUS_1",      label:"البونص الأول",         type:"text",     placeholder:"مجموعة قوالب احترافية",    required:true  },
        { key:"BONUS_2",      label:"البونص الثاني",        type:"text",     placeholder:"مجتمع خاص على تيليجرام",   required:true  },
        { key:"SELLER_NAME",  label:"اسم البائع / المدرب", type:"text",     placeholder:"أحمد محمد",                required:true  },
      ]
    },
    {
      id: "platform",
      name: "منصة SaaS — تسعير + شهادات",
      description: "منصات متكاملة · navbar + pricing + testimonials + dashboard",
      emoji: "📊",
      color: "#22c55e",
      file: "templates/template3.html",
      fields: [
        { key:"TITLE",       label:"عنوان التبويب",      type:"text",     placeholder:"منصتي الرقمية",              required:true  },
        { key:"FOOTER_NAME", label:"اسم المنصة / الشركة",type:"text",     placeholder:"DigitalPro",                 required:true  },
        { key:"HERO_TITLE",  label:"العنوان الرئيسي",    type:"text",     placeholder:"طوّر أعمالك الرقمية",        required:true  },
        { key:"HERO_SUB",    label:"وصف الصفحة",          type:"textarea", placeholder:"أطلق مشاريعك ونظّم ملفاتك...",required:true },
        { key:"CTA_TEXT",    label:"نص الزر الرئيسي",    type:"text",     placeholder:"ابدأ الآن",                 required:true  },
        { key:"CTA_LINK",    label:"رابط الزر",           type:"url",      placeholder:"https://example.com",       required:false },
        { key:"FEATURE_1",   label:"الميزة الأولى",        type:"text",     placeholder:"سرعة في الإنجاز",          required:true  },
        { key:"FEATURE_2",   label:"الميزة الثانية",       type:"text",     placeholder:"تحليلات ذكية",             required:true  },
        { key:"FEATURE_3",   label:"الميزة الثالثة",       type:"text",     placeholder:"أمان وحماية",              required:true  },
        { key:"PRICE",       label:"السعر (للتسعير)",     type:"text",     placeholder:"49 ريال",                  required:true  },
      ]
    },
    {
      id: "service",
      name: "خدمة مستقلة — Hex Glitch 3D",
      description: "فريلانسرز · شعار hexagon + تأثير glitch + بطاقات ثلاثية الأبعاد",
      emoji: "⚡",
      color: "#00e5a0",
      file: "templates/template4.html",
      fields: [
        { key:"TITLE",     label:"عنوان التبويب",          type:"text",     placeholder:"خدماتي الاحترافية",         required:true  },
        { key:"YOUR_NAME", label:"اسمك",                   type:"text",     placeholder:"سارة العمري",               required:true  },
        { key:"YOUR_ROLE", label:"مجالك",                  type:"text",     placeholder:"مصممة جرافيك احترافية",     required:true  },
        { key:"BIO",       label:"نبذة عنك",               type:"textarea", placeholder:"أساعد الشركات على...",      required:true  },
        { key:"SERVICE_1", label:"الخدمة الأولى",           type:"text",     placeholder:"تصميم الهوية البصرية",     required:true  },
        { key:"SERVICE_2", label:"الخدمة الثانية",          type:"text",     placeholder:"تصميم السوشيال ميديا",     required:true  },
        { key:"SERVICE_3", label:"الخدمة الثالثة",          type:"text",     placeholder:"تصميم المطبوعات",          required:true  },
        { key:"WHATSAPP",  label:"واتساب (مع كود الدولة)", type:"text",     placeholder:"966500000000",              required:true  },
        { key:"EMAIL",     label:"البريد الإلكتروني",       type:"email",    placeholder:"me@example.com",           required:true  },
      ]
    },
    {
      id: "luxury",
      name: "فاخر متعدد الأغراض 👑",
      description: "Gold · Glassmorphism · Editorial · يدعم رفع الصور",
      emoji: "👑",
      color: "#c9a84c",
      file: "templates/template4luxury.html",
      hasImageUpload: true,
      fields: [
        { key:"TITLE",         label:"عنوان التبويب",            type:"text",     placeholder:"علامتي الفاخرة",           required:true  },
        { key:"BRAND_NAME",    label:"اسم العلامة / الشركة",     type:"text",     placeholder:"MAISON",                   required:true  },
        { key:"TAGLINE",       label:"الشعار الرئيسي",           type:"text",     placeholder:"حيث يلتقي الفن بالتميّز",  required:true  },
        { key:"HERO_SUB",      label:"وصف تحت الشعار",           type:"textarea", placeholder:"نقدم لك تجربة لا مثيل لها...",required:true},
        { key:"CTA_TEXT",      label:"نص الزر الرئيسي",          type:"text",     placeholder:"اكتشف الآن",               required:true  },
        { key:"CTA_LINK",      label:"رابط الزر",                type:"url",      placeholder:"https://example.com",      required:false },
        { key:"HERO_IMG",      label:"صورة الغلاف الرئيسية",     type:"image",    placeholder:"ارفع صورة أو أدخل رابط"              },
        { key:"ABOUT_IMG",     label:"صورة قسم من نحن",          type:"image",    placeholder:"ارفع صورة أو أدخل رابط"              },
        { key:"GALLERY_IMG1",  label:"صورة المعرض الأولى",       type:"image",    placeholder:"ارفع صورة أو أدخل رابط"              },
        { key:"GALLERY_IMG2",  label:"صورة المعرض الثانية",      type:"image",    placeholder:"ارفع صورة أو أدخل رابط"              },
        { key:"ABOUT_TITLE",   label:"عنوان قسم من نحن",         type:"text",     placeholder:"قصتنا",                    required:true  },
        { key:"ABOUT_TEXT",    label:"نص قسم من نحن",            type:"textarea", placeholder:"بدأت رحلتنا منذ...",       required:true  },
        { key:"OFFER_1_TITLE", label:"الميزة / العرض الأول",      type:"text",     placeholder:"جودة استثنائية",           required:true  },
        { key:"OFFER_1_DESC",  label:"وصف الميزة الأولى",         type:"text",     placeholder:"نختار كل تفصيل بعناية",   required:false },
        { key:"OFFER_2_TITLE", label:"الميزة / العرض الثانية",    type:"text",     placeholder:"تجربة فريدة",              required:true  },
        { key:"OFFER_2_DESC",  label:"وصف الميزة الثانية",        type:"text",     placeholder:"كل لحظة مصمّمة لك",       required:false },
        { key:"OFFER_3_TITLE", label:"الميزة / العرض الثالثة",    type:"text",     placeholder:"حصري لك",                  required:true  },
        { key:"OFFER_3_DESC",  label:"وصف الميزة الثالثة",        type:"text",     placeholder:"محدود لعدد مختار",         required:false },
        { key:"CTA2_TEXT",     label:"نص زر الختام",             type:"text",     placeholder:"ابدأ رحلتك الآن",          required:false },
        { key:"FOOTER_NAME",   label:"اسم في الفوتر",            type:"text",     placeholder:"MAISON",                   required:true  },
      ]
    }
  ],

  messages: {
    authSuccess:  "✅ تم التحقق بنجاح!",
    authFail:     "❌ التوكن غير صحيح أو منتهي الصلاحية",
    repoCreated:  "✅ تم إنشاء المستودع",
    fileUploaded: "✅ تم رفع الصفحة",
    pagesEnabled: "✅ تم تفعيل GitHub Pages",
    done:         "🎉 اكتمل النشر!"
  }
};
