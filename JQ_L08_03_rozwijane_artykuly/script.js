// JavaScript File

/* global $ */

// ODKRYWANIE ARTYKULOW

// plik: /JQ_L08_03_rozwijane_artykuly/script.js

/* Poprzednio w L08_01 rozwijalismy zawartosc akapitu po klinieciu na naglowki.
   Tera chcemy na poczatek miec ukryte teksty akapitow, nastepnie stworzymy 
   odnosniki "Rozwiń" i po kliknieciu na odnosniki bedzie sie rozwijal tekst 
   Kazdy artykul sklada sie z dwoch klas "class=wstep" i "classrozwiniecie". 
   Chcemy aby na poczatku wstep byl widoczny, a rozwiniecie bylo ukryte
   */

$(document).ready(function(){
    $(".rozwiniecie").hide();   //chowamy wszytkie rozwiniecia
    $(".rozwiniecie").after("<h4 class='pokaz'>"+"Rozwiń"+ "</h4>"); 
    //dodalismy odnosniki i przypisalismy im klase
    //Teraz w css musimy sformatowac klase "pokaz" w dwoch wersjach:
    // normalnej i "hover"
    
    // teraz chcemy rowijac akapity ktore sa przed odnosnikami, 
    // bo wczesniej umiescilismy je za za pomoca "after"
    $(".pokaz").click(function(){
        $(this).prev("p").toggle(1000); // zwijamy i rozwijamy akapit przed
        // jednak chcemy aby po rowinieciu slowwo "Rozwiń" zmienialo sie na "Zwiń"
        // a po zwinieciu znowu przechodzilo na "Rozwiń"
        if ($(this).text() == "Rozwiń") {
            $(this).text("Zwiń");   //zamieniamy tekst na "Zwiń"
        }
        else {
            $(this).text("Rozwiń"); //zamieniemay tekst na "Rozwiń"
        }
    });
});


// UWAGA: wydrukowac koncowke pliku css z formatami klasy "pokaz"