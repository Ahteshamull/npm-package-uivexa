export function showModal(title, content) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = 9999;

  const modal = document.createElement("div");
  modal.style.background = "#fff";
  modal.style.padding = "20px";
  modal.style.borderRadius = "6px";
  modal.style.maxWidth = "500px";
  modal.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

  overlay.appendChild(modal);
  overlay.addEventListener("click", () => overlay.remove());
  document.body.appendChild(overlay);
}
