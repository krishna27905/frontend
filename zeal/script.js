// Example: Dynamic behavior (optional)
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content h1");
  
    setInterval(() => {
      heroText.classList.toggle("highlight");
    }, 2000);
  });
  
  // Add CSS class for dynamic effect