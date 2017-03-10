// JavaScript File
/* global $ */

// FUNKCJA BIND

// plik: /JQ_L04_03_funkcja BIND/script.js

$(document).ready(function(){
/*    
    // dla porownannia uzywamy funkcji click
    $("p").click(function(){
        alert("Kurs jQuery");
    });
*/
    
    // a teraz uzyjemy funkcji "bind"
    $("#opis1").bind("click", function(){
        alert("Kurs jQuery - przez bind");
    });

    // zaleta "bind" jest to, ze mozna kombinowac kilka funckji
    $("#opis2").bind("mouseenter mouseleave", function(){
        $(this).toggleClass("highlight");
    });
    //EFEKT: po najechaniu kursorem tekst jest podswietlany, porownaj ponizej
});

//-------------------------------------------------------
//UWAGA - bez uzycia funckji bing musiellibysmy ostatni przyklad rozpisac
// dlugo jak ponizej, efekt jest ten sa,

$(document).ready(function(){
    $("#opis3").mouseenter(function(){  //wlacza funckcje gdy najezdzamy myszka
        $(this).addClass("highlight");  // i... klasa dziala na element
    })
    .mouseleave(function(){                 //odsuwamy kursor i...
        $(this).removeClass("highlight");   //klasa zostaje usunieta
    });
});