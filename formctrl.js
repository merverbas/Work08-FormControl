const button = document.querySelectorAll("button")[0];
const adInput = document.getElementById("ad");
const soyadInput  = document.getElementById("soyad");
const kullaniciInput = document.getElementById("kullaniciadi");
const mailInput = document.getElementById("mail");
const passInput = document.getElementById("pass");
const passInput2 = document.getElementById("pass-try");
var ad ="";
var soyad = ""; 


adInput.addEventListener("keyup" , function(){

    ad = adInput.value;
});

soyadInput.addEventListener("keyup" , function(){

    soyad = soyadInput.value;
    kullaniciInput.value = ("@"+ad+soyad).toLowerCase();
}); 

button.addEventListener("click" , function(){

    if(passInput.value === passInput2.value && passInput.value.length >= 8 ){
       wel.style.display = "block";
       war.style.display = "none";

    }

    else{
        wel.style.display ="none";
        war.style.display = "block";
    }
});

