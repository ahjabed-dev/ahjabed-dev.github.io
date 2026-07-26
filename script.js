/* ============================================================
   এই ফাইলটা শুধু content.js পড়ে পুরো পেজ বানায়।
   সাধারণত এই ফাইলে হাত দেওয়ার দরকার নেই।
   ============================================================ */

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderSite(site) {
  // ---------- HERO ----------
  document.getElementById("site-eyebrow").innerHTML =
    `<span class="dot"></span> ${site.eyebrow}`;
  document.getElementById("site-name").textContent = site.name;
  document.getElementById("site-tagline").innerHTML = site.tagline_html;

  // ---------- FILTER NAV ----------
  const filterNav = document.getElementById("filter-nav");
  const allBtn = el("button", "filter-btn active", "All");
  allBtn.dataset.topic = "all";
  filterNav.appendChild(allBtn);

  site.topics.forEach(topic => {
    const btn = el("button", "filter-btn", topic.label);
    btn.dataset.topic = topic.id;
    btn.style.setProperty("--accent", topic.color);
    filterNav.appendChild(btn);
  });

  // ---------- MAIN SECTIONS ----------
  const main = document.getElementById("main-content");

  site.topics.forEach(topic => {
    const section = el("section", "topic");
    section.id = topic.id;
    section.style.setProperty("--accent", topic.color);

    section.appendChild(el("div", "topic-head",
      `<h2>${topic.label}</h2><span class="topic-count">${topic.essays.length} piece${topic.essays.length !== 1 ? "s" : ""}</span>`
    ));
    section.appendChild(el("p", "topic-note", topic.note));

    topic.essays.forEach(essay => {
      const details = el("details", "entry");
      details.dataset.topic = topic.id;
      details.style.setProperty("--accent", topic.color);

      const summary = el("summary", "", `
        <span class="entry-date">${essay.date.replace(" ", "<br>")}</span>
        <span class="entry-main">
          <span class="entry-title">${essay.title}</span>
          <span class="entry-excerpt">${essay.excerpt}</span>
        </span>
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14"/></svg>
      `);

      const body = el("div", "entry-body", `
        <div class="essay-text">
          ${essay.body.map(p => `<p>${p}</p>`).join("")}
        </div>
        <aside class="margin-note">"${essay.quote}"</aside>
      `);

      details.appendChild(summary);
      details.appendChild(body);
      section.appendChild(details);
    });

    main.appendChild(section);
  });

  // ---------- FOOTER ----------
  document.getElementById("about-text").textContent = site.about;
  const contactLinks = document.getElementById("contact-links");
  contactLinks.innerHTML = `
    <a href="mailto:${site.contact.email}">Email</a>
    <a href="${site.contact.twitter}" target="_blank" rel="noopener">Twitter / X</a>
    <a href="${site.contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
  `;

  // ---------- INTERACTIONS ----------
  const buttons = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll("section.topic");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const topicId = btn.dataset.topic;

      sections.forEach(sec => {
        if (topicId === "all" || sec.id === topicId) {
          sec.classList.remove("hidden");
        } else {
          sec.classList.add("hidden");
        }
      });
    });
  });

  document.querySelectorAll("details.entry").forEach(entry => {
    entry.addEventListener("toggle", () => {
      if (entry.open) {
        const siblings = entry.closest("section").querySelectorAll("details.entry");
        siblings.forEach(sib => { if (sib !== entry) sib.open = false; });
      }
    });
  });
}

renderSite(SITE);
