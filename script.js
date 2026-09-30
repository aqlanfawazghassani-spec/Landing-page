// Animasi Loading Awal Halaman
window.addEventListener('load', function() {
  setTimeout(function() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader-hidden');
  }, 2500);
});

// Fungsi untuk membuka Modal Pemesanan dari tombol produk
function bukaModal(namaBunga, harga) {
  document.getElementById('namaBunga').value = namaBunga;
  document.getElementById('hargaBunga').value = harga;
  
  var myModal = new bootstrap.Modal(document.getElementById('pesanModal'));
  myModal.show();
}

// Fungsi untuk membuat teks pemesanan dan mengarahkannya ke WhatsApp
function kirimKeWA() {
  const bunga = document.getElementById('namaBunga').value;
  const harga = document.getElementById('hargaBunga').value;
  const nama = document.getElementById('namaPembeli').value;
  const alamat = document.getElementById('alamatPembeli').value;

  const hargaRupiah = new Intl.NumberFormat('id-ID').format(harga);

  if(nama === "") {
    alert("Tolong isi nama kamu dulu ya agar bisa diproses!");
    return;
  }

  const pesan = `Halo Gurita House! 🌸\n\nSaya mau pesan bunga:\n*Produk:* ${bunga}\n*Harga:* Rp ${hargaRupiah}\n\n*Data Pengiriman:*\nNama: ${nama}\nAlamat: ${alamat}\n\nApakah stoknya tersedia? Boleh minta detail pembayarannya?`;

  const nomorWA = "6289561905657"; 
  const pesanEncoded = encodeURIComponent(pesan);
  const linkWA = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;

  window.open(linkWA, '_blank');
}