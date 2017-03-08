// JavaScript File
/* global $ */

// WYBIERANIE ATRYBUTOW
// czyli wybieramy elementy bazujac na wartosci atrybutu

// plik: /JQ_L02_04_wyborAtrybutu/script.js

/* nasz skrypt bedzie modyfikowal kolor tekstu */

$(document).ready(function(){
    //wartosc atrybutu podajemy w [ ]
    //ponizej paragraf z klasy opis1 zostanie zmieniony
    $("p[class=opis1]").css("color", "red");
    //paragraf z "1" na koncu nazwy klasy bedzie zmieniony
    //aby to uzyskac, do 'class' dodajemy "$"
    $("p[class$=2]").css("color", "blue");
    // paragraf z klasa zaczynajaca sie od 
    $("p[class^=opis]").css("color", "green");
    //zmieniamy elementy typu input, ktore maja value, czyli przyciski
    $("input[value]").css("color", "green");
})