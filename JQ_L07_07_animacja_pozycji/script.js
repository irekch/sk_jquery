// JavaScript File
/* global $ */

// ANIMACJA POZYCJI

//plik: /JQ_L07_07_animacja_pozycji/script.js


/* bedziemy tworzyli animacja pozycji. Ponizej obrazka mamy przyciski ze 
   strzalkami w prawo i w lewo. Przy pomocy strazlek bedziemy przesuwac obrazek.
   Obrazek jest w div=container i ma w pliku css pozycjonowanie 
   position: relative; */
   
   
$(document).ready(function(){

    
    
    // przykladowe zwykle przwesuniecie bez animacji
    // $("#container").css("left", "+=200px");   //przesuwa sie na prawo o 100px
    
    //------------teraz robimy animacje------------------------
    
    //idziemy z obrazkiem w prawo
    $("#right"). click(function(){
        $("#container").animate({left: "+=200px"}); //przesuwa w prawo
    });
    
    //teraz wracamy z obrazkiem w lewo
    $("#left"). click(function(){
        $("#container").animate({left: "-=200px"}); //przesuwa w lewo
    });

})