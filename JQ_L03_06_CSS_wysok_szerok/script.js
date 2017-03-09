// JavaScript File
/* global $ */

// CSS - EDYCJA WYSOKOSCI I SZEROKOSCI

// plik: /JQ_L03_06_CSS_wysok_szerok/script.js


/* bedziemy zmieniac wysokosc i szerokosc elemetow, tytaj naszego zdjecia
   najpierw przez okienko "alert" wyswietlimy rozmiar zdjecia */

$(document).ready(function(){
    // w kolejnych okienkach wyswietlamy rozmiar zdjecia w pixelach
    alert($("img").height());   //wyswietla sie 145
    alert($("img").width());    //wyswietla sie 440
    
    // zmieniamy wysokosc, lub szerokosc.
    // UWAGA: zmiana jest proporcjonalna
    $("img").width(300);        //w nawiasie podajemy pozadana szerokosc
//    $("img").height(200);     //w nawiasie podajemy pozadana wysokosc
})