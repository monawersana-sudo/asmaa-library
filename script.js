// رابط Google Apps Script
const SHEET_URL = "https://script.google.com/macros/s/AKfycbzo4alfbmgq7Urjk_BqJ2AOumRqjIQoLFvK0m7EXQ1ZFx1G0CIkwtpFtyCRf9X1RcnY/exec";

// جميع القصص الكاملة من الصف الأول إلى السابع
const defaultStories = [
  { title: "ماذا لو", file: "stories/grade1/story85.pdf", grade: 1 , cover: "images/story85_cover.png" },
  { title: "لارا الخنفساء الصفراء", file: "stories/grade1/story86.pdf", grade: 1 , cover: "images/story86_cover.png" },
  { title: "أنا ساساعد ", file: "stories/grade1/story1.pdf", grade: 1 , cover: "images/story1_cover.png" },
  { title: " أغنية زينة ", file: "stories/grade1/story2.pdf", grade: 1 , cover: "images/story2_cover.png" },
  { title: " كرتي الحمراء ", file: "stories/grade1/story3.pdf", grade: 1 , cover: "images/story3_cover.png" },
  { title: "أين لولو ", file: "stories/grade1/story4.pdf", grade: 1 , cover: "images/story4_cover.png" },
  { title: "القمر و القبعة ", file: "stories/grade1/story5.pdf", grade: 1 , cover: "images/story5_cover.png" },
  { title: "أنا و أخي ", file: "stories/grade1/story6.pdf", grade: 1 , cover: "images/story6_cover.png" },
  { title: "الأميرة و جواهرها ", file: "stories/grade1/story7.pdf", grade: 1 , cover: "images/story7_cover.png" },
  { title: "ماذا سارتدي اليوم ", file: "stories/grade1/story8.pdf", grade: 1 , cover: "images/story8_cover.png" },
  { title: " لا", file: "stories/grade1/story9.pdf", grade: 1 , cover: "images/story9_cover.png" },
  { title: " ماذا جرى ", file: "stories/grade1/story10.pdf", grade: 1 , cover: "images/story10_cover.png" },
  { title: "دبدوب العسل", file: "stories/grade2/story14.pdf", grade: 2 , cover: "images/story14_cover.png" },
  { title: "مغامرات الحروف", file: "stories/grade2/story16.pdf", grade: 2 , cover: "images/story16_cover.png" },
  { title: "عند شجرة البرتقال", file: "stories/grade2/story18.pdf", grade: 2 , cover: "images/story18_cover.png" },
  { title: "اللعبة المفقودة", file: "stories/grade2/story20.pdf", grade: 2 , cover: "images/story20_cover.png" },
  { title: "هدايا العيد", file: "stories/grade2/story21.pdf", grade: 2 , cover: "images/story21_cover.png" },
  { title: "انها زهرة واحدة", file: "stories/grade2/story22.pdf", grade: 2 , cover: "images/story22_cover.png" },
  { title: "يحيا العدل", file: "stories/grade2/story23.pdf", grade: 2 , cover: "images/story23_cover.png" },
  { title: "قصة القمر", file: "stories/grade2/story37.pdf", grade: 2 , cover: "images/story37_cover.png" },
  { title: "لماذا لا تقرأ يا لؤي", file: "stories/grade2/story38.pdf", grade: 2 , cover: "images/story38_cover.png" },
  { title: "البطة سميرة", file: "stories/grade2/story42.pdf", grade: 2 , cover: "images/story42_cover.png" },
  { title: "لغز الجدة ", file: "stories/grade2/story54.pdf", grade: 2 , cover: "images/story54_cover.png" },
  { title: "أجمل مدرسة في العالم ", file: "stories/grade2/story63.pdf", grade: 2 , cover: "images/story63_cover.png" },
  { title: "شعري منكوش أحمر ", file: "stories/grade3/story24.pdf", grade: 3 , cover: "images/story24_cover.png" },
  { title: "ماذا سنقول لفأرة ", file: "stories/grade3/story25.pdf", grade: 3 , cover: "images/story25_cover.png" },
  { title: "فكرة هنا فكرة هناك", file: "stories/grade3/story27.pdf", grade: 3 , cover: "images/story27_cover.png" },
  { title: "أهلاً و سهلاً", file: "stories/grade3/story28.pdf", grade: 3 , cover: "images/story28_cover.png" },
  { title: "الصوص الأصم", file: "stories/grade3/story29.pdf", grade: 3 , cover: "images/story29_cover.png" },
  { title: "سمير والذبابة المشاكسة", file: "stories/grade3/story30.pdf", grade: 3 , cover: "images/story30_cover.png" },
  { title: "سمير و العثة والفراشة", file: "stories/grade3/story31.pdf", grade: 3 , cover: "images/story31_cover.png" },
  { title: "سمير و النحلة الظريفة", file: "stories/grade3/story32.pdf", grade: 3 , cover: "images/story32_cover.png" },
  { title: "ريشو و جميلة ", file: "stories/grade3/story48.pdf", grade: 3 , cover: "images/story48_cover.png" },
  { title: "من الاهم ", file: "stories/grade3/story52.pdf", grade: 3 , cover: "images/story52_cover.png" },
  { title: " جزرة و صديقاتها ", file: "stories/grade3/story68.pdf", grade: 3 , cover: "images/story68_cover.png" },
  { title: " كل شئ يبدو جديداً ", file: "stories/grade3/story84.pdf", grade: 3 , cover: "images/story84_cover.png" },
  { title: " سمكة و هدية ", file: "stories/grade3/story87.pdf", grade: 3 , cover: "images/story87_cover.png" },
  { title: "من أجلك", file: "stories/grade4/story40.pdf", grade: 4 , cover: "images/story40_cover.png" },
  { title: "قصة ابراهيم عليه السلام", file: "stories/grade4/story41.pdf", grade: 4 , cover: "images/story41_cover.png" },
  { title: "المزرعة العمودية ", file: "stories/grade4/story43.pdf", grade: 4 , cover: "images/story43_cover.png" },
  { title: "كنوز محمية فيفا", file: "stories/grade4/story44.pdf", grade: 4 , cover: "images/story44_cover.png" },
  { title: "عالم الفقاعات", file: "stories/grade4/story46.pdf", grade: 4 , cover: "images/story46_cover.png" },
  { title: "ماذا ستفعل بالنجوم", file: "stories/grade4/story47.pdf", grade: 4 , cover: "images/story47_cover.png" },
  { title: "من أين يأتي الأكسجين ", file: "stories/grade4/story49.pdf", grade: 4 , cover: "images/story49_cover.png" },
  { title: "جنى وندى وكريات الألوان ", file: "stories/grade4/story53.pdf", grade: 4 , cover: "images/story53_cover.png" },
  { title: "شجرة أم وطن ", file: "stories/grade4/story56.pdf", grade: 4 , cover: "images/story56_cover.png" },
  { title: "مزدوجة الظفيرة ", file: "stories/grade4/story57.pdf", grade: 4 , cover: "images/story57_cover.png" },
  { title: "عصفور الدوري والبحر ", file: "stories/grade4/story59.pdf", grade: 4 , cover: "images/story59_cover.png" },
  { title: "كيف طار الجمل فهيم", file: "stories/grade4/story60.pdf", grade: 4 , cover: "images/story60_cover.png" },
  { title: "سمكة الطائرة الورقية ", file: "stories/grade4/story74.pdf", grade: 4 , cover: "images/story74_cover.png" },
  { title: "حسن في المستشفى", file: "stories/grade5/story39.pdf", grade: 5 , cover: "images/story39_cover.png" },
  { title: "أين رحلت الشمس", file: "stories/grade5/story95.pdf", grade: 5 , cover: "images/story95_cover.png" },
  { title: "قصة آدم عليه السلام", file: "stories/grade5/story65.pdf", grade: 5 , cover: "images/story65_cover.png" },
  { title: "الأرنب يفقد أسنانه", file: "stories/grade5/story66.pdf", grade: 5 , cover: "images/story66_cover.png" },
  { title: "داخل الشبكة العنكبوتية", file: "stories/grade5/story67.pdf", grade: 5 , cover: "images/story67_cover.png" },
  { title: "ألف ليلة وليلة (وعد الحر )", file: "stories/grade5/story73.pdf", grade: 5 , cover: "images/story73_cover.png" },
  { title: "قصة أرنوب و أول يوم في المدرسة", file: "stories/grade5/story71.pdf", grade: 5 , cover: "images/story71_cover.png" },
  { title: "كيف يدخل معجون الاسنان الانبوب", file: "stories/grade5/story96.pdf", grade: 5 , cover: "images/story96_cover.png" },
  { title: "بطل الجبل", file: "stories/grade5/story97.pdf", grade: 5 , cover: "images/story97_cover.png" },
  { title: "أمير في بلاد الأقزام", file: "stories/grade6/story69.pdf", grade: 6 , cover: "images/story69_cover.png" },
  { title: "أنا وكوب خالتي", file: "stories/grade6/story75.pdf", grade: 6 , cover: "images/story75_cover.png" },
  { title: "حلق دون اجنحة", file: "stories/grade6/story88.pdf", grade: 6 , cover: "images/story88_cover.png" },
  { title: "المهرج وبائع البوظة", file: "stories/grade6/story89.pdf", grade: 6 , cover: "images/story89_cover.png" },
  { title: "الثعلب فيروز", file: "stories/grade6/story55.pdf", grade: 6 , cover: "images/story55_cover.png" },
  { title: "أنس صديق الأشجار", file: "stories/grade6/story100.pdf", grade: 6 , cover: "images/story100_cover.png" },
  { title: "البودرة السحرية", file: "stories/grade6/story101.pdf", grade: 6 , cover: "images/story101_cover.png" },
  { title: "أحلى أيام المدرسة", file: "stories/grade6/story102.pdf", grade: 6 , cover: "images/story102_cover.png" },
  { title: "رحلة سلحفاة", file: "stories/grade6/story103.pdf", grade: 6 , cover: "images/story103_cover.png" },
  { title: "زيارة للمتحف", file: "stories/grade6/story104.pdf", grade: 6 , cover: "images/story104_cover.png" },
  { title: "شجاعة طفلين", file: "stories/grade6/story105.pdf", grade: 6 , cover: "images/story105_cover.png" },
  { title: "عرفان المخلص", file: "stories/grade7/story72.pdf", grade: 7 , cover: "images/story72_cover.png" },
  { title: "الذكريات", file: "stories/grade7/story76.pdf", grade: 7 , cover: "images/story76_cover.png" },
  { title: "طائر ميساء الجميل", file: "stories/grade7/story77.pdf", grade: 7 , cover: "images/story77_cover.png" },
  { title: "بطل تحت الماء", file: "stories/grade7/story78.pdf", grade: 7 , cover: "images/story78_cover.png" },
  { title: "الحمامة وبيت الجد", file: "stories/grade7/story79.pdf", grade: 7 , cover: "images/story79_cover.png" },
  { title: "قصة جحا و خرج الحجارة", file: "stories/grade7/story81.pdf", grade: 7 , cover: "images/story81_cover.png" },
  { title: "أجنحتي الخفية", file: "stories/grade7/story80.pdf", grade: 7 , cover: "images/story80_cover.png" },
  { title: "النعامة الأخيرة", file: "stories/grade7/story82.pdf", grade: 7 , cover: "images/story82_cover.png" },
  { title: "البخيل و زوجته الجشعة", file: "stories/grade7/story83.pdf", grade: 7 , cover: "images/story83_cover.png" },
  { title: "لويس برايل", file: "stories/grade7/story90.pdf", grade: 7 , cover: "images/story90_cover.png" }
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
