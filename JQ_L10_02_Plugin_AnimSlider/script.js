// JavaScript File
/* global $ */

// IMAGE SLIDER - "NIVO SLIDER" stary slider

// plik: /JQ_L10_02_Plugin_AnimSlider/script.js

/* UWAGA: jest to starsza wersja slidera zdjęć tzw "Image Lider". Strona do kórej 
   sie odwołuje czyli http://nivo.dev7studios.com juz nie istnieje. Można go
   znaleźć po http://www.jqueryscript.net/slider/nivo-slider.html  tam jest download. 
   Wnaszej aplikacji mamy załączony zip tej wersji "nivo-slider2.6.zip" który po 
   rozpakowaniu daje katalog "nivo-slider2.6". W nim znajdzemy katalog "nivo-slider",
   a w nim w katalogu "demo" "index.html" klikając nań możemy zapoznać się 
   z działaniem slidera. Z katalogu nivo-slider2.6/nivo-slider/ podlinkowałem w html
   jquery.nivo.slider.pack.js . Przekopiowałem także plik nivo-slider.css z katalogu 
   do podkatalogu css w naszym katalogu roboczym. Dodałem także link wpliku html.
   Podlinkowałem także szablon nivo-slider2.6/nivo-slider/themes/default/default.css
   Katalog "img" zawiera obrazki do wykorzystania w sliderze. Dodatkowo zamiast 
   starszej wersji jquery użyłem najnowszą wersją jQuery 3.1.1.
   
   UWAGA: z wersją jQuery 3.1.1 te nplugin die współpracuje !!! Więc użyłem
          jQuery 1.6.4
   
   Warto spróbować użyć nowoczśniejszych wersji image lidera. Znajdziemy je na stronie 
   http://plugins.jquery.com/ pod zakładką plugin szukamy "image slider". */
   
/* Na naszej stronie html mamy pod id="main" 5 obrazków z nazwami kursów i te obrazki 
   chcemy pokaza w formie slidera. obrazki będą się automatycznie same przewijały 
   jak carousel,a poza tym będziemy mogli je manualnie przesuwać */
   
/* tok postępowania:
   1. do obrazków dodajemy 2 elementy div: <div class="slider-wrapper theme-default">
      oraz <div id="slider" class="nivoSlider">
   2. W script. js używamy jQuery z plugin owołując sie do drugiego <div>
*/

$(document).ready(function(){
//    $("#slider").nivoSlider();
    //Efekt: 5 obrazków przewija sie w róznej formie, dodatkowo mamy strzałki z lewej 
    // i prawej do przewijania i kropki do wybierania zdjęć poniżej
    
    // teraz chcemy zmienić parametry. Znajdziemy je na stronie podanej wyżej
    // zmienimy typ animacji z random na fade, pauseTime- zatrzymamy się na 2 sek
    // animSpeed - slide transaction time, startSlide - od 3-go obrazka od 0 start
    // opis efektów jest w kursie
    $("#slider").nivoSlider({effect: "fade", animSpeed: 500, pauseTime: 2000, 
    startSlide: 2});
    
    //efekt: kawałki zjeżdżają w dół
//    $("#slider").nivoSlider({effect: "sliceDown", pauseTime: 2000, startSlide: 4});
});


//UWAGA: skopiować html z linkami i obrazkami


// WAŻNE: PRZETESTOWAĆ NOWSZE SLIDERY,KTÓRE WSPÓŁPRACUJĄ Z NOWYM jQuery !!!!
