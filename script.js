let total = 0;

function buy(nama,harga){

    let li = document.createElement("li");
    li.innerHTML = nama + " - Rp " + harga.toLocaleString("id-ID");

    document.getElementById("cart").appendChild(li);

    total += harga;

    document.getElementById("total").innerHTML =
        total.toLocaleString("id-ID");

    alert("Berhasil ditambahkan ke keranjang.");
}