// JavaScript File
/* global $ */

// ANIMACJE -  PARAMETRY

// plik: /JQ_L07_02_parametry_animacji/script.js


/* animacje z poprzedniej lekcji, czyli: hide, show, toggle mogą przyjmowac
   parametry nop długosc animacji */

$(document).ready(function(){
    $("#hide").click(function(){
//        $("#lista").hide("slow"); //"slow"-wolna, "fast"-szybka animacja
        $("#lista").hide(1000);      //czas w ms czyli tutaj 1000ms to 1 sek
        
        //mozna jako drugi parametr dodac jakąś funkcję
        $("#lista").hide(2000, function(){
            alert("Animacja zakończona")    //po animacji pokaze sie okienko
        });
    });
});


// UWAGA: tego samego typu parametry mozna dodac takze do "show" lub "toggle"

//UWAGA: wydrukowac fragment html z przyciskami