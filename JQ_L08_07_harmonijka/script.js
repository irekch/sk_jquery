// JavaScript File
/* global $ */

// HARMONIJKA

// plik: /JQ_L08_07_harmonijka/script.js


/* W pliku html mamy kilka akapitow. Nad kazdym akapitem zostal umieszczony 
   naglowek. Naglowki sa elementem aktywnym, czyli po kliknieciu na naglowek
   bedzie sie rozwijal i zwijal akapit. Chcemy osiagnac taki efekt, aby po
   kliknieciu rozwijal sie ten konkretny akapit, a inny sie rozwijal,
   czyli jednoczesnie jest rozwiniety tylko jeden akapit.
*/


$(document).ready(function(){
    $("#harm p:not(:first)").hide();
    //wszystkie akapity z wyjatkiem pierwszego sa zwiniete
    
    /*UWAGA: jesli chcemy na poczatek otwarty miec inny akapit niz "first"
      musimy najpierw w css zrobic "display: none;" dla "#harm p" linia 242
     (to jest  teraz wylaczone jako komentarz), a nastepnie wpisac alternatywnie */
     
//    $("#harm p:eq(3)").show();
    //w tym wypadku 4-ty akapit bedzie odkryty
    
    $("#harm h2").click(function(){
        $(this).next("p").slideToggle().siblings("p:visible").slideUp(500);
        // .slideToggle otwiera nasz klikniety akapit
        // .slideUp zwija inne siostrzane akapity
    });
})