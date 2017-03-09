// JavaScript File
/* global $ */

// CSS - INNE

// plik: /JQ_L03_07_CSS_inne/script.js

$(document).ready(function(){
    
    // usuwamy elementy podrzedne w paragrafach, czyli teksty
//    $("p").empty();
    
    // usuwamy elementy podrzedne wraz z paragrafami
//    $("p").remove();
    
    //mozemy usunac konkretny paragraf np z id = opis1
//    $("#opis1").remove();
    
    //mozemy zastapic paragraf "opis1" innym tekstem
//    $("#opis1").replaceWith("Kurs Joomla");
    //mozemy zastosowac takze format HTML, wtedy jest lepiej sfomatowane
    $("#opis1").replaceWith("<p>Kurs Joomla</p>");
    // mozna takze uzyc formatowania np <h3>
})