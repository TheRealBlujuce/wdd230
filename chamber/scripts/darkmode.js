document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggles = document.querySelectorAll("#dark-mode-toggle, #dark-mode-toggle-hm");
    const body = document.body;

    // Function to update dark mode state
    function updateDarkMode(state) {
        if (state === "enabled") {
            body.classList.add("dark-mode");
            darkModeToggles.forEach(toggle => toggle.textContent = "☀️ Light Mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            darkModeToggles.forEach(toggle => toggle.textContent = "🌙 Dark Mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    }

    // Check local storage for saved preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        updateDarkMode("enabled");
    }

    // Add event listeners to both toggles
    darkModeToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            if (body.classList.contains("dark-mode")) {
                updateDarkMode("disabled");
            } else {
                updateDarkMode("enabled");
            }
        });
    });
});
