// JavaScript File
/* global $ */

// ZDARZENIE MOUSEENTER

// plik: /JQ_L04_02_zdarz_Mouseenter/script.js


//------------------Zmiana formatowania---------------------------

/* chcemy , aby po najechaniu kursorem na element zmienialo sie jego
   formatowanie, po odsunieciu kursora formatowanie ma wrocic do pierwotnego
   wygladu. Zrobimy to poprzez przypisywanie i usuwanie klas z CSS.
*/

$(document).ready(function(){
    $("p").mouseenter(function(){       //wlacza funckcje gdy najezdzamy myszka
        $(this).addClass("highlight");  // i... klasa dziala na element
    })
    .mouseleave(function(){                 //odsuwamy kursor i...
        $(this).removeClass("highlight");   //klasa zostaje usunieta
    });
});


//-------------Zastapnienie jednego obrazka innym-----------------

/* chcemy po najechaniu kursorem na zdjecie zastapic je innym, po odjechaniu
   kursorem ma powrocic pierwotne zdjecie
*/

$(document).ready(function(){
    $("img").mouseenter(function(){         // zastepuje obrazek gdy ...
        $(this).attr("src", "img/2.jpg");   // najezdzamy myszka
    })
    .mouseleave(function(){                 //odsuwamy kursor i...
        $(this).attr("src", "img/1.jpg");   //wraca pierwotny obrazek
    });
});