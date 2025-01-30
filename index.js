var tombol = document.getElementById("submit");

tombol.addEventListener("click", calculate);

function calculate(){
    var BB = parseFloat(document.getElementById("BB").value);
    var Usia = parseFloat(document.getElementById("Usia").value);
    var Tinggi = parseFloat(document.getElementById("Tinggi").value);

    Tinggi = Tinggi / 100;
    var BMI= BB / (Tinggi * Tinggi);

    if (BMI >= 30.0) {
        hasil = "Kegemukan"
    } else if (BMI >= 25.0){
        hasil = "Kelebihan berat badan"
    } else if (BMI >= 18.5){
        hasil = "ideal"
    } else {
        hasil = "Kekurangan berat badan"
    }

    document.getElementById('BMI').textContent = BMI;
    document.getElementById('diagnosa').textContent = hasil;
}
