// JavaScript File
/* global $ */

// jQueryUI - EFEKTY Z BIBLIOTEKI

// plik: /JQ_L09_07_jQUI_efektyBibl/script.js


/* Ze strony jqueryui.com zajmiemy metodami z grupy "Effects". 
   Na stronie wybieramy "Efect" i testujemy. Z listy wybieramy typ animacji
   i klikamy na przycisk "Run". Przechodzimy donaszej sttrony. Pod obrazkiem
   mamy przycisk "Uruchom animację". Po kliknieciu na przycisk uruchomimy 
   animację obrazka */
   
// przycisk w html ma class="btn" ponieważ jest wiele "btn" odwołamy się 
// do pierwszego jego wystąpienia. Obrazek animowany ma id="banner"

$(document).ready(function(){
    $(".btn:first").click(function(){
//        $("#banner").hide("blind"); // w nawiasie Efect z jQueryUI
        //"blind" obrazek ukrywa się zwijając się do góry
        
//        $("#banner").hide("explode", 1000);
        // "explode" - obrazek znika eksplodując na prostokąty
        // po przecinku czas w ms
        
        // efekty Effect będą działały także z innymi metodami np.
        $("#banner").toggle("explode", 500);
        // po pierwszym kliknieciu eksplozja, po drugim pojawienie-implozja
    });
});


//UWAGA: wydrukować html - początek z "btn"