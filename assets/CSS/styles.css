document.addEventListener("DOMContentLoaded", function () {

    // 🌨️ Snowfall Effect (for All Pages)
    function createSnowflake() {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s"; // 2s - 5s animation
        document.body.appendChild(snowflake);

        setTimeout(() => { snowflake.remove(); }, 5000); // Remove after 5s
    }

    setInterval(createSnowflake, 300);

    // 🎆 Firefly Effect (iPhone Release Fireworks)
    function createFirefly() {
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.animationDuration = (Math.random() * 0.5 + 1) + "s";
        document.body.appendChild(firefly);

        setTimeout(() => { firefly.remove(); }, 1000); // Remove after 1s
    }

    setInterval(createFirefly, 200);

    // 🌸 Falling Cherry Blossoms for Title
    function createCherryBlossom() {
        let blossom = document.createElement("div");
        blossom.classList.add("cherry-blossom");
        blossom.style.left = Math.random() * 100 + "vw";
        blossom.style.animationDuration = (Math.random() * 5 + 5) + "s";
        document.body.appendChild(blossom);

        setTimeout(() => { blossom.remove(); }, 10000);
    }

    setInterval(createCherryBlossom, 1000);

    // 🎨 Gradient Text Animation (Purple → Pink → Blue)
    function animateTextColors() {
        const textElements = document.querySelectorAll("h1, h2, h3, p");

        textElements.forEach((element) => {
            element.style.background = "linear-gradient(90deg, #8A2BE2, #FF69B4, #1E90FF)";
            element.style.webkitBackgroundClip = "text";
            element.style.color = "transparent";
            element.style.animation = "textColor 5s infinite alternate ease-in-out";
        });
    }

    animateTextColors();
});
