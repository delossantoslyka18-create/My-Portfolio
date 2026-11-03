
/* =====================================
   1. DARK MODE AND LIGHT MODE
===================================== */

const themeButton = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Update theme button
function updateThemeButton() {

    if (!themeButton) return;

    themeButton.textContent =
        document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
}

updateThemeButton();

// Switch themes
function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const currentTheme =
        document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    localStorage.setItem("portfolioTheme", currentTheme);

    updateThemeButton();
}


/* =====================================
   2. MOBILE NAVIGATION MENU
===================================== */

const menuButton = document.getElementById("menuToggle");
const navigation = document.querySelector("nav ul");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function() {

        navigation.classList.toggle("show-menu");

    });

}

// Close menu after clicking a link
const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navigation) {
            navigation.classList.remove("show-menu");
        }

    });

});


/* =====================================
   3. PROJECT SEARCH AND CATEGORY FILTER
===================================== */

// Get project elements
const projectSearch = document.getElementById("projectSearch");
const categoryFilter = document.getElementById("categoryFilter");
const clearSearch = document.getElementById("clearSearch");
const projectCards = document.querySelectorAll(".project-card");
const noProjects = document.getElementById("noProjects");

// Filter projects
function filterProjects() {

    const searchValue = projectSearch
        ? projectSearch.value.toLowerCase().trim()
        : "";

    const selectedCategory = categoryFilter
        ? categoryFilter.value
        : "all";

    let visibleProjects = 0;

    projectCards.forEach(function(card) {

        const projectText = card.textContent.toLowerCase();

        const projectCategory = card.dataset.category || "all";

        const matchesSearch = projectText.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            selectedCategory === projectCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "";
            visibleProjects++;

        } else {

            card.style.display = "none";

        }

    });

    // Show message if no projects match
    if (noProjects) {

        noProjects.style.display =
            visibleProjects === 0 ? "block" : "none";

    }

}

// Search while typing
if (projectSearch) {
    projectSearch.addEventListener("input", filterProjects);
}

// Filter by category
if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProjects);
}

// Clear search and reset category
if (clearSearch) {

    clearSearch.addEventListener("click", function() {

        if (projectSearch) {
            projectSearch.value = "";
        }

        if (categoryFilter) {
            categoryFilter.value = "all";
        }

        filterProjects();

        if (projectSearch) {
            projectSearch.focus();
        }

    });

}


/* =====================================
   4. CONTACT FORM VALIDATION
===================================== */

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please complete all required fields.");
            return;

        }

        alert("Thank you, " + name + "! Your form has been checked.");

        contactForm.reset();

    });

}


/* =====================================
   5. AUTOMATIC COPYRIGHT YEAR
===================================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =====================================
   6. BACK TO TOP BUTTON
===================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// Hamburger Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show-menu");

        const isExpanded = navMenu.classList.contains("show-menu");

        menuToggle.setAttribute("aria-expanded", isExpanded);
        menuToggle.textContent = isExpanded ? "✕" : "☰";
    });

    // Close menu after clicking a navigation link
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show-menu");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}