const readline = require('readline');

// Buat interface input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi operasi
function tambah(a, b) { return a + b; }
function kurang(a, b) { return a - b; }
function bagi(a, b) { return b !== 0 ? a / b : "Tidak bisa dibagi dengan nol!"; }
function kali(a, b) { return a * b; }

console.log("Pilih Operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Pembagian");
console.log("4. Perkalian");

// Fungsi utama untuk kalkulator
rl.question("Masukkan pilihan operasi (1-4): ", (pilihan) => {
  rl.question("Masukkan angka pertama: ", (input1) => {
    rl.question("Masukkan angka kedua: ", (input2) => {
      const angka1 = parseFloat(input1);
      const angka2 = parseFloat(input2);

      let hasil, operasi;

      switch (pilihan) {
        case "1":
          hasil = tambah(angka1, angka2);
          operasi = "Penjumlahan";
          break;
        case "2":
          hasil = kurang(angka1, angka2);
          operasi = "Pengurangan";
          break;
        case "3":
          hasil = bagi(angka1, angka2);
          operasi = "Pembagian";
          break;
        case "4":
          hasil = kali(angka1, angka2);
          operasi = "Perkalian";
          break;
        default:
          console.log("Pilihan tidak valid.");
          rl.close();
          return;
      }

      console.log(`\nOperasi : ${operasi}`);
      console.log(`Angka 1 : ${angka1}`);
      console.log(`Angka 2 : ${angka2}`);
      console.log(`Hasil   : ${hasil}`);
      rl.close();
    });
  });
});
