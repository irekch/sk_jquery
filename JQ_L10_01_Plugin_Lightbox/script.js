// JavaScript File
/* global $ */

// PLUGINY JQUERY - LIGHTBOX

// plik: /JQ_L10_01_Plugin_Lightbox/script.js

/* W kursie uzyto pierwotnej, starej wersji Lightbox autorstwa Warren'a Krewenki 
   Tutaj mamy załączony jest zip tej wersji "jquery-lightbox.zip" który po 
   rozpakowaniu daje katalog "jquery-lightbox". W nim znajdzemy katalog o tej samej
   nazwie, a w nim po kliknięciu na "index.html" możemy zapoznać się z działaniem 
   tego lightboxa wraz z instrukcją jego użycia. Z tego katalogu przekopiowałem
   plik "jquery.lightbox.js" do katalogu aplikacji i podlinkowałem w html.
   Przekopiowałem także plik lightbox.css z katalogu /jquery-lightbox/css
   do podkatalogu css w naszym katalogu roboczym. Dodałem także link wpliku html.
   Przekopiowany był także katalog "images" wraz z zawartością.
   Dodatkowo zamiast starszej wersji jquery użyłem najnowszą wersją jQuery 3.1.1 
   
   Warto spróbować użyć nowoczśniejszych wersji lightbox, także z carousel i
   oknami video. Znajdziemy je na stronie http://plugins.jquery.com/ pod
   zakładką plugin,, szukamy lightbox. */
   
//zpliku html użyjemy elentów typu <a> w <div id="main">

$(document).ready(function(){
    $("#main a").lightbox();

    //gdy klikniemy na pojedynczy obrazek, pojawia się powiększenie
    // aby seria obrazków wyswietlała się jako galeria, konieczym jest
    // dopisanie w html rel="galeria" do każdego obrazka z galerii
    // np. <a href="img/2.jpg" rel="galeria"><img src="img/2_min.jpg"></a>
    // jeśli chcemy dodać opis obrazka robimy to w html dodając "title"
    // np title="Obrazek 1"
    
    //Efekt: wyswietla się galeria ze znaczkami do przewijania
});
   
// UWAGA: wydrukować początek html z linkami i obrazkami