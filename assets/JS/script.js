// Console Log for Testing
console.log("Lian Ngain Don Website Loaded!");

// Smooth Scroll Effect for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Button Click Alert
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Validate input (Basic)
        if (name === "" || email === "" || password === "") {
            alert("Please fill out all fields!");
            return;
        }

        // Display user data (For Testing)
        console.log("User Registered:");
        console.log("Name:", name);
        console.log("Email:", email);

        // Success Message
        alert("Registration Successful!");

        // Redirect to Home Page (Optional)
        window.location.href = "index.html";
    });
});

// Card Hover Animation Effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    });
});
