// app.js — المنطق الرئيسي لمصنع صفحات الهبوط
// Vanilla JS · No dependencies · Backend-less

// ─── STATE ───────────────────────────────────────────────────────────────────
const state = {
  selectedTemplate: null,
  fieldValues: {},
  isDeploying: false,
  lastDeployedUrl: null
};

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadSavedCredentials();
  renderTemplates();
  updateStepIndicators(1);
});

// ─── CREDENTIALS (LocalStorage) ───────────────────────────────────────────────
function loadSavedCredentials() {
  const saved = JSON.parse(localStorage.getItem("lf_creds") || "{}");
  if (saved.username) document.getElementById("ghUsername").value = saved.username;
  if (saved.token)    document.getElementById("ghToken").value    = saved.token;
  if (saved.repo)     document.getElementById("ghRepo").value     = saved.repo;
  if (saved.desc)     document.getElementById("ghDesc").value     = saved.desc;
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
  if (inp.type === "password") {
    inp.type = "text";
    btn.textContent = "🙈";
  } else {
    inp.type = "password";
    btn.textContent = "👁";
  }
}

// ─── REPO NAME SANITIZE ───────────────────────────────────────────────────────
function sanitizeRepoName(input) {
  // GitHub repo names: letters, numbers, hyphens, underscores, dots
  input.value = input.value.replace(/[^a-zA-Z0-9\-_.]/g, "-").replace(/^-+/, "");
}

// ─── AUTH TEST ────────────────────────────────────────────────────────────────
async function testAuth() {
  const token    = document.getElementById("ghToken").value.trim();
  const username = document.getElementById("ghUsername").value.trim();
  const statusEl = document.getElementById("authStatus");
  const btn      = document.getElementById("testAuthBtn");

  if (!token || !username) {
    showToast("⚠️ أدخل اسم المستخدم والتوكن أولاً");
    return;
  }
  btn.textContent = "⏳ جارٍ...";
  btn.disabled = true;

  try {
    const res = await ghRequest("GET", "user", null, token);
    if (res.login.toLowerCase() === username.toLowerCase()) {
      statusEl.textContent = `✅ مرحباً ${res.name || res.login}! التوكن صحيح وصلاحياته مفعّلة.`;
      statusEl.style.color = "var(--accent3)";
      statusEl.style.borderColor = "rgba(0,217,160,0.3)";
      statusEl.style.background = "rgba(0,217,160,0.06)";
      statusEl.classList.remove("hidden");
      saveCredentials();
      updateStepIndicators(2);
    } else {
      throw new Error("اسم المستخدم لا يطابق التوكن");
    }
  } catch (e) {
    statusEl.textContent = `❌ فشل التحقق: ${e.message}`;
    statusEl.style.color = "var(--accent2)";
    statusEl.style.borderColor = "rgba(255,107,107,0.3)";
    statusEl.style.background = "rgba(255,107,107,0.06)";
    statusEl.classList.remove("hidden");
  } finally {
    btn.textContent = "🔗 تحقق";
    btn.disabled = false;
  }
}

// ─── TEMPLATES ────────────────────────────────────────────────────────────────
function renderTemplates() {
  const grid = document.getElementById("templatesGrid");
  grid.innerHTML = CONFIG.templates.map((tpl, i) => `
    <div class="tpl-card" id="tpl_${tpl.id}" onclick="selectTemplate('${tpl.id}')">
      <div class="check-badge">✓</div>
      <div class="tpl-preview" style="background:linear-gradient(135deg,${tpl.color}22,${tpl.color}08);display:flex;align-items:center;justify-content:center;font-size:2.5rem">
        ${tpl.emoji}
      </div>
      <div class="font-bold text-sm mb-1">${tpl.name}</div>
      <div class="text-xs" style="color:var(--muted)">${tpl.description}</div>
    </div>
  `).join("");
}

function selectTemplate(id) {
  state.selectedTemplate = id;

  // visual update
  document.querySelectorAll(".tpl-card").forEach(c => c.classList.remove("selected"));
  document.getElementById(`tpl_${id}`).classList.add("selected");

  // render fields
  const tpl = CONFIG.templates.find(t => t.id === id);
  renderFields(tpl);
  updateStepIndicators(3);
  updateSummary();

  // scroll to step 3
  setTimeout(() => {
    document.getElementById("step3Card").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

// ─── FIELDS ───────────────────────────────────────────────────────────────────
function renderFields(tpl) {
  const grid = document.getElementById("fieldsGrid");
  grid.innerHTML = tpl.fields.map(f => {
    const value = state.fieldValues[f.key] || "";
    if (f.type === "textarea") {
      return `
        <div class="col-span-full">
          <label>${f.label}</label>
          <textarea class="inp" id="field_${f.key}" placeholder="${f.placeholder}" oninput="onFieldChange('${f.key}', this.value)">${value}</textarea>
        </div>`;
    }
    return `
      <div>
        <label>${f.label}</label>
        <input class="inp" type="${f.type || 'text'}" id="field_${f.key}" placeholder="${f.placeholder}" value="${value}" oninput="onFieldChange('${f.key}', this.value)" />
      </div>`;
  }).join("");
}

function onFieldChange(key, value) {
  state.fieldValues[key] = value;
  updateSummary();
}

// ─── SUMMARY ──────────────────────────────────────────────────────────────────
function updateSummary() {
  const summaryEl = document.getElementById("summaryContent");
  const tpl = CONFIG.templates.find(t => t.id === state.selectedTemplate);
  const username = document.getElementById("ghUsername").value.trim();
  const repo     = document.getElementById("ghRepo").value.trim();

  if (!tpl) {
    summaryEl.innerHTML = `<span style="color:var(--muted)">لم يتم اختيار قالب بعد</span>`;
    return;
  }

  const pagesUrl = username && repo
    ? `https://${username}.github.io/${repo}/`
    : "—";

  const filled = tpl.fields.filter(f => state.fieldValues[f.key]?.trim()).length;
  const total  = tpl.fields.length;

  summaryEl.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="display:flex;justify-content:space-between">
        <span style="color:var(--muted)">القالب:</span>
        <span>${tpl.emoji} ${tpl.name}</span>
      </div>
      <div style="display:flex;justify-content:space-between">
        <span style="color:var(--muted)">المستودع:</span>
        <span style="direction:ltr">${username || '—'}/${repo || '—'}</span>
      </div>
      <div style="display:flex;justify-content:space-between">
        <span style="color:var(--muted)">الحقول المملوءة:</span>
        <span style="color:${filled===total?'var(--accent3)':'var(--accent)'}">${filled}/${total}</span>
      </div>
      <div style="display:flex;justify-content:space-between">
        <span style="color:var(--muted)">الرابط المتوقع:</span>
        <span style="direction:ltr;font-size:0.78rem;color:var(--accent)">${pagesUrl}</span>
      </div>
    </div>
  `;
}

// ─── DEPLOY ───────────────────────────────────────────────────────────────────
async function deploy() {
  if (state.isDeploying) return;

  const token    = document.getElementById("ghToken").value.trim();
  const username = document.getElementById("ghUsername").value.trim();
  const repo     = document.getElementById("ghRepo").value.trim();
  const desc     = document.getElementById("ghDesc").value.trim();
  const tpl      = CONFIG.templates.find(t => t.id === state.selectedTemplate);

  // Validation
  if (!token || !username) return showToast("⚠️ أدخل بيانات GitHub أولاً");
  if (!repo)               return showToast("⚠️ أدخل اسم المستودع");
  if (!tpl)                return showToast("⚠️ اختر قالباً أولاً");

  const missingRequired = tpl.fields.find(f => f.type !== "url" && !state.fieldValues[f.key]?.trim());
  if (missingRequired) {
    showToast(`⚠️ الحقل "${missingRequired.label}" مطلوب`);
    return;
  }

  state.isDeploying = true;
  const btn = document.getElementById("deployBtn");
  btn.disabled = true;
  btn.innerHTML = `<span class="animate-spin inline-block">⏳</span> <span>جارٍ النشر...</span>`;

  showLog();
  setProgress(0);
  saveCredentials();

  try {
    // Step 1: Load template
    log("info", "تحميل القالب...");
    const templateHTML = await loadTemplate(tpl.file);
    setProgress(15);

    // Step 2: Replace variables
    log("info", "معالجة المتغيرات...");
    const processedHTML = replaceVariables(templateHTML, state.fieldValues, username, repo);
    setProgress(30);

    // Step 3: Create repo
    log("info", `إنشاء المستودع: ${repo}...`);
    await createRepo(token, repo, desc);
    setProgress(55);
    log("ok", CONFIG.messages.repoCreated);

    // Step 4: Upload file
    log("info", "رفع ملف index.html...");
    await uploadFile(token, username, repo, "index.html", processedHTML);
    setProgress(75);
    log("ok", CONFIG.messages.fileUploaded);

    // Step 5: Enable Pages
    log("info", "تفعيل GitHub Pages...");
    await enablePages(token, username, repo);
    setProgress(95);
    log("ok", CONFIG.messages.pagesEnabled);

    setProgress(100);
    log("ok", CONFIG.messages.done);

    // Show result
    const pagesUrl = `https://${username}.github.io/${repo}/`;
    const repoUrl  = `https://github.com/${username}/${repo}`;
    state.lastDeployedUrl = pagesUrl;

    document.getElementById("pagesLink").href = pagesUrl;
    document.getElementById("repoLink").href  = repoUrl;
    document.getElementById("resultCard").classList.add("show");
    updateStepIndicators(4);
    btn.innerHTML = `<span>✅</span> <span>تم النشر!</span>`;

    setTimeout(() => {
      document.getElementById("resultCard").scrollIntoView({ behavior: "smooth" });
    }, 200);

  } catch (err) {
    log("err", `خطأ: ${err.message}`);
    showToast("❌ " + err.message);
    btn.disabled = false;
    btn.innerHTML = `<span>🚀</span> <span>أنشئ الصفحة واطبعها على GitHub</span>`;
    state.isDeploying = false;
  }
}

// ─── TEMPLATE LOADER ─────────────────────────────────────────────────────────
async function loadTemplate(filePath) {
  const res = await fetch(filePath);
  if (!res.ok) throw new Error(`لم يمكن تحميل القالب: ${filePath}`);
  return await res.text();
}

// ─── VARIABLE REPLACER ────────────────────────────────────────────────────────
function replaceVariables(html, values, username, repo) {
  let result = html;

  // Replace user-defined fields
  Object.entries(values).forEach(([key, val]) => {
    const regex = new RegExp(`{{${key}}}`, "g");
    result = result.replace(regex, escapeHtml(val));
  });

  // Replace system variables
  result = result.replace(/{{GH_USERNAME}}/g, username);
  result = result.replace(/{{GH_REPO}}/g, repo);
  result = result.replace(/{{YEAR}}/g, new Date().getFullYear());
  result = result.replace(/{{GENERATED_BY}}/g, "مصنع صفحات الهبوط");

  // Remove any unreplaced placeholders
  result = result.replace(/{{[A-Z_]+}}/g, "");

  return result;
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ─── GITHUB API ───────────────────────────────────────────────────────────────
async function ghRequest(method, endpoint, body, token) {
  const headers = {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json"
  };
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(`https://api.github.com/${endpoint}`, opts);
  const data = await res.json();

  if (!res.ok && res.status !== 422) {
    throw new Error(data.message || `خطأ HTTP ${res.status}`);
  }
  return data;
}

async function createRepo(token, name, description) {
  return await ghRequest("POST", "user/repos", {
    name,
    description: description || `صفحة هبوط — أُنشئت بـ مصنع صفحات الهبوط`,
    private: false,
    auto_init: false,
    has_pages: false
  }, token);
}

async function uploadFile(token, username, repo, filePath, content) {
  // Wait a moment for repo to initialize
  await sleep(1500);
  const encoded = btoa(unescape(encodeURIComponent(content)));
  return await ghRequest("PUT", `repos/${username}/${repo}/contents/${filePath}`, {
    message: "🚀 نشر صفحة الهبوط عبر مصنع صفحات الهبوط",
    content: encoded
  }, token);
}

async function enablePages(token, username, repo) {
  await sleep(1000);
  try {
    return await ghRequest("POST", `repos/${username}/${repo}/pages`, {
      source: { branch: "main", path: "/" }
    }, token);
  } catch (e) {
    // GitHub Pages might already be enabled or need a moment
    // Try updating instead
    try {
      return await ghRequest("PUT", `repos/${username}/${repo}/pages`, {
        source: { branch: "main", path: "/" }
      }, token);
    } catch {
      // Pages will be available even if API returns an error sometimes
      log("info", "ملاحظة: تفعيل Pages سيكتمل خلال لحظات");
    }
  }
}

// ─── UI HELPERS ───────────────────────────────────────────────────────────────
function showLog() {
  document.getElementById("logArea").classList.remove("hidden");
  document.getElementById("progressWrap").classList.remove("hidden");
  document.getElementById("logArea").innerHTML = "";
}

function log(type, message) {
  const area = document.getElementById("logArea");
  const time = new Date().toLocaleTimeString("ar", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const div = document.createElement("div");
  div.className = "log-line";
  div.innerHTML = `
    <span class="log-time">[${time}]</span>
    <span class="log-${type}">${message}</span>
  `;
  area.appendChild(div);
  area.scrollTop = area.scrollHeight;
}

function setProgress(pct) {
  document.getElementById("progressFill").style.width = pct + "%";
}

function showToast(msg, duration = 3000) {
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

function updateStepIndicators(activeStep) {
  document.querySelectorAll(".step-num").forEach((el, i) => {
    const step = i + 1;
    if (step <= activeStep) {
      el.style.background = "linear-gradient(135deg, var(--accent), #9b8cff)";
      el.style.boxShadow = "0 0 16px rgba(108,99,255,0.4)";
      el.style.border = "none";
    } else {
      el.style.background = "var(--surface2)";
      el.style.boxShadow = "none";
      el.style.border = "1px solid var(--border)";
    }
  });
}

function resetAll() {
  state.selectedTemplate = null;
  state.fieldValues = {};
  state.isDeploying = false;
  state.lastDeployedUrl = null;

  document.querySelectorAll(".tpl-card").forEach(c => c.classList.remove("selected"));
  document.getElementById("fieldsGrid").innerHTML = `
    <div class="col-span-full flex flex-col items-center py-8" style="color:var(--muted)">
      <span style="font-size:2rem">👆</span>
      <span class="text-sm mt-2">اختر قالبًا أولاً</span>
    </div>`;
  document.getElementById("resultCard").classList.remove("show");
  document.getElementById("logArea").classList.add("hidden");
  document.getElementById("progressWrap").classList.add("hidden");
  document.getElementById("authStatus").classList.add("hidden");

  const btn = document.getElementById("deployBtn");
  btn.disabled = false;
  btn.innerHTML = `<span>🚀</span> <span>أنشئ الصفحة واطبعها على GitHub</span>`;

  // Clear repo name for new page
  document.getElementById("ghRepo").value = "";
  document.getElementById("ghDesc").value = "";

  updateStepIndicators(1);
  updateSummary();

  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("✅ جاهز لإنشاء صفحة جديدة!");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
