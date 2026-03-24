const translations = {
  pl: {
    name: "Twoje Imię i Nazwisko",
    title: "Stanowisko / afiliacja",
    about: "O mnie",
    aboutText: "Opis...",
    research: "Zainteresowania badawcze",
    researchText: "Opis...",
    projects: "Projekty",
    publications: "Publikacje",
    contact: "Kontakt"
  },
  en: {
    name: "Your Name",
    title: "Position / affiliation",
    about: "About",
    aboutText: "Description...",
    research: "Research",
    researchText: "Description...",
    projects: "Projects",
    publications: "Publications",
    contact: "Contact"
  }
};

function setLang(lang) {
  document.getElementById("name").innerText = translations[lang].name;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("about-title").innerText = translations[lang].about;
  document.getElementById("about-text").innerText = translations[lang].aboutText;
  document.getElementById("research-title").innerText = translations[lang].research;
  document.getElementById("research-text").innerText = translations[lang].researchText;
  document.getElementById("projects-title").innerText = translations[lang].projects;
  document.getElementById("publications-title").innerText = translations[lang].publications;
  document.getElementById("contact-title").innerText = translations[lang].contact;
}

function toggleTheme() {
  const current = document.body.getAttribute("data-theme");
  document.body.setAttribute("data-theme", current === "dark" ? "" : "dark");
}
