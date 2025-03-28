document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = this.href;
        });
    });
});
