const images = document.querySelectorAll(".real-image-item");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        document.querySelector(".real-image-item.active").classList.remove("active");
        image.classList.add("active");
    });
});
