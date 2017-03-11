// JavaScript File
/* global $ */

// PRZYKLADY ZDARZEN

// plik : /JQ_L04_07_przykladyZdarzen/script.js

// chcemy aby po najechaniu kursorem na obrazek tekst wyswietlil sie w postaci akapitu
// w pliku HTML poki co tekst jest atrybutem typu "title" do obrazka. Natomiast chzemy,
// tekst trafi di div pod id=opis

$(document).ready(function(){
//--------------------------------------------------
    //najpierw robimy to statycznie, czyli przypisujemy przy wczytaniu

    // najpierw przypisujemy zawartosc "title" do zmiennej
//     var opisKursu=$("#obrazek").attr("title");
    
    //nastepnie wpisujemy zmienna do "div id=opis"
//     $("#opis").append("<p>"+opisKursu+"</p>");

//---------------------------------------------------
    //teraz chcemy to zrobic dynamicznie, po najechaniu kursorem
    $("#obrazek").hover(function(){
        var opisKursu=$("#obrazek").attr("title");
        $("#opis").append("<p>"+opisKursu+"</p>");  
        //po najechaniu kursorem robi sie akapit
    },
    function(){
        $("#opis p").hide();
        //po odjechaniu kursorem akapit znika
    });
});

/* UWAGA
   Jesli nie dodamy drugiej funkcji, czyli ".hide" to po kazdorazowym najechaniu
   na obrazek powstaje od nowa kolejny paragraf, wiec mozemy w ten sposob
   stworzyc niepotrzebnie wiele kopii paragrafu.
*/