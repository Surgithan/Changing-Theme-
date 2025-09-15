function themeAction() {
    const container = document.getElementById("light-theme") || document.getElementById("dark-theme");
    const icon = document.getElementById("theme-icon");

    if (container.id === "light-theme") {
        container.id = "dark-theme";
        icon.className = "fa-solid fa-sun";
    } else {
        container.id = "light-theme";
        icon.className = "fa-solid fa-moon";
    }
}





