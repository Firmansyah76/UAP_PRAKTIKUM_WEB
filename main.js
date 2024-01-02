const dataBarang = [
    { kode: '001', nama: 'Barang A', harga: 10000 },
    { kode: '002', nama: 'Barang B', harga: 20000 },
    { kode: '003', nama: 'Barang C', harga: 30000 }
];

function getHargaByKode(kodeBarang) {
    const barang = dataBarang.find(item => item.kode === kodeBarang);
    return barang ? barang.harga : 0;
}

function showTotalBelanja(totalHarga) {
    alert("Total Belanja: " + totalHarga);
}

function getInputValueById(id) {
    return document.getElementById(id).value;
}

function kirim() {
    const inputKode = getInputValueById("input_kode");
    const inputJumlah = getInputValueById("input_jumlah");

    const hargaBarang = getHargaByKode(inputKode);
    const totalHarga = parseInt(inputJumlah) * hargaBarang;

    showTotalBelanja(totalHarga);

    let uang = prompt("Masukkan uang :");

    if (!uang || isNaN(parseInt(uang))) {
        alert("Input uang tidak valid dan dibatalkan.");
        return;
    }

    uang = parseInt(uang);
    const kembalian = uang - totalHarga;

    if (kembalian >= 0) {
        alert(
            "Total Belanja: " + totalHarga +
            "\nUang yang Diberikan: " + uang +
            "\nKembalian: " + kembalian
        );
    } else {
        alert("Uang yang diberikan kurang ");
    }
}
