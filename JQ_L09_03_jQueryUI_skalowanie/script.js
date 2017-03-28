// JavaScript File
/* global $ */

// SKALOWANIE ELEMENTOW NA STRONIE

// plik: /JQ_L09_03_jQueryUI_skalowanie/script.js

// Uwaga: wydrukować początek html z linkami do bibliotek jQueryUI

/* Na stronie jquery.com wchodzimy do "Interactions" i spreawdzamy
   dzialanie przykladowego "Resizable", czyli okienka ktorego wielkosc mozemy
   zmieniac. "Ressizable" to element typu div. Wlasciwosci obiektu mozna 
   zmieniac dodajac opcje ktore sa opisane pod "API Documentation" dostepne 
   po kliknieciu linku ponizej. */
   
// dodajemy mozliwosc skalowanie do obrazka po lewej stronie
// nasz obrazek ma w html identyfikator id="banner"
   
$(document).ready(function(){
//   $("#banner").resizable();
   // funkcja jQueryUI .resizable umozliwia zmiane wielkości okienka
   // w każdym kierunku
   
//   $("#banner").resizable({maxWidth: 600});
   // ograniczanie maksymalnej szerokości do 600px
   // Efekt: rozciągamy do 600px
   
//   $("#banner").resizable({maxHeight: 200}); 
   // ograniczenie maksymalnej wysokości do 200px
   
   // do tej pory mogliśmy rozciągać wyłacznie w prawo lub w dół
   // teraz dodamy możliwość rozciągania w każdym kierunku
//   $("#banner").resizable({handles: "n, e, s, w"});
   // "n, e, s, w" oznaczają kierunki świata. 
   // Teraz rozciągasmy w każdym kierunku
   
   // chcemy aby obrazek  zmieniał się proporcjonalnie i był max 600px szerokości
   $("#banner").resizable({aspectRatio: true, maxWidth: 600});
   
   /* teraz chcemy dodać do naszego pola formularza "Imię" możliwość rozciągania
      w płaszczyźnie poziomej */
   $("#name1").resizable({handles: "e"})
   // Efekt: możemy rozszerzać pole do wprowadzania imienia
   
})


// UWAGA: wydrukowac początek html