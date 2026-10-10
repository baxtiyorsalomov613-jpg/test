(function () {
  var t = {
    uz: {
      trust: "Ishonch telefoni",
      republic: "O‘ZBEKISTON RESPUBLIKASI",
      committee: "MILLIY STATISTIKA QO‘MITASI",
      nav1: "Qo‘mita haqida", nav2: "Me’yoriy hujjatlar", nav3: "Ochiq ma'lumotlar", nav4: "Nashrlar",
      nav5: "Interaktiv xizmatlar", nav6: "Matbuot xizmati", nav7: "Murojaatlar",
      eyebrow: "Texnik ishlar",
      title: "Saytda texnik ishlar olib borilmoqda",
      text1: "Hurmatli foydalanuvchilar! Hozirda rasmiy veb-saytda rejalashtirilgan texnik ishlar olib borilmoqda. Sayt tez orada odatiy rejimda ishlashni davom ettiradi.",
      text2: "Noqulayliklar uchun uzr so‘raymiz. Savollaringiz bo‘lsa, quyidagi aloqa vositalari orqali murojaat qilishingiz mumkin.",
      email: "Elektron pochta",
      follow: "Yangiliklarni kuzatib boring:",
      footerName: "O‘zbekiston Respublikasi Milliy statistika qo‘mitasi",
      address: "100170, Toshkent sh., Mustaqillik shoh ko‘chasi, 63",
      copyright: "yil. O‘zbekiston Respublikasi Milliy statistika qo‘mitasi.",
      docTitle: "Texnik ishlar"
    },
    oz: {
      trust: "Ишонч телефони",
      republic: "ЎЗБЕКИСТОН РЕСПУБЛИКАСИ",
      committee: "МИЛЛИЙ СТАТИСТИКА ҚЎМИТАСИ",
      nav1: "Қўмита ҳақида", nav2: "Меъёрий ҳужжатлар", nav3: "Очиқ маълумотлар", nav4: "Нашрлар",
      nav5: "Интерактив хизматлар", nav6: "Матбуот хизмати", nav7: "Мурожаатлар",
      eyebrow: "Техник ишлар",
      title: "Сайтда техник ишлар олиб борилмоқда",
      text1: "Ҳурматли фойдаланувчилар! Ҳозирда расмий веб-сайтда режалаштирилган техник ишлар олиб борилмоқда. Сайт тез орада одатий режимда ишлашни давом эттиради.",
      text2: "Ноқулайликлар учун узр сўраймиз. Саволларингиз бўлса, қуйидаги алоқа воситалари орқали мурожаат қилишингиз мумкин.",
      email: "Электрон почта",
      follow: "Янгиликларни кузатиб боринг:",
      footerName: "Ўзбекистон Республикаси Миллий статистика қўмитаси",
      address: "100170, Тошкент ш., Мустақиллик шоҳ кўчаси, 63",
      copyright: "йил. Ўзбекистон Республикаси Миллий статистика қўмитаси.",
      docTitle: "Техник ишлар"
    },
    ru: {
      trust: "Телефон доверия",
      republic: "РЕСПУБЛИКА УЗБЕКИСТАН",
      committee: "НАЦИОНАЛЬНЫЙ КОМИТЕТ ПО СТАТИСТИКЕ",
      nav1: "О Комитете", nav2: "Нормативные документы", nav3: "Открытые данные", nav4: "Публикации",
      nav5: "Интерактивные услуги", nav6: "Пресс-служба", nav7: "Обращения",
      eyebrow: "Технические работы",
      title: "На сайте ведутся технические работы",
      text1: "Уважаемые пользователи! В настоящее время на официальном веб-сайте проводятся плановые технические работы. Сайт скоро возобновит работу в обычном режиме.",
      text2: "Приносим извинения за неудобства. По всем вопросам вы можете обратиться по указанным ниже контактам.",
      email: "Электронная почта",
      follow: "Следите за новостями:",
      footerName: "Национальный комитет Республики Узбекистан по статистике",
      address: "100170, г. Ташкент, проспект Мустакиллик, 63",
      copyright: "г. Национальный комитет Республики Узбекистан по статистике.",
      docTitle: "Технические работы"
    },
    en: {
      trust: "Hotline",
      republic: "REPUBLIC OF UZBEKISTAN",
      committee: "NATIONAL STATISTICS COMMITTEE",
      nav1: "About", nav2: "Regulations", nav3: "Open data", nav4: "Publications",
      nav5: "Interactive services", nav6: "Press service", nav7: "Appeals",
      eyebrow: "Maintenance",
      title: "The website is under maintenance",
      text1: "Dear users! Scheduled technical work is currently being carried out on the official website. The site will resume normal operation shortly.",
      text2: "We apologize for the inconvenience. If you have any questions, please use the contacts below.",
      email: "Email",
      follow: "Follow our news:",
      footerName: "National Statistics Committee of the Republic of Uzbekistan",
      address: "63 Mustaqillik Avenue, Tashkent, 100170",
      copyright: "National Statistics Committee of the Republic of Uzbekistan.",
      docTitle: "Maintenance"
    }
  };
  var htmlLang = { uz: "uz", oz: "uz-Cyrl", ru: "ru", en: "en" };
  var allowed = ["uz", "oz", "ru", "en"];

  // Faqat ruxsat etilgan til kodlari qabul qilinadi, boshqa har qanday qiymat — "uz".
  // Matnlar faqat textContent orqali qo'yiladi (innerHTML ishlatilmaydi), shuning uchun HTML/skript kiritib bo'lmaydi.
  function safeLang(v) { return allowed.indexOf(v) !== -1 ? v : "uz"; }

  function apply(lang) {
    lang = safeLang(lang);
    var d = t[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k]) el.textContent = d[k];
    });
    document.querySelectorAll(".langs button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    document.documentElement.lang = htmlLang[lang] || "uz";
    document.title = d.footerName + " — " + d.docTitle;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  // Til: avval URL dan (/ru/..., /en/...), keyin saqlangan tanlovdan
  var m = location.pathname.match(/^\/(uz|oz|ru|en)(\/|$)/);
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = m ? m[1] : safeLang(saved);

  document.querySelectorAll(".langs button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  apply(lang);
})();
