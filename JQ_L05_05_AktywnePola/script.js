// JavaScript File
/* global $ */

// fROMULARZE - AKTYWNE POLA

/* Nasz formularz "newsletter" ma kilka pol input np. "Imie".
   Chcemy aby po umieszczeniu kursora w polu input, czyli momencie "focus" nastapila
   zmiena formatowania, czyli zmiana koloru tla i dodanie ramki
*/

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css({
            "border": "2px solid #99ccff",
            "background": "#ffff99"
        });
        // teraz musimy obsluzyc funkcje "blur", czyli wyjscia z pola
        // jesli tego nie zrobimy, to kazde kolejne i poprzedznie pole bedzie 
        // mialo zmienione formatowanie.
        // WAZNE: wartosci do obslugi formatu pierwotnego css znajdziemy w pliku
        // css pod "input.field"
    $("input").blur(function(){
        $(this).css({
            "border": "1px solid #99ccff",      //pierwotne wartosci z CSS
            "background": "#ddd"                //pierwotne wartosci z CSS
        });
    });
    });
});