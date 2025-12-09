
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



// Current Time Function
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();


const form = document.getElementById("contactForm");
  const userName = document.getElementById("userName");
  const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    const name = document.getElementById("name").value;
    userName.textContent = name; // Insert user name in modal
    thankYouModal.show(); // Show modal
    form.reset(); // Reset form
  });