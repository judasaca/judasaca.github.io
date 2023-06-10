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

let cards = document.getElementsByClassName("project-card");
function add_hover_animation_on_card(card) {
  let height = card.clientHeight;
  let width = card.clientWidth;
  card.addEventListener("mousemove", (evt) => {
    let layerX, layerY;
    ({ layerX, layerY } = evt);
    const yRotation = ((layerX - width / 2) / width) * 20;
    const xRotation = ((layerY - height / 2) / height) * 20;
    const string = `
      perspective(500px)
      scale(1.01)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)`;
    card.style.transform = string;
  });

  card.addEventListener("mouseout", (event) => {
    card.style.transform = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)
    `;
  });
}
console.log(cards);
Array.from(cards).forEach(add_hover_animation_on_card);

let aboutmeDescription = document.getElementById("about-me");
let heightAboutMe = aboutmeDescription.clientHeight;
let aboutMeImageContainer = document.getElementById("about-me-image-container");
console.log(heightAboutMe);
aboutMeImageContainer.style.width = "" + heightAboutMe + "px";
aboutMeImageContainer.style.height = "" + heightAboutMe + "px";
