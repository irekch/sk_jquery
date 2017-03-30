// JavaScript File
/* global $ */

// jQueryUI - FORMATOWANIE ELEMENTÓW UI

// plik: /JQ_L09_10_jQUI_formatUI/script.js

/* bedziemy formatować Widgets biblioteki jQueryUI. Będziemy formatować okienko
   komunikatu związanego z promocją. Chcemy aby promocja wyskakiwała w postaci
   okienka. Posłużymy się tutaj Widget "dialog" z biblioteki jQueryUI na stronie
   jqueryui.com. DO naszego katalogu aplikacji oprócz pliku jquery-ui.min.js
   dołączyliśmy plik jquery-ui.min.css z biblioteki jQueryUI. Tego ostatniego 
   pliku użyjemy do formatowania naszego okienka. Jednak wersja min utrudnia 
   szukanie odpowiedniego miejsca do zmian css, dlatego zastąpiłem ją wersją
   pełną pliku, czyli przyjaźnie sformatowaną jquery-ui.css. Następnie w tym 
   pliku dokonywałem zmian aby wpływać na wygląd elementu jQueryUI, czyli 
   w tym wypadku elementu"dialog" */
   
// akapit ma jest w div z id="promocja"

$(document).ready(function(){
    $("#promocja").dialog({title: "Promocja", modal: true});    
    // nasza promocja jest w okienku na przyciemnionym tle. 
    // Okienko ma tytuł "Promocja"
});

/* 
ZMIANY których dokonałem w pliku jquery-ui.css :
1. w ".ui-dialog .ui-dialog-content"  linia 612 - zmieniłem tło w okienku 
   na bladożółte #ffffcc
2. w ".ui-dialog .ui-dialog-titlebar" linia 587 - zmieniłemkolor tła nagłówka 
   okienka na ciemnobrązowy #996600
3. w ".ui-dialog .ui-dialog-titlebar" linia 588 - zniosłem obramowanie nagłówka

*/