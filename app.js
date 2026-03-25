// app.js — مصنع صفحات الهبوط v3
// Vanilla JS · Backend-less · دعم رفع الصور

const state = {
  selectedTemplate: null,
  fieldValues: {},
  imageData: {},
  isDeploying: false,
  lastDeployedUrl: null
};

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadSavedCredentials();
  renderTemplates();
  updateStepIndicators(1);
});

// ─── CREDENTIALS ──────────────────────────────────────────────────────────────
function loadSavedCredentials() {
  const s = JSON.parse(localStorage.getItem("lf_creds") || "{}");
  if (s.username) document.getElementById("ghUsername").value = s.username;
  if (s.token)    document.getElementById("ghToken").value    = s.token;
  if (s.repo)     document.getElementById("ghRepo").value     = s.repo;
  if (s.desc)     document.getElementById("ghDesc").value     = s.desc;
}
function saveCredentials() {
  localStorage.setItem("lf_creds", JSON.stringify({
    username: document.getElementById("ghUsername").value.trim(),
    token:    document.getElementById("ghToken").value.trim(),
    repo:     document.getElementById("ghRepo").value.trim(),
    desc:     document.getElementById("ghDesc").value.trim()
  }));
}

// ─── TOKEN TOGGLE ─────────────────────────────────────────────────────────────
function toggleToken() {
  const inp = document.getElementById("ghToken");
  const btn = document.getElementById("tokenToggleBtn");
  inp.type = inp.type === "password" ? "text" : "password";
  btn.textContent = inp.type === "password" ? "👁" : "🙈";
}

// ─── REPO SANITIZE ────────────────────────────────────────────────────────────
function sanitizeRepoName(input) {
  input.value = input.value.replace(/[^a-zA-Z0-9\-_.]/g, "-").replace(/^-+/, "");
}

// ─── AUTH TEST ────────────────────────────────────────────────────────────────
async function testAuth() {
  const token    = document.getElementById("ghToken").value.trim();
  const username = document.getElementById("ghUsername").value.trim();
  const statusEl = document.getElementById("authStatus");
  const btn      = document.getElementById("testAuthBtn");
  if (!token || !username) return showToast("⚠️ أدخل اسم المستخدم والتوكن أولاً");
  btn.textContent = "⏳ جارٍ..."; btn.disabled = true;
  try {
    const res = await ghRequest("GET", "user", null, token);
    if (res.login.toLowerCase() === username.toLowerCase()) {
      statusEl.textContent = `✅ مرحباً ${res.name || res.login}! التوكن صحيح.`;
      statusEl.style.cssText = "color:var(--accent3);border-color:rgba(0,217,160,.3);background:rgba(0,217,160,.06)";
      statusEl.classList.remove("hidden");
      saveCredentials(); updateStepIndicators(2);
    } else throw new Error("اسم المستخدم لا يطابق التوكن");
  } catch(e) {
    statusEl.textContent = `❌ فشل التحقق: ${e.message}`;
    statusEl.style.cssText = "color:var(--accent2);border-color:rgba(255,107,107,.3);background:rgba(255,107,107,.06)";
    statusEl.classList.remove("hidden");
  } finally { btn.textContent = "🔗 تحقق"; btn.disabled = false; }
}

// ─── TEMPLATES ────────────────────────────────────────────────────────────────
function renderTemplates() {
  const grid = document.getElementById("templatesGrid");
  grid.innerHTML = CONFIG.templates.map(tpl => `
    <div class="tpl-card" id="tpl_${tpl.id}" onclick="selectTemplate('${tpl.id}')">
      <div class="check-badge">✓</div>
      <div class="tpl-preview" style="background:linear-gradient(135deg,${tpl.color}22,${tpl.color}08);display:flex;align-items:center;justify-content:center;font-size:2.5rem">
        ${tpl.emoji}
      </div>
      <div class="font-bold text-sm mb-1">${tpl.name}</div>
      <div class="text-xs" style="color:var(--muted)">${tpl.description}</div>
      ${tpl.hasImageUpload ? `<div class="text-xs mt-1" style="color:#c9a84c">📸 يدعم رفع الصور</div>` : ''}
    </div>
  `).join("");
}

function selectTemplate(id) {
  state.selectedTemplate = id;
  state.fieldValues = {};
  state.imageData   = {};
  document.querySelectorAll(".tpl-card").forEach(c => c.classList.remove("selected"));
  document.getElementById(`tpl_${id}`).classList.add("selected");
  const tpl = CONFIG.templates.find(t => t.id === id);
  renderFields(tpl);
  updateStepIndicators(3);
  updateSummary();
  setTimeout(() => document.getElementById("step3Card").scrollIntoView({ behavior:"smooth", block:"start" }), 100);
}

// ─── FIELDS ───────────────────────────────────────────────────────────────────
function renderFields(tpl) {
  const grid = document.getElementById("fieldsGrid");
  grid.innerHTML = tpl.fields.map(f => {

    if (f.type === "image") return `
      <div class="col-span-full">
        <label>${f.label}</label>
        <div class="image-upload-wrap" id="wrap_${f.key}">
          <div class="img-preview hidden" id="preview_${f.key}">
            <img id="previewImg_${f.key}" src="" alt="معاينة"/>
            <button class="img-remove-btn" onclick="removeImage('${f.key}')">✕ إزالة</button>
          </div>
          <div class="img-drop-zone" id="dropzone_${f.key}"
            onclick="document.getElementById('fileInput_${f.key}').click()"
            ondragover="event.preventDefault();this.classList.add('drag-over')"
            ondragleave="this.classList.remove('drag-over')"
            ondrop="handleImageDrop(event,'${f.key}')">
            <span style="font-size:2rem">📸</span>
            <span class="text-sm mt-1" style="color:var(--muted)">اضغط لرفع صورة أو اسحبها هنا</span>
            <span class="text-xs" style="color:var(--muted);opacity:.6">JPG · PNG · WEBP</span>
          </div>
          <input type="file" id="fileInput_${f.key}" accept="image/*" style="display:none" onchange="handleImageFile(event,'${f.key}')"/>
          <div class="img-url-row">
            <span style="color:var(--muted);font-size:.78rem">أو أدخل رابط URL للصورة:</span>
            <input class="inp" type="url" id="urlInput_${f.key}" placeholder="https://images.unsplash.com/..." oninput="handleImageUrl('${f.key}',this.value)"/>
          </div>
        </div>
      </div>`;

    if (f.type === "textarea") return `
      <div class="col-span-full">
        <label>${f.label}</label>
        <textarea class="inp" id="field_${f.key}" placeholder="${f.placeholder}" oninput="onFieldChange('${f.key}',this.value)"></textarea>
      </div>`;

    return `
      <div>
        <label>${f.label}</label>
        <input class="inp" type="${f.type||'text'}" id="field_${f.key}" placeholder="${f.placeholder}" value="" oninput="onFieldChange('${f.key}',this.value)"/>
      </div>`;
  }).join("");
}

function onFieldChange(key, value) {
  state.fieldValues[key] = value;
  updateSummary();
}

// ─── IMAGE HANDLING ───────────────────────────────────────────────────────────
function handleImageFile(e, key) { const f = e.target.files[0]; if(f) readImageFile(f, key); }
function handleImageDrop(e, key) {
  e.preventDefault();
  document.getElementById(`dropzone_${key}`).classList.remove("drag-over");
  const f = e.dataTransfer.files[0];
  if (!f || !f.type.startsWith("image/")) return showToast("⚠️ الملف ليس صورة");
  readImageFile(f, key);
}
function readImageFile(file, key) {
  if (file.size > 2*1024*1024) showToast("⚠️ الصورة كبيرة (+2MB) — يُفضل ضغطها أولاً");
  const reader = new FileReader();
  reader.onload = e => { state.imageData[key] = e.target.result; showImgPreview(key, e.target.result); updateSummary(); };
  reader.readAsDataURL(file);
}
function handleImageUrl(key, url) {
  if (!url.trim()) { delete state.imageData[key]; hideImgPreview(key); return; }
  state.imageData[key] = url.trim();
  showImgPreview(key, url.trim());
  updateSummary();
}
function showImgPreview(key, src) {
  document.getElementById(`dropzone_${key}`).classList.add("hidden");
  document.getElementById(`preview_${key}`).classList.remove("hidden");
  document.getElementById(`previewImg_${key}`).src = src;
}
function hideImgPreview(key) {
  document.getElementById(`dropzone_${key}`).classList.remove("hidden");
  document.getElementById(`preview_${key}`).classList.add("hidden");
  document.getElementById(`previewImg_${key}`).src = "";
}
function removeImage(key) {
  delete state.imageData[key];
  const fi = document.getElementById(`fileInput_${key}`); if(fi) fi.value = "";
  const ui = document.getElementById(`urlInput_${key}`);  if(ui) ui.value = "";
  hideImgPreview(key);
  updateSummary();
}

// ─── SUMMARY ──────────────────────────────────────────────────────────────────
function updateSummary() {
  const el  = document.getElementById("summaryContent");
  const tpl = CONFIG.templates.find(t => t.id === state.selectedTemplate);
  const username = document.getElementById("ghUsername").value.trim();
  const repo     = document.getElementById("ghRepo").value.trim();
  if (!tpl) { el.innerHTML = `<span style="color:var(--muted)">لم يتم اختيار قالب بعد</span>`; return; }
  const pagesUrl = username && repo ? `https://${username}.github.io/${repo}/` : "—";
  const nonImgFields = tpl.fields.filter(f => f.type !== "image");
  const filled   = nonImgFields.filter(f => state.fieldValues[f.key]?.trim()).length;
  const total    = nonImgFields.length;
  const imgCount = Object.keys(state.imageData).length;
  const imgTotal = tpl.fields.filter(f => f.type === "image").length;
  el.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">القالب:</span><span>${tpl.emoji} ${tpl.name.split(' — ')[0]}</span></div>
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">المستودع:</span><span style="direction:ltr">${username||'—'}/${repo||'—'}</span></div>
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">الحقول:</span><span style="color:${filled===total?'var(--accent3)':'var(--accent)'}">${filled}/${total}</span></div>
      ${imgTotal>0?`<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">الصور:</span><span style="color:${imgCount===imgTotal?'var(--accent3)':'#c9a84c'}">📸 ${imgCount}/${imgTotal}</span></div>`:''}
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">الرابط:</span><span style="direction:ltr;font-size:.76rem;color:var(--accent)">${pagesUrl}</span></div>
    </div>`;
}

// ─── DEPLOY ───────────────────────────────────────────────────────────────────
async function deploy() {
  if (state.isDeploying) return;
  const token    = document.getElementById("ghToken").value.trim();
  const username = document.getElementById("ghUsername").value.trim();
  const repo     = document.getElementById("ghRepo").value.trim();
  const desc     = document.getElementById("ghDesc").value.trim();
  const tpl      = CONFIG.templates.find(t => t.id === state.selectedTemplate);

  if (!token || !username) return showToast("⚠️ أدخل بيانات GitHub أولاً");
  if (!repo)               return showToast("⚠️ أدخل اسم المستودع");
  if (!tpl)                return showToast("⚠️ اختر قالباً أولاً");

  const missing = tpl.fields.find(f => f.required !== false && f.type !== "url" && f.type !== "image" && !state.fieldValues[f.key]?.trim());
  if (missing) return showToast(`⚠️ الحقل "${missing.label}" مطلوب`);

  state.isDeploying = true;
  const btn = document.getElementById("deployBtn");
  btn.disabled = true;
  btn.innerHTML = `<span>⏳</span><span>جارٍ النشر...</span>`;
  showLog(); setProgress(0); saveCredentials();

  try {
    log("info", "تحميل القالب...");
    const html = await loadTemplate(tpl.file);
    setProgress(15);

    log("info", "معالجة المتغيرات والصور...");
    const processed = replaceVariables(html, state.fieldValues, state.imageData, username, repo);
    setProgress(30);

    log("info", `إنشاء المستودع: ${repo}...`);
    await createRepo(token, repo, desc);
    setProgress(55);
    log("ok", CONFIG.messages.repoCreated);

    log("info", "رفع ملف index.html...");
    await uploadFile(token, username, repo, "index.html", processed);
    setProgress(75);
    log("ok", CONFIG.messages.fileUploaded);

    log("info", "تفعيل GitHub Pages...");
    await enablePages(token, username, repo);
    setProgress(95);
    log("ok", CONFIG.messages.pagesEnabled);

    setProgress(100);
    log("ok", CONFIG.messages.done);

    const pagesUrl = `https://${username}.github.io/${repo}/`;
    const repoUrl  = `https://github.com/${username}/${repo}`;
    state.lastDeployedUrl = pagesUrl;

    document.getElementById("pagesLink").href = pagesUrl;
    document.getElementById("repoLink").href  = repoUrl;
    document.getElementById("resultCard").classList.add("show");
    updateStepIndicators(4);
    btn.innerHTML = `<span>✅</span><span>تم النشر!</span>`;
    setTimeout(() => document.getElementById("resultCard").scrollIntoView({ behavior:"smooth" }), 200);

  } catch(err) {
    log("err", `خطأ: ${err.message}`);
    showToast("❌ " + err.message);
    btn.disabled = false;
    btn.innerHTML = `<span>🚀</span><span>أنشئ الصفحة واطبعها على GitHub</span>`;
    state.isDeploying = false;
  }
}

// ─── TEMPLATE LOADER & REPLACER ───────────────────────────────────────────────
async function loadTemplate(filePath) {
  const res = await fetch(filePath);
  if (!res.ok) throw new Error(`لم يمكن تحميل القالب: ${filePath}`);
  return await res.text();
}

function replaceVariables(html, values, images, username, repo) {
  let r = html;
  Object.entries(values).forEach(([k,v]) => { r = r.replace(new RegExp(`{{${k}}}`,"g"), escapeHtml(v)); });
  Object.entries(images).forEach(([k,v]) => { r = r.replace(new RegExp(`{{${k}}}`,"g"), v); });
  r = r.replace(/{{GH_USERNAME}}/g, username)
       .replace(/{{GH_REPO}}/g, repo)
       .replace(/{{YEAR}}/g, new Date().getFullYear())
       .replace(/{{GENERATED_BY}}/g, "مصنع صفحات الهبوط");
  r = r.replace(/{{[A-Z_0-9]+}}/g, match => {
    if (match.includes("IMG")) return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect fill='%23111' width='800' height='500'/%3E%3Ctext fill='%23333' font-size='22' font-family='sans-serif' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
    return "";
  });
  return r;
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}

// ─── GITHUB API ───────────────────────────────────────────────────────────────
async function ghRequest(method, endpoint, body, token) {
  const res = await fetch(`https://api.github.com/${endpoint}`, {
    method,
    headers: { "Authorization":`Bearer ${token}`, "Accept":"application/vnd.github+json", "X-GitHub-Api-Version":"2022-11-28", "Content-Type":"application/json" },
    body: body ? JSON.stringify(body) : undefined
  });
  const data = await res.json();
  if (!res.ok && res.status !== 422) throw new Error(data.message || `خطأ HTTP ${res.status}`);
  return data;
}
async function createRepo(token, name, description) {
  return await ghRequest("POST","user/repos",{name,description:description||`صفحة هبوط — أُنشئت بـ مصنع صفحات الهبوط`,private:false,auto_init:false,has_pages:false},token);
}
async function uploadFile(token, username, repo, filePath, content) {
  await sleep(1500);
  const encoded = btoa(unescape(encodeURIComponent(content)));
  return await ghRequest("PUT",`repos/${username}/${repo}/contents/${filePath}`,{message:"🚀 نشر صفحة الهبوط عبر مصنع صفحات الهبوط",content:encoded},token);
}
async function enablePages(token, username, repo) {
  await sleep(1000);
  try { return await ghRequest("POST",`repos/${username}/${repo}/pages`,{source:{branch:"main",path:"/"}},token); }
  catch { try { return await ghRequest("PUT",`repos/${username}/${repo}/pages`,{source:{branch:"main",path:"/"}},token); } catch { log("info","تفعيل Pages سيكتمل خلال لحظات"); } }
}

// ─── UI HELPERS ───────────────────────────────────────────────────────────────
function showLog() {
  document.getElementById("logArea").classList.remove("hidden");
  document.getElementById("progressWrap").classList.remove("hidden");
  document.getElementById("logArea").innerHTML = "";
}
function log(type, message) {
  const area = document.getElementById("logArea");
  const time = new Date().toLocaleTimeString("ar",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
  const div = document.createElement("div");
  div.className = "log-line";
  div.innerHTML = `<span class="log-time">[${time}]</span><span class="log-${type}">${message}</span>`;
  area.appendChild(div); area.scrollTop = area.scrollHeight;
}
function setProgress(pct) { document.getElementById("progressFill").style.width = pct + "%"; }
function showToast(msg, dur=3000) {
  const t = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), dur);
}
function updateStepIndicators(active) {
  document.querySelectorAll(".step-num").forEach((el,i) => {
    const s = i+1;
    if (s <= active) { el.style.background="linear-gradient(135deg,var(--accent),#9b8cff)"; el.style.boxShadow="0 0 16px rgba(108,99,255,.4)"; el.style.border="none"; }
    else             { el.style.background="var(--surface2)"; el.style.boxShadow="none"; el.style.border="1px solid var(--border)"; }
  });
}
function resetAll() {
  state.selectedTemplate = null; state.fieldValues = {}; state.imageData = {}; state.isDeploying = false; state.lastDeployedUrl = null;
  document.querySelectorAll(".tpl-card").forEach(c => c.classList.remove("selected"));
  document.getElementById("fieldsGrid").innerHTML = `<div class="col-span-full flex flex-col items-center py-8" style="color:var(--muted)"><span style="font-size:2rem">👆</span><span class="text-sm mt-2">اختر قالبًا أولاً</span></div>`;
  document.getElementById("resultCard").classList.remove("show");
  document.getElementById("logArea").classList.add("hidden");
  document.getElementById("progressWrap").classList.add("hidden");
  document.getElementById("authStatus").classList.add("hidden");
  const btn = document.getElementById("deployBtn");
  btn.disabled = false; btn.innerHTML = `<span>🚀</span><span>أنشئ الصفحة واطبعها على GitHub</span>`;
  document.getElementById("ghRepo").value = "";
  document.getElementById("ghDesc").value = "";
  updateStepIndicators(1); updateSummary();
  window.scrollTo({top:0,behavior:"smooth"});
  showToast("✅ جاهز لإنشاء صفحة جديدة!");
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

