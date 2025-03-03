const imageData = {
    usa: [
        "./Images/USA/image 135.png",
        "./Images/USA/image 136.png",
        "./Images/USA/image 137.png",
        "./Images/insights 2.png"
    ],
    india: [
        "./Images/India/img 1.jpg",
        "./Images/India/img 2.jpg",
        "./Images/India/img 3.jpg"
    ],
    colombia: [
        "./Images/Colombia/img1.jpg",
        "./Images/Colombia/img2.jpg"
    ],
    dubai: [
        "https://via.placeholder.com/300x300/FF5733/FFFFFF?text=Dubai+1",
        "https://via.placeholder.com/300x300/33FF57/FFFFFF?text=Dubai+2",
        "https://via.placeholder.com/300x300/3357FF/FFFFFF?text=Dubai+3",
        "https://via.placeholder.com/300x300/FF33A6/FFFFFF?text=Dubai+4",
        "https://via.placeholder.com/300x300/33FFD1/FFFFFF?text=Dubai+5"
    ],
    japan: [
        "https://via.placeholder.com/300x300/FFAA00/FFFFFF?text=Japan+1",
        "https://via.placeholder.com/300x300/AA00FF/FFFFFF?text=Japan+2",
        "https://via.placeholder.com/300x300/00FFAA/FFFFFF?text=Japan+3"
    ],
    uk: [
        "https://via.placeholder.com/300x300/0099FF/FFFFFF?text=UK+1",
        "https://via.placeholder.com/300x300/9900FF/FFFFFF?text=UK+2",
        "https://via.placeholder.com/300x300/FF0099/FFFFFF?text=UK+3",
        "https://via.placeholder.com/300x300/00FF99/FFFFFF?text=UK+4"
    ]
};

// Function to update the gallery based on the selected country
function updateGallery(country) {
    const gallery = document.getElementById("imageGallery");
    gallery.innerHTML = ""; // Clear previous images

    imageData[country].forEach(src => {
        // Create div container
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");

        // Create img element
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Gallery Image";

        // Append img inside div
        imageItem.appendChild(img);

        // Append div inside the gallery
        gallery.appendChild(imageItem);
    });


    // Set active class
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
    document.querySelector(`[data-country="${country}"]`).classList.add("active");
}

// Initial Load
updateGallery("usa");

// Event Listener for navigation clicks
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function() {
        updateGallery(this.dataset.country);
    });
});

// Enable horizontal scrolling with mouse
document.querySelector(".gallery-container").addEventListener("wheel", function(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;
});


