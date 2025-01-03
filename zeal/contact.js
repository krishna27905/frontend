document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    if (name && phone && message) {
      alert(Thank you, ${name}! Your message has been submitted.);
      // Reset the form
      this.reset();
    } else {
      alert("Please fill out all the fields.");
    }
  });