// JavaScript File
/* global $ */

// OBIEKT - ZDARZENIA

/// plik: /JQ_L04_05_obiekt_zdarzenia/script.js


$(document).ready(function(){

/*
    // tym razem chcemy, aby funkcja przyjmowala parametr- tutaj "zdarzenie"
    $("p").click(function(zdarzenie){
        alert(zdarzenie.type);  
        //po kliknieciu pojawia sie okienko z napisem "click"
    });
*/

/*
    //teraz uzyjemy doubleclick
    $("p").dblclick(function(zdarzenie){
        alert(zdarzenie.type);  
        //po kliknieciu pojawia sie okienko z napisem "dblclick"
    });
*/
/*
    // teraz wyswietlimy, na jaki element klikamy
    $("p").click(function(zdarzenie){
        alert(zdarzenie.target);  
        //po kliknieciu pojawia sie okienko z "objectHTMLParagraphElement"
    });
*/
/*
    // teraz wyswietlimy czas, kiedy zdarzenie nastapilo
    $("p").click(function(zdarzenie){
        alert(zdarzenie.timeStamp);  
        //po kliknieciu pojawia sie okienko z czasem w ms
    });
*/

    // teraz wyswietlimy współrzędne
    $("p").click(function(zdarzenie){
//        alert(zdarzenie.pageX);  
        //po kliknieciu pojawia sie okienko z odlegloscia kliku od lewej krawedzi
        //  po zastosowaniu "pageY" bedziemy mierzyc od gornej krawedzi
        alert(zdarzenie.pageX+","+zdarzenie.pageY); //tutaj oba na raz
    });
})