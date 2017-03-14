// JavaScript File
/* global $ */

// SELEKTORY W FORMULARZACH

// plik: /JQ_L05_01_Formularz_selektory/script.js

$(document).ready(function(){
    //najpierw odwolujemy sie do pol "input" formularzy "form"
    $("form :input").css("border", "2px solid #777");
    // powstaly ramki wokol pola typu "input" formularza
    
    //a teraz chcemy dodac ramki czerwone do przyciskow "submit"
    $("form :submit").css("border", "2px solid #FF0000");
    
    //teraz chcemy dodac niebieskie ramki do pol tekstowych formularza
    $("form :text").css("border", "2px solid #0000CD");
    
    //teraz dodajemy zielone ramki wokol naglowkow formularz
    $("label").css("border", "2px solid lime");
    
    //teraz chcemy dodac wyswietlanie okienka po kliknieciu
    $("#biurowe").click(function(){
        alert("Kurs jQuery");
    })
})
