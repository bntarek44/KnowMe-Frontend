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
    darkGray1: "داكن - أسود ",
    darkGray2: "داكن - رمادي أغمق",
    darkBlue: "داكن - أزرق داكن",
    darkBrown: "داكن - بني غامق",
    darkRed: "داكن - أحمر غامق",
    ownerName: "صاحب التحدي :",
    dashHeader: "جاوب عن نفسك… محدش هيستخبى! 😂يلا نكشف الغشاشين اللي بيقولوا يعرفوك! 🤣",
    q01: " 1️⃣"+"بتفضل الصيف ولا الشتا!!" ,
    summer: "الصيف",
    winter: "الشتا",
    q02: "2️⃣" + "أي نوع من الرحلات تفضل!!",
    sea: "البحر",
    mountain: "الجبل",
    q03: "3️⃣" + "أكتر حاجة بتحبها ف صحابك!!",
    support: "الدعم",
    fun: "المرح",
    love: "الحب والوفاء",
    noFriend: "يا رب سامحني على ذنوبي اللي جابتلي الكائنات دي" + "😂",
    q04: "4️⃣"+ "أكتر حاجة مهمة في حياتك من دول !!",
    sleep: "النوم",
    food: "الأكل",
    mobile: "الموبايل",
    laughing: "الضحك",
    q05: "5️⃣"+ "أكتر حيوان بتحبه !!",
    cats: "القطط",
    dogs: "الكلاب",
    horses: "الخيل",
    noAnimal: "مليش ف الكلام ده يعم..خليها علي الله" + "😂",
    dashSubmit: "احفظ إجاباتك وابدأ التحدي" + " ✨",
    quizSubmit: "احفظ إجابتك يلا بينا نكشف حقيقتك" + " 🕵️‍♂️",
    closeBtn: "إغلاق",
    confirmBtn: "تأكيد",
    required: "من فضلك اختر إجابة لجميع الأسئلة.",
    success: "تم حفظ إجابتك بنجاح!"+" ✅",
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
    darkGray1: "Dark - Black",
    darkGray2: "Dark - Darker Gray",
    darkBlue: "Dark - Blue",
    darkBrown: "Dark - Brown",
    darkRed: "Dark - Red",
    ownerName: "Challenge Owner:",
    dashHeader: "Answer about yourself… no hiding!😂 Let’s expose those fake friends who think they know you! 🤣",
    q01: "1️⃣ You prefer summer or winter!!",
    summer : "Summer",
    winter : "Winter",
    q02: "2️⃣ You prefer which type of the trips !!",
    sea: "Sea",
    mountain: "Mountain",
    q03: "3️⃣ The most thing you love in your friends !!",
    support: "Support",
    fun: "Fun",
    love: "Love and Loyality",
    noFriend: "😂"+ "يا رب سامحني على ذنوبي اللي جابتلي الكائنات دي" ,
    q04: "4️⃣ The most thing important to you from these !!",
    sleep: "Sleep",
    food: "Food",
    mobile: "Mobile",
    laughing: "Laughing",
    q05: "5️⃣ The most animal you like !!",
    cats: "Cats",
    dogs: "Dogs",
    horses: "Horses",
    noAnimal: "مليش ف الكلام ده يعم..خليها علي الله" + "😂",
    dashSubmit: "Save Answers & Start the Challenge" + " ✨",
    quizSubmit: "Save your answer, let’s see your truth 🕵️‍♂️",
    closeBtn: "Close",
    confirmBtn: "confirm",
    required: "Please select an answer for all Qs.",
    success: "Your answer has been saved successfully! ✅",
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

  // تغيير لون النصوص في الهيدر بتاع الداشبورد
  const dashHeader = document.querySelector('.dashHeader');
  if (dashHeader) {
    
    if (value.startsWith('dark')) {
      dashHeader.style.color = '#fff';
    } else {
      dashHeader.style.color = '#000';
    }
  }

// تغيير لون النصوص في الهيدر بتاع الكويز
  const quizHeader = document.querySelector('#quizHeader');
  if (quizHeader) {
    
    if (value.startsWith('dark')) {
      quizHeader.style.color = '#fff';
    } else {
      quizHeader.style.color = '#000';
    }
  }
  // تغيير لون النصوص في الهيدر بتاع صاحب التحدي
  const quizOwner = document.querySelector('#quizOwner');
  if (quizOwner) {
    
    if (value.startsWith('dark')) {
      quizOwner.style.color = '#fff';
    } else {
      quizOwner.style.color = '#000';
    }
  }


  const confirm_message = document.querySelector('#confirm-message');
  if (confirm_message) {
    
    if (value.startsWith('dark')) {
      confirm_message.style.color = '#fff';
    } else {
      confirm_message.style.color = '#000';
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
  };

window.updateOwnerNameColors?.();
window.updateModalColor?.();
  
};
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
    window.getQuizHeader?.();
    window.fetchUserDataByToken ?.();
    if (window._correctCount !== undefined && window._totalQuestions !== undefined) {
      window.renderResultText?.(window._correctCount, window._totalQuestions);
  }





      // تغيير اتجاه الصفحة
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  // تغيير كلاس اللغة عشان نتحكم في التنسيق
  document.body.classList.toggle("lang-en", lang === "en");
  document.body.classList.toggle("lang-ar", lang === "ar");




  };



// ====================
const mainGoogleLoginBtn = document.getElementById('mainGoogleLoginBtn');
  if (mainGoogleLoginBtn) {
  mainGoogleLoginBtn.addEventListener('click', () => {
    // هنا بقى اعمل ريديركت للـ جوجل
    window.location.href = `https://knowme-backend-production-b054.up.railway.app/auth/google`;
  });
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