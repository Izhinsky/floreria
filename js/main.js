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
  const p = (producto || "").toLowerCase();

  // Si hacen click en la tarjeta "Arreglos" del home -> categorías
  if (p.includes("arreglos")) {
    window.location.href = "arreglos.html";
    return;
  }

  // Si hacen click en Rosas o Tulipanes -> directo a su categoría
  if (p.includes("rosas")) {
    window.location.href = "categoria.html?id=rosas";
    return;
  }
  if (p.includes("tulipanes")) {
    window.location.href = "categoria.html?id=tulipanes";
    return;
  }

  // fallback: si no matchea, manda a categorías
  window.location.href = "arreglos.html";
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

// ====== CATEGORÍAS (7) ======
const CATEGORIAS_ARREGLOS = [
  { id: "rosas", nombre: "Arreglos con rosas", img: "images/cat-rosas.jpg" },
  { id: "eternos", nombre: "Arreglos eternos", img: "images/cat-eternos.jpg" },
  { id: "girasoles", nombre: "Arreglos y ramos de girasoles", img: "images/cat-girasoles.jpg" },
  { id: "tulipanes", nombre: "Arreglos y ramos de tulipanes", img: "images/cat-tulipanes.jpg" },
  { id: "box", nombre: "Canastas y box", img: "images/cat-box.jpg" },
  { id: "condolencias", nombre: "Condolencias", img: "images/cat-condolencias.jpg" },
  { id: "ramos", nombre: "Ramos florales", img: "images/cat-ramos.jpg" },
];


// ====== PRODUCTOS POR CATEGORÍA (ejemplo) ======
const PRODUCTOS = {
  rosas: [
  { nombre: 'Arreglo de rosas 6 y 4 girasoles', precio: 55, img: 'images/rosas/1.-arreglo de rosas 6 y 4 girasoles- S_55 soles.jpg' },
  { nombre: 'Arreglo clasico de 5 rosas', precio: 40, img: 'images/rosas/2.-arreglo clasico de 5 rosas- s.40 soles.jpg' },
  { nombre: 'Arreglo rosas 10,gerbera,girasol', precio: 55, img: 'images/rosas/3.-arreglo rosas 10,gerbera,girasol S.55  .jpg' },
  { nombre: 'Arreglo clasico 5 rosas mas detalles', precio: 45, img: 'images/rosas/4.-arreglo clasico 5 rosas mas detalles S.45 soles.jpg' },
  { nombre: 'Arreglo de 12 rosas mas peluche', precio: 85, img: 'images/rosas/5.-arreglo de 12 rosas  mas peluche S.85 soles.jpg' },
  { nombre: 'Arreglos 8 rosas amarillas y girasol', precio: 50, img: 'images/rosas/6.-arreglos 8 rosas amarillas y girasol S.50 soles .jpg' },
  { nombre: 'Arreglos de 8 rosas girasol,gerbera', precio: 50, img: 'images/rosas/7.-arreglos de 8 rosas girasol,gerbera S.50 soles .jpg' },
  { nombre: 'Arreglo de 8 rosas gerberas', precio: 50, img: 'images/rosas/8.-arreglo de 8 rosas gerberas S. 50 soles.jpg' },
  { nombre: 'Arreglos de 5 rosas girasol gerbera', precio: 40, img: 'images/rosas/9.-arreglos de 5 rosas girasol gerbera S.40 soles.jpg' },
  { nombre: 'Arreglo 3 rosas rosadas', precio: 30, img: 'images/rosas/10.-arreglo 3 rosas rosadas S.30 soles .jpg' },
  { nombre: 'Arreglos de 5 rosas girasol,gerberas', precio: 40, img: 'images/rosas/11.-arreglos de 5 rosas girasol,gerberas S.40 soles .jpg' },
  { nombre: 'Arreglo de 5 rosas mas globo', precio: 48, img: 'images/rosas/12.-arreglo de 5 rosas mas globo S.48 soles.jpg' },
  { nombre: 'Arreglos de 12 rosas', precio: 60, img: 'images/rosas/13.-arreglos de 12 rosas S.60 soles .jpg' },
  { nombre: 'Arreglos de 12 rosas ginger, gerbera,girasol', precio: 65, img: 'images/rosas/14.-arreglos de 12 rosas ginger, gerbera,girasol S.65 soles .jpg' },
  { nombre: 'Arreglo de 5 rosas', precio: 40, img: 'images/rosas/15.-arreglo de 5 rosas S.40 soles .jpg' },
  { nombre: 'Arreglo de rosas,liliums,gerberas', precio: 70, img: 'images/rosas/16.-arreglo de rosas,liliums,gerberas,S.70 soles .jpg' },
  { nombre: 'Arreglos de 5 rosas', precio: 40, img: 'images/rosas/17.-arreglos de 5 rosas S.40 soles .jpg' },
  { nombre: 'Arreglo de 3 rosas,girasol', precio: 30, img: 'images/rosas/18.-arreglo de 3 rosas,girasol S.30 soles .jpg' },
  { nombre: 'Arreglo de 8 rosas gerberas,girasoles', precio: 50, img: 'images/rosas/19.-arreglo de 8 rosas gerberas,girasoles S.50 soles .jpg' },
  { nombre: 'Arreglo clasico 12 rosas gerberas,girasoles', precio: 65, img: 'images/rosas/20.-arreglo clasico 12 rosas gerberas,girasoles 65 soles .jpg' },
  { nombre: 'Arreglo 8 rosas ginger,girasoles', precio: 50, img: 'images/rosas/21.-arreglo 8 rosas ginger,girasoles S.50 soles .jpg' },
  { nombre: 'Arreglo de 3 rosas mas girasol', precio: 30, img: 'images/rosas/22.-arreglo de 3 rosas mas girasol S.30 soles .jpg' },
  { nombre: 'Arreglo 10 rosas', precio: 55, img: 'images/rosas/23.-arreglo 10 rosas S. 55 soles .jpg' },
  { nombre: 'Arreglo 5 rosas', precio: 40, img: 'images/rosas/24.- arreglo 5 rosas S.40 soles .jpg' },
  { nombre: 'Arreglo 5 rosas', precio: 40, img: 'images/rosas/25.- arreglo 5 rosas S.40 soles .jpg' },
  { nombre: 'Arreglo 8 rosas ,girasol,gerberas', precio: 50, img: 'images/rosas/26.- arreglo 8 rosas ,girasol,gerberas S.50 soles.jpg' },
  { nombre: 'Arreglo 5 rosas', precio: 40, img: 'images/rosas/27.-arreglo 5 rosas S.40 soles .jpg' },
  { nombre: 'Arreglo 7 rosas', precio: 45, img: 'images/rosas/28.- arreglo 7 rosas S.45 soles .jpg' },
  { nombre: 'Arreglo 12 rosas lilum', precio: 65, img: 'images/rosas/29.- arreglo 12 rosas lilum S.65 soles .jpg' },
  { nombre: 'Arreglo 5 rosas mas gerbera', precio: 40, img: 'images/rosas/30.-arreglo 5 rosas mas gerbera S.40 soles .jpg' },
  { nombre: 'Arreglo 8 rosas,lilium', precio: 55, img: 'images/rosas/31.- arreglo 8 rosas,lilium S.55 soles .jpg' },
  { nombre: 'Arreglo 8 rosas', precio: 50, img: 'images/rosas/32.-arreglo 8 rosas S.50 soles .jpg' },
  { nombre: 'Arreglo 3 rosas amarrillas', precio: 30, img: 'images/rosas/33.-arreglo 3 rosas amarrillas S.30 soles .jpg' },
  { nombre: 'Arreglo clasico de 9 rosas', precio: 50, img: 'images/rosas/34.-arreglo clasico de 9 rosas S.50 soles .jpg' },
  { nombre: 'Arreglo clasico 9 rosas', precio: 50, img: 'images/rosas/35.- arreglo clasico 9 rosas S.50 soles .jpg' },
  { nombre: 'Arreglo 12 rosas', precio: 60, img: 'images/rosas/36.-arreglo 12 rosas S.60 soles .jpg' },
  { nombre: 'Arreglo de 9 rosas ,gerbera', precio: 55, img: 'images/rosas/37.- arreglo de 9 rosas ,gerbera S.55 soles .jpg' },
  { nombre: 'Arreglo de 5 rosas', precio: 40, img: 'images/rosas/38.-arreglo de 5 rosas S.40 soles .jpg' },
],

  girasoles: [
  {
    nombre: "Box de girasoles",
    precio: 175,
    img: "images/girasoles/1.-box de girasoles S.175 soles  .jpg"
  },
  {
    nombre: "Arreglo de girasoles",
    precio: 40,
    img: "images/girasoles/2.- arreglo de girasoles S.40. soles.jpg"
  },
  {
    nombre: "Ramo de girasoles",
    precio: 17,
    img: "images/girasoles/3.- ramo de girasoles  S.17soles .jpg"
  },
  {
    nombre: "Ramo de 3 girasoles",
    precio: 30,
    img: "images/girasoles/4.-ramo de 3 girasoles S.30 soles .jpg"
  }
],

 tulipanes: [
  {
    nombre: "Arreglo de tulipanes en box",
    precio: 160,
    img: "images/tulipanes/1.-arreglo de tulipanes en box S.160 soles.jpg"
  },
  {
    nombre: "Arreglo de tulipanes y lilium en canasta",
    precio: 175,
    img: "images/tulipanes/2.- arreglo de tulipanes y lilium en canasta S.175 soles.jpg"
  },
  {
    nombre: "Arreglo de tulipanes en canasta primaveral",
    precio: 160,
    img: "images/tulipanes/3.- arreglo de tulipanes en canasta primaveral S.160 soles.jpg"
  },
  {
    nombre: "Arreglo de tulipanes y rosas",
    precio: 200,
    img: "images/tulipanes/4.-arreglo de tulipanes y rosas S.200 soles.jpg"
  }
],

  eternos: [
  {
    nombre: "Arreglo eterno de tulipanes",
    precio: 80,
    img: "images/eternos/arreglo de tulipanes S.80 soles .jpg"
  },
  {
    nombre: "Arreglo eterno de girasoles (tamaño pequeño)",
    precio: 35,
    img: "images/eternos/arreglos en girasoles S.35 y 45 soles.jpeg"
  },
  {
    nombre: "Arreglo eterno de girasoles (tamaño grande)",
    precio: 45,
    img: "images/eternos/arreglos en girasoles S.35 y 45 soles.jpeg"
  }
],

box: [
  { nombre: "Arreglo box negro rosas, lilum", precio: 55, img: "images/box/1.-Arreglo box negro rosas, lilum S.55 soles .png" },
  { nombre: "Arreglo de box blanco rosas ,lilum", precio: 65, img: "images/box/2.-Arreglo de box blanco rosas ,lilum S.65 soles .jpg" },
  { nombre: "Arreglo de carreta rosas, lilium , gerberas", precio: 70, img: "images/box/3.-Arreglo de carreta  rosas, lilium , gerberas S.70 soles.jpg" },
  { nombre: "Arreglo en carreta rosas, lilium, gerberas, bambu", precio: 75, img: "images/box/4.-Arreglo en carreta rosas, lilium, gerberas, bambu S.75 soles .jpg" },
  { nombre: "Arreglo box rosas, lilum, gerberas", precio: 65, img: "images/box/5.-Arreglo box rosas, lilum, gerberas S.65 soles .jpg" },
  { nombre: "Arreglo canasta de rosas lilum, gerbera", precio: 65, img: "images/box/6.-Arreglo canasta de rosas lilum, gerbera S. 65 soles .jpg" },
  { nombre: "Arreglo canasta rosas lilium, gerberas", precio: 65, img: "images/box/7.-Arreglo canasta rosas lilium, gerberas S. 65 soles .jpg" },
  { nombre: "Arreglo carreta rosas lilum, gerberas", precio: 75, img: "images/box/8.-Arreglo carreta rosas lilum, gerberas S.75 soles .jpg" },
  { nombre: "Arreglo box", precio: 70, img: "images/box/9.-Arreglo box 70 S. soles .jpg" },
  { nombre: "Arreglo canasta", precio: 60, img: "images/box/10.-Arreglo canasta S.60 soles.jpg" },
  { nombre: "Box rosas , lilium, gerbera, girasol", precio: 65, img: "images/box/11.-Box rosas , lilium, gerbera, girasol S.65 soles.jpg" },
  { nombre: "Box rosas, girasol, lilium", precio: 65, img: "images/box/12.-Box rosas, girasol, lilium S.65 soles .jpg" },
  { nombre: "Arreglo box", precio: 65, img: "images/box/13.-Arreglo box S.65 soles .jpg" },
  { nombre: "Arreglo box", precio: 65, img: "images/box/14.-Arreglo box S.65 soles .jpg" },
  { nombre: "Arreglo box", precio: 65, img: "images/box/15.-Arreglo box S.65 soles .jpeg" },
  { nombre: "Arreglo box", precio: 65, img: "images/box/16.- Arreglo box S.65 soles .jpg" },
  { nombre: "Arreglo canasta", precio: 65, img: "images/box/17.-Arreglo canasta S.65 soles .jpg" },
  { nombre: "Arreglo box", precio: 80, img: "images/box/18.-Arreglo box S.80 soles.jpg" },
  { nombre: "Arreglo canasta", precio: 65, img: "images/box/19.-Arreglo canasta S.65 soles .jpg" },
  { nombre: "Arreglo canasta", precio: 50, img: "images/box/20.-Arreglo canasta S.50 soles .jpg" },
  { nombre: "Arreglo box", precio: 55, img: "images/box/21.-Arreglo box S.55 soles .jpg" },
  { nombre: "Arreglos canasta", precio: 65, img: "images/box/22.-Arreglos canasta S.65 soles .jpg" },
  { nombre: "Arreglo box", precio: 55, img: "images/box/23.-Arreglo box S.55 soles.jpg" },
  { nombre: "Arreglo box", precio: 55, img: "images/box/24.-Arreglo box S.55 soles .jpg" },
  { nombre: "Arreglo canasta", precio: 65, img: "images/box/25.-Arreglo canasta S.65 soles.jpg" },
  { nombre: "Arreglo box", precio: 50, img: "images/box/26.-Arreglo box S.50 soles.jpg" },
  { nombre: "Arreglo box", precio: 65, img: "images/box/27.-Arreglo box S.65 soles .jpg" }
],
  condolencias: [
  {
    nombre: "Cruz para lápida",
    precio: 65,
    img: "images/condolencias/cruz para lapida S.65 soles.jpg"
  },
  {
    nombre: "Cruz de rosas y gladiolos",
    precio: 90,
    img: "images/condolencias/cruz de rosas y gladiolos S.90 soles.jpg"
  },
  {
    nombre: "Cruz estilo corazón rosas amarillas",
    precio: 90,
    img: "images/condolencias/cruz estilo corazon rosa amarillas S.90 soles.jpg"
  },
  {
    nombre: "Cruz estilo corazón",
    precio: 90,
    img: "images/condolencias/cruz estilo corazon S.90 soles.jpg"
  },
  {
    nombre: "Lágrima para velorio",
    precio: 40,
    img: "images/condolencias/lagrima para velorio S.40 soles .jpg"
  },
  {
    nombre: "Corona de rosas y lilium",
    precio: 240,
    img: "images/condolencias/corona de rosas y lilium S.240.JPG"
  },
  {
    nombre: "Cruz de rosas rojas",
    precio: 85,
    img: "images/condolencias/cruz de rosas rojas S.85 soles.jpg"
  }
],

  ramos: [
  {
    nombre: "Ramo de 12 rosas",
    precio: 60,
    img: "images/ramos/1.-ramo de 12 rosas S.60 soles .jpg"
  },
  {
    nombre: "Ramo de 24 rosas",
    precio: 90,
    img: "images/ramos/2.- ramo de 24 rosas S.90 soles .jpg"
  },
  {
    nombre: "Ramo de 24 rosas",
    precio: 90,
    img: "images/ramos/3.-ramo de 24 rosas S.90 soles.jpg"
  },
  {
    nombre: "Ramo de 24 rosas",
    precio: 90,
    img: "images/ramos/4.-ramo de 24 rosas S.90 soles .jpg"
  },
  {
    nombre: "Ramo de doce rosas con gerberas y peluche",
    precio: 120,
    img: "images/ramos/5.- ramo de doce rosas ,gerberas peluche S.120 soles .jpg"
  },
  {
    nombre: "Ramo de flores exóticas",
    precio: 70,
    img: "images/ramos/6.- ramo de flores exoticas S-70 soles .jpg"
  },
  {
    nombre: "Ramo de 3 rosas",
    precio: 18,
    img: "images/ramos/7.-ramos de 3 rosas S.18 soles .jpg"
  },
  {
    nombre: "Ramo de 3 rosas",
    precio: 18,
    img: "images/ramos/8.-ramo 3 rosas S.18 soles .jpg"
  },
  {
    nombre: "Ramo de 3 rosas",
    precio: 18,
    img: "images/ramos/9.-ramosde 3 rosas S18.soles .jpg"
  },
  {
    nombre: "Ramo de rosas y lilum",
    precio: 55,
    img: "images/ramos/10.-ramo de rosas ,lilum S.55 soles .jpg"
  },
  {
    nombre: "Ramo de lilium (2 varas)",
    precio: 45,
    img: "images/ramos/11.-ramo de lilium 2 varas s.45 soles .jpg"
  },
  {
    nombre: "Ramo de girasol con rosas",
    precio: 45,
    img: "images/ramos/12.-ramo de girasol rosas S.45 soles.jpg"
  },
  {
    nombre: "Ramo de rosas",
    precio: 40,
    img: "images/ramos/13.-ramo de rosas S.40 soles .jpg"
  },
  {
    nombre: "Ramo de rosas",
    precio: 50,
    img: "images/ramos/14.-ramo de rosas s.50 soles .jpg"
  }
],

};

function renderCategoriasArreglos() {
  const cont = document.getElementById("arreglos-categorias");
  if (!cont) return;

  cont.innerHTML = CATEGORIAS_ARREGLOS.map(cat => `
    <div class="producto">
      <img src="${cat.img}" alt="${cat.nombre}">
      <div class="info">
        <h3>${cat.nombre}</h3>
        <button onclick="window.location.href='categoria.html?id=${cat.id}'">Ver</button>
      </div>
    </div>
  `).join("");
}

function initCategoriaPage() {
  const params = new URLSearchParams(window.location.search);
  const catId = params.get("id");

  const h2 = document.getElementById("seleccion");
  const grid = document.getElementById("productos-grid");
  if (!grid) return;

  const cat = CATEGORIAS_ARREGLOS.find(c => c.id === catId);

  if (!cat) {
    if (h2) h2.textContent = "Categoría no encontrada";
    grid.innerHTML = `<p>No existe esta categoría.</p>`;
    return;
  }

  if (h2) h2.textContent = `Arreglos relacionados a: ${cat.nombre}`;

  const items = PRODUCTOS[catId] || [];
  if (items.length === 0) {
    grid.innerHTML = `<p>Por ahora no hay productos en esta categoría.</p>`;
    return;
  }

  grid.innerHTML = items.map(p => `
    <div class="producto">
      <img
        src="${p.img}"
        alt="${p.nombre}"
        style="cursor: zoom-in"
        onclick="openLightbox('${p.img}', '${p.nombre.replace(/'/g, "\\'")}')"
      >
      <div class="info">
        <h3>${p.nombre}</h3>
        <p class="precio">S/ ${Number(p.precio).toFixed(2)}</p>
        <button onclick="pedirWhatsApp('${p.nombre.replace(/'/g, "\\'")}')">Pedir por WhatsApp</button>
      </div>
    </div>
  `).join("");
}



function pedirWhatsApp(producto) {
  const numero = "51934042514"; // tu WhatsApp
  const msg = `Hola! Quiero pedir: ${producto} (Florería El Paraíso)`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function openLightbox(src, altText = "") {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!box || !img) return;

  img.src = src;
  img.alt = altText;

  box.classList.add("open");
  document.body.classList.add("lightbox-open");
}

function closeLightbox(e) {
  if (e.target.id === "lightbox") {
    document.getElementById("lightbox").classList.remove("open");
    document.body.classList.remove("lightbox-open");
  }
}






