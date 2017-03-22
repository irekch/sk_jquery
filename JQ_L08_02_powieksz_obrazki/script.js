// JavaScript File
/* global $ */

// POWIEKSZANIE OBRAZKOW

// plik: /JQ_L08_02_powieksz_obrazki/script.js

/*
1. najpieerw ukrylismy "okladkaduze" w pliku css
2. robimy tak, aby po najechaniu kursorem na maly obrazek pojawil sie 
   duzy obrazek, po odjechaniu duzy obrazek ma zostac ukryty
3. chcemy obrazek zamiast na dole, wyswietlic go tuz obok miniaturki
   W tym celu najpierw przypisujemy do zmiennej obecna pozycje miniaturki,
   a nastepnie uzywamy tej zmiennej do okreslenia nowej pozycji obrazka
4. dodajemu ramke duzego obrazka w css poprzez dodanie "padding" i "background"
*/

/*
// WERSJA 1 - bez zmiany pierwotnej pozycji duzego obrazka
$(document).ready(function(){
    $("#okladkamala").hover(function(){
        $("#okladkaduza").show(250);
    },
    function(){
        $("#okladkaduza").hide(250);
    });
});
*/


// WERSJA 2 - ze zmiana pozycji pierwotnej duzego obrazka
$(document).ready(function(){
    var pozycja = $("#okladkamala").offset(); // przypisanie pozycji do zmiennej
    // offset to odleglosc od gornej i lewej krawedzi - okresla to pozycje
    
    // do okreslenia nowej pozycji duzego obrazka nie mozemy uzyc samego
    // "pozycja.left" i "pozycja.top" bo wtedy mamy migotanie naprzemiennie malego 
    // i duzego obrazka. Musimy dodac przesuniecie o wielkosc malego obrazka +1px
    // stad pozycja.left+76
    $("#okladkamala").hover(function(){
        $("#okladkaduza").css("left", pozycja.left+76).css("top", pozycja.top+68)
        .css("display", "block").show(250);
    },
    function(){
        $("#okladkaduza").hide(250);
    });
});




// WAZNE: wydrukowac koncowke pliku css z ukryciem obrazka "okladkaduze"