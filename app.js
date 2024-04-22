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


// this is the moving type text code:
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Frontend Developer", "UX/UI Designer", "CS Student"];

const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();
