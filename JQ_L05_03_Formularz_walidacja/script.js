// JavaScript File
/* global $ */

// WALIDACJA FORMULARZY

// plik: /JQ_L05_03_Formularz_walidacja/script.js


/* zajmiemy sie walidacja formularza po lewej stronie, czyli "Newsletter" 
   ta czesc formularza ma id=newsletter */

$(document).ready(function(){
    $("#newsletter").submit(function(){
        // po nacisnieciu na przycisk "Subskrybuj",
        // jesli pola "Imię" lub "E-Mail" są puste, wyswietlimy komunikat w okienku
        
        if(($("#name").val() == "") || ($("#email").val() == ""))
        {
            alert("Uzupełnij wymagane pola");
            return false;   //dodajemy aby zapobiec wyslaniu formularza bez imienia
        }
    });
})