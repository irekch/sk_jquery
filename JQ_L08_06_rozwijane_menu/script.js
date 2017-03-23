// JavaScript File
/* global $ */

// ROZWIJANE MENU

//plik: /JQ_L08_06_rozwijane_menu/script.js


/* nasze menu w html ulokowane jest w id="menu" i posiada 2 klasy podmenu
   class="podmenu" "Katalog" i "Pomoc" wraz z punkatami do rozwiniecia, sa
   to zagniezdzone listy punktowane. W pliku css dodalismy formatowanie.
   1. najpierw w css ukrywamy listy "podmenu" linie 253-261
   2. robimy rozwijanie podmenu w momencie najechania kursorem na pkt. menu
*/


$(document).ready(function(){
    $("ul#menu li").hover(function(){
        $(this).find(".podmenu").show();
        //znadujemy to podmenu, ktore jest pod pkt. menu i odkrywamy je
        //UWAGA: zamiast .show() mozemy uzyc .slideDown() do rozwijania
    },
    function(){
        $(this).find(".podmenu").hide();
        //znadujemy to podmenu, ktore jest pod pkt. menu i ukrywamy je
        //UWAGA: zamiast .hide() mozemy uzyc .slideUp() do zwiajania
    });
});

/* EFEKT: po najechaniu kursorem na pkt menu, roawija sie ono, po odjechaniu
   kursora podmenu sie zwija */