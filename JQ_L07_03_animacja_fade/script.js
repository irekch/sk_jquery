// JavaScript File
/* global $ */

// ANIMACJA FADE

// plik; /JQ_L07_03_animacja_fade/script.js

/* animacja fade polega na zmianie przezroczystości
*/

$(document).ready(function(){
/*    
    //robimy powolne znikanie tabeli
    $("#hide").click(function(){
       $("#lista").fadeOut(1000);   //mozna ewentualnie dodac drugi paramentr
    });                             //np pokazanie okienka alert z komunikatem
    
    //teraz dodamy funkcje pokazania schowanej tabeli przez fadeIn
    $("#show").click(function(){
        $("#lista").fadeIn(2000);   //tabela pojawia sie w 2 sek
    });
*/

    //to samo możemy zrobić korzystając z funkcji "fadeTo"
    $("#hide").click(function(){
        $("#lista").fadeTo(2000, 0.3);    // 0-przezroczyste, 0.5- półprzezrocz
    });
    
    $("#show").click(function(){
        $("#lista").fadeTo(2000, 1);    // 1-w pelni widoczne
    })
});