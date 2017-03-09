// JavaScript File
/* global $ */

// ODCZYT ZAWARTOSCI

/* bedziemy odczytywac zawartosc elementu i wyprowadzac ja na ekran  przy
 pomocy okienka typu "alert" */

// plik: /JQ_L03_01_odczytZawartosci/script.js

$(document).ready(function(){
    //alert($("p").html());
    /* zostaje zwrocona zawartosc linijki HTML z pierwszym akapitem, czyli:
       "<a href="#" class="btn">Zobacz więcej &raquo;</a>" */
       
    // tak jak powyzej, ale wyswietlamy caly tekst akapitu zamiast html
    // ponizej wybralismy ostatni akapit
    alert($("p:last").text());
    
    /* zwracamy zawartosc 3-go paragrafu (liczac od 0)
       to samo mozemy stosowac do "a" i innych elementow jak "ul" */
    //alert($("p:eq(3)").html());
})

/* UWAGA: nalezy pamietac, ze wyswietlany jest HTML, czyli tekst ale 
   takze znaczniki. Jesli chcemy wyswietlic wylacznie tekst bez
   znacznikow, musimy uzyc ".text" zamiast ".html" */
   
/* WAZNE: Jesli stosujemy ".html" to np. przy <p> zwracana jest zawartosc 
   pierwszego akapitu, jesli stosujemy ".tekst", wyswietlane sa zawartosci
   tekstow wszystkich akapitow */