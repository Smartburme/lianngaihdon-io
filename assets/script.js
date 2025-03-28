document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector(".snow-container");
    const fireflyContainer = document.querySelector(".firefly-container");

    // Create Snowflakes
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowContainer.appendChild(snowflake);
    }

    // Create Fireflies (iPhone-style lighting)
    for (let i = 0; i < 10; i++) {
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.animationDuration = `${Math.random() * 2 + 1}s`;
        fireflyContainer.appendChild(firefly);
    }
});
