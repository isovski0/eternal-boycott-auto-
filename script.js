
const data = [
  {
    name: "Coca-Cola",
    category: "Gıda",
    status: "boykot",
    reason: "İsrail destekçisi",
    alternatives: ["Dimes", "Pepsi"]
  },
  {
    name: "Nestlé",
    category: "Gıda",
    status: "boykot",
    reason: "Sömürü politikaları",
    alternatives: ["Torku", "Eti"]
  },
  {
    name: "Eyüp Sabri Tuncer",
    category: "Kozmetik",
    status: "destekleniyor",
    reason: "Boykot dışı listelenmiş",
    alternatives: []
  }
];

const list = document.getElementById("brand-list");
const search = document.getElementById("search");
const filters = document.querySelectorAll("#filters button");
let selectedCat = "Hepsi";

function render() {
  list.innerHTML = "";
  data.forEach(brand => {
    if (
      (selectedCat === "Hepsi" || brand.category === selectedCat) &&
      brand.name.toLowerCase().includes(search.value.toLowerCase())
    ) {
      const li = document.createElement("li");
      li.textContent = `${brand.name} ${brand.status === "boykot" ? "❌" : "✅"}`;
      li.onclick = () => showModal(brand);
      list.appendChild(li);
    }
  });
}

filters.forEach(btn => {
  btn.onclick = () => {
    selectedCat = btn.dataset.cat;
    render();
  };
});
search.oninput = render;

function showModal(brand) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <h2>${brand.name}</h2>
    <p><strong>Durum:</strong> ${brand.status === "boykot" ? "Boykot Ediliyor" : "Boykot Edilmiyor"}</p>
    <p><strong>Gerekçe:</strong> ${brand.reason}</p>
    ${
      brand.alternatives.length
        ? `<p><strong>Alternatifler:</strong> ${brand.alternatives.join(", ")}</p>`
        : ""
    }
  `;
  modal.classList.remove("hidden");
}
document.getElementById("modalClose").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

render();
