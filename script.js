// رابط Google Apps Script
const SHEET_URL = "https://script.google.com/macros/s/AKfycbxEdQLfVORJ8YrmfaXRUNTG8NIwY5KHMBU7araZySGHxsdNtQJFshi5BbL2qRn71bA1Mw/exec";

// القصص الأصلية
const defaultStories = [
  { title: "ماذا لو", file: "stories/grade1/story85.pdf", grade: 1, cover: "images/story85_cover.png" },
  { title: "لارا الخنفساء الصفراء", file: "stories/grade1/story86.pdf", grade: 1, cover: "images/story86_cover.png" },
  { title: "أنا ساساعد ", file: "stories/grade1/story1.pdf", grade: 1, cover: "images/story1_cover.png" },
  { title: "أغنية زينة", file: "stories/grade1/story2.pdf", grade: 1, cover: "images/story2_cover.png" },
  { title: "كرتي الحمراء", file: "stories/grade1/story3.pdf", grade: 1, cover: "images/story3_cover.png" },
  { title: "أين لولو", file: "stories/grade1/story4.pdf", grade: 1, cover: "images/story4_cover.png" },
  { title: "القمر والقبعة", file: "stories/grade1/story5.pdf", grade: 1, cover: "images/story5_cover.png" },
  { title: "أنا وأخي", file: "stories/grade1/story6.pdf", grade: 1, cover: "images/story6_cover.png" },
  { title: "الأميرة وجواهرها", file: "stories/grade1/story7.pdf", grade: 1, cover: "images/story7_cover.png" },
  { title: "ماذا سارتدي اليوم", file: "stories/grade1/story8.pdf", grade: 1, cover: "images/story8_cover.png" },
  { title: "لا", file: "stories/grade1/story9.pdf", grade: 1, cover: "images/story9_cover.png" },
  { title: "ماذا جرى", file: "stories/grade1/story10.pdf", grade: 1, cover: "images/story10_cover.png" },
  { title: "دبدوب العسل", file: "stories/grade2/story14.pdf", grade: 2, cover: "images/story14_cover.png" },
  { title: "مغامرات الحروف", file: "stories/grade2/story16.pdf", grade: 2, cover: "images/story16_cover.png" },
  { title: "عند شجرة البرتقال", file: "stories/grade2/story18.pdf", grade: 2, cover: "images/story18_cover.png" },
  { title: "اللعبة المفقودة", file: "stories/grade2/story20.pdf", grade: 2, cover: "images/story20_cover.png" },
  { title: "هدايا العيد", file: "stories/grade2/story21.pdf", grade: 2, cover: "images/story21_cover.png" },
  { title: "إنها زهرة واحدة", file: "stories/grade2/story22.pdf", grade: 2, cover: "images/story22_cover.png" },
  { title: "يحيا العدل", file: "stories/grade2/story23.pdf", grade: 2, cover: "images/story23_cover.png" },
  { title: "قصة القمر", file: "stories/grade2/story37.pdf", grade: 2, cover: "images/story37_cover.png" },
  { title: "لماذا لا تقرأ يا لؤي", file: "stories/grade2/story38.pdf", grade: 2, cover: "images/story38_cover.png" },
  { title: "البطة سميرة", file: "stories/grade2/story42.pdf", grade: 2, cover: "images/story42_cover.png" },
  { title: "لغز الجدة", file: "stories/grade2/story54.pdf", grade: 2, cover: "images/story54_cover.png" },
  { title: "أجمل مدرسة في العالم", file: "stories/grade2/story63.pdf", grade: 2, cover: "images/story63_cover.png" }
];

// عرض القصص حسب الصف
function renderStoriesByGrade(grade) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const filtered = defaultStories.filter(story => story.grade === grade);

  const section = document.createElement("section");
  section.className = "grade";

  filtered.forEach(story => {
    const card = document.createElement("div");
    card.className = "story-card";
    card.innerHTML = `
      <img src="${story.cover}" alt="${story.title}">
      <h3>${story.title}</h3>
      <button onclick="readStory('${story.title}', '${story.file}')">📖 قراءة</button>
      <a href="${story.file}" download>⬇️ تحميل</a>
    `;
    section.appendChild(card);
  });

  content.appendChild(section);
}

// قراءة قصة + حفظ في Google Sheets
function readStory(title, file) {
  const studentName = prompt("👩‍🎓 أدخل اسمك:");
  if (!studentName) return;

  // تخزين محلي
  const data = JSON.parse(localStorage.getItem("studentsData")) || {};
  if (!data[studentName]) data[studentName] = [];
  if (!data[studentName].includes(title)) data[studentName].push(title);
  localStorage.setItem("studentsData", JSON.stringify(data));

  // حفظ على Google Sheets
  fetch(SHEET_URL, {
    method: "POST",
    body: JSON.stringify({ name: studentName, story: title }),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.text())
  .then(console.log)
  .catch(console.error);

  // فتح القصة
  window.open(file, "_blank");
}

// Dashboard - عرض من Google Sheets
function showDashboard() {
  const content = document.getElementById("content");
  content.innerHTML = "<p>⏳ جاري تحميل البيانات...</p>";

  fetch(SHEET_URL)
    .then(res => res.json())
    .then(data => {
      const studentCounts = {};

      data.forEach(row => {
        if (!studentCounts[row.name]) studentCounts[row.name] = new Set();
        studentCounts[row.name].add(row.story);
      });

      let html = `
        <h2>📊 لوحة متابعة الطلاب</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse;width:100%;text-align:center;">
          <tr style="background:#f0e6ff;"><th>اسم الطالبة</th><th>عدد القصص المقروءة</th></tr>
      `;

      for (let name in studentCounts) {
        html += `<tr><td>${name}</td><td>${studentCounts[name].size}</td></tr>`;
      }

      html += `</table>
      <br>
      <button onclick="renderStoriesByGrade(1)">⬅️ رجوع</button>`;

      content.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      content.innerHTML = "<p>⚠️ حدث خطأ أثناء تحميل البيانات.</p>";
    });
}

// تسجيل دخول الأدمن
function adminLogin() {
  const password = prompt("🔑 أدخل كلمة المرور:");
  if (password === "1974") {
    showDashboard();
  } else {
    alert("❌ كلمة المرور خاطئة!");
  }
}
