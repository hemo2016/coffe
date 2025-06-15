function setLanguage(lang) {
  const t = translations[lang] || translations['en'];
  document.getElementById('title').textContent = t.title;
  document.body.style.direction = t.direction;

  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  const sections = t.sections;
  const items = t.items;

  for (const sectionKey in sections) {
    const section = document.createElement("div");
    section.className = "section";

    const heading = document.createElement("h2");
    heading.textContent = sections[sectionKey];
    section.appendChild(heading);

    const list = document.createElement("div");

    for (const itemKey in items) {
      if (itemKey.includes(sectionKey)) {
        const item = document.createElement("div");
        item.className = "item";
        item.textContent = items[itemKey];
        list.appendChild(item);
      }
    }

    // أو فلترة حسب اسم القسم لو تفضل لاحقًا
    if (sectionKey === 'hot') {
      ['espresso', 'cappuccino'].forEach(k => {
        const i = document.createElement("div");
        i.className = "item";
        i.textContent = items[k];
        list.appendChild(i);
      });
    }

    if (sectionKey === 'cold') {
      ['iced_latte', 'mojito'].forEach(k => {
        const i = document.createElement("div");
        i.className = "item";
        i.textContent = items[k];
        list.appendChild(i);
      });
    }

    if (sectionKey === 'sweets') {
      ['cake', 'dates'].forEach(k => {
        const i = document.createElement("div");
        i.className = "item";
        i.textContent = items[k];
        list.appendChild(i);
      });
    }

    if (sectionKey === 'saudi_coffee') {
      ['saudi_coffee'].forEach(k => {
        const i = document.createElement("div");
        i.className = "item";
        i.textContent = items[k];
        list.appendChild(i);
      });
    }

    if (sectionKey === 'water') {
      ['bottled_water'].forEach(k => {
        const i = document.createElement("div");
        i.className = "item";
        i.textContent = items[k];
        list.appendChild(i);
      });
    }

    section.appendChild(list);
    menu.appendChild(section);
  }
}

// التهيئة
setLanguage('ar');
