// JavaScript File
/* global $ */

// HIERARCHIA ELEMENTOW

// plik: /JQ_L02_06_hierarchiaElementow/script.js

/* UWAGA: ZROBIC WYDRUK HTML.
 Tutaj plik HTML zostal zmieniony w stosunku do poprzednich lekcji.
 W akapitach zostalo dodanych kilka dodatkowych likow. */
 
$(document).ready(function(){
    //najpierw zmieniamy kolor akapitow
    $("p").css("color", "red");
    //teraz zmienimy kolor tylko tych akapitow ktore zawieraja linki
    $("p:has(a)").css("color", "blue");
    // zmieniamy kolor pierwszego linku w akapicie
    $("p a:nth-child(1)").css("color", "green");
    // zmieniamy kolor ostatniego linku w akapicie
    $("p a:last-child").css("color", "yellow");
    //UWAGA: jesli w akapicie mamy tylko jeden link, to zareaguje on
    // zarowno na "first-child", jak i na "last-child"
})