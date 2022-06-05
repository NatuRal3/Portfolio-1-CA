// Respnsive NAV to loaded link.
const projects = document.getElementById("projects");
const aboutme = document.getElementById("aboutme");
const contact = document.getElementById("contact");

function pageHash() {
  const navCategory = window.location.hash;

  navLoadUpdate(getNavHash(navCategory));
}
function getNavHash(navCategory) {
  switch (navCategory) {
    case "#Projects":
      return projects;
    case "#AboutMe":
      return aboutme;
    case "#Contact":
      return contact;
    default:
      return home;
  }
}

function navLoadUpdate(navResponse) {
  navResponse.classList.add("navActive");
}

pageHash();

// Change active NAV when clicked.
const navObject = document.querySelectorAll(".navObject");

navObject.forEach(function (navElement) {
  navElement.onclick = function (event) {
    document.querySelector(".navActive").classList.remove("navActive");

    const clickNavElement = event.currentTarget;
    clickNavElement.classList.add("navActive");
  };
});
