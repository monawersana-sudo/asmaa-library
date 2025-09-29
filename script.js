let defaultStories = [
  { title: "في العطلة", file: "stories/grade1/story1.pdf", grade: 1 , cover: "images/story1_cover.png" },
  { title: "الأرنب و السلحفاة ", file: "stories/grade1/story2.pdf", grade: 1 , cover: "images/story2_cover.png" },
  { title: "المهرج", file: "stories/grade1/story3.pdf", grade: 1 , cover: "images/story3_cover.png" },
  { title: "الساعة", file: "stories/grade1/story4.pdf", grade: 1 , cover: "images/story4_cover.png" },
  { title: "النملة و الحمامة", file: "stories/grade1/story5.pdf", grade: 1 , cover: "images/story5_cover.png" },
  { title: "البحر", file: "stories/grade1/story6.pdf", grade: 1 , cover: "images/story6_cover.png" },
  { title: "مزرعة جدي", file: "stories/grade1/story7.pdf", grade: 1 , cover: "images/story7_cover.png" },
  { title: "خالد المغامر", file: "stories/grade1/story8.pdf", grade: 1 , cover: "images/story8_cover.png" },
  { title: "إنه العيد", file: "stories/grade1/story9.pdf", grade: 1 , cover: "images/story9_cover.png" },
  { title: "أنقذوني من الهرة", file: "stories/grade1/story10.pdf", grade: 1 , cover: "images/story10_cover.png" },
  { title: "لعبة الحجلة", file: "stories/grade1/story11.pdf", grade: 1 , cover: "images/story11_cover.png" },
  { title: "من أكون", file: "stories/grade1/story12.pdf", grade: 1 , cover: "images/story12_cover.png" },

  { title: "أوراق الزينة", file: "stories/grade2/story13.pdf", grade: 2 , cover: "images/story13_cover.png" },
  { title: "رحلة لاتنسى", file: "stories/grade2/story14.pdf", grade: 2 , cover: "images/story14_cover.png" },
  { title: "الفيل دغفل", file: "stories/grade2/story15.pdf", grade: 2 , cover: "images/story15_cover.png" },
  { title: "الدب البني", file: "stories/grade2/story16.pdf", grade: 2 , cover: "images/story16_cover.png" },
  { title: "القمر الصغير", file: "stories/grade2/story17.pdf", grade: 2 , cover: "images/story17_cover.png" },
  { title: "الفرس مهرة", file: "stories/grade2/story18.pdf", grade: 2 , cover: "images/story18_cover.png" },
  { title: "الطعام المفيد", file: "stories/grade2/story19.pdf", grade: 2 , cover: "images/story19_cover.png" },
  { title: "الثعلب والغراب", file: "stories/grade2/story21.pdf", grade: 2 , cover: "images/story21_cover.png" },
  { title: "ابتسم للمدرسة", file: "stories/grade2/story22.pdf", grade: 2 , cover: "images/story22_cover.png" },
  { title: "نزهة بندون", file: "stories/grade2/story23.pdf", grade: 2 , cover: "images/story23_cover.png" },
  { title: "الذبابة", file: "stories/grade2/story61.pdf", grade: 2 , cover: "images/story61_cover.png" },
  { title: "لماذا ماتت الفراشة؟", file: "stories/grade2/story62.pdf", grade: 2 , cover: "images/story62_cover.png" },
  { title: "بطوط و العد", file: "stories/grade2/story63.pdf", grade: 2 , cover: "images/story63_cover.png" },

  { title: "شعري منكوش أحمر", file: "stories/grade3/story24.pdf", grade: 3 , cover: "images/story24_cover.png" },
  { title: "فطور للأرنب", file: "stories/grade3/story25.pdf", grade: 3 , cover: "images/story25_cover.png" },
  { title: "في صفنا ضفدع", file: "stories/grade3/story26.pdf", grade: 3 , cover: "images/story26_cover.png" },
  { title: "من خبأ خروف العيد", file: "stories/grade3/story27.pdf", grade: 3 , cover: "images/story27_cover.png" },
  { title: "نمنم الذي لا يشرب الماء", file: "stories/grade3/story28.pdf", grade: 3 , cover: "images/story28_cover.png" },
  { title: "ناعمة النعامة", file: "stories/grade3/story29.pdf", grade: 3 , cover: "images/story29_cover.png" },
  { title: "سمير والذبابة المشاكسة", file: "stories/grade3/story30.pdf", grade: 3 , cover: "images/story30_cover.png" },
  { title: "سمير و العثة والفراشة", file: "stories/grade3/story31.pdf", grade: 3 , cover: "images/story31_cover.png" },
  { title: "سمير و النحلة الظريفة", file: "stories/grade3/story32.pdf", grade: 3 , cover: "images/story32_cover.png" },
  { title: "قعود في سباق الهجن", file: "stories/grade3/story33.pdf", grade: 3 , cover: "images/story33_cover.png" },
  { title: "قرقيعان والكنغر", file: "stories/grade3/story34.pdf", grade: 3 , cover: "images/story34_cover.png" },
  { title: "قصة موسى عليه السلام", file: "stories/grade3/story35.pdf", grade: 3 , cover: "images/story35_cover.png" },

  { title: "أنا مدهشة", file: "stories/grade4/story36.pdf", grade: 4 , cover: "images/story36_cover.png" },
  { title: "إياك و الغرور", file: "stories/grade4/story37.pdf", grade: 4 , cover: "images/story37_cover.png" },
  { title: "السلحفاة تفوز بالسباق", file: "stories/grade4/story38.pdf", grade: 4 , cover: "images/story38_cover.png" },
  { title: "حسن في المستشفى", file: "stories/grade4/story39.pdf", grade: 4 , cover: "images/story39_cover.png" },
  { title: "الفراشة وورقة الشجر", file: "stories/grade4/story40.pdf", grade: 4 , cover: "images/story40_cover.png" },
  { title: "قصة ابراهيم عليه السلام", file: "stories/grade4/story41.pdf", grade: 4 , cover: "images/story41_cover.png" },
  { title: "لا تحقر نفسك", file: "stories/grade4/story42.pdf", grade: 4 , cover: "images/story42_cover.png" },
  { title: "المزرعة العمودية", file: "stories/grade4/story43.pdf", grade: 4 , cover: "images/story43_cover.png" },
  { title: "كنوز محمية فيفا", file: "stories/grade4/story44.pdf", grade: 4 , cover: "images/story44_cover.png" },
  { title: "العسل", file: "stories/grade4/story45.pdf", grade: 4 , cover: "images/story45_cover.png" },
  { title: "مسعودة السلحفاة", file: "stories/grade4/story46.pdf", grade: 4 , cover: "images/story46_cover.png" },
  { title: "علماء المستقبل", file: "stories/grade4/story47.pdf", grade: 4 , cover: "images/story47_cover.png" },

  { title: "عناد صخرة", file: "stories/grade5/story48.pdf", grade: 5 , cover: "images/story48_cover.png" },
  { title: "ليس بعد", file: "stories/grade5/story49.pdf", grade: 5 , cover: "images/story49_cover.png" },
  { title: "ماذا جرى", file: "stories/grade5/story50.pdf", grade: 5 , cover: "images/story50_cover.png" },
  { title: "حين غضب الديك", file: "stories/grade5/story51.pdf", grade: 5 , cover: "images/story51_cover.png" },
  { title: "مغامرة في الفضاء مع ياسمين وعلياء", file: "stories/grade5/story52.pdf", grade: 5 , cover: "images/story52_cover.png" },
  { title: "مغامرة عجيبة غريبة", file: "stories/grade5/story53.pdf", grade: 5 , cover: "images/story53_cover.png" },
  { title: "فتنة الهاتف", file: "stories/grade5/story64.pdf", grade: 5 , cover: "images/story64_cover.png" },
  { title: "قصة آدم عليه السلام", file: "stories/grade5/story65.pdf", grade: 5 , cover: "images/story65_cover.png" },
  { title: "الأرنب يفقد أسنانه", file: "stories/grade5/story66.pdf", grade: 5 , cover: "images/story66_cover.png" },
  { title: "الأمانة", file: "stories/grade5/story67.pdf", grade: 5 , cover: "images/story67_cover.png" },
  { title: "ألف ليلة وليلة (وعد الحر )", file: "stories/grade5/story73.pdf", grade: 5 , cover: "images/story73_cover.png" },
  { title: "أهل الثقافة", file: "stories/grade5/story74.pdf", grade: 5 , cover: "images/story74_cover.png" },

  { title: "كوكبنا الجميل", file: "stories/grade6/story54.pdf", grade: 6&7 , cover: "images/story54_cover.png" },
  { title: "الثعلب فيروز", file: "stories/grade6/story55.pdf", grade: 6&7 , cover: "images/story55_cover.png" },
  { title: "انكسر الشر", file: "stories/grade6/story56.pdf", grade: 6&7 , cover: "images/story56_cover.png" },
  { title: "العملاق المائي", file: "stories/grade6/story57.pdf", grade: 6&7 , cover: "images/story57_cover.png" },
  { title: "ما أحلى الحرية", file: "stories/grade6/story58.pdf", grade: 6&7 , cover: "images/story58_cover.png" },
  { title: "البطاقة العجيبة", file: "stories/grade6/story59.pdf", grade: 6&7 , cover: "images/story59_cover.png" },
  { title: "من هزم شرير التبذير", file: "stories/grade6/story60.pdf", grade: 6&7 , cover: "images/story60_cover.png" },
  { title: "الذهب الأخضر", file: "stories/grade6/story68.pdf", grade: 6&7 , cover: "images/story68_cover.png" },
  { title: "أمير في بلاد الأقزام", file: "stories/grade6/story69.pdf", grade: 6&7 , cover: "images/story69_cover.png" },
  { title: "السمكة الذهبية", file: "stories/grade6/story70.pdf", grade: 6&7 , cover: "images/story70_cover.png" },
  { title: "قصة أرنوب و أول يوم في المدرسة", file: "stories/grade6/story71.pdf", grade: 6&7 , cover: "images/story71_cover.png" },
   { title: "عرفان المخلص", file: "stories/grade6/story72.pdf", grade: 6&7 , cover: "images/story72_cover.png" },
{ title: "ولا تجسسوا", file: "stories/grade6/story75.pdf", grade: 6&7 , cover: "images/story75_cover.png" }
];

// عرض القصص حسب الصف
function renderStoriesByGrade(grade) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  let filtered = defaultStories.filter(story => story.grade == grade);

  let section = document.createElement("section");
  section.className = "grade";
  

  filtered.forEach(story => {
    let card = document.createElement("div");
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

// قراءة قصة
function readStory(title, file) {
  let studentName = prompt("👩‍🎓 أدخل اسمك:");
  if (!studentName) return;
  let data = JSON.parse(localStorage.getItem("studentsData")) || {};
  if (!data[studentName]) {
    data[studentName] = [];
  }
  if (!data[studentName].includes(title)) {
    data[studentName].push(title);
  }
  localStorage.setItem("studentsData", JSON.stringify(data));
  window.open(file, "_blank");
}

// Dashboard
function showDashboard() {
  const content = document.getElementById("content");
  let data = JSON.parse(localStorage.getItem("studentsData")) || {};
  let html = `
    <h2>📊 Dashboard - إحصائيات الطلاب</h2>
    <table border="1" cellpadding="5">
      <tr><th>اسم الطالب</th><th>عدد القصص المقروءة</th></tr>
  `;
  for (let student in data) {
    html += `<tr><td>${student}</td><td>${data[student].length}</td></tr>`;
  }
  html += "</table><br><button onclick='renderStoriesByGrade(1)'>⬅️ رجوع</button>";
  content.innerHTML = html;
}

// تسجيل دخول الأدمن
function adminLogin() {
  let password = prompt("🔑 أدخل كلمة المرور:");
  if (password === "1974") {
    showDashboard();
  } else {
    alert("❌ كلمة المرور خاطئة!");
  }
}
