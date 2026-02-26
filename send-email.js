// Initialize EmailJS
emailjs.init("JnoJU8VlnhCR8fcld");

// Wait for DOM to load completely
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const templateParams = {
        name: document.getElementById("name")?.value || "Anonymous",
        email: document.getElementById("email")?.value || "no-email@example.com",
        phone: document.getElementById("phone")?.value || "N/A",
        message: document.getElementById("message")?.value || "No message provided",
      };

      emailjs.send("service_dxlai5b", "template_prfcszc", templateParams)
        .then(
          function(response) {
            console.log("✅ Email trimis!", response);
            // Hide form, show success
            form.classList.add("hidden");
            document.getElementById("success-message").classList.remove("hidden");
          },
          function(error) {
            console.error("❌ Eroare:", error);
            alert("Eroare la trimitere: " + (error.text || "Încearcă din nou"));
          }
        );
    });
  } else {
    console.error("❌ Form not found! Check if id='contact-form' exists");
  }
});
