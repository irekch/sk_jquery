// JavaScript File
/* global $ */

// ZDARZENIE HOVER - czyli zdarzenie po zawisnieciu kursorem nad obiektom

// plik: /JQ_L04_06_zdarzenieHOVER/script.js


//w pliku HTML nadalismy naszemu obrazkowi id <img src="img/1.jpg" id="banner"/>

// chcemy aby po najechaniu kursorem obrazek zmienil sie, a po odjechaniu
// powroci do pierwotnego obrazka. Dziala to podobnie do "mouseenter" 
// i "mouseleave"

$(document).ready(function(){
    $("#banner").hover(function(){
        $(this).attr("src", "img/2.jpg");   //po najechaniu obrazek zmienia sie
    },
    function(){
        $(this).attr("src", "img/1.jpg");   //po odjechaniu obrazek pierw. wraca
    });
})