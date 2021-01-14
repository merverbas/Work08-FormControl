const button = document.querySelectorAll("button")[0];
const adInput = document.getElementById("ad");
const soyadInput  = document.getElementById("soyad");
const kullaniciInput = document.getElementById("kullaniciadi");
const mailInput = document.getElementById("mail");
const passInput = document.getElementById("pass");
const passInput2 = document.getElementById("pass-try");
document.getElementById("wel").style.display = "none";
document.getElementById("war").style.display = "none";

adInput.addEventListener("keyup" , function(){

    var ad = adInput.value;
    kullaniciInput.value = ("@"+ad).toLowerCase();
});

soyadInput.addEventListener("keyup" , function(){

    var soyad = soyadInput.value;
    kullaniciInput.value = (kullaniciInput.value+soyad).toLowerCase();
}); 

button.addEventListener("click" , function(){

    if(passInput.value !== passInput2.value && passInput.value.length <=8 && passInput2.value.length <= 8){
       war.style.display = "";
    }

    else{
        wel.style.display = "";
    }
});

