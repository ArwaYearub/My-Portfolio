// progress bar at the top:

//  a function that compares the total hight to the current position on the page.
function updatingProgressBar() {
  // desctructionring the HTML scroll top and height
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPrecent = `${
    (scrollTop / (scrollHeight - window.innerHeight)) * 100
  }%`;

  //  update the progress variable to the total hight.
  const progressBar = document.querySelector(".progress-bar-onscroll"); // corrected selector
  progressBar.style.setProperty("--progress", scrollPrecent);
}

// event listener for the scroll
document.addEventListener("scroll", updatingProgressBar);

// side-bar of the hamburger-menu has to be shown when the input is clicked
// getting the input and the div into variables
const inputCheckbox = document.getElementById("hamburger-checkbox");
const hamSidebar = document.getElementById("ham-sidebar");

//adding the event listener that listens to the action being done {
inputCheckbox.addEventListener("click", function () {
  // if it's checked
  if (inputCheckbox.checked) {
    hamSidebar.style.display = "block";
  } else {
    // if its unchecked
    hamSidebar.style.display = "none";
  }
});
