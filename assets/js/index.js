const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const navLinks = document.getElementById("mobile-navLinks");

    const openMenuHandler = () => {
        navLinks.classList.remove("-translate-x-full")
        navLinks.classList.add("translate-x-0")
    }

    const closeMenuHandler = () => {
        navLinks.classList.remove("translate-x-0")
        navLinks.classList.add("-translate-x-full")
    }

    openMenu.addEventListener("click", openMenuHandler);
    closeMenu.addEventListener("click", closeMenuHandler);