// side-bar of the hamburger-menu has to be shown when the input is clicked
// getting the input and the div into variables
const inputCheckbox = document.getElementById("hamburger-checkbox");
const hamSidebar = document.getElementById("ham-sidebar")

//adding the event listener that listens to the action being done {
    inputCheckbox.addEventListener("click", function(){
        // if it's checked
        if (inputCheckbox.checked){
            hamSidebar.style.display = "block"
        } else {
            // if its unchecked
            hamSidebar.style.display = "none"
        }
    })