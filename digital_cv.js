if (document.location.href.includes("project-cv")) {
  document.querySelector(".project-pet").style.display = "none";
  document.querySelector(".project-new").style.display = "none";
} else if (document.location.href.includes("project-pet")) {
  document.querySelector(".project-cv").style.display = "none";
  document.querySelector(".project-new").style.display = "none";
} else if (document.location.href.includes("project-new")) {
  document.querySelector(".project-cv").style.display = "none";
  document.querySelector(".project-pet").style.display = "none";
}
