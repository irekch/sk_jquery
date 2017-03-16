// JavaScript File
/* global $ */

// TABELE - MODYFIKACJA STRUKTURY

// plik: /JQ_L06_02_tab_modStruktury/script.js

/* bedziemy wstawiac wiersze z nazwami kategorii do tabeli zdefiniowanej w pliku
   "katalog.html". Odwolamy sie do id naszej tablei, czyli id="lista" */
   
$(document).ready(function(){
    $("#lista tr:last").after("<tr><td>Kurs Ruby COBOL</td><td>53</td></tr>");
    //po ostatnim wierszu tabeli dodalismy dodatkowy wiersz HTML
    //z dwiema komorkami tabeli: nazwa kursu COBOL i jego cena
    
    // teraz chcemy dodac wiersz z nazwami kategorii
    /* najpierw pierwsza kategoria, dodajemy colspan='2' aby komorka
       rozciegala sie na 2 kolumny. poniewaz chcemy kategorie wyposrodkowac, 
       tworzymy nowa klase css ".kategoria" i przypisujemu ja do komorki <td>
    */
    $("#lista tr:first").after("<tr><td colspan='2' class='kategoria'>Biurowe</td></tr>");
    
    // teraz dodajem kolejna kategorie "internet"
    $("#lista tr:eq(4)").after("<tr><td colspan='2' class='kategoria'>Internet</td></tr>");
    // i kolejna kategoria "Programowanie"
    $("#lista tr:eq(7)").after("<tr><td colspan='2' class='kategoria'>Programowanie</td></tr>");
});

// UWAGA: wydrukowac plik "katalog.html", koncowke pliku css i wydruk tabeli