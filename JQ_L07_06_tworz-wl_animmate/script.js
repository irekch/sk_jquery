// JavaScript File
/* global $ */

// TWORZENIE WLASNYCH ANIMACJI - METODA ANIMATE

// plik: /JQ_L07_06_tworz-wlasnych_anim/script.js


/* stworzymy wlasna animacje na podsatwie css. Korzystamy z dwoch przyciskow:
   id=an1 dotyczy animacji obrazka, a id=an2 animacji akapitu, Sam akapit 
   ma id=akapit a obrazek id=obrazek
*/

$(document).ready(function(){
    $("#an2").click(function(){
        //animujemy zmiane wilekosci czcionk przez css
//        $("#akapit").animate({fontSize: "20px"}, 1000);
        
        //zmieniamy krycie przez css
//        $("#akapit").animate({opacity: "0.2"}, 1000); //"0" - jesli ma zniknac
        
        // mozemy dodac animacje kilku wlasciwossci jednoczesnie
        $("#akapit").animate({width: "150px", fontSize: "8px"}, 1000);
    });
    

    //dodajemy animacje obrazka    
    $("#an1").click(function(){
        $("#obrazek").animate({opacity: "0"}, 1000);    //obrazek znika zupelnie przez 2 sek
    });
});
