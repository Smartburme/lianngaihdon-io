document.addEventListener("DOMContentLoaded", function () {
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
});
