// JavaScript File
/* global $ */

// POLA TYPU CHECKBOX

//plik: /JQ_L05_04_Pola_Checkbox/5_4_pola_typu_checkbox.html



/*  chcemu sprawdzicw momwncie "submit", ile checkbox jest zaznaczonych 
    w formularzu, zostanie to wyswietlone w okieniku alert */
   
$(document).ready(function(){
    $("#newsletter").submit(function(){     //sprawdzamy przy submit
        if($(":checked").length == 0)
        {
            alert("Zaznacz przynajmniej 1 kategorię");
            return false;
        }
        else alert("Zaznaczono "+$(":checked").length+" kategorie");    
        // przy ;checked powstaje tablica, a jej dlugosc oznacza ilosc
        // zaznaczonych checkbox
    });
});


/*  EFEKT:
    jesli nie zaznaczylismy zadnego pola, pojawi sie pierwszy komunikat,
    po zaznaczeniu np. 2 checkbox w okienku alert pojawi sie liczba 2
*/