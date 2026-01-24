let cartCount = 0;

function updateCart() {
  const el = document.getElementById("cartCount");
  if (el) el.textContent = cartCount;
}

function addToCart(producto) {
  cartCount++;
  updateCart();
  alert(`✅ Agregado al carrito: ${producto}`);
}

function irCatalogo(producto) {
  const url = `catalogo.html?producto=${encodeURIComponent(producto)}`;
  window.open(url, "_blank");
}

window.addEventListener("DOMContentLoaded", () => {
  updateCart();

  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");

  function runSearch() {
    const q = (input?.value || "").trim().toLowerCase();
    if (!q) return;

    // Busca tarjetas por texto (h3)
    const cards = document.querySelectorAll(".producto");
    let found = false;

    cards.forEach((card) => {
      const title = card.querySelector("h3")?.textContent?.toLowerCase() || "";
      const match = title.includes(q);
      card.style.display = match ? "" : "none";
      if (match) found = true;
    });

    if (!found) alert("No se encontró ese producto en esta página.");
  }

  if (btn) btn.addEventListener("click", runSearch);
  if (input) input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
  });

  // Botón carrito (demo)
  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      alert(`🛒 Carrito: ${cartCount} producto(s)\n(Esto es demo, luego hacemos el carrito real)`);
    });
  }
});

