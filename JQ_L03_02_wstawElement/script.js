// JavaScript File
/* global $ */

// WSTAWIANIE ELEMENTOW

// plik: /JQ_L03_02_wstawElement/script.js

$(document).ready(function(){
    //do kazdego akapitu zostaje dopisany tekst "Kurs PHP"
    //$("p").append("Kurs PHP");
    
    //jednak chcemy to ograniczyc wylacznie do akapitu z PHP
    //ten akapit ma klase "opis3"
    $("p[class=opis3]").append(" -> Kurs PHP");
    // a teraz dodamy cos na poczatku
    $("p[class=opis3]").prepend("Kurs PHP ->...");
    // a teraz dodamy w odrebnym akapicie na poczatku
    $("p[class=opis3]").prepend("<p>Kurs PHP ->...</p>");
    // a teraz dodamy jako naglowek
    $("p[class=opis3]").prepend("<h3>Kurs PHP ->...</h3>");
    // Element "opis1" czyli tekst o Joomla chcemy dolaczyc 
    // do elementu "opis3" czyli do tekstu o PHP
    $("p[class=opis1]").appendTo("p[class=opis3]");
    // a teraz dolaczamy z przodu
    $("p[class=opis1]").prependTo("p[class=opis3]");
})