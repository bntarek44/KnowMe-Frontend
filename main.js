const modes = [
  "light-gray1", "light-gray2", "light-beige", "light-purple", "light-pink",
  "dark-gray1", "dark-gray2", "dark-blue", "dark-brown", "dark-red"
];

const translations = {
  ar: {
    welcome: "🙌 أهلاً بيك في اعرفني",
    desc: "سجّل دخول بجوجل، جاوب على شوية أسئلة، وشوف صحابك يعرفوك قد إيه! 🤔",
    login: "سجّل دخول بجوجل",
    lightGray1: "فاتح - رمادي فاتح جداً",
    lightGray2: "فاتح - رمادي فاتح",
    lightBeige: "فاتح - بيج فاتح",
    lightPurple: "فاتح - بنفسجي فاتح",
    lightPink: "فاتح - بينك فاتح",
    darkGray1: "داكن - رمادي داكن",
    darkGray2: "داكن - رمادي أغمق",
    darkBlue: "داكن - أزرق داكن",
    darkBrown: "داكن - بني غامق",
    darkRed: "داكن - أحمر غامق",
    headline: "جاوب عن نفسك… محدش هيستخبى! 😂يلا نكشف الغشاشين اللي بيقولوا يعرفوك! 🤣",
    q01: "١. بتفضل الصيف ولا الشتا؟",
    summer: "الصيف",
    winter: "الشتا",
    submit: "احفظ إجاباتك وابدأ التحدي",
    closeBtn: "إغلاق",
    required: "من فضلك اختر إجابة للسؤال.",
    success: "تم حفظ إجابتك بنجاح!",
    error: "حدث خطأ أثناء الحفظ.",
  },
  en: {
    welcome: "🙌 Welcome to E3rafni",
    desc: "Login with Google, answer a few questions, and see how well your friends know you! 🤔",
    login: "Login with Google",
    lightGray1: "Light - Very Light Gray",
    lightGray2: "Light - Light Gray",
    lightBeige: "Light - Beige",
    lightPurple: "Light - Light Purple",
    lightPink: "Light - Light Pink",
    darkGray1: "Dark - Dark Gray",
    darkGray2: "Dark - Darker Gray",
    darkBlue: "Dark - Blue",
    darkBrown: "Dark - Brown",
    darkRed: "Dark - Red",
    headline: "Answer about yourself… no hiding!😂 Let’s expose those fake friends who think they know you! 🤣",
    q01: "1. Do you prefer summer or winter?",
    summer : "Summer",
    winter : "Winter",
    submit: "Save Answers & Start the Challenge",
    closeBtn: "Close",
    required: "Please select an answer.",
    success: "Your answer has been saved successfully!",
    error: "An error occurred while saving.",
  }
};
// الدوال الل بتتنفذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  let savedMode = localStorage.getItem('mode') || 'light-gray2';
  if (!modes.includes(savedMode)) savedMode = 'light-gray2';
  changeMode(savedMode);

  const modeSelect = document.querySelector('.mode-select');
  if (modeSelect) modeSelect.value = savedMode;

  const savedLang = localStorage.getItem('lang') || 'ar';
  setLanguage(savedLang);

  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = savedLang;

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
// بتغير الوضعية عند اختيارها من السيلكت
function changeMode(value) {
  if (!modes.includes(value)) return;

  // تغيير خلفية الصفحة
  modes.forEach(mode => document.body.classList.remove(mode));
  document.body.classList.add(value);
  localStorage.setItem('mode', value);

  // زر جوجل
  const btn = document.querySelector('.google-btn');
  if (btn) {
    btn.classList.remove('light', 'dark');
    if (value.startsWith('dark')) {
      btn.classList.add('dark');
    } else {
      btn.classList.add('light');
    }
  }
    const dashHeader = document.querySelector('.dashHeader');
  if (dashHeader) {
    
    if (value.startsWith('dark')) {
      dashHeader.style.color = '#fff';
    } else {
      dashHeader.style.color = '#000';
    }
  }


  // قائمة اللغة
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.classList.remove("language-light", "language-dark");
    if (value.startsWith("dark")) {
      langSelect.classList.add("language-dark");
    } else {
      langSelect.classList.add("language-light");
    }
  }

  // تغيير شكل الـ Navbar مع إزالة الكلاسات غير المرغوب فيها وإضافة الخلفية المناسبة
  const nav = document.getElementById('mainNav');
  if (nav) {
    modes.forEach(mode => nav.classList.remove(mode));
    nav.classList.remove('bg-body-tertiary', 'bg-light', 'bg-dark', 'navbar-light', 'navbar-dark');

    nav.classList.add(value);

    if (value.startsWith('dark')) {
      nav.classList.add('navbar-dark');
      nav.classList.add('bg-dark');
    } else {
      nav.classList.add('navbar-light');
      nav.classList.add('bg-light');
    }
  }
}
// بتغير اللغة عند اختيارها من السيلكت
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // تحديث النصوص
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
     const translation = translations[lang]?.[key];
 
    if (translation) {
      if (el.tagName === "OPTION") {
        el.innerText = translation;
      } else {
        el.textContent = translation;
      }
    }
  });





      // تغيير اتجاه الصفحة
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  // تغيير كلاس اللغة عشان نتحكم في التنسيق
  document.body.classList.toggle("lang-en", lang === "en");
  document.body.classList.toggle("lang-ar", lang === "ar");





    // تحديث أسماء الخيارات في قائمة الوضع
  // document.querySelectorAll('option[data-key]').forEach(opt => {
  //   const key = opt.getAttribute('data-key');
  //   if (translations[lang] && translations[lang][key]) {
  //     opt.textContent = translations[lang][key];
  //   }
  // });
  };



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

// جعل الدوال متاحة للاستخدام من الـ HTML
window.setLanguage = setLanguage;
window.changeMode = changeMode;

// بيبعت البيانات للباك اند
document.getElementById("self-quiz-form").addEventListener("submit", function (e) {
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



