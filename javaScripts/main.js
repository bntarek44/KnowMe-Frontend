const modes = [
  "light-gray1", "light-gray2", "light-beige", "light-purple", "light-pink",
  "dark-gray1", "dark-gray2", "dark-blue", "dark-brown", "dark-red"
];

const translations = {
  ar: {
    welcome: "🙌 أهلاً بيك في اعرفني",
    desc: "سجّل دخول بجوجل، جاوب على شوية أسئلة، وشوف صحابك يعرفوك قد إيه! 🤔",
    login:{
      html: ` سجل دخول بجوجل <i class="fab fa-google me-2"></i> `
    },
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
    confirmBtn: "تأكيد",
    required: "من فضلك اختر إجابة لجميع الأسئلة.",
    success: "تم حفظ إجابتك بنجاح!",
    error: "حدث خطأ أثناء الحفظ.",
    emailLabel: "البريد الإلكتروني: ",
    ageLabel: "العمر: ",
    getLink: "احصل علي الرابط",
    createdAt: "تاريخ التسجيل: ",
    logOut: "تسجيل الخروج 🔓",   
    updateAnswer: "تحديث الإجابة" +" ✏️",
    deleteAccount: "حذف الحساب" + " 🗑️",
    WhatsApp:{
      html: `تواصل معنا عبر واتساب <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' width='20' height='20'>` 
    },
  },
  en: {
    welcome: "🙌 Welcome to E3rafni",
    desc: "Login with Google, answer a few questions, and see how well your friends know you! 🤔",
    login:{
      html: `Login with Google <i class="fab fa-google me-2"></i>`
    },
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
    confirmBtn: "confirm",
    required: "Please select an answer for all Qs.",
    success: "Your answer has been saved successfully!",
    error: "An error occurred while saving.",
    emailLabel: "Email: ",
    ageLabel: "Age: ",
    getLink: "Get the URL",
    createdAt: "Login Date: ",
    logOut: "Log Out 🔓",
    updateAnswer: "Update Answer ✏️",
    deleteAccount: "Delete Account 🗑️",
    WhatsApp: {
      html: `Contact us on WhatsApp <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' width='20' height='20'>`,
    }
  }
}



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

  // ✅ أضف الكود ده هنا في الآخر لتحديث الصورة:
  const userPhoto = document.getElementById('userPhoto');
  const userName = document.getElementById('userName')?.textContent;
  if (userPhoto && userName && userPhoto.src.includes('data:image/svg+xml')) {
    userPhoto.src = generateAvatar(userName);
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
      if (typeof translation === 'object' && translation.html) {
        el.innerHTML = translation.html;
      } else if(el.tagName === "OPTION") {
        el.innerText = translation;
      }else {
        el.innerHTML = translation;
      }
    }
  });





      // تغيير اتجاه الصفحة
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  // تغيير كلاس اللغة عشان نتحكم في التنسيق
  document.body.classList.toggle("lang-en", lang === "en");
  document.body.classList.toggle("lang-ar", lang === "ar");


  };









// جعل الدوال متاحة للاستخدام من الـ HTML
window.setLanguage = setLanguage;
window.changeMode = changeMode;






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

});