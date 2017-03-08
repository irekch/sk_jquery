// JavaScript File
/* global $ */

// SELEKTORY ZLOZONE (np. id, czy class)

// plik: /JQ_L02_02_selektoryZlozone/script.js

$(document).ready(function() {
    $("#overview").css("border-color", "red"); // zmiana ramki id=overview
    $("#main").css("color", "blue");    //zmiana koloru elementow pod #main
    $(".left").css("color", "green");   //element klasy .left bedzie zielony
    //chcemy zmienic tylko elementy menu z gory po prawej stronie
    //zmieniamy elementy linkow "a" ktore sa w liscie "li" w id=nav
    $("#nav li a").css("color", "red");
})