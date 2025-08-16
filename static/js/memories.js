let currentIndex = 0;

function unlockMemories() {
    document.getElementById("unlock").classList.add("hidden");
    document.getElementById("carouselWrap").classList.remove("hidden");
    document.getElementById("memControls").classList.remove("hidden");

    loadCarousel();
}

function loadCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = "";

    window.MEM_IMAGES.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "carousel-image";
        if (index !== currentIndex) img.style.display = "none";
        carousel.appendChild(img);
    });
}

function shift(direction) {
    const images = document.querySelectorAll(".carousel-image");
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].style.display = "block";
}

function downloadCurrent() {
    const link = document.createElement("a");
    link.href = window.MEM_IMAGES[currentIndex];
    link.download = "memory.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
