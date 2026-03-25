
# Create the complete inline config with all 3 templates embedded
# This ensures templates work on GitHub Pages without external file dependencies

config_complete = '''// config.js — إعدادات مصنع صفحات الهبوط (نسخة القوالب المضمنة)
// جميع القوالب مضمنة inline لتعمل على GitHub Pages بدون مشاكل مسارات

const CONFIG = {
  appName: "مصنع صفحات الهبوط الاحترافي",
  version: "2.0.0",

  templates: [
    {
      id: "saas",
      name: "SaaS سينمائي",
      description: "تصميم داكن مع رسوم متحركة متقدمة ومؤثرات ضوئية",
      emoji: "🚀",
      color: "#6d28d9",
      // Template 1: SaaS Cinematic - Embedded HTML
      html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{{TITLE}}</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root { --primary: #6d28d9; --accent: #06b6d4; --bg: #030014; --text: #fafafa; --text-muted: #94a3b8; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Kufi Arabic', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; line-height: 1.6; }
    .mesh-bg { position: fixed; inset: 0; z-index: -1; background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(109, 40, 217, 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(6, 182, 212, 0.1), transparent); filter: blur(60px); }
    nav { position: fixed; top: 2rem; left: 50%; transform: translateX(-50%); z-index: 1000; background: rgba(15, 10, 30, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 100px; padding: 0.75rem 1.5rem; display: flex; align-items: center; gap: 2rem; }
    .nav-brand { font-weight: 900; font-size: 1.1rem; background: linear-gradient(135deg, #8b5cf6, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .nav-cta { background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; border: none; padding: 0.6rem 1.5rem; border-radius: 100px; font-family: inherit; font-weight: 700; font-size: 0.85rem; cursor: pointer; text-decoration: none; transition: all 0.3s; box-shadow: 0 4px 20px rgba(109, 40, 217, 0.4); }
    .nav-cta:hover { transform: translateY(-2px) scale(1.05); box-shadow: 0 8px 30px rgba(109, 40, 217, 0.6); }
    .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; align-items: center; padding: 8rem 5% 4rem; gap: 4rem; position: relative; }
    .hero-content { position: relative; z-index: 2; }
    .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(109, 40, 217, 0.15); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 100px; padding: 0.5rem 1.25rem; font-size: 0.8rem; color: #8b5cf6; font-weight: 600; margin-bottom: 2rem; animation: float 6s ease-in-out infinite; }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    .hero h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; background: linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #22d3ee 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero p { font-size: 1.25rem; color: var(--text-muted); max-width: 500px; margin-bottom: 2.5rem; line-height: 1.8; }
    .hero-cta-group { display: flex; gap: 1rem; flex-wrap: wrap; }
    .hero-cta-primary { display: inline-flex; align-items: center; gap: 0.75rem; background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; text-decoration: none; padding: 1rem 2.5rem; border-radius: 14px; font-weight: 700; font-size: 1.1rem; transition: all 0.4s; box-shadow: 0 10px 40px rgba(109, 40, 217, 0.4); }
    .hero-cta-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 20px 60px rgba(109, 40, 217, 0.5); }
    .hero-cta-secondary { display: inline-flex; align-items: center; gap: 0.75rem; background: transparent; border: 2px solid rgba(255, 255, 255, 0.1); color: var(--text); text-decoration: none; padding: 1rem 2rem; border-radius: 14px; font-weight: 600; font-size: 1rem; transition: all 0.3s; }
    .hero-cta-secondary:hover { border-color: var(--accent); background: rgba(6, 182, 212, 0.1); }
    .hero-visual { position: relative; height: 600px; display: flex; align-items: center; justify-content: center; }
    .orbital-container { position: relative; width: 400px; height: 400px; }
    .central-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 250px; height: 250px; background: radial-gradient(circle, rgba(109, 40, 217, 0.4) 0%, transparent 70%); border-radius: 50%; filter: blur(40px); animation: pulse-glow 4s ease-in-out infinite; }
    @keyframes pulse-glow { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; } 50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; } }
    .orbit-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 50%; }
    .orbit-ring:nth-child(2) { width: 350px; height: 350px; animation: rotate 20s linear infinite; }
    .orbit-ring:nth-child(3) { width: 300px; height: 300px; animation: rotate-reverse 15s linear infinite; }
    @keyframes rotate { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
    @keyframes rotate-reverse { from { transform: translate(-50%, -50%) rotate(360deg); } to { transform: translate(-50%, -50%) rotate(0deg); } }
    .floating-card { position: absolute; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 1.5rem; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); }
    .floating-card:nth-child(4) { top: 20%; right: 0; animation: float-card 8s ease-in-out infinite; }
    .floating-card:nth-child(5) { bottom: 20%; left: 0; animation: float-card 10s ease-in-out infinite 1s; }
    @keyframes float-card { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
    .features { padding: 6rem 5%; position: relative; }
    .section-header { text-align: center; margin-bottom: 4rem; }
    .section-label { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 4px; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; padding: 0.5rem 1rem; background: rgba(6, 182, 212, 0.1); border-radius: 100px; }
    .section-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; margin-bottom: 1rem; }
    .bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
    .bento-card { background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 2.5rem; transition: all 0.4s; position: relative; overflow: hidden; }
    .bento-card:hover { transform: translateY(-8px); border-color: rgba(139, 92, 246, 0.3); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4); }
    .feature-icon { width: 60px; height: 60px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; margin-bottom: 1.5rem; box-shadow: 0 10px 30px rgba(109, 40, 217, 0.3); }
    .feature-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.75rem; }
    .feature-desc { color: var(--text-muted); line-height: 1.7; font-size: 0.95rem; }
    .cta-section { padding: 6rem 5%; position: relative; overflow: hidden; }
    .cta-container { max-width: 800px; margin: 0 auto; text-align: center; padding: 4rem 3rem; background: linear-gradient(135deg, rgba(109, 40, 217, 0.2), rgba(6, 182, 212, 0.15)); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; position: relative; }
    .cta-title { font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 900; margin-bottom: 1rem; }
    .cta-text { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem; }
    footer { border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 3rem 5%; text-align: center; color: var(--text-muted); font-size: 0.9rem; }
    .footer-brand { font-weight: 900; font-size: 1.5rem; background: linear-gradient(135deg, #8b5cf6, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; }
    @media (max-width: 968px) { .hero { grid-template-columns: 1fr; text-align: center; gap: 2rem; } .hero p { margin: 0 auto 2rem; } .hero-cta-group { justify-content: center; } .hero-visual { height: 400px; } .orbital-container { transform: scale(0.7); } }
  </style>
</head>
<body>
  <div class="mesh-bg"></div>
  <nav>
    <div class="nav-brand">{{TITLE}}</div>
    <a href="{{CTA_LINK}}" class="nav-cta">{{CTA_TEXT}}</a>
  </nav>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge"><span>✨</span><span>جديد ومتميز</span></div>
      <h1>{{HERO_TITLE}}</h1>
      <p>{{HERO_SUB}}</p>
      <div class="hero-cta-group">
        <a href="{{CTA_LINK}}" class="hero-cta-primary"><span>{{CTA_TEXT}}</span><span>←</span></a>
        <a href="#features" class="hero-cta-secondary"><span>اكتشف المزيد</span></a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="orbital-container">
        <div class="central-glow"></div>
        <div class="orbit-ring"></div>
        <div class="orbit-ring"></div>
        <div class="floating-card"><div style="font-size: 2rem; margin-bottom: 0.5rem;">🚀</div><div style="font-weight: 700; font-size: 0.9rem;">سرعة فائقة</div></div>
        <div class="floating-card"><div style="font-size: 2rem; margin-bottom: 0.5rem;">🔒</div><div style="font-weight: 700; font-size: 0.9rem;">أمان تام</div></div>
      </div>
    </div>
  </section>
  <section class="features" id="features">
    <div class="section-header">
      <div class="section-label">المميزات</div>
      <h2 class="section-title">لماذا نحن مختلفون؟</h2>
    </div>
    <div class="bento-grid">
      <div class="bento-card">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">{{FEATURE_1}}</h3>
        <p class="feature-desc">ميزة تجعل منتجنا متميزاً ومختلفاً في السوق مع أداء استثنائي.</p>
      </div>
      <div class="bento-card">
        <div class="feature-icon">🎯</div>
        <h3 class="feature-title">{{FEATURE_2}}</h3>
        <p class="feature-desc">نهتم بتقديم أفضل تجربة مستخدم ممكنة في كل خطوة.</p>
      </div>
      <div class="bento-card">
        <div class="feature-icon">🔒</div>
        <h3 class="feature-title">{{FEATURE_3}}</h3>
        <p class="feature-desc">نحافظ على بياناتك وخصوصيتك بأعلى المعايير الأمنية.</p>
      </div>
    </div>
  </section>
  <section class="cta-section">
    <div class="cta-container">
      <h2 class="cta-title">جاهز للإنطلاق؟ 🚀</h2>
      <p class="cta-text">انضم إلى آلاف المستخدمين واستمتع بتجربة لا مثيل لها</p>
      <a href="{{CTA_LINK}}" class="hero-cta-primary" style="font-size: 1.2rem; padding: 1.25rem 3rem;"><span>{{CTA_TEXT}}</span><span>←</span></a>
    </div>
  </section>
  <footer>
    <div class="footer-brand">{{FOOTER_NAME}}</div>
    <p>© {{YEAR}} جميع الحقوق محفوظة · أُنشئت بـ ⚡ {{GENERATED_BY}}</p>
  </footer>
</body>
</html>`,
      fields: [
        { key: "TITLE", label: "عنوان الصفحة", type: "text", placeholder: "أداتي الرائعة" },
        { key: "HERO_TITLE", label: "العنوان الرئيسي", type: "text", placeholder: "وفّر ساعات من عملك يومياً" },
        { key: "HERO_SUB", label: "وصف قصير", type: "textarea", placeholder: "أداة ذكية تساعدك على..." },
        { key: "CTA_TEXT", label: "نص زر الدعوة", type: "text", placeholder: "ابدأ مجاناً" },
        { key: "CTA_LINK", label: "رابط الزر", type: "url", placeholder: "https://example.com" },
        { key: "FEATURE_1", label: "الميزة الأولى", type: "text", placeholder: "سريع جداً" },
        { key: "FEATURE_2", label: "الميزة الثانية", type: "text", placeholder: "سهل الاستخدام" },
        { key: "FEATURE_3", label: "الميزة الثالثة", type: "text", placeholder: "آمن بالكامل" },
        { key: "FOOTER_NAME", label: "اسم الشركة", type: "text", placeholder: "مؤسستي" }
      ]
    },
    {
      id: "product",
      name: "منتج رقمي تفاعلي",
      description: "صفحة مبيعات عالية التحويل مع بطاقة منتج ثلاثية الأبعاد",
      emoji: "💎",
      color: "#ff6b6b",
      // Template 2: Product - Embedded HTML
      html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{{TITLE}}</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root { --primary: #ff6b6b; --primary-dark: #ee5a24; --secondary: #ffd93d; --dark: #1a1a2e; --text: #ffffff; --text-muted: rgba(255,255,255,0.7); }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Kufi Arabic', sans-serif; background: var(--dark); color: var(--text); overflow-x: hidden; line-height: 1.6; }
    .bg-pattern { position: fixed; inset: 0; z-index: -1; background: radial-gradient(ellipse at 20% 80%, rgba(255,107,107,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(108,92,231,0.1) 0%, transparent 50%); }
    .hero { min-height: 100vh; display: grid; grid-template-columns: 1.2fr 1fr; align-items: center; padding: 4rem 5%; gap: 3rem; position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; top: -50%; right: -20%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(255,107,107,0.2) 0%, transparent 70%); filter: blur(60px); animation: float-hero 10s ease-in-out infinite; }
    @keyframes float-hero { 0%, 100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(-30px,30px) rotate(5deg); } }
    .hero-content { position: relative; z-index: 2; }
    .product-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, rgba(255,107,107,0.2), rgba(238,90,36,0.2)); border: 1px solid rgba(255,107,107,0.4); border-radius: 100px; padding: 0.6rem 1.5rem; font-size: 0.85rem; font-weight: 700; color: var(--primary); margin-bottom: 2rem; animation: pulse-badge 2s ease-in-out infinite; }
    @keyframes pulse-badge { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,107,0.4); } 50% { box-shadow: 0 0 20px 5px rgba(255,107,107,0.2); } }
    .hero h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.2; margin-bottom: 1rem; background: linear-gradient(135deg, #ffffff 0%, #ffd93d 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .tagline { font-size: 1.3rem; color: var(--primary); font-weight: 700; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
    .tagline::before { content: ''; display: inline-block; width: 40px; height: 3px; background: linear-gradient(90deg, var(--primary), transparent); border-radius: 2px; }
    .hero-desc { font-size: 1.1rem; color: var(--text-muted); line-height: 1.9; margin-bottom: 2rem; max-width: 90%; }
    .price-value { font-size: 3rem; font-weight: 900; background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1; margin-bottom: 1.5rem; display: block; }
    .cta-button { display: inline-flex; align-items: center; justify-content: center; gap: 1rem; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; text-decoration: none; padding: 1.25rem 3rem; border-radius: 16px; font-size: 1.2rem; font-weight: 800; border: none; cursor: pointer; transition: all 0.4s; box-shadow: 0 10px 40px rgba(255,107,107,0.4); position: relative; overflow: hidden; }
    .cta-button::before { content: '🛒'; font-size: 1.4rem; }
    .cta-button:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 20px 60px rgba(255,107,107,0.5); }
    .guarantee { display: flex; align-items: center; gap: 0.5rem; margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-muted); }
    .hero-visual { position: relative; display: flex; align-items: center; justify-content: center; }
    .product-card { background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.15); border-radius: 30px; padding: 2.5rem; width: 100%; max-width: 400px; box-shadow: 0 40px 80px rgba(0,0,0,0.4); transform: perspective(1000px) rotateY(-5deg) rotateX(5deg); transition: transform 0.5s; animation: float-product 6s ease-in-out infinite; }
    @keyframes float-product { 0%, 100% { transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(0); } 50% { transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(-20px); } }
    .product-card:hover { transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02); }
    .product-icon { width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem; box-shadow: 0 20px 40px rgba(255,107,107,0.3); }
    .product-name { font-size: 1.5rem; font-weight: 900; text-align: center; margin-bottom: 1rem; }
    .product-features { list-style: none; }
    .product-features li { display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 0.9rem; }
    .product-features li::before { content: '✓'; display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; background: rgba(0,255,0,0.2); border-radius: 50%; color: #00ff00; font-weight: 900; font-size: 0.75rem; }
    .bonuses { padding: 5rem 5%; position: relative; }
    .section-title { text-align: center; font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 900; margin-bottom: 0.5rem; }
    .section-subtitle { text-align: center; color: var(--text-muted); font-size: 1rem; margin-bottom: 3rem; }
    .bonuses-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; max-width: 800px; margin: 0 auto; }
    .bonus-card { background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 2rem; position: relative; overflow: hidden; transition: all 0.4s; }
    .bonus-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--primary), var(--secondary)); }
    .bonus-card:hover { transform: translateY(-10px); border-color: rgba(255,107,107,0.3); box-shadow: 0 30px 60px rgba(0,0,0,0.3); }
    .bonus-number { position: absolute; top: 1rem; left: 1rem; font-size: 3rem; font-weight: 900; color: rgba(255,255,255,0.05); line-height: 1; }
    .bonus-icon { width: 60px; height: 60px; background: linear-gradient(135deg, rgba(255,107,107,0.2), rgba(255,217,61,0.2)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; margin-bottom: 1rem; border: 1px solid rgba(255,107,107,0.3); }
    .bonus-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--primary); margin-bottom: 0.5rem; }
    .bonus-title { font-size: 1.2rem; font-weight: 800; margin-bottom: 0.5rem; }
    .bonus-value { display: inline-block; background: rgba(255,217,61,0.15); color: var(--secondary); padding: 0.3rem 0.8rem; border-radius: 100px; font-size: 0.8rem; font-weight: 700; margin-top: 0.5rem; }
    .seller { padding: 3rem 5%; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); }
    .seller-avatar { width: 70px; height: 70px; background: linear-gradient(135deg, #6c5ce7, var(--primary)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; margin: 0 auto 1rem; border: 3px solid rgba(255,255,255,0.1); }
    .seller-name { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.25rem; }
    .seller-title { color: var(--text-muted); font-size: 0.9rem; }
    .final-cta { padding: 4rem 5%; text-align: center; background: linear-gradient(180deg, transparent, rgba(255,107,107,0.1), transparent); }
    .urgency-text { font-size: 1.1rem; color: var(--primary); font-weight: 700; margin-bottom: 1.5rem; }
    footer { padding: 2rem 5%; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-muted); font-size: 0.85rem; }
    .footer-logo { font-weight: 900; font-size: 1.3rem; margin-bottom: 0.5rem; background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    @media (max-width: 968px) { .hero { grid-template-columns: 1fr; text-align: center; padding-top: 5rem; } .hero-desc { max-width: 100%; } .hero-visual { order: -1; } .product-card { transform: none; max-width: 320px; } }
  </style>
</head>
<body>
  <div class="bg-pattern"></div>
  <section class="hero">
    <div class="hero-content">
      <div class="product-badge"><span>📦</span><span>منتج رقمي حصري</span></div>
      <h1>{{PRODUCT_NAME}}</h1>
      <div class="tagline">{{TAGLINE}}</div>
      <p class="hero-desc">{{DESCRIPTION}}</p>
      <span class="price-value">{{PRICE}}</span>
      <a href="{{CTA_LINK}}" class="cta-button">{{CTA_TEXT}}</a>
      <div class="guarantee"><span>🔒</span><span>ضمان استرداد الأموال خلال 30 يوماً</span></div>
    </div>
    <div class="hero-visual">
      <div class="product-card">
        <div class="product-icon">💎</div>
        <div class="product-name">{{PRODUCT_NAME}}</div>
        <ul class="product-features">
          <li>محتوى شامل ومتكامل</li>
          <li>تحديثات مجانية مدى الحياة</li>
          <li>دعم فني ممتاز</li>
          <li>وصول فوري بعد الشراء</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="bonuses">
    <h2 class="section-title">🎁 بونص حصري مضمّن</h2>
    <p class="section-subtitle">بالإضافة للمنتج الرئيسي، ستحصل على هدايا قيّمة</p>
    <div class="bonuses-grid">
      <div class="bonus-card">
        <div class="bonus-number">01</div>
        <div class="bonus-icon">🎯</div>
        <div class="bonus-label">بونص 1</div>
        <div class="bonus-title">{{BONUS_1}}</div>
        <div class="bonus-value">قيمة 500 ريال</div>
      </div>
      <div class="bonus-card">
        <div class="bonus-number">02</div>
        <div class="bonus-icon">💎</div>
        <div class="bonus-label">بونص 2</div>
        <div class="bonus-title">{{BONUS_2}}</div>
        <div class="bonus-value">قيمة 300 ريال</div>
      </div>
    </div>
  </section>
  <section class="seller">
    <div class="seller-avatar">👤</div>
    <div class="seller-name">{{SELLER_NAME}}</div>
    <div class="seller-title">خبير في المجال · مدرب معتمد</div>
  </section>
  <section class="final-cta">
    <div class="urgency-text">⚡ لا تفوّت هذه الفرصة! ⚡</div>
    <a href="{{CTA_LINK}}" class="cta-button" style="font-size: 1.2rem; padding: 1.25rem 3rem;">{{CTA_TEXT}} — {{PRICE}}</a>
  </section>
  <footer>
    <div class="footer-logo">{{SELLER_NAME}}</div>
    <p>© {{YEAR}} جميع الحقوق محفوظة · أُنشئت بـ ⚡ {{GENERATED_BY}}</p>
  </footer>
</body>
</html>`,
      fields: [
        { key: "TITLE", label: "عنوان الصفحة", type: "text", placeholder: "كورسي المتميز" },
        { key: "PRODUCT_NAME", label: "اسم المنتج", type: "text", placeholder: "كورس التسويق الرقمي" },
        { key: "TAGLINE", label: "شعار قصير", type: "text", placeholder: "من صفر إلى محترف في 30 يوم" },
        { key: "DESCRIPTION", label: "وصف المنتج", type: "textarea", placeholder: "ستتعلم في هذا الكورس..." },
        { key: "PRICE", label: "السعر", type: "text", placeholder: "297 ريال" },
        { key: "CTA_TEXT", label: "نص زر الشراء", type: "text", placeholder: "اشتري الآن" },
        { key: "CTA_LINK", label: "رابط الشراء", type: "url", placeholder: "https://payment.link" },
        { key: "BONUS_1", label: "بونص 1", type: "text", placeholder: "مجموعة قوالب احترافية" },
        { key: "BONUS_2", label: "بونص 2", type: "text", placeholder: "مجتمع خاص على تيليجرام" },
        { key: "SELLER_NAME", label: "اسم البائع", type: "text", placeholder: "أحمد محمد" }
      ]
    },
    {
      id: "service",
      name: "علامة شخصية عضوية",
      description: "تصميم عضوي بخلفيات متحركة وبطاقات خدمات تفاعلية",
      emoji: "✨",
      color: "#10b981",
      // Template 3: Freelance - Embedded HTML
      html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{{TITLE}}</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root { --primary: #10b981; --primary-light: #34d399; --primary-dark: #059669; --accent: #f59e0b; --dark: #064e3b; --darker: #022c22; --text: #ffffff; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Kufi Arabic', sans-serif; background: var(--darker); color: var(--text); overflow-x: hidden; line-height: 1.6; }
    .organic-bg { position: fixed; inset: 0; z-index: -1; background: radial-gradient(ellipse at 0% 0%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(5,150,105,0.1) 0%, transparent 50%); }
    .blob { position: fixed; border-radius: 50%; filter: blur(80px); z-index: -1; opacity: 0.4; }
    .blob-1 { width: 500px; height: 500px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); top: -150px; right: -150px; animation: blob-float 20s ease-in-out infinite; }
    .blob-2 { width: 350px; height: 350px; background: linear-gradient(135deg, var(--accent), var(--primary)); bottom: -100px; left: -100px; animation: blob-float 15s ease-in-out infinite reverse; }
    @keyframes blob-float { 0%, 100% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-30px) scale(1.1); } 66% { transform: translate(-20px,20px) scale(0.9); } }
    .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 4rem 5%; text-align: center; position: relative; }
    .profile-container { position: relative; margin-bottom: 2rem; }
    .profile-ring { position: absolute; inset: -15px; border: 2px solid rgba(16,185,129,0.3); border-radius: 50%; animation: ring-pulse 3s ease-in-out infinite; }
    .profile-ring:nth-child(2) { inset: -30px; border-color: rgba(16,185,129,0.15); animation-delay: 0.5s; }
    @keyframes ring-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.5; } }
    .avatar { width: 130px; height: 130px; background: linear-gradient(135deg, var(--primary), var(--primary-light)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; border: 4px solid rgba(255,255,255,0.2); box-shadow: 0 20px 60px rgba(16,185,129,0.4); position: relative; z-index: 2; }
    .status-indicator { position: absolute; bottom: 10px; right: 10px; width: 22px; height: 22px; background: #00ff00; border: 3px solid var(--darker); border-radius: 50%; z-index: 3; animation: status-blink 2s ease-in-out infinite; }
    @keyframes status-blink { 0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,0,0.4); } 50% { box-shadow: 0 0 0 10px rgba(0,255,0,0); } }
    .hero-name { font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 900; margin-bottom: 0.5rem; background: linear-gradient(135deg, #ffffff, var(--primary-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero-role { font-size: 1.2rem; color: var(--primary-light); font-weight: 600; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; }
    .hero-role::before, .hero-role::after { content: ''; width: 40px; height: 2px; background: linear-gradient(90deg, transparent, var(--primary)); } .hero-role::after { background: linear-gradient(90deg, var(--primary), transparent); }
    .hero-bio { max-width: 550px; font-size: 1.05rem; color: rgba(255,255,255,0.7); line-height: 1.9; margin-bottom: 2.5rem; }
    .contact-bar { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
    .contact-btn { display: inline-flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; border-radius: 14px; font-weight: 700; text-decoration: none; transition: all 0.3s; font-size: 1rem; }
    .contact-btn.whatsapp { background: linear-gradient(135deg, #25d366, #128c7e); color: white; box-shadow: 0 10px 30px rgba(37,211,102,0.3); } .contact-btn.whatsapp:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(37,211,102,0.4); }
    .contact-btn.email { background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); color: white; } .contact-btn.email:hover { background: rgba(255,255,255,0.15); border-color: var(--primary-light); }
    .services { padding: 5rem 5%; position: relative; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-label { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--primary-light); margin-bottom: 1rem; padding: 0.5rem 1.25rem; background: rgba(16,185,129,0.1); border-radius: 100px; border: 1px solid rgba(16,185,129,0.2); }
    .section-title { font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 900; }
    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
    .service-card { background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)); border: 1px solid rgba(16,185,129,0.2); border-radius: 24px; padding: 2rem; position: relative; overflow: hidden; transition: all 0.4s; cursor: pointer; }
    .service-card:hover { transform: translateY(-8px); border-color: var(--primary); box-shadow: 0 30px 60px rgba(16,185,129,0.2); }
    .service-number { position: absolute; top: 1.25rem; left: 1.25rem; font-size: 4rem; font-weight: 900; color: rgba(16,185,129,0.1); line-height: 1; transition: all 0.3s; }
    .service-card:hover .service-number { color: rgba(16,185,129,0.2); transform: scale(1.1); }
    .service-icon { width: 70px; height: 70px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); border-radius: 18px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 1.25rem; box-shadow: 0 15px 30px rgba(16,185,129,0.3); position: relative; z-index: 1; }
    .service-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.5rem; position: relative; z-index: 1; }
    .service-desc { color: rgba(255,255,255,0.6); line-height: 1.7; font-size: 0.95rem; position: relative; z-index: 1; }
    .cta-section { padding: 5rem 5%; text-align: center; position: relative; }
    .cta-container { max-width: 700px; margin: 0 auto; padding: 3rem 2rem; background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.05)); border: 1px solid rgba(16,185,129,0.2); border-radius: 30px; position: relative; overflow: hidden; }
    .cta-title { font-size: 1.8rem; font-weight: 900; margin-bottom: 0.75rem; }
    .cta-text { color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; }
    footer { padding: 2.5rem 5%; text-align: center; border-top: 1px solid rgba(16,185,129,0.1); color: rgba(255,255,255,0.5); font-size: 0.9rem; }
    .footer-name { font-size: 1.4rem; font-weight: 900; color: var(--primary-light); margin-bottom: 0.5rem; }
    @media (max-width: 768px) { .hero { padding: 5rem 5%; } .avatar { width: 110px; height: 110px; font-size: 3rem; } .services-grid { grid-template-columns: 1fr; } .contact-bar { flex-direction: column; align-items: center; } .contact-btn { width: 100%; max-width: 280px; justify-content: center; } }
  </style>
</head>
<body>
  <div class="organic-bg"></div>
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <section class="hero">
    <div class="profile-container">
      <div class="profile-ring"></div>
      <div class="profile-ring"></div>
      <div class="avatar">✨</div>
      <div class="status-indicator"></div>
    </div>
    <h1 class="hero-name">{{YOUR_NAME}}</h1>
    <div class="hero-role">{{YOUR_ROLE}}</div>
    <p class="hero-bio">{{BIO}}</p>
    <div class="contact-bar">
      <a href="https://wa.me/{{WHATSAPP}}" target="_blank" class="contact-btn whatsapp"><span>💬</span><span>تواصل عبر واتساب</span></a>
      <a href="mailto:{{EMAIL}}" class="contact-btn email"><span>📧</span><span>راسلني عبر البريد</span></a>
    </div>
  </section>
  <section class="services">
    <div class="section-header">
      <div class="section-label">ما أقدمه</div>
      <h2 class="section-title">خدماتي الاحترافية</h2>
    </div>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-number">01</div>
        <div class="service-icon">🎨</div>
        <h3 class="service-title">{{SERVICE_1}}</h3>
        <p class="service-desc">خدمة احترافية متكاملة بأعلى مستوى من الجودة والإتقان.</p>
      </div>
      <div class="service-card">
        <div class="service-number">02</div>
        <div class="service-icon">💡</div>
        <h3 class="service-title">{{SERVICE_2}}</h3>
        <p class="service-desc">حلول مبتكرة تلبّي احتياجاتك وتتجاوز توقعاتك.</p>
      </div>
      <div class="service-card">
        <div class="service-number">03</div>
        <div class="service-icon">🚀</div>
        <h3 class="service-title">{{SERVICE_3}}</h3>
        <p class="service-desc">نتائج ملموسة وتسليم في الوقت المحدد دائماً.</p>
      </div>
    </div>
  </section>
  <section class="cta-section">
    <div class="cta-container">
      <h2 class="cta-title">هل أنت مستعد للبدء؟ 🎯</h2>
      <p class="cta-text">تواصل معي الآن وسأرد عليك خلال 24 ساعة</p>
      <a href="https://wa.me/{{WHATSAPP}}" target="_blank" class="contact-btn whatsapp"><span>ابدأ مشروعك الآن</span></a>
    </div>
  </section>
  <footer>
    <div class="footer-name">{{YOUR_NAME}}</div>
    <p>© {{YEAR}} جميع الحقوق محفوظة · أُنشئت بـ ⚡ {{GENERATED_BY}}</p>
  </footer>
</body>
</html>`,
      fields: [
        { key: "TITLE", label: "عنوان الصفحة", type: "text", placeholder: "خدماتي الاحترافية" },
        { key: "YOUR_NAME", label: "اسمك", type: "text", placeholder: "سارة العمري" },
        { key: "YOUR_ROLE", label: "مجالك", type: "text", placeholder: "مصممة جرافيك احترافية" },
        { key: "BIO", label: "نبذة عنك", type: "textarea", placeholder: "أساعد الشركات على بناء هويتها..." },
        { key: "SERVICE_1", label: "الخدمة الأولى", type: "text", placeholder: "تصميم الهوية البصرية" },
        { key: "SERVICE_2", label: "الخدمة الثانية", type: "text", placeholder: "تصميم السوشيال ميديا" },
        { key: "SERVICE_3", label: "الخدمة الثالثة", type: "text", placeholder: "تصميم المطبوعات" },
        { key: "WHATSAPP", label: "رقم واتساب", type: "text", placeholder: "966500000000" },
        { key: "EMAIL", label: "البريد الإلكتروني", type: "email", placeholder: "me@example.com" }
      ]
    }
  ],

  messages: {
    authSuccess: "✅ تم التحقق من التوكن بنجاح!",
    authFail: "❌ التوكن غير صحيح أو منتهي الصلاحية",
    repoCreated: "✅ تم إنشاء المستودع",
    fileUploaded: "✅ تم رفع الصفحة",
    pagesEnabled: "✅ تم تفعيل GitHub Pages",
    done: "🎉 اكتمل النشر بنجاح!"
  }
};
'''

with open('/mnt/kimi/output/enhanced_templates/config_complete.js', 'w', encoding='utf-8') as f:
    f.write(config_complete)

print("✅ Created complete config.js with all 3 templates embedded inline!")
print("\n" + "="*70)
print("🔧 Instructions to fix your GitHub Pages:")
print("="*70)
print("""
1. Replace your current config.js with config_complete.js
2. Update your index.html to use the new config:
   <script src="config_complete.js"></script>
   
3. Or rename config_complete.js to config.js and overwrite the old one

4. The key fix: Templates are now embedded in the JS file itself,
   so no external file loading is needed. This fixes the GitHub Pages issue.

5. Also replace app.js with app_fixed.js (or update the loadTemplate function)
   to handle inline templates properly.

Key changes made:
- All 3 templates are now embedded as 'html' property in CONFIG.templates
- No need for external template files
- Works 100% on GitHub Pages without CORS or path issues
- System variables ({{YEAR}}, {{GENERATED_BY}}) have default values
""")
