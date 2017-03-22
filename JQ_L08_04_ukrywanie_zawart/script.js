// JavaScript File
/* global $ */

// UKRYWANIE ZAWARTOSCI - ZANIKANIE ELEMENTOW

// plik: /JQ_L08_04_ukrywanie_zawart/script.js


/* chcemy pod kazedym akapitem class=wstep  umiescic link
*/

$(document).ready(function() {
   $(".wstep").append("<h4 class='usun'>"+"Usuń"+"</h4>");   
   /* dodalismy naglowek h4 po kazdym akapicie z klasa wstep
      a do h4 dodalismy klase 'usun' */
   /* wczesniej w pliku css przygotowalismy klase '.usun' i '.usun:hover'
      za pomoca ktorej formatujemy linki. */
    
    //pokliknieciu na "Usuń" chcemy spowodowac znikniecie div class="artykul"
   $(".usun").click(function(){
       // $(this).parents(".artykul").hide(1000);   //ukrywa elem. z animacja
       // $(this).parents(".artykul").remove()   //usuwa caly nadrzedny el div
       // przez parents odnosimy sie do nadrzednego elemntu w stosunku
       // do 'usun' ktory zostal dodany ponizej akapitu, ale w obrebie
       // div class="artykul"
       
       // chcemy aby byla animacja, ale nastepnie calkowite usuniecie elementu div
       // zamiast .hide mozemy uzyc animacji .fadeOut z nieco innym efektem
       $(this).parents(".artykul").hide(1000, function(){   // animacja ukrycie
           $(this).parents(".artykul").remove();        //usuniecie elem. div
       });
   });
});



//UWAGA: wydruk css z 'usun' i html zdiv class='artykul'