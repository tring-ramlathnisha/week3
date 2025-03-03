const images = document.querySelectorAll(".real-image-item");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        document.querySelector(".real-image-item.active").classList.remove("active");
        image.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Hide all content sections
            contents.forEach(content => content.classList.remove("active"));

            // Show the selected content
            const target = this.getAttribute("data-target");
            document.querySelector("." + target).classList.add("active");
        });
    });
});
