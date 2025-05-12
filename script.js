// Button Click and Color Change
document.getElementById("colorButton").addEventListener("click", function() {
    this.style.backgroundColor = 'lightgreen';
    this.textContent = 'You clicked me!';
});

// Hover Effects on Images (Gallery)
const images = document.querySelectorAll(".gallery-img");
images.forEach(image => {
    image.addEventListener("mouseover", function() {
        image.style.borderColor = "blue";
    });

    image.addEventListener("mouseout", function() {
        image.style.borderColor = "black";
    });
});

// Tabs functionality
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        tabContents.forEach(content => content.style.display = "none");
        tabContents[index].style.display = "block";
    });
});

// Form Validation
function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email format check (basic regex)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return false;
    }

    // Password length check
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Bonus: Secret Action for Double Click (change color)
document.getElementById("colorButton").addEventListener("dblclick", function() {
    this.style.backgroundColor = 'lightpink';
    this.textContent = 'You double-clicked me!';
});

// Bonus: Long Press (detect press longer than 2 seconds)
let pressTimer;
const longPressDuration = 2000;

document.getElementById("colorButton").addEventListener("mousedown", function() {
    pressTimer = setTimeout(() => {
        this.style.backgroundColor = 'lightyellow';
        this.textContent = 'You long-pressed me!';
    }, longPressDuration);
});

document.getElementById("colorButton").addEventListener("mouseup", function() {
    clearTimeout(pressTimer);
});
