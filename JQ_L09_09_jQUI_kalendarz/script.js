// JavaScript File
/* global $ */

// KALENDARZ - DATEPICKER

// plik: /JQ_L09_09_jQUI_kalendarz/script.js

/* na stronie jqueryui.com wybieramy z "Widgets" metodę "Datepicker" i testujemy.
   Mamy okienko zatytułowane "Date" i gdy klikniemy na pole do wpisywania
   daty, otwiera nam się kalendarz do wybieranie daty. Bieżąca data jest 
   podswietlona. Po prawej stronie pod "Examples" znajdziemy różne dodatki
   np animacje. Tego typu kalendarz dodamy do naszej strony.
   na nasze stronie na dole po prawej pod "Pomoc" pole "Data". */
   
// nasze pole "Data" ma id="date"

$(document).ready(function(){

//    $("#date").datepicker(); 
    //po kliknieciu na pole wyswietlany jest kalendarz
    //PROBLEM: przy takim użyciu .datepicker data wyswietlana jest 
    //po amerykańsku
    
    //teraz chcemy zmienić format daty na polski
//    $("#date").datepicker({dateFormat: "dd/mm/yy"});
    //Efekt: po kliknieciu na pole wyswietla sie kalnedarz, a po wyborze
    // daty wyswietla sie ona np. 30/03/2017
    
    //chcemy teraz wydluzyc animacje defaultowa
//    $("#date").datepicker({dateFormat: "dd/mm/yy", duration: 1000});
    //Efekt: otwieranie kalendarza i ladowaNIE daaty trwa dluzej bo 1sek
    
    //teraz chcemy jeszcze wyswietlic nr tygodnia od początku roku
//    $("#date").datepicker({dateFormat: "dd/mm/yy", showWeek: true});
    //Efekt: po lewej stronie na kalendarzy pokazuje się "Wk", a poniżej nr. tyg
    
    /* PROBLEM: dotychczas nazwy dni tygodnia w kalendarzu były po angielsku
       teraz chcemy je zamienić na język polski */
//    $("#date").datepicker({dateFormat: "dd/mm/yy", 
//      dayNamesMin: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"]});
      
    //a teraz chcę aby nazwy miesięcy w nagłówkach były polskie
    $("#date").datepicker({dateFormat: "dd/mm/yy", 
      dayNamesMin: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
      monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", 
      "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
    });    
});