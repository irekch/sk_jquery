// JavaScript File
/* global $ */

// INSTALACJA JQUERYUI

// plik: /JQ_L09_02_jQueryUI_instalacja/script.js


/* Biblioteka jQueryUI znajduje sie na stronie http://jqueryui.com/
   Zawiera ona wiele gotowych do uzycia: Interactions Widgets Effects i Utilities.
   Na stronie mozna sobie wyprobowac dzialanie elementow biblioteki.
   Ze strony robimy download biblioteki jQueryUI i dolaczamy plik do naszego
   katalogu razem z plikiem jQuery. Download robimy ze strony http://jqueryui.com/
   wybierajac "Custom Download". Nastepnie w Download Builder wybieramy elementay.
   Musimy wybrać wszystko z "Core" bo to podstawa dzialania biblioteki. 
   My instalujemy wszystkie inne elementy. Na gorze wybieramy wersje "stable"
   tutaj 1.12.1, natiomiast na dole pod "Theme" wybieramy "UI Lightness".
   Po download robimy extract i wchodzimy do katalogu. Po kliknieciu na index.html
   bedziemy mielo podglac naszych mozliwych funkcji. 
   
   Nastepnie:
   1. kopiuje z katalogu "jquery-ui-1.12.1-custom" kataslog images do naszego
      katalogu aplikacji
   2. kopiuje pliki: "jquery-ui.min.css" i "jquery-ui.min.js" do katalogu aplikacji
   3. w pliku html robimy odwolanie do "jquery-ui.min.js" zaraz po odwolaniu
      do "jquery-3.1.1.min.js" i przed "script.js"
   4. w pliku html robimu link do cdd jQueryUI <link href="jquery-ui.min.css"
      zaraz po linku do pliku glownego css */


    
// teraz przetestujemy jQueryUI. Uzyjemy elementu biblioteki zmieniajacego
// dowolny element w okienko. Uzyjemy id="logo"

$(document).ready(function(){
   $("#logo").dialog();
   //uzylismy funkcji jQueryUI "dialog".
   // Efekt: logo "Kurs Jquery" zostalo otwrte w okienku, ktore mozemy zamykac
});