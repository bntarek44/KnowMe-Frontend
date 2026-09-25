let userLinkToken = null;
let redirectAfterModalClose = false;
const overlay = document.getElementById('dash-modal-overlay');
// Login Modal
const dashLoginModal = document.getElementById('dash-login-modal');
const dashLoginText = document.getElementById('dash-login-text');
const dashGoogleLoginBtn = document.getElementById('dash_google_btn');
const dashCloseButton =document.getElementById('close-btn');


function showOverlay() {
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideOverlay() {
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}



// ✅ بيستقبل بيانات من الباك اند
async function fetchUserData() {
  const response = await fetch('https://know-me-production.up.railway.app/auth/user', {
    credentials: 'include'
  });

  if (response.status === 401) {
    throw new Error('NotAuthenticated');
  }

  if (!response.ok) {
    throw new Error('ServerError');
  }

  const data = await response.json();

  if (!data.user || !data.user.name) {
    throw new Error('NotAuthenticated');
  }

  return {
    name: data.user.name,
    linkToken: data.user.linkToken
  };
}





// بتحول الاسم الكامل الل جبناه من الباك اند الي الاسم الاول بس 
function getFirstName(fullName) {
    if (!fullName) return null;
    return fullName.split(' ')[0];
}
// ======================
// ✅ مودال الترحيب 
// ======================
// بتكنب الرسالة في الموديل واحنا مدينها السيناريوهين بتوع اللغة بالتفصيل مش محتاجين نحطهم ف القاموس
function showWelcomeModal(name) {
    redirectAfterModalClose = false;
    const modal = document.getElementById('welcome-modal');
    const welcomeText = document.getElementById('welcome-text');
    const lang = localStorage.getItem('lang') || 'ar';
    const firstName = getFirstName(name);
    const welcomeMessages = {
    ar:  `أهلاً بيك يا <strong><em>${firstName}</em></strong>🙌في اعرفني`,
    en:  `Welcome,<strong><em>${firstName}</em></strong>,🙌to E3rafni `
    };
    welcomeText.innerHTML = welcomeMessages[lang] || welcomeMessages['ar'];
    welcomeText.style.fontSize = '1.5rem';
    modal.classList.add('show');
    showOverlay();
    updateTwoModalsColors();
}

// بتخفي الموديل
function hideWelcomeModal() {
  document.getElementById('welcome-modal').classList.remove('show');
  hideOverlay();

  if (redirectAfterModalClose) {
    if (userLinkToken) {
    // تأخير قبل التحويل - هنا 2 ثانية (2000 ملي ثانية)
    setTimeout(() => {
      window.location.href = `https://know-me-frontend-swart.vercel.app/profile.html?profileToken=profile-${userLinkToken}`;
    }, 1000);
    }

  }
}

// ======================
// ✅ مودال تسجيل الدخول
// ======================
function showLoginModal(message) {
  dashLoginText.innerHTML = message;
  dashLoginText.style.fontSize = '1.4rem';
  dashLoginModal.classList.add('show');
  showOverlay();
  updateTwoModalsColors();
}

function hideLoginModal() {
  dashLoginModal.classList.remove('show');
  hideOverlay();
}
// ✅ زر تسجيل الدخول
if (dashGoogleLoginBtn) {
dashGoogleLoginBtn.addEventListener('click', () => {
  window.location.href = `https://know-me-production.up.railway.app/auth/google`;
});
};




// بتغير الالوان والخلفيى بتاع الموديل 
function updateTwoModalsColors() {
  const mode = localStorage.getItem('mode') || 'light-gray2';
  const colorsMap = {
    "light-gray1": { bg: "#fff", color: "#222" },
    "light-gray2": { bg: "#fff", color: "#222" },
    "light-beige": { bg: "#fff9f0", color: "#222" },
    "light-purple": { bg: "#f9f5ff", color: "#4c1d95" },
    "light-pink": { bg: "#fff0f6", color: "#831843" },
    "dark-gray1": { bg: "#151616ff", color: "#f3f4f6" },
    "dark-gray2": { bg: "#374151", color: "#e5e7eb" },
    "dark-blue": { bg: "#1e40af", color: "#bae6fd" },
    "dark-brown": { bg: "#6d4c41", color: "#f3e0dc" },
    "dark-red": { bg: "#b91c1c", color: "#fee2e2" }
  };

  const c = colorsMap[mode] || colorsMap['light-gray2'];
  const dashWelcomeModal = document.getElementById('welcome-modal');
  // طبعاً لو المودال ظاهر بنغير لونه
  if (dashWelcomeModal) {
    dashWelcomeModal.style.backgroundColor = c.bg;
    dashWelcomeModal.style.color = c.color;
  }
  if (dashLoginModal) {
    dashLoginModal.style.backgroundColor = c.bg;
    dashLoginModal.style.color = c.color;
  }
};




// لاستقبال الاجابات من الباك اند وملء بها النموذج تلقائيا عند التعديل
async function loadSavedQuizAnswer() {
    const lang = localStorage.getItem('lang') || 'ar';
    const dashSubmitButton = document.querySelector('#self-quiz-form button[type="submit"]');
    const SubmitForUpdate = {
    ar:  'احفظ التعديلات واستمر في التحدي' + " ✨",
    en:  "Save changes and continue the challenge" + " ✨"
    };
    // welcomeText.innerHTML = welcomeMessages[lang] || welcomeMessages['ar'];
  try {
    const res = await fetch('https://know-me-production.up.railway.app/auth/data', {
      method: "GET",
      credentials: 'include'
    });
    if (!res.ok) throw new Error('No previous answer');

    const data = await res.json();
    if (!data || !data.data || !data.data.answers) return;

    const answers = data.data.answers;

    // لف على كل سؤال وإجابته
    for (const [questionName, selectedValue] of Object.entries(answers)) {
      const radio = document.querySelector(`input[name="${questionName}"][value="${selectedValue}"]`);
      if (radio) {
        radio.checked = true;
      }
    }
    dashSubmitButton.innerHTML = SubmitForUpdate[lang] || SubmitForUpdate['ar'];
  } catch (err) {
    console.log('No saved answer or error:', err.message);
  }
}








// بيبعت البيانات للباك اند
const form = document.getElementById("self-quiz-form");

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const lang = localStorage.getItem("lang") || "ar";
    const submitBtn = form.querySelector('button[type="submit"]');
    const answers = {};

    // تجميع الأسئلة
    const questionNames = [...new Set(
      Array.from(form.querySelectorAll('input[type="radio"]')).map(input => input.name)
    )];

    // التأكد من وجود إجابات
    let missing = false;
    questionNames.forEach(name => {
      const selected = form.querySelector(`input[name="${name}"]:checked`);
      if (selected) {
        answers[name] = selected.value;
      } else {
        missing = true;
      }
    });

    if (missing) {
      showCustomModal(translations[lang].required, 'error');
      return;
    }

    // تعطيل الزر
    submitBtn.disabled = true;
    submitBtn.textContent = lang === 'ar' ? 'جاري الحفظ...' : 'Saving...';

    // الإرسال للباك إند
    fetch("https://know-me-production.up.railway.app/auth/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ answers })
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save");
        return res.json();
      })
      .then((result) => {
        console.log("تم الحفظ:", result);
        showCustomModal(translations[lang].success);
        submitBtn.textContent = lang === 'ar' ? ' ✅ تم الحفظ بنجاح' : 'Saved ✅';
      })
      .catch((err) => {
        console.error(err);
        showCustomModal(translations[lang].error, 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = translations[lang].submit;
      });
  });
}





// دالة لعرض الموديل المخصص مع نجاح الحفظ او عدمه
function showCustomModal(message, type = 'success') {
  const modal = document.getElementById('welcome-modal');
  const welcomeText = document.getElementById('welcome-text');


  welcomeText.innerHTML = message;
  welcomeText.style.fontSize = '1.4rem';

  if (type === 'error') {
    welcomeText.style.color = '#dc2626';
    redirectAfterModalClose = false; // لا تحويل لو خطأ
  } else {
    welcomeText.style.color = ''; // اللون العادي
    redirectAfterModalClose = true; // لما يكون حفظ ناجح نفعّل التحويل
  }

  modal.classList.add('show');
  updateTwoModalsColors();
  showOverlay();
}





// الدوال الل بتتنفذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'ar';
  fetchUserData()
    .then(({ name, linkToken }) => {
      userLinkToken = linkToken;  // ✅ خزّن التوكن العالمي
      showWelcomeModal(name);
      document.getElementById('close-btn').addEventListener('click', hideWelcomeModal);
      loadSavedQuizAnswer();
    })
    .catch(err => {
      if (err.message === 'NotAuthenticated') {
        showLoginModal(
          lang === 'ar'
            ? 'سجل دخولك بجوجل علشان نعرفك 👀'
            : 'Sign in with Google so we know who you are 👀'
        );
      } else {
        console.error('Error loading dashboard:', err);
        showCustomModal(
          lang==="ar"
          ? 'حدث خطأ أثناء تحميل الصفحة. حاول مرة أخرى.'
          : 'An Error Occured while loading the page, Try again ,please'
        );        
        if (dashCloseButton) {
        dashCloseButton.style.display = 'none';
        }
        // ✅ عطل كل الأزرار في الصفحة
        disableAllButtonsAndLinks();
      }
    });
});


