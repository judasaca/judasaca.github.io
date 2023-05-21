let educationButton = document.getElementById("education-button");

let experienceButton = document.getElementById("experience-button");

let experienceContent = document.getElementById("experience-timeline");
let educationContent = document.getElementById("education-timeline");

function switchToEducation() {
  experienceContent.classList.add("invisible");
  educationContent.classList.remove("invisible");
  experienceButton.classList.remove("selected");
  educationButton.classList.add("selected");
}
function switchToExperience() {
  experienceContent.classList.remove("invisible");
  educationContent.classList.add("invisible");

  experienceButton.classList.add("selected");
  educationButton.classList.remove("selected");
}

educationButton.addEventListener("click", switchToEducation);
experienceButton.addEventListener("click", switchToExperience);
