// JavaScript File
/* global $ */

// ZAKLADKI - TRESC PODZIELONA NA KARTY

// plik: /JQ_L08_08_zakladki/script.js

/* Tresc dokumentu bedzie podzielona na zakladki: "Opis Kursu", "Spis treasci"
   "Fragment". Do kazdej z zakladek przypisany jest tekst. Wszytkie elementy div
   zwiazane z zakladkami maja te sama klase class="zawartosc", natomiast
   indywidualne id: "opis" "spistresci" "fragment". jednoczesnie linki zakladek 
   maja te same nazwy titel: "opis" "spistresci" "fragment"
   1. najpierw w css ukrywamy zawartosc za wyjatkiem opisu
      czyli ukrywamy #spistresci, #fragment (linijka 262)
   2. dodajemy skrypt
*/

$(document).ready(function(){
    $("a.zakladki").click(function(){
        
        $(".aktywna").removeClass("aktywna");
        //najpierw usuwamy podswietlenie z aktywnych zakladek
        //nastepnie dodajemy do kliknietej zakladki klase "aktywna", czyli
        //napis na zakladce podswietlony na bialo
        $(this).addClass("aktywna");
        
     
        $(".zawartosc").hide();
        // najpierw po kliknieciu ukrywamy zawartosc i zaraz otwieramy kliknieta
        // w kolejnej linijce kodu     
        
        var otwartaZakladka = $(this).attr("title");
        //wartosc odnosnika zostala przypisana do zmiennej
        
        $("#"+otwartaZakladka).show();
        // wykorzystalismy tutaj fakt, ze titel i id maja te sama nazwe
    });
});


//UWAGA: Wydrukowac html i css