
/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});


 // Disable Right Click
 document.oncontextmenu = () => {
    alert("Hahaha...😂__DEVELOPER IS KISHAN__😎")
    return false;
}


document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (e) {
    if (
        e.ctrlKey && (e.key.toLowerCase() === "u" || e.key.toLowerCase() === "i" || e.key.toLowerCase() === "j" || e.key.toLowerCase() === "s") ||
        e.key === "F12"
    ) {
        e.preventDefault();
        alert("Not again.....!😂");
    }
});


function toggleFAQ(button) {
    let faqItem = button.parentElement;
    let isActive = faqItem.classList.contains("active");

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".faq-content").style.maxHeight = null;
    });

    // Open the clicked item if it was closed
    if (!isActive) {
        faqItem.classList.add("active");
        let content = faqItem.querySelector(".faq-content");
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

