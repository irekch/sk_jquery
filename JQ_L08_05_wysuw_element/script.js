// JavaScript File
/* global $ */

// WWYSUWNIE ELEMENTOW - WYSUWANE OKIENKO

// plik: /JQ_L08_05_wysuw_element/script.js


/* stworzymy wysuwane okieno. Nasze okienko to element typu div zawierajace
   w srodku 2 elementy: okieno po lewej i przycisk po prawej. Glowne okienko 
   w html ma id="slider"
   1. najpierw zmieniamy pozycje okienka w css (patrz #slider na koncu pliku)
      tak aby okienko bylo schowane pod brzegiem ekranu, a wystawalo tylko 
      logo facebook
   2. teraz dodamy obsluge zdarzenia 'hover' tak aby po kliknieciu na logo
      wysunelo sie cale okienko, czyli wartosc 'left' z css bedzie rowne 0.
      Jesli odsuniemy kursor na bok, okienko ponownie sie schowa
*/

$(document).ready(function(){
    $("#slider").hover(function(){
        $(this).animate({left: "0px"});  //rozwijamy okienko w prawo
        //po najechaniu kursorem na logo Facebook, okienko sie wysuwa
    },
    function(){
        $(this).animate({left: "-292px"});
        //po odjechaniu kursorem na bok okienko sie chowa
    }
    );
})


// UWAGA: wydrukowac css z #wysun i #slider, oraz html z div="slider"