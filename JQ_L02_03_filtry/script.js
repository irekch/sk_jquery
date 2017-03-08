// JavaScript File
/* global $ */

// FILTRY - Pozwalaja doprecyzowac zakres w stosunku do selektorow

// plik: /JQ_L02_03_filtry/script.js

/* zmieniamy wszystkie elementy typu link na czerwono, jeszcze bez filtrow */
/*
$(document).ready(function(){
    $("a").css("color", "red");
})
*/

//-------------------------------------------------
//stosujemy FILTRY. Stawiamy je po ":"
$(document).ready(function(){
    $("a:first").css("color", "red"); // pierwszy link na czerwono inne jak byly
})

$(document).ready(function(){
    $("a:last").css("color", "green"); // ostatni link na zielono inne jak byly
})

/* WAZNE - elementy na stronie np. "a" to tablica tych elementow od elementu
 0 do ostaniego elementu tablicy. W zwiazku z tym mozna odnosic sie do elementow
 trj tablicy */
 
$(document).ready(function(){
    // 3-ci element tablicy "a" na niebiesko inne jak byly
    $("a:eq(2)").css("color", "blue");
    $("a:eq(4)").css("color", "orange"); // 5-ty element na pomaranczowo
    // wszystkie elementy powyzej 5-go na zolto
    $("a:gt(4)").css("color", "yellow");
    // wszystkie element do 2-go (czyli 0 i 1) na rozowo
    $("a:lt(2)").css("color", "pink");
    // wszystkie parzyste usuniete z tablicy, czyli nieparzyste sformatowane
    $("a:even").css("color", "aqua");
    // wszystkie nieparzyste usuniete z tablicy, czyli parzyste sformatowane
    $("a:odd").css("color", "red");
    // ograniczamy dzialanie tylko do menu z id=nav
    $("#nav li a:odd").css("color", "blue");
})