
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const searchInput = document.getElementById('searchInput');
    const edilen = document.getElementById('boykotEdilenler');
    const edilmeyen = document.getElementById('boykotEdilmeyenler');

    function renderLists(filter = "") {
      edilen.innerHTML = "";
      edilmeyen.innerHTML = "";
      data.boykot_edilen.forEach(m => {
        if (m.toLowerCase().includes(filter.toLowerCase())) {
          edilen.innerHTML += `<li>${m}</li>`;
        }
      });
      data.boykot_edilmeyen.forEach(m => {
        if (m.toLowerCase().includes(filter.toLowerCase())) {
          edilmeyen.innerHTML += `<li>${m}</li>`;
        }
      });
    }

    searchInput.addEventListener('input', () => {
      renderLists(searchInput.value);
    });

    renderLists();
  });
