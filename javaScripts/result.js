let token;
let guestEmail;
let lang;

// ======================
function getTokenFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('token');
}

function getGuestEmail() {
  return localStorage.getItem('guestEmail');
}

// ======================
const messages = {
    missingToken: {
      ar: "❌ الرابط غير صالح أو التوكن مفقود.",
      en: "❌ Invalid link or missing token."
    },
    userNotFound: {
      ar: "❌ المستخدم غير موجود أو الرابط غير صالح.",
      en: "❌ User not found or invalid link."
    },
    serverError: {
      ar: "❌ حدث خطأ أثناء تحميل بيانات المستخدم.",
      en: "❌ An error occurred while loading user data."
    }
  };

// ✅ مودال النتيجة
const resultOverlay = document.getElementById('result-modal-overlay');
// Welcome Modal
const resultModal = document.getElementById('result-modal');
const resultModalText = document.getElementById('result-modal-text');
const resultCloseBtn = document.getElementById('result-close-btn');
// Result Card
const resultCard = document.getElementById('resultCard');
const resultMessage = document.getElementById('resultMessage');
const resultScore = document.getElementById('resultScore');

// ======================
// ✅ خلفية المودال
// ======================

function showOverlay() {
  resultOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideOverlay() {
  resultOverlay.classList.remove('show');
  document.body.style.overflow = '';
}



// ======================
// ✅ مودال الترحيب
// ======================
function showResultModal(message, type = 'success') {
  resultModalText.innerHTML = message;
  resultModalText.style.fontSize = '1.4rem';

  if (type === 'error') {
    resultModalText.style.color = '#dc2626';
  } else {
    resultModalText.style.color = '';
  }

  resultModal.classList.add('show');
  updateModalColor();
  showOverlay();
}

function hideResultModal() {
  resultModal.classList.remove('show');
  hideOverlay();
}

if (resultCloseBtn) {
  resultCloseBtn.addEventListener('click', async() => {
    hideResultModal();
    const result = await fetchResultFromAPI(token, guestEmail);
    if (!result) {
      showResultModal(
        lang === 'ar' ? "⚠️ تعذر تحميل النتيجة. تأكد من صحة الرابط وحاول مرة أخرى."
        : "⚠️ Failed to load result. Please check the link and try again.");
      return;
    }
    displayResult(result.correctCount, result.totalQuestions);
    launchConfetti();
    });
};

function updateModalColor() {
  const mode = localStorage.getItem('mode') || 'light-gray2';
  const colorsMap = {
    "light-gray1": { bg: "#fff", color: "#222" },
    "light-gray2": { bg: "#fff", color: "#222" },
    "light-beige": { bg: "#f7e9daff", color: "#222" },
    "light-purple": { bg: "#d6c9eeff", color: "#4c1d95" },
    "light-pink": { bg: "#fac2cfff", color: "#831843" },
    "dark-gray1": { bg: "#151616ff", color: "#f3f4f6" },
    "dark-gray2": { bg: "#374151", color: "#e5e7eb" },
    "dark-blue": { bg: "#1e40af", color: "#bae6fd" },
    "dark-brown": { bg: "#6d4c41", color: "#f3e0dc" },
    "dark-red": { bg: "#b91c1c", color: "#fee2e2" }
  };

  const c = colorsMap[mode] || colorsMap['light-gray2'];
  // طبعاً لو المودال ظاهر بنغير لونه
  if (resultModal) {
    resultModal.style.backgroundColor = c.bg;
    resultModalText.style.color = c.color;
  }
    if (resultCard) {
    resultCard.style.backgroundColor = c.bg;
    resultCard.style.setProperty('--glow-color', c.bg ); 
    resultMessage.style.color = c.color;
    // resultScore.style.color = c.color;

  }

};

// دالة لتعطيل كل الأزرار والروابط في الصفحة
function disableAllButtonsAndLinks() {
  document.querySelectorAll('button, a').forEach(el => {
    el.disabled = true;
    el.style.pointerEvents = 'none';
    el.style.opacity = '0.5';
  });
}

// استقبال البيانات
async function fetchResultFromAPI(token, guestEmail) {
  try {
    const response = await fetch('https://knowme-backend-production-b054.up.railway.app/auth/quiz/result', {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token,
        guestEmail
      })
    });

    if (!response.ok) {
      throw new Error('❌ Network response was not ok');
    }

    const data = await response.json();
    return data.result;

  } catch (error) {
    console.error('Error fetching result:', error);
    return null;
  }
}







function animateCount(element, correct, total) {
  let current = 0;
  const interval = setInterval(() => {
    if (current < correct) {
      current++;
      element.textContent = `${current} / ${total}`;
    } else {
      clearInterval(interval);
      // بعد ما يخلص العد، أضف النسبة
      const percentage = Math.round((correct / total) * 100);
      element.textContent = `${correct} / ${total} (${percentage}%)`;
    }
  }, 50);
}


let lastResultData = null;

function displayResult(correctCount, totalQuestions) {
  lastResultData = { correctCount, totalQuestions };
    // ✅ خزّن القيم في window
  window._correctCount = correctCount;
  window._totalQuestions = totalQuestions;

  // ✅ أنيميشن أول مرة فقط
  resultCard.classList.add('animate__animated', 'animate__lightSpeedInRight', 'show', 'glow');
  launchConfetti();

  // ✅ عرض النتيجة لأول مرة
  renderResultText(correctCount, totalQuestions);
}

function renderResultText(correctCount, totalQuestions) {
  if (!correctCount || !totalQuestions) return;

  const lang = localStorage.getItem('lang') || 'ar';

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  let message = '';
  let color = '';
  let icon = '';

  if (percentage >= 85) {
    message = lang === 'ar'
      ? '🔥 ايه الجمدان ده🤯🏆.. دنت عارفه أكتر من نفسه ا جدع!'
      : '🔥 What a legend 🤯🏆.. You know them better than they know themselves, mate!';
    color = '#4CAF50'; icon = '🏆';
  } else if (percentage >= 65) {
    message = lang === 'ar'
      ? '😎 مش بطال ! مشيت معاك المرة دي ي محظوظ👀 😂'
      : '😎 Not bad at all! Luck’s clearly on your side today 👀😂';
    color = '#8BC34A'; icon = '🎯';
  } else if (percentage >= 50) {
    message = lang === 'ar'
      ? '🤔 هو انتو فعلًا صحاب؟ ولا بتقابلوا بعض في الأسانسير؟ 😂'
      : '🤔 Are you really friends... or just LinkedIn connections? 😂';
    color = '#FFC107'; icon = '😬';
  } else {
    message = lang === 'ar'
      ? '🤣 امشي ياض من هنا.. صاحبك هيعملك بلوك بعد النتيجة دي! وربنا يقدرنا علي فعل الخير 😅'
      : '🤣 Get outta here, mate… your friend’s gonna block you after this result! May God help us do better next time 😅';
    color = '#F44336'; icon = '🙈';
  }

  // ✅ عرض النتيجة بدون أنيميشن
  resultIcon.textContent = icon;
  resultScore.textContent = `${correctCount} / ${totalQuestions} (${percentage}%)`;
  resultScore.style.color = color;
  resultMessage.textContent = message;
}




function launchConfetti() {
  const duration = 3 * 1000; // 5 ثواني
  const animationEnd = Date.now() + duration;
  const defaults = { 
    origin: { y: 0.6 },
    colors: ['#4CAF50', '#FF9800', '#F44336', '#2196F3', '#9C27B0'],
    spread: 90,
    ticks: 250,
    gravity: 0.5,
    scalar: 1.2,
  };

  (function frame() {
    confetti({
      ...defaults,
      particleCount: 5 + Math.floor(Math.random() * 5),
      angle: 60,
      startVelocity: 30,
    });
    confetti({
      ...defaults,
      particleCount: 5 + Math.floor(Math.random() * 5),
      angle: 120,
      startVelocity: 30,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
}






document.addEventListener('DOMContentLoaded', async () => {
  token = getTokenFromURL();
  guestEmail = getGuestEmail();
  lang = localStorage.getItem('lang') || 'ar';

  const message = lang === 'ar'
    ?"⚠️ الرابط غير صحيح أو بيانات الزائر مفقودة!"
    : "Invalid link! OR Guest data is missing! ⚠️";

  if (!token || !guestEmail) {
    showResultModal(message);
    if (resultCloseBtn) {
      resultCloseBtn.style.display = 'none';
    }
    disableAllButtonsAndLinks();
    return;
  }

  showResultModal(
    lang === 'ar' ? " حان وقت الحقيقة"+ "👀😅" : " It's time for the truth 👀😅"
  );
});




window.updateModalColor = updateModalColor;
window.renderResultText = renderResultText;
