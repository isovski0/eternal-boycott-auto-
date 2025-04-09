let data;
fetch('data.json')
  .then(res => res.json())
  .then(json => {
    data = json;
    renderBrands();
  });
const brandList = document.getElementById('brandList');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('#categoryFilters button');
let selectedCategory = null;
searchInput.addEventListener('input', renderBrands);
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedCategory = btn.dataset.category;
    renderBrands();
  });
});
function renderBrands() {
  brandList.innerHTML = '';
  data.brands.forEach(brand => {
    if (
      (!selectedCategory || brand.category === selectedCategory) &&
      brand.name.toLowerCase().includes(searchInput.value.toLowerCase())
    ) {
      const li = document.createElement('li');
      li.textContent = brand.name + (brand.boycott ? ' ❌' : ' ✅');
      li.addEventListener('click', () => openModal(brand));
      brandList.appendChild(li);
    }
  });
}
function openModal(brand) {
  document.getElementById('modalTitle').textContent = brand.name;
  document.getElementById('modalReason').textContent = "Neden: " + brand.reason;
  document.getElementById('modalSources').textContent = "Kaynak: " + brand.sources.join(', ');
  document.getElementById('modalAlternatives').textContent = "Alternatif: " + (brand.alternatives.join(', ') || 'Yok');
  document.getElementById('modal').classList.remove('hidden');
}
document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});
