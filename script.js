
const brands = [
  {
    name: "Coca-Cola",
    status: "boykot",
    category: "Gıda",
    details: "İsrail destekçisi olduğu için boykot ediliyor.",
    alternatives: ["Pepsi", "Cola Turka"]
  },
  {
    name: "Nestlé",
    status: "boykot",
    category: "Gıda",
    details: "Filistin'e karşı tutumu nedeniyle boykot listesinde.",
    alternatives: ["Eti", "Ülker"]
  },
  {
    name: "Eyüp Sabri Tuncer",
    status: "destekleniyor",
    category: "Kozmetik",
    details: "Hiçbir boykot listesinde yer almıyor.",
    alternatives: []
  }
];

function renderBrands() {
  const list = document.getElementById("brand-list");
  list.innerHTML = "";
  brands.forEach((b, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${b.name} ${b.status === "boykot" ? "❌" : "✅"}`;
    li.onclick = () => openModal(b);
    list.appendChild(li);
  });
}

function openModal(brand) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  if (!brand.details && (!brand.alternatives || brand.alternatives.length === 0)) return;

  modalContent.innerHTML = `
    <h2>${brand.name}</h2>
    <p>${brand.details || "Detay bulunamadı."}</p>
    ${
      brand.alternatives && brand.alternatives.length
        ? `<p><strong>Alternatifler:</strong> ${brand.alternatives.join(", ")}</p>`
        : ""
    }
  `;
  modal.style.display = "flex";
}

document.getElementById("close-modal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

renderBrands();
