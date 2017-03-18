// JavaScript File
/* global $ */

// ANIMACJE WSTEP

// plik: /JQ_L07_01_animacje_wstep/script.js

/* pod tabelą mamy 3 przyciski: Ukryj, Pokaż, Przełącz. Pierwszy będzie ukrywał 
   tabelę, drugi pokazywał ją, a trzeci przełączał czyli skakał miedzy tabelą
   ukrytą i odsłoniętą. Kazdy przycisk posiada unikalne id w pliku HTML:
   "hide", "show", "toogle" */

$(document).ready(function(){
    
    //po kliknieciu na "Ukryj" tabela znika
    $("#hide").click(function(){
       $("#lista").hide();
    });
    
    //po kliknieciu na "Pokaż" tabela ktora zniknęła po "hide" pojawia się
    $("#show").click(function(){
       $("#lista").show();
    });
    
    //metoda "toggle" łaczy hide i show. po kliknięciu na przycisk "Przełącz"
    //tabela znika a po ponownym kliknieciu ponownie sie pojawia
    $("#toogle").click(function(){
       $("#lista").toggle();
    });
});


//UWAGA: wydrukowac fagment html z przyciskami