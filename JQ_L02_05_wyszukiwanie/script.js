// JavaScript File
/* global $ */

// WYSZUKIWANIE BAZUJACE NA ZAWARTOSCI DOKUMENTU

// plik: /JQ_L02_05_wyszukiwanie/script.js

/* Bedziemy formatowac zawartosc akapitu w zaleznosci od tego, jaka bedzie
 jego zawartosc */
 
 $(document).ready(function(){
     //zakladamy filtr wyszukujacy zawartosc slowa w akapicie i tylko 
     //ten akapit z tym slowen zmieniamy na czerwono
     $("p:contains(SQL)").css("color", "red");
 })
 
 /* UWAGA: przy tym wyszukiwaniu wielkosc liter jest rozrozniana, wiec
  SQL to nie to samo co sql, lub Sql */