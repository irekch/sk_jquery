// JavaScript File
/* global $ */

// ZDARZENIA - PRZYKLADY

// plik: /JQ_L04_04_zdarzenia_przyklady/script.js

$(document).ready(function(){
    // zdarzenie "click" - dziala po kliknieciu
    $("#opis1").bind("click", function(){
        alert("Kurs jQuery");
    });
    
    // zdarzenie "mouseover" - dziala po najechaniu kursorem
    $("#opis2").bind("mouseover", function(){
        alert("Kurs jQuery- mouseover");
    });

    // zdarzenie "mouseout" - dziala po najechaniu kursorem i odjechaniu
    $("img").bind("mouseout", function(){
        alert("Kurs jQuery- mouseout");
    });
    
    // zdarzenie "mouseup" - dziala po kliknieciu, przytrzymaniu i puszczeniu
    // dowolnego przycisku myszy
    $("#opis3").bind("mouseup", function(){
        alert("Kurs jQuery- mouseover");
    });
    
    // mozna okreslic zakres zdarzenia dla calego dokumentu
    $(document).bind("click", function(){
        alert("Kurs jQuery- caly dokumant");
    });
    
    // zdarzenie po nacisnieciu dowolnego klawisza
//    $(document).bind("keypress", function(){
//        alert("Kurs jQuery- caly dokumant, dowolny klawisz");
//    });
    
    // zdarzenie po nacisnieciu dowolnego klawisza i puszczeniu
    $(document).bind("keyup", function(){
        alert("Kurs jQuery- caly dokumant, dowolny klawisz/puszczenie");
    });
    
    // zdarzenie podczas scrollowania
    $(document).bind("scroll", function(){
        alert("Kurs jQuery- caly dokumant, scroll");
    });
})