// JavaScript File
/* global $ */

// SORTOWANIE ZAWARTOŚCI LISTY

// plik: /JQ_L09_05_jQUI_sortowanie/script.js

/* do sortowania listy użyjemy metody jQueryUI "sortable" z zestawu
   "Interactions". Sortowanie tutaj to raczej układanie pozycji na liście 
   wg. naszego uznania. Na naszej stronie mamy listę pt. "Ułóż liczby
   od najmniejszej do największej". Lista ta ma id="sortowanie".
*/

$(document).ready(function(){
//    $("#sortowanie").sortable();
    // teraz mozemy przesuwać pozycje na liście w górę lub dół
    
    // dodajemy animację do przesuwania
//    $("#sortowanie").sortable({revert: true});
    //Efekt: nie przesuwa się natychmiastowo tylko jakby w zwolnionym tempie
    
    // możemy także regulować czas animacji revert
//    $("#sortowanie").sortable({revert: 1000}); // czas w ms
    
    // teraz chcemy ustawiac krycie (opacity) elementu przeciąganego
    // opacity ustawiamy w zakresie 0 - 1 (1-pełne krycie)
//    $("#sortowanie").sortable({opacity: 0.5});
    
    // teraz możemy zmienić wygląd kursora podczas przeciągania
    // kursor przyjmuje wygląd rączki z palcem wskazującym
    $("#sortowanie").sortable({cursor: "pointer"});
});


// UWAGA: wydrukować html z listą