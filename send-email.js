// Initialize EmailJS (v3)
emailjs.init({ publicKey: "JnoJU8VlnhCR8fcld" });

// Wait for DOM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successBox = document.getElementById("success-message");
  if (!form) return console.error("Formularul cu id='contact-form' nu a fost găsit.");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const templateParams = {
      name: document.getElementById("name")?.value || "Anonymous",
      email: document.getElementById("email")?.value || "no-email@example.com",
      phone: document.getElementById("phone")?.value || "N/A",
      message: document.getElementById("message")?.value || "No message provided",
    };

    emailjs.send("service_dxlai5b", "template_prfcszc", templateParams).then(
      () => {
        form.classList.add("hidden");
        successBox?.classList.remove("hidden");
      },
      (error) => {
        console.error(error);
        alert("Eroare la trimitere: " + (error.text || "Încearcă din nou"));
      }
    );
  });
});
