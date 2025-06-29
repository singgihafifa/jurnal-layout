function generateLayout() {
  const judul = document.getElementById("judul").value;
  const penulis = document.getElementById("penulis").value;
  const email = document.getElementById("email").value;
  const abstrak = document.getElementById("abstrak").value;
  const katakunci = document.getElementById("katakunci").value;
  const isi = document.getElementById("isi").value;
  const rumus = document.getElementById("rumus").value;
  const gambar = document.getElementById("gambar").value;
  const tabel = document.getElementById("tabel").value;
  const pustaka = document.getElementById("pustaka").value;

  const isiSplit = isi.split("===").map((section, i) =>
    `<h2>Bagian ${i + 1}</h2><p>${section.trim().replace(/\n/g, "<br>")}</p>`).join("");

  const rumusSplit = rumus.split("===").map(r =>
    `<p>\[ ${r.trim()} \]</p>`).join("");

  const gambarSplit = gambar.split(",").map((src, i) =>
    `<img src="${src.trim()}" alt="Gambar ${i + 1}">`).join("");

  const outputHTML = \`
    <div class="judul">\${judul}</div>
    <div class="penulis">\${penulis}<br><i>\${email}</i></div>
    <div class="abstrak"><h2>Abstrak</h2><p>\${abstrak.replace(/\n/g, "<br>")}</p></div>
    <div><strong>Kata Kunci:</strong> \${katakunci}</div>
    <div class="isi">\${isiSplit}</div>
    <div class="rumus"><h2>Rumus</h2>\${rumusSplit}</div>
    <div>\${gambarSplit}</div>
    <div class="tabel"><h2>Tabel</h2>\${tabel}</div>
    <div class="pustaka"><h2>Daftar Pustaka</h2><p>\${pustaka.replace(/\n/g, "<br>")}</p></div>
  \`;

  document.getElementById("output").innerHTML = outputHTML;
  if (window.MathJax) MathJax.typesetPromise();
}
