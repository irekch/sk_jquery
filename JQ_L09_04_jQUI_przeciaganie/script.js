// JavaScript File
/* global $ */

// PRZECIĄGANIE ZAWARTOŚCI STRONY

// plik: /JQ_L09_04_jQUI_przeciaganie/script.js


/* Ze strony jquery.com wybieramy element "draggable" umożliwiający 
   przeciąganie elementów na stronie. Opcje do "draggable" znajdziemy
   po kliknięciu na "API documentation" na stronie. */
   
// będziemy przesuwać akapit "Joomla". Jest to drugi "p" z kolei

$(document).ready(function(){
//    $("p:eq(1)").draggable();
    // możemy teraz łapać kursorem nasz akapit i przesuwać w inne miejsce
    
    // teraz chcemy ograniczyć przesuwanie do poziomu
//    $("p:eq(1)").draggable({axis: "x"});
    
    // teraz chcemy ograniczyć przesuwanie do pionu
//    $("p:eq(1)").draggable({axis: "y"});
    
    // teraz chcemy właczyć przyciąganie przesuwanego elementu
//    $("p:eq(1)").draggable({snap: "p"});
    //Efekt: podczas przesuwania akapit będzie się przyklejał do innych
    
    // chzemy przyklejać nasz paragraf do nagłowków <h3>
    $("p:eq(1)").draggable({snap: "h3"});
    
    /* Cwiczenie: na stronie mamy 4 litery U, K, S, R na niebieskim tle.
       chcemy tak przesuwać litery, aby ułożyć słowo KURS. W pliku HTML
       są to nagłówki <h2> należące do class="ukladanka" */
    $(".ukladanka").draggable({snap: "h2"});
    // wlączyliśmy snap h2, aby litery przyklejały się do siebie
});

// UWAGA: Wydrukować plik html