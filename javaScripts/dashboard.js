let redirectAfterModalClose = false;
const overlay = document.getElementById('modal-overlay');

function showOverlay() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function hideOverlay() {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}


// الدوال الل بتتنفذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
// خاص بال ويلكام موديل
  fetchUserName().then(name => {
    showWelcomeModal(name);
    }).catch(err => {
    console.error('Error fetching user:', err);
    showWelcomeModal(null);
    });

    document.getElementById('close-btn').addEventListener('click', hideWelcomeModal);
    updateWelcomeModalColors();
    loadSavedQuizAnswer();

});



// بيستقبل بيانات من الباك اند
async function fetchUserName() {
    const response = await fetch('https://knowme-backend-production.up.railway.app/auth/user', {
    credentials: 'include'
    });
    if (!response.ok) throw new Error('Failed to fetch user');
    const data = await response.json();
    return data.user ? data.user.name : null;
}
// بتحول الاسم الكامل الل جبناه من الباك اند الي الاسم الاول بس 
function getFirstName(fullName) {
    if (!fullName) return null;
    return fullName.split(' ')[0];
}

// بتكنب الرسالة في الموديل واحنا مدينها السيناريوهين بتوع اللغة بالتفصيل مش محتاجين نحطهم ف القاموس
function showWelcomeModal(name) {
    redirectAfterModalClose = false;
    const modal = document.getElementById('welcome-modal');
    const welcomeText = document.getElementById('welcome-text');
    const lang = localStorage.getItem('lang') || 'ar';
    const firstName = getFirstName(name);
    const welcomeMessages = {
    ar: name ? `أهلاً بيك يا <strong><em>${firstName}</em></strong>🙌في اعرفني` : "🙌 أهلاً بيك في اعرفني",
    en: name ? `Welcome,<strong><em>${firstName}</em></strong>,🙌to E3rafni ` : "Welcome to E3rafni 🙌"
    };
    welcomeText.innerHTML = welcomeMessages[lang] || welcomeMessages['ar'];
    welcomeText.style.fontSize = '1.5rem';
    modal.classList.add('show');
    showOverlay();
}

// بتخفي الموديل
function hideWelcomeModal() {
  document.getElementById('welcome-modal').classList.remove('show');
  hideOverlay();

  if (redirectAfterModalClose) {
    // تأخير قبل التحويل - هنا 2 ثانية (2000 ملي ثانية)
    setTimeout(() => {
      window.location.href = 'https://know-me-frontend-swart.vercel.app/profile.html';
    }, 1000);
  }
}




// بتغير الالوان والخلفيى بتاع الموديل 
function updateWelcomeModalColors() {
    const mode = localStorage.getItem('mode') || 'light-gray2';
    const colorsMap = {
    "light-gray1": { bg: "#fff", color: "#222" },
    "light-gray2": { bg: "#fff", color: "#222" },
    "light-beige": { bg: "#fff9f0", color: "#222" },
    "light-purple": { bg: "#f9f5ff", color: "#4c1d95" },
    "light-pink": { bg: "#fff0f6", color: "#831843" },
    "dark-gray1": { bg: "#4b5563", color: "#f3f4f6" },
    "dark-gray2": { bg: "#374151", color: "#e5e7eb" },
    "dark-blue": { bg: "#1e40af", color: "#bae6fd" },
    "dark-brown": { bg: "#6d4c41", color: "#f3e0dc" },
    "dark-red": { bg: "#b91c1c", color: "#fee2e2" }
    };
    const modal = document.getElementById('welcome-modal');
    const c = colorsMap[mode] || colorsMap['light-gray2'];
    modal.style.backgroundColor = c.bg;
    modal.style.color = c.color;
}



// لاستقبال الاجابات من الباك اند وملء بها النموذج تلقائيا عند التعديل
async function loadSavedQuizAnswer() {
  try {
    const res = await fetch('https://knowme-backend-production.up.railway.app/auth/data', {
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
    fetch("https://knowme-backend-production.up.railway.app/auth/data", {
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
  updateWelcomeModalColors();
  showOverlay();
}


