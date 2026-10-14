
 // Run this code after all the HTML elements have loaded.
document.addEventListener("DOMContentLoaded", function () {

    // Scroll to the menu when a visitor clicks an ordering button.
    // This is a frontend demo; it does not place real orders.
    function scrollToMenu() {
        const menu = document.getElementById("exploreMenuSection");

        if (menu) {
            menu.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            console.error("The Explore Menu section was not found.");
        }
    }

    // Connect the View Menu and Order Now buttons.
    ["viewMenuBtn", "orderNowBtn", "deliveryOrderBtn"].forEach(function (id) {
        const button = document.getElementById(id);

        if (button) {
            button.addEventListener("click", scrollToMenu);
        }
    });

    // Display a message because a real food video has not been added yet.
    const watchButton = document.getElementById("watchVideoBtn");

    if (watchButton) {
        watchButton.addEventListener("click", function () {
            alert("Welcome to Food Munch! A food video can be added here later.");
        });
    }

    // Smoothly scroll to the selected section from the navigation bar.
    document.querySelectorAll('.navbar a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const selector = link.getAttribute("href");

            // Ignore empty links, such as the logo link.
            if (!selector || selector === "#") {
                return;
            }

            const target = document.querySelector(selector);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Close the mobile navigation menu after selecting a section.
                if (
                    window.jQuery &&
                    window.jQuery("#navLinks").hasClass("show")
                ) {
                    window.jQuery("#navLinks").collapse("hide");
                }
            }
        });
    });

});
