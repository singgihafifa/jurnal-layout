async function simpanKeGitHub() {
  const judul = document.getElementById("judul").value;
  const konten = document.getElementById("isi").value;

  const response = await fetch(
    "https://api.github.com/repos/singgihafifa/jurnal-layout/actions/workflows/save-naskah.yml/dispatches",
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ref: "main",
        inputs: { judul, konten },
      }),
    }
  );

  if (response.ok) {
    alert("Naskah berhasil disimpan! Cek GitHub Actions dan folder naskah/");
  } else {
    const err = await response.json();
    alert("Gagal: " + response.status + "\n" + JSON.stringify(err));
  }
}
