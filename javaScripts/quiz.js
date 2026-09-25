// ✅ 1. التوكن في الرابط
const urlParams = new URLSearchParams(window.location.search);
const quizTokenWithPrefix = urlParams.get('quizToken');
let rawQuizToken = quizTokenWithPrefix;
if (quizTokenWithPrefix && quizTokenWithPrefix.startsWith('quiz-')) {
  rawQuizToken = quizTokenWithPrefix.replace('quiz-', '');
}

// ====================
const quizOverlay = document.getElementById('quiz-modal-overlay');
// Welcome Modal
const quizModal = document.getElementById('quiz-modal');
const quizModalText = document.getElementById('quiz-modal-text');
const quizCloseBtn = document.getElementById('quiz-close-btn');
// Login Modal
const quizLoginModal = document.getElementById('quiz-login-modal');
const quizLoginText = document.getElementById('quiz-login-text');
const quizGoogleLoginBtn = document.getElementById('quiz_google_btn');


// ======================
// ✅ خلفية المودال
// ======================

function showOverlay() {
  quizOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideOverlay() {
  quizOverlay.classList.remove('show');
  document.body.style.overflow = '';
}


// ======================
// ✅ مودال الترحيب
// ======================
function showQuizModal(message, type = 'success') {
  quizModalText.innerHTML = message;
  quizModalText.style.fontSize = '1.4rem';

  if (type === 'error') {
    quizModalText.style.color = '#dc2626';
  } else {
    quizModalText.style.color = '';
  }

  quizModal.classList.add('show');
  updateTwoModalsColors();
  showOverlay();
}

function hideQuizModal() {
  quizModal.classList.remove('show');
  hideOverlay();
}
// ======================
// ✅ مودال تسجيل الدخول
// ======================
function showLoginModal(message) {
  quizLoginText.innerHTML = message;
  quizLoginText.style.fontSize = '1.4rem';
  quizLoginModal.classList.add('show');
  updateTwoModalsColors();
  showOverlay();
}

function hideLoginModal() {
  quizLoginModal.classList.remove('show');
  hideOverlay();
}
// ✅ زر تسجيل الدخول
if (quizGoogleLoginBtn) {
quizGoogleLoginBtn.addEventListener('click', () => {

if (quizTokenWithPrefix) {
  // صديق بيحل التحدي
  window.location.href = `https://know-me-production.up.railway.app/auth/google?state=${quizTokenWithPrefix}`;
} else {
  // صاحب التحدي
  window.location.href = `https://know-me-production.up.railway.app/auth/google`;
}
});

}

// ✅ عند إغلاق الترحيب ➜ افتح تسجيل الدخول
if (quizCloseBtn) {
  quizCloseBtn.addEventListener('click', () => {
    hideQuizModal();
  });
};




// ✅ ألوان المودال حسب المود
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
  // طبعاً لو المودال ظاهر بنغير لونه
  if (quizModal) {
    quizModal.style.backgroundColor = c.bg;
    quizModal.style.color = c.color;
  }
  if (quizLoginModal) {
    quizLoginModal.style.backgroundColor = c.bg;
    quizLoginModal.style.color = c.color;
  }
};




// ====================
// ✅ من هنا يبدأ كود الصفحة
// ====================



// ✅  جلب اسم المالك
async function fetchOwnerName(rawQuizToken) {
  try {
    const res = await fetch(`https://know-me-production.up.railway.app/auth/quiz/owner?quizToken=${rawQuizToken}` ,
      {
        method: 'GET',
        credentials: 'include',
      }
    );
    if (!res.ok) throw new Error('Failed to fetch owner name');
    const data = await res.json();
    return data.name;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const getOwnerName = async function () {
  const ownerName = await fetchOwnerName(rawQuizToken);
  const ownerNameElement = document.getElementById('ownerName');
  if (ownerNameElement) {
    ownerNameElement.textContent = ownerName || 'صاحب التحدي'; // افتراضي إذا لم يوجد اسم
    updateOwnerNameColors(); // تحديث الألوان بعد تعيين الاسم
  }

}




// ✅ إعداد عنوان التحدي
const getQuizHeader = async function (){
    
    const lang = localStorage.getItem('lang') || 'ar';
  let title = '';

  if (lang === 'ar') {
    title = 
       "حان وقت التحدي الحقيقي! ⚠️..سألنا صاحبك الأسئلة دي 🧠🎯.. ودلوقتي دورك يلا حاول تخمن صاحبك بيفكر ازاي" +"😂🤓"
        } else {
    title = 
       `Time for the ultimate challenge! ⚠️.
We asked your friend these questions and they answered 🧠🎯.Now it’s your turn to guess how they think 😂🤓`  }

  document.querySelector('#quizHeader').innerHTML = title;
}


// تنسيق لون اسم المالك
function updateOwnerNameColors() {
    const mode = localStorage.getItem('mode') || 'light-gray2';
    const colorsMap = {
    "light-gray1": { color: "#1d4ed8" },
    "light-gray2": { color: "#2563eb" },
    "light-beige": { color: "#f59e0b" },
    "light-purple": { color: "#4c1d95" },
    "light-pink": { color: "#831843" },
    "dark-gray1": { color: "#bae6fd" },
    "dark-gray2": { color: "#bae6fd" },
    "dark-blue": { color: "#bae6fd" },
    "dark-brown": { color: "#bae6fd" },
    "dark-red": { color: "#bae6fd" }
    };
    const ownerName = document.getElementById('ownerName');
    const c = colorsMap[mode] || colorsMap['light-gray2'];
    ownerName.style.color = c.color;
}




// ✅  إرسال الإجابات
const form = document.getElementById("self-quiz-form");

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const lang = localStorage.getItem("lang") || "ar";
    const quizSubmitBtn = form.querySelector('#quizGoogleLoginBtn');
    const answers = {};
    // ✅ هات اسم الزائر وإيميله من التخزين
    const guestName = localStorage.getItem('guestName');
    const guestEmail = localStorage.getItem('guestEmail');

    // ✅ تحقق احتياطي
    if (!guestName || !guestEmail) {
      showQuizModal(
        lang === "ar" ? "⚠️ خطأ في تسجيل الدخول. جرب تسجيل الدخول مرة أخرى." : "⚠️ Login error. Please sign in again.",
        'error'
      );
      return;
    }


    // اجمع الإجابات
    const questionNames = [...new Set(
      Array.from(form.querySelectorAll('input[type="radio"]')).map(input => input.name)
    )];

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
      showQuizModal(lang === "ar" ? "⚠️ من فضلك أجب على كل الأسئلة" : "⚠️ Please answer all questions", 'error');
      return;
    }

    // عطل الزر
    quizSubmitBtn.disabled = true;
    quizSubmitBtn.textContent = lang === 'ar' ? 'جاري الحفظ...' : 'Saving...';


try {
  const res = await fetch(`https://know-me-production.up.railway.app/auth/quiz/answer`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${rawQuizToken}`,
      guestName,
      guestEmail,
      answers
    })
  });

  const errorMessage = lang === 'ar'
    ? "❌ فشل حفظ الإجابات"
    : "❌ Failed to save answers";

  if (!res.ok) throw new Error(errorMessage);

  await res.json();
  console.log("✅ تم الحفظ بنجاح");

  // ✅ غيّر النص
  quizSubmitBtn.textContent = lang === 'ar' ? '✅ تم الحفظ' : '✅ Saved';

  // ✅ انتظر ثانية
  setTimeout(() => {
    window.location.href = `https://know-me-frontend-swart.vercel.app/result.html?token=${rawQuizToken}`;
  }, 1000);

} catch (error) {
  console.error(error);
  showQuizModal(
    lang === "ar" ? "❌ حدث خطأ أثناء حفظ الإجابات. حاول مرة أخرى." : "❌ Error saving your answers. Please try again.",
    'error'
  );
  quizSubmitBtn.disabled = false;
  quizSubmitBtn.textContent = lang === 'ar' ? 'احفظ إجاباتك وابدأ التحدي' : 'Save your answers and start the challenge';
}
  });
};


// دالة لتعطيل كل الأزرار والروابط في الصفحة
function disableAllButtonsAndLinks() {
  document.querySelectorAll('button, a').forEach(el => {
    el.disabled = true;
    el.style.pointerEvents = 'none';
    el.style.opacity = '0.5';
  });
}

// دالة التحقق عند تحميل الصفحة
async function checkLoginAndOwnerAndQuizModal() {
  const lang = localStorage.getItem('lang') || 'ar';

  try {
    // 1️⃣ هات بيانات المستخدم الحالي
    const userRes = await fetch('https://know-me-production.up.railway.app/auth/user', {
      credentials: 'include',
      cache: 'no-store'
    });
    const userData = await userRes.json();

    if (!userData.user) {
      showLoginModal(
        lang === 'ar'
          ? 'سجل دخولك بجوجل علشان نعرفك 👀'
          : 'Sign in with Google so we know who you are 👀'
      );
      return;
    }

    // 2️⃣ هات بيانات صاحب التوكن
    const ownerRes = await fetch(`https://know-me-production.up.railway.app/auth/quiz/owner?quizToken=${rawQuizToken}`, {
      credentials: 'include',
      cache: 'no-store'
    });
    const ownerData = await ownerRes.json();

    if (!ownerData || !ownerData.id) {
      showQuizModal(
        lang === 'ar'
          ? '❌ الرابط غير صالح أو التوكن خاطئ'
          : 'Invalid or broken link ❌',
        'error'
      );
      if (quizCloseBtn) {
        quizCloseBtn.style.display = 'none';
      }
      disableAllButtonsAndLinks();
      return;
    }

    // 3️⃣ تأكيد وجود الـ IDs
    if (!userData.user.id || !ownerData.id) {
      showQuizModal(
        lang === 'ar'
          ? '❌ حصل خطأ في التحقق من الهوية، حاول مرة تانية.'
          : '❌ Error verifying user identity. Please try again.',
        'error'
      );
      if (quizCloseBtn) {
      quizCloseBtn.style.display = 'none';
      }
      disableAllButtonsAndLinks();
      return;
    }
      
    // 4️⃣ لو هو صاحب التوكن ➜ ممنوع
    if (userData.user.id.toString() === ownerData.id.toString()) {
      showLoginModal(
        lang === 'ar'
          ? '❌ مينفعش تحل التحدي بتاعك يا ناصح 😅..سجل دخول بحساب تاني وخلي صحابك هم الل يجاوبوا عنك'
          : '❌You cannot answer your own quiz! 😅 ..Login with another email and Let your friends answer about you'
      );
      return;
    }

    // ✅ 5️⃣ تحقق إذا الشخص جاوب قبل كده
 
  const guestEmail = userData.user.email;
   const checkRes = await fetch('https://know-me-production.up.railway.app/auth/quiz/result', {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token:rawQuizToken,
        guestEmail
      })
    });
    const checkData = await checkRes.json();

    if (checkData.result && checkData.result.percentage) {
      showQuizModal(
        lang === 'ar'
          ? '✅ انت جاوبت على التحدي ده قبل كده. متقلقش، إجابتك محفوظة 🎉'
          : '✅ You’ve already answered this quiz. Don’t worry, your answers are saved! 🎉',
        'success'
      );
      if (quizCloseBtn) {
      quizCloseBtn.style.display = 'none';
      }
      disableAllButtonsAndLinks();
      return;
    }
    // عشان نعمل حد معين للاجابات
    // const quizRes = await fetch(`https://knowme-backend-production-b054.up.railway.app/auth/statics/quizes-ranking?email=${guestEmail}`,{
    //   method : "GET",
    //   credentials : "include"
    // }
    // );
    // const quiz_data = await quizRes.json();
    // const quiz_ranking = quiz_data.ranking || [];
    // if (quiz_ranking.length === 10) {
    //   showQuizModal(
    //     lang === 'ar'
    //       ? "❌ واضح إنك بتحب التحديات 😅 بس للأسف، خلصت فرصك! جاوبت على 10 اختبارات."
    //       : "❌ That's it! You've already answered the maximum of 10 friend quizzes.",
    //     'error'
    //   ); 
    //   if (quizCloseBtn) {
    //   quizCloseBtn.style.display = 'none';
    //   }
    //   disableAllButtonsAndLinks();
    //   return;
    // };
        // عشان نعمل حد معين للاجابات
    const friendsRes = await fetch(`https://know-me-production.up.railway.app/auth/statics/friends-ranking?token=${rawQuizToken}`,{
      method : "GET",
      credentials : "include"
    }
    );
    const friend_data = await friendsRes.json();
    const friends_ranking = friend_data.ranking || [];
    if (friends_ranking.length === 10) {
      showQuizModal(
        lang === 'ar'
          ? '❌ لقد وصل صاحب التحدي للحد الأقصي  من الاصدقاء'
          : '❌ CHallenge owner has already reached the upper limit of friends ',
        'error'
      ); 
      if (quizCloseBtn) {
      quizCloseBtn.style.display = 'none';
      }
      disableAllButtonsAndLinks();
      return;
    }

    // ✅ 6️⃣ كل حاجة تمام ➜ عرض الكويز
    const messages = {
      ar: "أهلاً بيك في إعرفني 🙌.. جاوب الأسئلة عن صحبك قبل ما يكتشف إنك مش عارفه أصلًا 🕵️‍♂️😂 ",
      en: "Welcome to E3rafni 🙌. Let’s see if you really know your friend or if you’ve been bluffing this whole time! 😂🤓"
    };

    showQuizModal(messages[lang]);

    // سجل بيانات الزائر
    localStorage.setItem('guestName', userData.user.name);
    localStorage.setItem('guestEmail', userData.user.email);

  } catch (error) {
    console.error('Error checking user and owner:', error);
    showQuizModal(
      lang === 'ar'
        ? '⚠️ حصل خطأ، حاول تحدث الصفحة'
        : '⚠️ An error occurred. Please try refreshing the page',
      'error'
    );
  }
}



document.addEventListener('DOMContentLoaded', () => {
  if (!quizTokenWithPrefix) {
    const lang = localStorage.getItem('lang') || 'ar';
    const message = lang === 'ar'
      ? "❌ الرابط غير صالح! هذه الصفحة غير مملوكة لأي شخص."
      : "Invalid link! This page doesn`t belong to any one.❌";

    showQuizModal(message, 'error');
          // ✅ عطل زر الإغلاق في المودال
    if (quizCloseBtn) {
      quizCloseBtn.style.display = 'none';
    }
    disableAllButtonsAndLinks(); // عطل كل الأزرار والروابط
    return;

  }

  checkLoginAndOwnerAndQuizModal();
  getOwnerName();
});






// بيخلي الدالة متاحة عالميا عشان نقدر نناديها ف اي ملف تاني 
window.updateOwnerNameColors = updateOwnerNameColors;
window.getQuizHeader = getQuizHeader;
