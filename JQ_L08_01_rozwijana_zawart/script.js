// JavaScript File
/* global $ */

// ROZWIJANA ZAWARTOSC

// plik: /JQ_L08_01_rozwijana_zawart/script.js

/* Mamy w pliku kilka akapitów z tekstem. Chcemy, aby po kliknieciu na akapit, 
   ten zwijal sie. Na gorze tekstu mamy 2 naglowki: "Zwiń wszystko" i 
   "Rozwin wszystko", uzyjemy ich zgodnie z nazwami */
   
$(document).ready(function(){
//   $("p").hide(); //uzywamy, gdy chcemy, aby akapity byly na poczatku zwiniete
    
   $("h2").click(function(){
       $(this).next("p").toggle(1000); //"next" oznacza element po "this", czyli h2
       //Efekt: po kliknieciu na naglowek paragrafu, sa paragraf sie zwija,
       // a po powtornym kliknieciu sie rozwija
       
       // dodatkowo chcemy aby po najechaniu na naglowek, a przed kliknieciem
       // nasz kursor zmienial sie na raczke
   });
   
   //dodajemy funkcje do naglowkow "Zwin wszystko" i "Rozwiń wszystko"
   
   // naglowek "Zwin wszystko" ma w html id="zwin"
   $("#zwin").click(function(){
       $("p").hide(1000);
   });
   // Efekt: wszstkie akapity zostaja zwiniete
   
   // naglowek "Rozwin wszystko" ma w html id="rozwin"
   $("#rozwin").click(function(){
       $("p").show(1000);
   });
   // Efekt: wszystkie akapity zostaja rozwiniete
});

/* WAZNE: mozemy oczywiscie zrobic tak, ze wszystkie akapity sa na poczatku
zwiniete, wowczas  uzywamy funkcji zwiniecia akapitow zaraz na samym poczatku */

//UWAGA: wydrukowac fragment css z naglowkami h2 i h4 (linie 10-14)