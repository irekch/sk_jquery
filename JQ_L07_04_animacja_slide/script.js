// JavaScript File
/* global $ */

// ANIMACJA TYPU SLIDE

// plik: /JQ_L07_04_animacja_slide/script.js

/* Pod obrazkiem sa 3 przyciski: Ukyj, Pokaż i Przełacz. Po kliknieciu
 na "Ukryj" obrazek będzie się zwijał, na "Pokaż" rozwijał i "Przełącz"
 raz zwijał, raz rozwijal. Odwolujemy się do id=hide id=show id=toggle
 id=banner */

$(document).ready(function(){
    //zwijamy obrazek
    $("#hide").click(function(){
        $("#banner").slideUp(1000);     //obrazek zwijany do gory, czas w ms
    });
    
    //rozwijamy obrazek
    $("#show").click(function(){
       $("#banner").slideDown(1000);    // obrazek rozwijany w dól, czas w ms
    });
    
    //zwijanie i rozwijanie obrazka
    $("#toogle").click(function(){
        $("#banner").slideToggle(1000);     //zwijanie i rozwijanie, czas w ms
    });
})