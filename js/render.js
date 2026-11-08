// Renders the page from PROFILE, PUBLICATIONS, AWARDS and PEOPLE (see data/).

const ME = "Marius Memmel";

function link(href, html) {
  return href ? `<a href="${href}">${html}</a>` : html;
}

function renderAuthor(token) {
  if (token === "...") return token;
  const [, name, marks] = token.match(/^(.*?)([*†]*)$/);
  const suffix = marks.replace("†", "&dagger;");
  if (name === ME) return `<strong>${name}${suffix}</strong>`;
  if (!(name in PEOPLE)) console.warn(`Unknown author "${name}" -- add to data/people.js`);
  return link(PEOPLE[name], name) + suffix;
}

function renderThumb({ before, after, fit = "cover" }) {
  const afterImg = after ? `<img class="thumb-after" src="${after}" alt="">` : "";
  return `<div class="thumb">${afterImg}<img class="thumb-before fit-${fit}" src="${before}" alt=""></div>`;
}

function renderPublication(p) {
  const lines = [
    link(p.url, `<papertitle>${p.title}</papertitle>`),
    p.authors.map(renderAuthor).join(", "),
    p.extra && `<em>${p.extra}</em>`,
    ...p.venue.map((v) => `<em>${v}</em>`),
    ...(p.notes || []).map((n) => `<span class="note">${n}</span>`),
  ].filter(Boolean);

  const links = p.links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");

  return `
    <div class="pub ${p.thumb.after ? "pub-hover" : ""}" id="${p.id}">
      <div class="pub-media">${renderThumb(p.thumb)}</div>
      <div class="pub-body">
        ${lines.join("<br>")}
        <p class="pub-links">${links}</p>
      </div>
    </div>`;
}

function renderAward(a) {
  const text = a.quoted ? `"${a.text}"` : a.text;
  return `<li>${a.year}: <b>${a.title}:</b> ${text}</li>`;
}

function renderHeader() {
  return `
    <section class="section header">
      <div class="header-text">
        <p class="center"><name>${PROFILE.name}</name></p>
        ${PROFILE.bio.map((p) => `<p>${p}</p>`).join("")}
        <p class="center">${PROFILE.links.map(([l, h]) => `<a href="${h}">${l}</a>`).join(" &nbsp;/&nbsp; ")}</p>
      </div>
      <div class="header-photo"><img src="${PROFILE.photo}" alt="profile photo"></div>
    </section>`;
}

function renderResearch() {
  return `
    <section class="section">
      <heading>Research</heading>
      <p>Conference papers, workshop papers, and pre-prints.</p>
      ${PUBLICATIONS.map(renderPublication).join("")}
    </section>`;
}

function renderAwards() {
  return `
    <section class="section">
      <heading>Honors &amp; Awards</heading>
      <ul>${AWARDS.map(renderAward).join("")}</ul>
    </section>`;
}

function renderFooter() {
  return `
    <footer class="center">
      Design and source code from <a href="https://jonbarron.info">Jon Barron</a>'s website.
    </footer>`;
}

document.getElementById("app").innerHTML =
  renderHeader() + renderResearch() + renderAwards() + renderFooter();
