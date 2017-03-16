// JavaScript File
/* global $ */

// TABELE - MODYFIKACJA WYGLADU

// plik: /JQ_L06_01_tab_modWygladu/script.js


// UWAGA: wydrukowac plik "katalog.html" i poczatek "6_1_modyfikacja_wygladu.html"


//robimy naprzemienne kolory tla w wierszach tabeli
$(document).ready(function(){
    //chcemy sformatowac wiersze naprzemiennie podswietlajac
    //odwolujemy sie do lini tabeli i do kazdej parzystej zmieniaja tlo na szare
    $("tr:even").css("background-color", "#e6e6e6");
    //EFEKT: co drugi wiersz jest podswietlany na szro
    
    // Inny przyklad- teraz chcemy uzyc efekty "hover", czyli po najechaniu 
    // kursorem chcemy zmienic kolor tla na zolty a po odjechaniu na bialy
    $("tr").hover(function(){
        $(this).css("background-color", "yellow");
        },
        function(){
            /* w kombinacji 2 linijek kodu ponizej po najechaniu kursorem tlo bedzie
               zolte, a po odjechaniu tlo wiersz bedzie naprzemiennne w kolorach
               zdefiniowanych poprzednio */
            $("tr:odd").css("background-color", "#ffffff"); //nieparzyste biale tlo
            $("tr:even").css("background-color", "#e6e6e6"); //parzyste szare tlo

            
            /*jesli uzyje linijki kodu ponizej, po najechaniu kursorem
              tlo bedzie zolte a po odjechaniu biale */
//          $(this).css("background-color", "#ffffff")

        });
});