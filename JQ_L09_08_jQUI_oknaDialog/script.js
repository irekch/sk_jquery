// JavaScript File

/* global $ */

// jQuery UI "Widgets" - OKNA DIALOGOWE

// plik: /JQ_L09_08_jQUI_oknaDialog/script.js


/* Zajmiemy się efektami jQueryUI z grupy "Widgets". Na stronie jqueryui.com
   wybieramy i testujemy "Dialog" z grupy "widgets". Jest to okienko dialogowe.
   Po prawej stronie mamy do wyboru "Examples". Przechodzimy do naszej strony.
   W lewy dolym rogu mamy akapit z promocją "Złóż zamóweienie ..." z przyciskiem
   "Dowiedz się więcej". Chcemy naszą promocje wyświetlić w postaci okienka. */
   
// w html akapit promocja znajduje się w div z id="promocja"


$(document).ready(function(){
//    $("#promocja").dialog({title:"Promocja"});
    // promocja pojawia się wraz z przyciskiem w okienku i dodaliśmy tytuł
    
    //dodajemy animację na otwieranie okienka
//    $("#promocja").dialog({title:"Promocja", show:"slide"});
    // Efekt: okienko wjezdża z lewej strony
    
    // dodajemy animację na zamykanie okienka
//    $("#promocja").dialog({title:"Promocja", show:"slide", hide:"explode"});
    // Efekt: okienko otwierane wjezdża z lewej strony
    // przy zamykanie okienka ono eksploduje
    
    // dodajemy pozycjonowanie okienka UWAGA: nie działa w Cloud9
    $("#promocja").dialog({title:"Promocja", show:"slide", hide:"explode", 
       position: [600, 600], modal: true});
    // Efekt modal - okienko jasne, reszta przyciemniona
});


// UWAGA: wydruk html