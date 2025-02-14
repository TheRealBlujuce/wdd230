document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuList = document.querySelector(".navigation");

    menuToggle.addEventListener("click", () => {
        const isMenuOpen = menuList.style.display === "block";
        menuList.style.display = isMenuOpen ? "none" : "block";
        menuToggle.textContent = isMenuOpen ? "≡" : "X";
    });
});
