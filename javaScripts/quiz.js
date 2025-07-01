// ====================
// ✅ إعدادات مودال الرسالة
// ====================
const overlay = document.getElementById('modal-overlay');
const welcomeModal = document.getElementById('welcome-modal');
const welcomeText = document.getElementById('welcome-text');
const closeBtn = document.getElementById('close-btn');

if (closeBtn) {
  closeBtn.addEventListener('click', hideCustomModal);
}

// ✅ لإظهار المودال
function showCustomModal(message, type = 'success') {
  welcomeText.innerHTML = message;
  welcomeText.style.fontSize = '1.4rem';

  if (type === 'error') {
    welcomeText.style.color = '#dc2626';
  } else {
    welcomeText.style.color = '';
  }

  welcomeModal.classList.add('show');
  updateCustomModalColors();
  showOverlay();
}

// ✅ لإخفاء المودال
function hideCustomModal() {
  welcomeModal.classList.remove('show');
  hideOverlay();
}

// ✅ خلفية المودال
function showOverlay() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function hideOverlay() {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

// ✅ ألوان المودال حسب المود
function updateCustomModalColors() {
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

  const c = colorsMap[mode] || colorsMap['light-gray2'];
  welcomeModal.style.backgroundColor = c.bg;
  welcomeModal.style.color = c.color;
}



// ====================
// ✅ من هنا يبدأ كود الصفحة
// ====================

// ✅ 1. التوكن في الرابط
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (!token) {
  const lang = localStorage.getItem('lang') || 'ar';
  const message = lang === 'ar'
    ? "❌ الرابط غير صالح! لا يوجد توكن."
    : "Invalid link! No token found.❌";
  
  showCustomModal(message, 'error');
  throw new Error("Missing token in URL");
}
// ✅  جلب اسم المالك
async function fetchOwnerName(token) {
  try {
    const res = await fetch(`https://knowme-backend-production.up.railway.app/auth/quiz/owner?token=${token}`);
    if (!res.ok) throw new Error('Failed to fetch owner name');
    const data = await res.json();
    return data.name;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const getOwnerName = async function () {
  const ownerName = await fetchOwnerName(token);
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
       `Time for the ultimate test! ⚠️.
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
    const submitBtn = form.querySelector('button[type="submit"]');
    const answers = {};

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
      showCustomModal(lang === "ar" ? "⚠️ من فضلك أجب على كل الأسئلة" : "⚠️ Please answer all questions", 'error');
      return;
    }

    // عطل الزر
    submitBtn.disabled = true;
    submitBtn.textContent = lang === 'ar' ? 'جاري الحفظ...' : 'Saving...';

    try {
      const res = await fetch(`https://knowme-backend-production.up.railway.app/auth/quiz/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          answers
        })
      });


        const errorMessage = lang === 'ar'
        ? "❌ فشل حفظ الإجابات"
        : "❌ Failed to save answers";

        if (!res.ok) throw new Error(errorMessage);

      await res.json();
      console.log("✅ تم الحفظ بنجاح");

      showCustomModal(
        lang === "ar" ? "✅ تم الحفظ بنجاح. شكرا لمشاركتك!" : "✅ Saved successfully. Thank you!"
      );

      submitBtn.textContent = lang === 'ar' ? '✅ تم الحفظ' : '✅ Saved';

    } catch (error) {
      console.error(error);
      showCustomModal(
        lang === "ar" ? "❌ حدث خطأ أثناء حفظ الإجابات. حاول مرة أخرى." : "❌ Error saving your answers. Please try again.",
        'error'
      );
      submitBtn.disabled = false;
      submitBtn.textContent = lang === 'ar' ? 'احفظ إجاباتك وابدأ التحدي' : 'Save your answers and start the challenge';
    }
  });
}


addEventListener('DOMContentLoaded', () => {
const lang = localStorage.getItem('lang') || 'ar';
const massages = {
  ar:  "أهلاً بيك في إعرفني 🙌.. جاوب الأسئلة عن صحبك قبل ما يكتشف إنك مش عارفه أصلًا" + "🕵️‍♂️😂 ", 
  en:  "Welcome to E3rafni 🙌.Let’s see if you really know your friend or if you’ve been bluffing this whole time! 😂🤓" 
};
showCustomModal(massages[lang]);

getOwnerName();
  
});


// بيخلي الدالة متاحة عالميا عشان نقدر نناديها ف اي ملف تاني 
window.updateOwnerNameColors = updateOwnerNameColors;
window.getQuizHeader = getQuizHeader;