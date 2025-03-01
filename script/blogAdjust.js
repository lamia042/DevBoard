document.addEventListener("DOMContentLoaded", function () {
    let discoverButton = document.getElementById("discover-id");
    let backButton = document.getElementById("back-desk");

    if (discoverButton) {
        discoverButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "./blog.html";
        });
    } 
    else {
        console.error("Element with ID 'discover-id' not found.");
    }

    if (backButton) {
        backButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "./index.html";
        });
    } 
    else {
        console.error("Element with ID 'back-desk' not found.");
    }
});
