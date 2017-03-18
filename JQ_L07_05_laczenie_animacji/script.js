// JavaScript File
/* global $ */

// LACZENIE ANIMACJI

// plik: /JQ_L07_05_laczenie_animacji/script.js


$(document).ready(function(){
    $("#hide").click(function(){
        
        //zapis polacznych animacji w 3 funkcjach
//        $("#banner").hide();
//        $("#banner").slideDown(2000);   //powoli sie rozwija przez 2 sek
//        $("#banner").slideUp(2000);     //powoli rozwijamy
        
        //wszystkie powyzsze mozemy zapisac w prostszy sposob
        $("#banner").hide().slideDown(2000).delay(3000).slideUp(2000);
        //funkcja 'delay' oznacza zatrzymanie animacji na okreslony czs w ms
    });
})