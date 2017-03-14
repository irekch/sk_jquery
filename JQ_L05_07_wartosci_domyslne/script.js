// JavaScript File
/* global $ */

// WARTOSCI DOMYSLNE

// plik: /JQ_L05_07_wartosci_domyslne/script.js

/* do pol w formularzu dodamy wartosci domyslne:
    - na poczatek musimy w HTML do pol dodac argument"value"
      np do pola input "imnie1" dodajemy value="Podaj swoje imię"
    - Problem: aby cos wpisac w polu, musimy to z "value" usunac, ponadto
      po wymazaniu valu i przejsciu do innego pola wartosc value nie pojawia sie 
      ponownie
    
    Rozwiazanie: tworzymy skrypt sprawdzajacy, czy w polu jest value, jesli tak,
    to po kliknieciu na pole wartosc value znika
*/

$(document).ready(function(){
    //jesli pole ma "value" to po knliknieciu na nie
    //automatycznie wymazane jest value i mozemy wpisywac imie
    $("#name1").bind("focus", function(){
       if($(this).val() == "Podaj swoje imię")
       {
           $(this).val("");
       }
    });
    
    //jesli pole jest puste, bo przeskoczylismy do innego pola
    //to ponownie wpisujemy w to pole wartość z "value"
    $("#name1").bind("blur", function(){
        if($(this). val() == "")
        {
            $(this).val("Podaj swoje imię");
        }
    });
});