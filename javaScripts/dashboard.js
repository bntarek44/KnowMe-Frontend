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

}

// بتخفي الموديل
function hideWelcomeModal() {
    document.getElementById('welcome-modal').classList.remove('show');
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



// بيبعت البيانات للباك اند
const form = document.getElementById("self-quiz-form");
if (form) {
  form.addEventListener("submit", function (e) {
     e.preventDefault();
  const lang = localStorage.getItem("lang") || "ar";
  const selectedSeason = document.querySelector('input[name="season"]:checked');
  const submitBtn = document.querySelector('button[type="submit"]');

  if (!selectedSeason) {
    showCustomModal(translations[lang].required, 'error');
    return;
  }

  const data = {
    season: selectedSeason.value,
  };

  // تعطيل الزر لتفادي التكرار
  submitBtn.disabled = true;
  submitBtn.textContent = lang === 'ar' ? 'جاري الحفظ...' : 'Saving...';

  fetch("https://knowme-backend-production.up.railway.app/auth/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // ضروري عشان اليوزر يوصل للباك
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to save");
      return res.json();
    })
    .then((result) => {
      console.log("تم الحفظ:", result);
      showCustomModal(translations[lang].success);
      submitBtn.textContent = lang === 'ar' ? ' ✅ تم الحفظ بنجاح' : 'Saved ✅';
      // لو حابب تعمل redirect بعد الحفظ
      // setTimeout(() => window.location.href = "/challenge.html", 3000);
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
  } else {
    welcomeText.style.color = ''; // يرجع للون حسب المود
  }

  modal.classList.add('show');
  updateWelcomeModalColors();

}


