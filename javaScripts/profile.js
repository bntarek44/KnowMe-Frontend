const overlay = document.getElementById('modal-overlay');
// لما المودل يظهر كل حاجة ورا تختفي
function showOverlay() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function hideOverlay() {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}



function generateAvatar(name) {
  const firstLetter = encodeURIComponent(name?.charAt(0).toUpperCase() || "?");

  const mode = localStorage.getItem('mode') || 'light-gray2';
  const colorsMap = {
    "light-gray1": { bg: "#e0e2e5", color: "#222" },
    "light-gray2": { bg: "#f3f4f6", color: "#222" },
    "light-beige": { bg: "#f0ddc6", color: "#222" },
    "light-purple": { bg: "#d1bcec", color: "#4c1d95" },
    "light-pink": { bg: "#fdb6c7", color: "#831843" },
    "dark-gray1": { bg: "#3a3d42", color: "#f3f4f6" },
    "dark-gray2": { bg: "#3f464e", color: "#e5e7eb" },
    "dark-blue": { bg: "#3e4683", color: "#bae6fd" },
    "dark-brown": { bg: "#5c504c", color: "#f3e0dc" },
    "dark-red": { bg: "#663434", color: "#fee2e2" }
  };

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




// دالة لاستقبال بيانات اليوزر من الباك اند
async function fetchUserData() {
  fetch('https://knowme-backend-production.up.railway.app/auth/user', {
  method: 'GET',
  credentials: 'include' // ⬅️ مهم جدًا لو تسجيل الدخول بالكوكيز
})
  .then(res => res.json())
  .then(data => {
    console.log("بيانات المستخدم:", data);
    if (data.user) {
      document.getElementById('userName').textContent = data.user.name;
      document.getElementById('userEmail').textContent = data.user.email;
      // خاص بعرض تاريخ التسجيل
      const createdAt = new Date(data.user.createdAt);
      const lang = localStorage.getItem('lang') || 'ar'; // لو اللغة مش موجودة في التخزين المحلي، نستخدم العربية
      let locale = 'ar-EG';
      if (lang === 'en') {
        locale = 'en-US';
      }

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = createdAt.toLocaleDateString(locale, options);

      const labels = {
      ar: `📅  ${formattedDate}`,
      en: `📅  ${formattedDate}`
      };

      document.getElementById('createdAt').textContent = labels[lang];



      const name = data.user.name;
      const fallbackAvatar = generateAvatar(name);
      document.getElementById('userPhoto').src = data.user.imageUrl || fallbackAvatar;
    } else {
      // لو مش مسجل دخوله
      console.log("User not logged in");
    }
  })
  .catch(err => {
    console.error("خطأ في جلب بيانات المستخدم:", err);
  });
}


// لعرض الموديل بتاع التأكيد او الالغاء
function showConfirmationModal(message, onConfirm) {
  const modal = document.getElementById('confirm-modal');
  const text = document.getElementById('confirm-message');
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');
 
 
   updateConfirmModalColors()

  text.textContent = message;
  modal.classList.add('show');
  overlay.style.display = 'block';
 showOverlay();

  // امسح أي لسنرات قديمة
  confirmBtn.replaceWith(confirmBtn.cloneNode(true));
  cancelBtn.replaceWith(cancelBtn.cloneNode(true));

  const newConfirmBtn = document.getElementById('confirm-btn');
  const newCancelBtn = document.getElementById('cancel-btn');

  newConfirmBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    hideOverlay()
    onConfirm();
  });
  newCancelBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    hideOverlay();
  });
}



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
    fetch('https://knowme-backend-production.up.railway.app/auth/logout', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => {
      if (!res.ok) throw new Error('Logout failed');
      setTimeout(() => {
        window.location.href = 'https://know-me-frontend-swart.vercel.app/login.html'; // غير المسار لو حبيت
      }, 1000);
    })
    .catch(err => {
      console.error('Error logging out:', err);
      alert(messages.error[lang]);
    });
  });
});


function updateConfirmModalColors() {
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
    const modal = document.getElementById('confirm-modal');
    const c = colorsMap[mode] || colorsMap['light-gray2'];
    modal.style.backgroundColor = c.bg;
    modal.style.color = c.color;
}















// الدوال الل بتتنفذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    fetchUserData(); // جلب بيانات المستخدم عند تحميل الصفحة
    updateConfirmModalColors()
  });