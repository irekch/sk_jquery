// JavaScript File
/* global $ */

// PODSTAWOWE SELEKTORY

// plik: /JQ_L02_01_selektoryWstep/script.js


/* selektory odnosza sie do elementow zdefiniowanych w HTML np. <p>, lub
okreslonych przez "id" lub "class". Do nich odnosimy sie w CSS. Przy pomocy 
tych selektorow bedziemy modyfikowac sposob wyswietlania CSS */

//----------------------------------------------------------
/* najpierw uzyjemy czystego Javascript do zastapienie calego menu
 zdefiniowanego przez id=nav przez inny tekst. Uwaga - Javascript nie zmienia
 HTML tylko manipuluje DOM. Gdy wyswietlimy zrodlo strony, nadal tam jest menu 
*/
/*
window.onload = function(){
    document.getElementById("nav").innerHTML = "Kurs JS";
};
*/

//---------------------------------------------------------
/* teraz uzyjemy jQuery razem z selektorami. Uzywamy tych samych selektorow
 ktore mamy w liku css. Tutaj bedziemy zmieniac wszystkie akapity czuli "p"
*/

$(document).ready(function(){
    $("p").css("color", "red"); //wszystkie paragrafy beda czerwone
    $("h3").css("color", "blue"); //wszystkie h3 beda niebieskie
    $("a").css("color", "green"); // wszystkie linki beda zielone
});
