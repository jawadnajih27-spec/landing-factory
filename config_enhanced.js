# Create an updated config.js with the enhanced templates
config_enhanced = '''// config.js — إعدادات مصنع صفحات الهبوط المحسّن
// قوالب احترافية بتصميم عصري ومؤثرات متقدمة

const CONFIG = {
  appName: "مصنع صفحات الهبوط الاحترافي",
  version: "2.0.0",

  // القوالب المتاحة - محسّنة بتصاميم Figma-like
  templates: [
    {
      id: "saas",
      name: "SaaS سينمائي",
      description: "تصميم داكن مع رسوم متحركة متقدمة ومؤثرات ضوئية",
      emoji: "🚀",
      color: "#6d28d9",
      file: "templates/template1_enhanced.html",
      fields: [
        { key: "TITLE",       label: "عنوان الصفحة (Tab)",     type: "text",     placeholder: "أداتي الرائعة" },
        { key: "HERO_TITLE",  label: "العنوان الرئيسي",        type: "text",     placeholder: "وفّر ساعات من عملك يومياً" },
        { key: "HERO_SUB",    label: "وصف قصير",               type: "textarea", placeholder: "أداة ذكية تساعدك على..." },
        { key: "CTA_TEXT",    label: "نص زر الدعوة",           type: "text",     placeholder: "ابدأ مجاناً" },
        { key: "CTA_LINK",    label: "رابط الزر",              type: "url",      placeholder: "https://example.com" },
        { key: "FEATURE_1",   label: "الميزة الأولى",           type: "text",     placeholder: "سريع جداً" },
        { key: "FEATURE_2",   label: "الميزة الثانية",          type: "text",     placeholder: "سهل الاستخدام" },
        { key: "FEATURE_3",   label: "الميزة الثالثة",          type: "text",     placeholder: "آمن بالكامل" },
        { key: "FOOTER_NAME", label: "اسم الشركة/المنتج",      type: "text",     placeholder: "مؤسستي" },
      ]
    },
    {
      id: "product",
      name: "منتج رقمي تفاعلي",
      description: "صفحة مبيعات عالية التحويل مع بطاقة منتج ثلاثية الأبعاد",
      emoji: "💎",
      color: "#ff6b6b",
      file: "templates/template2_enhanced.html",
      fields: [
        { key: "TITLE",         label: "عنوان الصفحة (Tab)",    type: "text",     placeholder: "كورسي المتميز" },
        { key: "PRODUCT_NAME",  label: "اسم المنتج",             type: "text",     placeholder: "كورس التسويق الرقمي" },
        { key: "TAGLINE",       label: "شعار قصير",              type: "text",     placeholder: "من صفر إلى محترف في 30 يوم" },
        { key: "DESCRIPTION",   label: "وصف المنتج",             type: "textarea", placeholder: "ستتعلم في هذا الكورس..." },
        { key: "PRICE",         label: "السعر",                  type: "text",     placeholder: "297 ريال" },
        { key: "CTA_TEXT",      label: "نص زر الشراء",           type: "text",     placeholder: "اشتري الآن" },
        { key: "CTA_LINK",      label: "رابط الشراء",            type: "url",      placeholder: "https://payment.link" },
        { key: "BONUS_1",       label: "بونص 1",                 type: "text",     placeholder: "مجموعة قوالب احترافية" },
        { key: "BONUS_2",       label: "بونص 2",                 type: "text",     placeholder: "مجتمع خاص على تيليجرام" },
        { key: "SELLER_NAME",   label: "اسم البائع/المدرب",      type: "text",     placeholder: "أحمد محمد" },
      ]
    },
    {
      id: "service",
      name: "علامة شخصية عضوية",
      description: "تصميم عضوي بخلفيات متحركة وبطاقات خدمات تفاعلية",
      emoji: "✨",
      color: "#10b981",
      file: "templates/template3_enhanced.html",
      fields: [
        { key: "TITLE",       label: "عنوان الصفحة (Tab)",     type: "text",     placeholder: "خدماتي الاحترافية" },
        { key: "YOUR_NAME",   label: "اسمك",                   type: "text",     placeholder: "سارة العمري" },
        { key: "YOUR_ROLE",   label: "مجالك",                  type: "text",     placeholder: "مصممة جرافيك احترافية" },
        { key: "BIO",         label: "نبذة عنك",               type: "textarea", placeholder: "أساعد الشركات على بناء هويتها..." },
        { key: "SERVICE_1",   label: "الخدمة الأولى",           type: "text",     placeholder: "تصميم الهوية البصرية" },
        { key: "SERVICE_2",   label: "الخدمة الثانية",          type: "text",     placeholder: "تصميم السوشيال ميديا" },
        { key: "SERVICE_3",   label: "الخدمة الثالثة",          type: "text",     placeholder: "تصميم المطبوعات" },
        { key: "WHATSAPP",    label: "رقم واتساب (مع كود الدولة)", type: "text", placeholder: "966500000000" },
        { key: "EMAIL",       label: "البريد الإلكتروني",       type: "email",    placeholder: "me@example.com" },
      ]
    }
  ],

  // رسائل النظام
  messages: {
    authSuccess:   "✅ تم التحقق من التوكن بنجاح!",
    authFail:      "❌ التوكن غير صحيح أو منتهي الصلاحية",
    repoCreated:   "✅ تم إنشاء المستودع",
    fileUploaded:  "✅ تم رفع الصفحة",
    pagesEnabled:  "✅ تم تفعيل GitHub Pages",
    done:          "🎉 اكتمل النشر بنجاح!",
  }
};
'''

with open('/mnt/kimi/output/enhanced_templates/config_enhanced.js', 'w', encoding='utf-8') as f:
    f.write(config_enhanced)

print("✅ Config file updated for enhanced templates!")
print("\n" + "="*60)
print("📦 Enhanced Templates Package Created!")
print("="*60)
print("\nFiles created in /mnt/kimi/output/enhanced_templates/:")
print("  ├── template1_enhanced.html  (SaaS Cinematic)")
print("  ├── template2_enhanced.html  (Product 3D)")
print("  ├── template3_enhanced.html  (Freelance Organic)")
print("  └── config_enhanced.js       (Updated config)")
print("\n✨ Key improvements:")
print("  • GSAP animations & scroll triggers")
print("  • 3D transforms & perspective effects")
print("  • Dynamic gradient backgrounds")
print("  • Glassmorphism & blur effects")
print("  • Floating elements & orbital animations")
print("  • Bento grid layouts")
print("  • Interactive hover states")
print("  • Responsive mobile-first design")
