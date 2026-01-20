export function showLoader() {
  const loader = document.createElement("div");
  loader.id = "uivexa-loader";
  loader.style.position = "fixed";
  loader.style.top = 0;
  loader.style.left = 0;
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.background = "rgba(255,255,255,0.7)";
  loader.style.display = "flex";
  loader.style.justifyContent = "center";
  loader.style.alignItems = "center";
  loader.style.zIndex = 9999;
  loader.innerHTML = `<div style="width:50px;height:50px;border:5px solid #ccc;border-top-color:#333;border-radius:50%;animation: spin 1s linear infinite;"></div>`;

  const style = document.createElement("style");
  style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg);} 100% {transform: rotate(360deg);} }`;
  document.head.appendChild(style);

  document.body.appendChild(loader);
}

export function hideLoader() {
  const loader = document.getElementById("uivexa-loader");
  if (loader) loader.remove();
}
