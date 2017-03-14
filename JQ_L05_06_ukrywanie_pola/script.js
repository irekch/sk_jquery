// JavaScript File
/* global $ */

// UKRYWANIE I ROZWIJANIE PÓL W FORMULARZU

// plik: /JQ_L05_06_ukrywanie_pola/script.js


/* W formularzu mamy duze pole tekstowe. Chcemy aby domyślnie bylo ukryte,
   a rozwijalo sie dopiero, gdy zaznaczymy pole checkbox znajdujace sie ponizej
   "Opisz swój problem". Nasze pole tekstowe w pliku html posiada swoje id
   id="description".
   
   Najpierw musimy to pole "description" ukryc w pliku css, nastepnie
   w jQuery sprawic, aby sie pojawilo po kliknieciu na checkbox przy
   "Opisz swój problem". Pole checkbox ma id="problem"
*/

$(document).ready(function(){
    $("#problem").click(function(){         //po kliknieciu,
        $("#description").toggle("slow");   //powoli pojawia sie okno input
        //jesli teraz ponownie klikniemy na checkbox wylaczajac, pole zniknie
    });
});


// UWAGA: wydrukowac koniec pliku CSS z ukrywaniem pola chackbox