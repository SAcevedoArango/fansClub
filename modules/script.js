
document.addEventListener("DOMContentLoaded", function() {
    let icon = document.getElementById("icon");
    let icon2 = document.getElementById("icon2");
    let rotate135 = false;

    function rotateIcons() {
        if (rotate135) {
            icon.style.transform = "rotate(135deg)";
            icon2.style.transform = "rotate(135deg)";
        } else {
            icon.style.transform = "rotate(100deg)";
            icon2.style.transform = "rotate(100deg)";
        }
        rotate135 = !rotate135; // Toggle between rotating to 135 and 45 degrees
    }

    rotateIcons(); // Rotate immediately after the page finishes loading
    window.setInterval(rotateIcons, 10000); // Rotate every 1 second
});