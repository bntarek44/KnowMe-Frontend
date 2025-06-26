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


// الدوال الل بتتنفذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    fetchUserData(); // جلب بيانات المستخدم عند تحميل الصفحة
});