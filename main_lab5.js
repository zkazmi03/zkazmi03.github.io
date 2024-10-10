
// Function to prompt for the user's name and display it in an HTML element
function promptForName() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("displayName").innerText = "Hello, " + userName + "!";
    }
}

// Function to toggle dropdown menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Function to enlarge the image when clicked
function enlargeImage() {
    var image = document.getElementById("myImage");
    if (image.style.width === "200px") {
        image.style.width = "400px";
    } else {
        image.style.width = "200px";
    }
}

// Mouseover and mouseout event functions for navigation items
function mOver(element) {
    element.style.color = "blue";
}

function mOut(element) {
    element.style.color = "#58355E";
}