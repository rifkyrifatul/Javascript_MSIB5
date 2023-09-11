
produk.forEach(prdk => {
    const newOption = document.createElement('option');
    const optionText = document.createTextNode(prdk);
    newOption.appendChild(optionText);
    newOption.setAttribute('value',prdk);
    barang.appendChild(newOption);
    
    
});


function databarang() {
    let form = document.getElementById('frm');
    let nama = form.nama.value;
    let produk = form.produk.value;
    let jumlah = form.jumlah.value;
    let harga = 0;
    let NamaBarang = "";
    let proses = "";

        switch(produk){
            case "TV" : harga = 2000000; break;
            case "AC" : harga = 3000000; break;
            case "Kulkas" : harga = 4000000; break;
            default : harga = 0;
        }


        let hargakotor = harga * jumlah;


        let diskon = 0;
        
        if (produk == "Kulkas" && jumlah >= 3){
            diskon = 30/100 * hargakotor
        } else if (produk == "AC" && jumlah >= 3){
            diskon = 20/100 * hargakotor
        } else {
            diskon = 10/100 * hargakotor
        }


        let ppn = 10/100 * ( hargakotor - diskon)

    
        proses = `Input Data
        \n Nama Pembeli : ${nama}
        \n Nama Barang : ${produk}
        \n Harga : ${harga}
        \n Jumlah Barang : ${jumlah}
        \n Harga total : ${hargakotor}
        \n Diskon : ${diskon}
        \n Pajak : ${ppn} 

    `;
        
    alert(proses);
}
