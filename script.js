const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll("nav a");

function showSection(sectionId) {
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

navigationLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href").substr(1);
    showSection(sectionId);
  });
});
showSection("home");
