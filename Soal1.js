// Function untuk menentukan kategori usia
function tentukanKategori(usia) {
  if (usia >= 0 && usia <= 12) {
    return "Anak-anak";
  } else if (usia >= 13 && usia <= 17) {
    return "Remaja";
  } else if (usia >= 18 && usia <= 59) {
    return "Dewasa";
  } else if (usia >= 60) {
    return "Lansia";
  } else {
    return "Usia tidak valid";
  }
}

// Data input usia (bisa diubah sesuai kebutuhan)
let usiaOrang = [4, 15, 30, 65, 10, 17, 45, 75, 13, 22];

// Inisialisasi jumlah per kategori
let jumlahKategori = {
  "Anak-anak": 0,
  "Remaja": 0,
  "Dewasa": 0,
  "Lansia": 0
};

// Loop untuk mengklasifikasikan setiap usia
for (let i = 0; i < usiaOrang.length; i++) {
  let kategori = tentukanKategori(usiaOrang[i]);
  if (kategori in jumlahKategori) {
    jumlahKategori[kategori]++;
  }
}

// Menampilkan hasil
console.log("Jumlah orang per kategori usia:");
for (let kategori in jumlahKategori) {
  console.log(`${kategori}: ${jumlahKategori[kategori]}`);
}
