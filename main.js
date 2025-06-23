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
    q1: "إيه أكتر أكلة بتحبها؟",
    q1o1: "مكرونة",
    q1o2: "بيتزا",
    q1o3: "كشري",
    q1o4: "برجر",
    q1o5: "غير كده",
    q2: "إيه لونك المفضل؟",
    q2o1: "أزرق",
    q2o2: "أحمر",
    q2o3: "أسود",
    q2o4: "أخضر",
    q2o5: "أصفر",
    q3: "إمتى تحب تقضي وقتك؟",
    q3o1: "الصبح",
    q3o2: "الظهر",
    q3o3: "بالليل",
    q3o4: "مفيش وقت محدد",
    q4: "إيه نوع الأفلام اللي تحب تتفرج عليها؟",
    q4o1: "أكشن",
    q4o2: "كوميدي",
    q4o3: "رعب",
    q4o4: "دراما",
    q4o5: "خيال علمي",
    q5: "لو عندك إجازة، تحب تعمل إيه؟",
    q5o1: "أنام",
    q5o2: "أخرج مع أصحابي",
    q5o3: "أتفرج على أفلام",
    q5o4: "أقرأ أو أتعلم حاجة",
    q5o5: "ألعب جيمز",
    q6: "إيه أكتر مشروب بتحبه؟",
    q6o1: "شاي",
    q6o2: "قهوة",
    q6o3: "عصير",
    q6o4: "مياه غازية",
    q6o5: "مية",
    q7: "إيه أكتر مادة كنت بتحبها في المدرسة؟",
    q7o1: "رياضيات",
    q7o2: "عربي",
    q7o3: "علوم",
    q7o4: "إنجليزي",
    q7o5: "تربية فنية",
    q8: "إنت شخص صباحي ولا ليلي؟",
    q8o1: "صباحي",
    q8o2: "ليلي",
    q8o3: "حسب المزاج",
    q9: "إيه أكتر حاجة بتخاف منها؟",
    q9o1: "الحشرات",
    q9o2: "المرتفعات",
    q9o3: "الظلمة",
    q9o4: "الأماكن الضيقة",
    q9o5: "ولا حاجة",
    q10: "لو ربحت مليون جنيه، أول حاجة هتعملها؟",
    q10o1: "أشتري عربية",
    q10o2: "أعمل مشروع",
    q10o3: "أتبرع بجزء",
    q10o4: "أسافر",
    q10o5: "أوفرهم",
    submit: "احفظ إجاباتك وابدأ التحدي",
    closeBtn: "إغلاق",
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
    q1: "What's your favorite food?",
    q1o1: "Pasta",
    q1o2: "Pizza",
    q1o3: "Koshary",
    q1o4: "Burger",
    q1o5: "Other",
    q2: "What's your favorite color?",
    q2o1: "Blue",
    q2o2: "Red",
    q2o3: "Black",
    q2o4: "Green",
    q2o5: "Yellow",
    q3: "When do you enjoy your time the most?",
    q3o1: "Morning",
    q3o2: "Afternoon",
    q3o3: "Night",
    q3o4: "Anytime",
    q4: "What kind of movies do you like?",
    q4o1: "Action",
    q4o2: "Comedy",
    q4o3: "Horror",
    q4o4: "Drama",
    q4o5: "Sci-Fi",
    q5: "What would you do on a day off?",
    q5o1: "Sleep",
    q5o2: "Hang out with friends",
    q5o3: "Watch movies",
    q5o4: "Read or learn something",
    q5o5: "Play games",
    q6: "What's your favorite drink?",
    q6o1: "Tea",
    q6o2: "Coffee",
    q6o3: "Juice",
    q6o4: "Soda",
    q6o5: "Water",
    q7: "What was your favorite school subject?",
    q7o1: "Math",
    q7o2: "Arabic",
    q7o3: "Science",
    q7o4: "English",
    q7o5: "Art",
    q8: "Are you a morning or night person?",
    q8o1: "Morning",
    q8o2: "Night",
    q8o3: "Depends",
    q9: "What do you fear the most?",
    q9o1: "Insects",
    q9o2: "Heights",
    q9o3: "Darkness",
    q9o4: "Tight spaces",
    q9o5: "Nothing",
    q10: "If you win a million pounds, what would you do first?",
    q10o1: "Buy a car",
    q10o2: "Start a business",
    q10o3: "Donate some",
    q10o4: "Travel",
    q10o5: "Save them",
    submit: "Save Answers & Start the Challenge",
    closeBtn: "Close",
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
    const response = await fetch('http://localhost:3100/auth/user', {
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
