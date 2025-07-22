const params = new URLSearchParams(window.location.search);
const profileTokenWithPrefix = params.get('profileToken');
let rawProfileToken = profileTokenWithPrefix;
if (profileTokenWithPrefix && profileTokenWithPrefix.startsWith('profile-')) {
  rawProfileToken = profileTokenWithPrefix.replace('profile-', '');
}

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
const overlay = document.getElementById('profile-modal-overlay');
// Login Modal
const profileLoginModal = document.getElementById('profile-login-modal');
const profileLoginText = document.getElementById('profile-login-text');
const profileGoogleLoginBtn = document.getElementById('profile_google_btn');
// Profile Modal
const profileModal = document.getElementById('profile-madal');
const profileModalText = document.getElementById('profile-modal-text');
const profileCloseBtn = document.getElementById('profile-close-btn');

// ======================

function showOverlay() {
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideOverlay() {
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}
// ======================
// ✅ مودال الترحيب
// ======================
function showProfileModal(message, type = 'success') {
  profileModalText.innerHTML = message;
  profileModalText.style.fontSize = '1.4rem';

  if (type === 'error') {
    profileModalText.style.color = '#dc2626';
  } else {
    profileModalText.style.color = '';
  }

  profileModal.classList.add('show');
  updateTwoModalsColors();
  showOverlay();
}

function hideProfileModal() {
  profileModal.classList.remove('show');
  hideOverlay();
}

// ======================
// ✅ مودال تسجيل الدخول
// ======================
function showLoginModal(message) {
  profileLoginText.innerHTML = message;
  profileLoginText.style.fontSize = '1.4rem';
  profileLoginModal.classList.add('show');
  updateTwoModalsColors();
  showOverlay();
}

function hideLoginModal() {
  profileLoginModal.classList.remove('show');
  hideOverlay();
}
// ✅ زر تسجيل الدخول
if (profileGoogleLoginBtn) {
  profileGoogleLoginBtn.addEventListener('click', () => {
    if (profileTokenWithPrefix) {
      // صديق بيحل التحدي
      window.location.href = `https://knowme-backend-production-b054.up.railway.app/auth/google?state=${profileTokenWithPrefix}`;
    } else {
      // صاحب التحدي
      window.location.href = `https://knowme-backend-production-b054.up.railway.app/auth/google`;
    }
  });

}

function generateAvatar(name) {
  const firstLetter = encodeURIComponent(name?.charAt(0).toUpperCase() || "?");
// 3a3d42
  const mode = localStorage.getItem('mode') || 'light-gray2';
  const colorsMap = {
    "light-gray1": { bg: "#e0e2e5", color: "#222" },
    "light-gray2": { bg: "#f3f4f6", color: "#222" },
    "light-beige": { bg: "#f0ddc6", color: "#222" },
    "light-purple": { bg: "#d1bcec", color: "#4c1d95" },
    "light-pink": { bg: "#fdb6c7", color: "#831843" },
    "dark-gray1": { bg: "#222", color: "#c9d2e6" },
    "dark-gray2": { bg: "#3f464e", color: "#e5e7eb" },
    "dark-blue": { bg: "#3e4683", color: "#bae6fd" },
    "dark-brown": { bg: "#5c504c", color: "#f3e0dc" },
    "dark-red": { bg: "#663434", color: "#fee2e2" }
  };
//  3e4683
  const c = colorsMap[mode] || colorsMap['light-gray2'];
  const bgColor = c.bg;
  const textColor = c.color;

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>
      <circle cx='50' cy='50' r='50' fill='${bgColor}' />
      <text x='50%' y='55%' text-anchor='middle' dominant-baseline='middle'
        font-size='40' fill='${textColor}' font-family='sans-serif'>${firstLetter}</text>
    </svg>`.trim();

  const base64 = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${base64}`;
}
// ✅ دالة لاستقبال بيانات اليوزر من الباك اند عبر التوكن
async function fetchUserDataByToken() {
  const lang = localStorage.getItem('lang') || 'ar';
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

  if (!profileTokenWithPrefix) {
    console.error("❌ التوكن مش موجود في الرابط");
    showError(messages.missingToken[lang]);
    return;
  }

  try {
    const response = await fetch(`https://knowme-backend-production-b054.up.railway.app/auth/user-by-token?profileToken=${rawProfileToken}`, {
      method: 'GET',
      credentials: 'include'
    });
    if (!response.ok) throw new Error('ServerError');

    const data = await response.json();
    console.log("✅ بيانات المستخدم:", data);

    if (data.user) {
      const user = data.user;

      document.getElementById('userName').textContent = user.name;
      document.getElementById('userEmail').textContent = user.email;

      // ✅ خاص بعرض تاريخ التسجيل
      const createdAt = new Date(user.createdAt);
      let locale = lang === 'en' ? 'en-US' : 'ar-EG';

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatter = new Intl.DateTimeFormat([locale, 'en'], options);
      const formattedDate = formatter.format(createdAt);

      const labels = {
        ar: `📅  ${formattedDate}`,
        en: `📅  ${formattedDate}`
      };
      document.getElementById('createdAt').textContent = labels[lang];

      // ✅ الصورة
      const fallbackAvatar = generateAvatar(user.name);
      document.getElementById('userPhoto').src = user.imageUrl || fallbackAvatar;

    } else {
      console.error("❌ User not found");
      showError(messages.userNotFound[lang]);
    }

  } catch (err) {
    console.error("❌ خطأ في جلب بيانات المستخدم:", err);
    showError(messages.serverError[lang]);
  }
}




// بتحول الاسم الكامل الل جبناه من الباك اند الي الاسم الاول بس 
function getFirstName(fullName) {
    if (!fullName) return null;
    return fullName.split(' ')[0];
}

async function showProfileWelcomeModal(name) {
  const lang = localStorage.getItem('lang') || 'ar';
  const profileModal = document.getElementById('profile-madal');
  const profileModalText = document.getElementById('profile-modal-text');
  const firstName = getFirstName(name);
  const welcomeMessages = {
    ar:  `أهلاً بيك يا <strong><em>${firstName}</em></strong>🙌في اعرفني`,
    en:  `Welcome,<strong><em>${firstName}</em></strong>,🙌to E3rafni `
    };
    profileModalText.innerHTML = welcomeMessages[lang] || welcomeMessages['ar'];
    profileModalText.style.fontSize = '1.5rem';
    profileModal.classList.add('show');
    showOverlay();
    updateTwoModalsColors();
  };





// الموديل الخاصة بالزراير
function showConfirmationModal(message, onConfirm, singleButton = false , updateButton = false, copyingButton = false,) {
  const modal = document.getElementById('confirm-modal');
  const text = document.getElementById('confirm-message');
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const lang = localStorage.getItem('lang') || 'ar'; // لو اللغة مش موجودة في التخزين المحلي، نستخدم العربية

  updateTwoModalsColors();
  text.innerHTML = message;
  modal.classList.add('show');
  showOverlay();
    const messages = {
    copying: {
      ar: 'نسخ',
      en: 'Copy'
    },
    confirming: {
      ar: 'تأكيد',
      en: "Confirm"
    }
  };
  // امسح أي ستايلات مضافة سابقًا
confirmBtn.classList.remove("google-btn");
confirmBtn.classList.remove("copy-btn");
confirmBtn.classList.remove("edit-btn");


  //  اخليه زرار واحد بعد تأكيد طلب الحذف  
  if (singleButton) {
    cancelBtn.style.display = 'none';
    confirmBtn.style.width = '75%';     // زرار عريض في النص
  } else {
    cancelBtn.style.display = 'inline-block';
    confirmBtn.style.width = '';         // رجع الحجم الطبيعي
  };

// اخلي لون زرار تأكيد التعديل حسب المود
  if(updateButton){
    confirmBtn.classList.add("google-btn");
  }
// زرار النسخ بتاع الرابط
  if (copyingButton) {
    confirmBtn.textContent = messages.copying[lang];
    confirmBtn.classList.add("google-btn");
  } else {
    confirmBtn.textContent = messages.confirming[lang];
  }
    
  // امسح أي لسنرات قديمة
  confirmBtn.replaceWith(confirmBtn.cloneNode(true));
  cancelBtn.replaceWith(cancelBtn.cloneNode(true));

  const newConfirmBtn = document.getElementById('confirm-btn');
  const newCancelBtn = document.getElementById('cancel-btn');

  newConfirmBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    hideOverlay();
    if (onConfirm) onConfirm();
  });

  newCancelBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    hideOverlay();
  });

  
}

// دالة الرسايل الل هتتحط ف الموديل الل فيه اللينك
function getMessage(key, replacements = {}) {
  const currentLang = localStorage.getItem('lang') || 'ar';

  const messages = {
    copySuccess: {
      ar: " تم توليد رابطك بنجاح! ✅ أرسله الي أصدقاءك وابدأالتحدي<br><a href='{LINK}' target='_blank'>{LINK}</a>",
      en: "Your link has been generated successfully!✅.Sent it to your friends and start the challange<br><a href='{LINK}' target='_blank'>{LINK}</a>"
    },
    noUser: {
      ar: "❌ لا يوجد مستخدم مسجل دخول!",
      en: "❌ No user logged in!"
    },
    noToken: {
      ar: "❌ هذا المستخدم ليس لديه توكن!",
      en: "❌ This user doesn't have a token!"
    },
    errorFetching: {
      ar: "❌ حدث خطأ أثناء جلب الرابط:<br>{ERROR}",
      en: "❌ An error occurred while fetching the link:<br>{ERROR}"
    }
  };

  const template = messages[key][currentLang] || messages[key]['ar'];
  return template.replace(/\{(\w+)\}/g, (_, k) => replacements[k] || '');
}

// لظبط الوان الموديل حسب الوضع
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
  const profileConfirmModal = document.getElementById('confirm-modal');
  const static_Card = document.getElementById('static_Card');

  // طبعاً لو المودال ظاهر بنغير لونه
  if (profileConfirmModal) {
    profileConfirmModal.style.backgroundColor = c.bg;
    profileConfirmModal.style.color = c.color;
  }
  if (profileLoginModal) {
    profileLoginModal.style.backgroundColor = c.bg;
    profileLoginModal.style.color = c.color;
  }
  if (profileModal) {
  profileModal.style.backgroundColor = c.bg;
  profileModal.style.color = c.color;
}
};

// الاحصائيات
async function loadFriendsRanking() {
  try {
    const res = await fetch(`https://knowme-backend-production-b054.up.railway.app/auth/statics/friends-ranking?token=${rawProfileToken}`,{
      method : "GET",
      credentials : "include"
    }
    );
    const data = await res.json();
    const ranking = data.ranking || [];
    const table = document.getElementById('Friends_Static_Card');
    if (ranking.length === 0) {
      table.style.display = 'none'; // ❌ اخفي الجدول لو مفيش بيانات
      return;
    }

    
    const tbody = document.getElementById('friends-ranking-body');
    tbody.innerHTML = '';

    ranking
      .sort((a, b) => b.percentage - a.percentage) // ترتيب تنازلي حسب النجاح
      .forEach((friend, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${friend.name || friend.token?.slice(0, 6) || '—'}</td>
          <td>${friend.email}</td>
          <td>${friend.correct}</td>
          <td>${friend.percentage.toFixed(1)}%</td>
        `;
        tbody.appendChild(tr);
      });
      updateStaticBlockColors();

  } catch (err) {
    console.error('❌ Error loading friends ranking:', err);
  }
}


// احصائيات التحديات الل جاوبتها
async function loadQuizesRanking() {
  const guestEmail = localStorage.getItem('guestEmail');
  try {
    const res = await fetch(`https://knowme-backend-production-b054.up.railway.app/auth/statics/quizes-ranking?email=${guestEmail}`,{
      method : "GET",
      credentials : "include"
    }
    );
    const data = await res.json();
    const ranking = data.ranking || [];
    const table = document.getElementById('Quizes_static_Card');
    if (ranking.length === 0) {
      table.style.display = 'none'; // ❌ اخفي الجدول لو مفيش بيانات
      return;
    }

    
    const tbody = document.getElementById('quizes-ranking-body');
    tbody.innerHTML = '';

    ranking
      .sort((a, b) => b.percentage - a.percentage) // ترتيب تنازلي حسب النجاح
      .forEach((friend, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${friend.name || friend.token?.slice(0, 6) || '—'}</td>
          <td>${friend.email}</td>
          <td>${friend.correct}</td>
          <td>${friend.percentage.toFixed(1)}%</td>
        `;
        tbody.appendChild(tr);
      });
      updateStaticBlockColors();

  } catch (err) {
    console.error('❌ Error loading friends ranking:', err);
  }
}

// اوضاع بلوك الاحصائيات
function updateStaticBlockColors() {
  const mode = localStorage.getItem('mode') || 'light-gray2';

  const colorsMap = {
    "light-gray1": {
      bg: "#fff", color: "#222", border: "1px solid #3b82f6",
      headerBg: "#f3f4f6", topRowBg: "#e5e7eb"
    },
    "light-gray2": {
      bg: "#fff", color: "#222", border: "1px solid #3b82f6",
      headerBg: "#f3f4f6", topRowBg: "#e5e7eb"
    },
    "light-beige": {
      bg: "#fff9f0", color: "#222", border: "1px solid #f3d9c2",
      headerBg: "#fcebd6", topRowBg: "#f8dcc2"
    },
    "light-purple": {
      bg: "#f9f5ff", color: "#4c1d95", border: "1px solid #d8b4fe",
      headerBg: "#ede9fe", topRowBg: "#e3d9ff"
    },
    "light-pink": {
      bg: "#fff0f6", color: "#831843", border: "1px solid #f9a8d4",
      headerBg: "#fde4ec", topRowBg: "#f8d0e2"
    },
    "dark-gray1": {
      bg: "#151616", color: "#f3f4f6", border: "1px solid #444",
      headerBg: "#1f1f1f", topRowBg: "#2c2c2c"
    },
    "dark-gray2": {
      bg: "#2a3341ff", color: "#e5e7eb", border: "1px solid #555",
      headerBg: "#4b5563", topRowBg: "#5f6a7d"
    },
    "dark-blue": {
      bg: "#1e40af", color: "#bae6fd", border: "1px solid #3b82f6",
      headerBg: "#1d4ed8", topRowBg: "#2563eb"
    },
    "dark-brown": {
      bg: "#57372cff", color: "#f3e0dc", border: "1px solid #41261cff",
      headerBg: "#845c4a", topRowBg: "#9b6c59"
    },
    "dark-red": {
      bg: "#b91c1c", color: "#fee2e2", border: "1px solid #f87171",
      headerBg: "#dc2626", topRowBg: "#ef4444"
    }
  };

  const c = colorsMap[mode] || colorsMap["light-gray2"];

  const Friends_Static_Card = document.getElementById("Friends_Static_Card");
  const Quizes_static_Card = document.getElementById("Quizes_static_Card");
  const friendsHeaders = document.querySelectorAll("#Friends_Static_Card thead th");
  const quizesHeaders = document.querySelectorAll("#Quizes_static_Card thead th");
  const friendsRows = document.querySelectorAll("#friends-ranking-body tr");
  const quizesRows = document.querySelectorAll("#quizes-ranking-body tr");

  // ✅ تلوين الكارت الخارجي
  if (Friends_Static_Card) {
    Friends_Static_Card.style.backgroundColor = c.bg;
    Friends_Static_Card.style.color = c.color;
    Friends_Static_Card.style.border = c.border;
  }
  if (Quizes_static_Card) {
    Quizes_static_Card.style.backgroundColor = c.bg;
    Quizes_static_Card.style.color = c.color;
    Quizes_static_Card.style.border = c.border;
  }

  // ✅ تلوين رؤوس الجدول
  friendsHeaders.forEach(th => {
    th.style.backgroundColor = c.headerBg;
    th.style.color = c.color;
    th.style.border = c.border;
  });
  quizesHeaders.forEach(th => {
    th.style.backgroundColor = c.headerBg;
    th.style.color = c.color;
    th.style.border = c.border;
  });

  // ✅ تلوين صفوف البيانات
  friendsRows.forEach((row, index) => {
    const rowBg = index === 0 ? c.topRowBg : c.bg;
    row.querySelectorAll("td").forEach(td => {
      td.style.setProperty("background-color", rowBg, "important");
      td.style.setProperty("color", c.color, "important");
      td.style.setProperty("border", c.border, "important");
    });
  });
    quizesRows.forEach((row, index) => {
    const rowBg = index === 0 ? c.topRowBg : c.bg;
    row.querySelectorAll("td").forEach(td => {
      td.style.setProperty("background-color", rowBg, "important");
      td.style.setProperty("color", c.color, "important");
      td.style.setProperty("border", c.border, "important");
    });
  });
}









// زرار الحصول علي الرابط
document.getElementById('URLButton').addEventListener('click', async (e) => {
  e.preventDefault();


  try {
    const res = await fetch('https://knowme-backend-production-b054.up.railway.app/auth/user', { credentials: 'include' });

    if (!res.ok) {
      throw new Error(`❌ Server responded with ${res.status}`);
    }

    const data = await res.json();

    console.log('✅ API response:', data);

    if (!data.user) {
      showConfirmationModal(getMessage('noUser'), null, true);
      return;
    }

    if (!data.user.linkToken) {
      showConfirmationModal(getMessage('noToken'), null, true);
      return;
    }

    const link = `https://know-me-frontend-swart.vercel.app/quiz.html?quizToken=quiz-${data.user.linkToken}`;
    showConfirmationModal(
      getMessage('copySuccess', { LINK: link }),
      async () => {
        await navigator.clipboard.writeText(link);
      },
      false,
      false,
      true
    );


  } catch (error) {
    console.error(error);
    showConfirmationModal(getMessage('errorFetching', { ERROR: error.message }), null, true);
  }
});



// لتنفيذ تسجيل الخروج حال التأكيد
document.getElementById('logoutBtn').addEventListener('click', () => {
  
  const lang = localStorage.getItem('lang') || 'ar';

  // رسائل الترجمة
  const messages = {
    confirm: {
      ar: 'هل أنت متأكد أنك تريد تسجيل الخروج؟',
      en: 'Are you sure you want to log out?'
    },
    error: {
      ar: 'حدث خطأ أثناء تسجيل الخروج',
      en: 'An error occurred during logout'
    }
  };

  showConfirmationModal(messages.confirm[lang], () => {
    fetch('https://knowme-backend-production-b054.up.railway.app/auth/logout', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => {
      if (!res.ok) throw new Error('Logout failed');
      localStorage.removeItem('loggedIn');
      setTimeout(() => {
        window.location.href = 'https://know-me-frontend-swart.vercel.app/index.html'; // غير المسار لو حبيت
      }, 1000);
    })
    .catch(err => {
      console.error('Error logging out:', err);
      alert(messages.error[lang]);
    });
  });
});


// لتنفيذ حذف الحساب
document.getElementById('deleteAccountBtn').addEventListener('click', () => {
   const lang = localStorage.getItem('lang') || 'ar';

  // رسائل الترجمة قبل التأكيد
  const messages = {
    confirm: {
      ar: 'هل أنت متأكد أنك تريد حذف الحساب نهائيا؟ لن تسطيع استرداده مرة أخري.',
      en: 'Are you sure you want to delete your account? you will NOT get it again.'
    },
    error: {
      ar: 'حدث خطأ أثناء حذف الحساب',
      en: 'An error occurred during Account Deletion'
    }
  };
// رسائل الترجمة بعد التأكيد
 const messagesAfterConfirm ={
      confirm: {
      ar:  "تم طلب حذف الحساب. سيتم حذفه نهائيًا بعد ثلاثة أيام . يمكنك استعادة الحساب تلقائيا باعادة تسجيل الدخول   .",
      en: 'your Deletion Request sent. your Account will be deleted finally after 3 DAYS. your can restore it by returning to LOGIN again.'
    },
 
 }



  showConfirmationModal(messages.confirm[lang], () => {
    fetch('https://knowme-backend-production-b054.up.railway.app/auth/request-delete', {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      if (!res.ok) throw new Error('process failed');
       // لما ينجح طلب الحذف، افتح المودال التاني
      setTimeout(() => {
        showConfirmationModal(messagesAfterConfirm.confirm[lang], () => {
          setTimeout(() => {
          window.location.href = 'https://know-me-frontend-swart.vercel.app/index.html'; // غير المسار لو حبيت
        }, 1000);    
      },true);
      }, 1000)
    })
    .catch(err => {
      console.error('Error logging out:', err);
      alert(messages.error[lang]);
    });
  });


});

// زرار تعديل الأجابة
document.getElementById('editAnswersBtn').addEventListener('click', () => {
  const lang = localStorage.getItem('lang') || 'ar';

  // رسائل الترجمة
  const messages = {
    confirm: {
      ar: 'هل أنت متأكد أنك تريد تعديل اجاباتك؟',
      en: 'Are you sure you want to update your answers?'
    },
    error: {
      ar: 'حدث خطأ أثناء تسجيل الخروج',
      en: 'An error occurred during logout'
    }
  };


  showConfirmationModal(messages.confirm[lang], () => {

      setTimeout(() => {
        window.location.href = 'https://know-me-frontend-swart.vercel.app/dashboard.html'; // غير المسار لو حبيت
      }, 1000)
    .catch(err => {
      console.error('Error logging out:', err);
      alert(messages.error[lang]);
    });
  },false,true);
});



// دالة لتعطيل كل الأزرار والروابط في الصفحة
function disableAllButtonsAndLinks() {
  document.querySelectorAll('button, a').forEach(el => {
    el.disabled = true;
    el.style.pointerEvents = 'none';
    el.style.opacity = '0.5';
  });
}



 
// لو داخل بتوكن او لا
async function handleProfilePage() {
  const lang = localStorage.getItem('lang') || 'ar';


  try {
    // ✅ 3) صاحب التوكن
    const ownerRes = await fetch(`https://knowme-backend-production-b054.up.railway.app/auth/user-by-token?profileToken=${rawProfileToken}`, {
      credentials: 'include'
    });
    const ownerData = await ownerRes.json();

    if (!ownerData.user) {
      const msg = lang === 'ar'
        ? "❌ المستخدم غير موجود." 
        : "❌ User not found.";
      showProfileModal(msg);
           // ✅ عطل زر الإغلاق في المودال
      if (profileCloseBtn) {
        profileCloseBtn.style.display = 'none';
      }
      // ✅ عطل كل الأزرار في الصفحة
      disableAllButtonsAndLinks()
      return;
    }
                // ✅ 2) الزائر الحالي
    const visitorRes = await fetch('https://knowme-backend-production-b054.up.railway.app/auth/user', {
      credentials: 'include',
      cache: 'no-cache'
    });
    const visitorData = await visitorRes.json();

    if (!visitorData.user) {
      // الزائر مش مسجل دخول أصلاً
      const msg = lang === 'ar'
        ? "سجل دخول بجوجل عشان نأكد حسابك." + "🔓"
        : "LOGIN first to verify your account. 🔓";
      showLoginModal(msg, 'error');
      return;
    }
    // ✅ 4) المقارنة
    if (visitorData.user.id.toString() === ownerData.user.id.toString()) {
      // ✅ هو نفسه صاحب التوكن
      console.log("✅ الزائر هو صاحب الصفحة");
      showProfileWelcomeModal(visitorData.user.name);
      if (profileCloseBtn) {
         profileCloseBtn.addEventListener('click', hideProfileModal);
      }
      fetchUserDataByToken();
      localStorage.setItem('guestEmail', visitorData.user.email);
     
    } else {
      // ❌ حد تاني غير صاحب التوكن
      const msg = lang === 'ar'
        ? "لا تملك صلاحية الوصول إلى هذه الصفحة." + " ❌"
        : "You don't have permission to view this page.❌";
      showProfileModal(msg);
           // ✅ عطل زر الإغلاق في المودال
      if (profileCloseBtn) {
        profileCloseBtn.style.display = 'none';
      }
     // ✅ عطل كل الأزرار في الصفحة
      disableAllButtonsAndLinks()
      return;
    }

  } catch (err) {
    console.error("❌ خطأ:", err);
    showProfileModal(messages.serverError[lang]);
  }
}
















// الدوال الل بتتنفذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    if (!profileTokenWithPrefix) {
    const lang = localStorage.getItem('lang') || 'ar';
    const message = lang === 'ar'
      ? " الرابط غير صالح!❌ هذه الصفحة غير مملوكة لأي شخص."+ "سجل دخول بجوجل"
      : "Invalid link!❌ This page doesn`t belong to any one..GO LOGIN first";

    showLoginModal(message, 'error');
    return;

  } 
  handleProfilePage();  
  updateTwoModalsColors();
  loadFriendsRanking();
  loadQuizesRanking();
  updateStaticBlockColors();
  });


  window.fetchUserDataByToken = fetchUserDataByToken;
  window.updateStaticBlockColors = updateStaticBlockColors;