document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("viewerModal");
  const closeBtn = document.getElementById("viewerClose");
  const stage = document.getElementById("viewerStage");
  const cards = document.querySelectorAll(".js-work");

  let activeImage = null;

  function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    stage.innerHTML = "";
    activeImage = null;
  }

  function renderImage(src, title) {
    stage.innerHTML = `
      <div class="viewer-image-wrap">
        <img class="viewer-image" id="viewerImage" src="${src}" alt="${title || "Lucrare"}" />
      </div>
    `;
    activeImage = document.getElementById("viewerImage");
  }

  function renderModel(src, poster, title) {
    stage.innerHTML = `
      <model-viewer
        class="viewer-model"
        src="${src}"
        poster="${poster || ""}"
        alt="${title || "Model 3D"}"
        camera-controls
        touch-action="pan-y"
        auto-rotate
        shadow-intensity="1">
      </model-viewer>
    `;
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const type = card.dataset.type;
      const src = card.dataset.src;
      const title = card.dataset.title || "";

      if (type === "model") {
        renderModel(src, card.dataset.poster, title);
      } else {
        renderImage(src, title);
      }
      openModal();
    });
  });

  // Efect pseudo-3D pentru poze 2D
  modal.addEventListener("pointermove", (e) => {
    if (!activeImage) return;
    const rect = activeImage.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 18;
    const rotX = (0.5 - py) * 18;
    activeImage.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  modal.addEventListener("pointerleave", () => {
    if (activeImage) activeImage.style.transform = "rotateX(0) rotateY(0)";
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
});