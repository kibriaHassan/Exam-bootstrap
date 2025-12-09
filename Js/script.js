
document.getElementById("toggleBtn").addEventListener("click", function() {
    const hiddenImages = document.querySelectorAll(".hidden-img");

    hiddenImages.forEach(img => {
        img.classList.toggle("d-none");
    });

    if (this.innerText === "Show More") {
        this.innerText = "Show Less";
    } else {
        this.innerText = "Show More";
    }
});

