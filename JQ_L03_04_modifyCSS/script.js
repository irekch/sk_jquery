// JavaScript File
/* global $ */

// ODCZYT I MODYFIKACJA CSS

// plik: /JQ_L03_04_modifyCSS/script.js

//----------------Odczyt CSS---------------------------
$(document).ready(function(){
    //wyswietlamy w okienku alert kolor wybranego elementu
    //tutaj wyswietla sie "rgb(119, 119, 119)"
//    alert($("#opis1").css("color"));
    //mozna tez wyswietlic inne parametry np. "font-size"
})

//--------------Modyfikowanie CSS----------------------

$(document).ready(function(){
    //modyfikujemy kolor akapitu z id=opis2
    $("#opis2").css("color", "blue");
    //modyfikujemy kolor wszystkich naglowkow <h3>
//    $("h3").css("color", "red");
    
    //w jednym odwolaniu mozemy modyfikowac kilka wlasciwosci
    $("h3").css({
        "color": "green",
        "font-size": "20px",
        "font-weight": "bold"
    });
})