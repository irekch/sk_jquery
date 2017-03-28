// JavaScript File
/* global $ */

// ANIMACJA KOLORÓW

// plik: /JQ_L09_06_jQUI_animaColor/script.js


/* będziemy robili proste animacje korzystając z metody jQueryUI "animate".
   W naszym pliku html mamy w punkcie "Polecane kursy" listę kilku kursów.
   Są to nagłówki typu <h2> mają nadany kolor tekstu i kolor tła. 
   Chcemy do tych właściwości dodać animację związaną z "hover", czyli
   w momencie umieszczenia kursora nad nagłówkiem (nazwą kursu), 
   będą się zmieniały kolory. */
   
// nasze nagłówki mają w html class="animacjakoloru"
// będziemy animowali background i color tekstu
$(document).ready(function(){
    $(".animacjakoloru").hover(function(){
        // najpierw programujemmy "mouse enter"
        $(this).animate({"backgroundColor": "#009933", "color": "#ffffff"},500);
        // po najechaniu na tytuł zmienia kolor tła na zielony, a napis na biały
        // dodaliśmy także lekkie spowolnienie animacji 500ms
    },
    function(){
        //teraz musimy zaprogramować "mouse leave", czyli powrót do kolorów
        //wyjściowych. Znajdujemy je w pliku css przy klasie .animacjakoloru
        $(this).animate({"backgroundColor": "#072550", "color": "#71d4e7"},500);
        // po odjechaniu kursorem zarówno tło jak i napis wracają do kolorów
        // wyjściowych. Dodaliśmy także lekkie spowolnienie animacji 500ms.
    });
});


//UWAGA: wydrukować html z "Polecane Kursy" i css z ".animacjakoloru"