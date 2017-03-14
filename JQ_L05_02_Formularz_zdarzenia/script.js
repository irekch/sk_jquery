// JavaScript File
/* global $ */

// FORMULARZE - ZDARZENIA

// plik: /JQ_L05_01_Formularz_zdarzenia/script.js

/*  gdy w lewym dolnym formularzu klikniemy na pole imie, to tam laduje kursor
    a cale pole podswietla sie ramka, nastepuje tzw. focus. Gdu teraz klikniemy 
    na pole E-mail, tam nastepuje focus, apole Imię uzyskuje status "blur".
    Bedziemy obslugiwac te dwa zdarzenia.
*/

/*
$(document).ready(function(){
    $("#name").focus(function(zdarzenie){
        alert(zdarzenie.type);
    });
});
*/
/*  UWAGA: Skrypt powyzej jest do dupy!!!!
    po kliknieciu na pole imie wyswietla sie okieniko alert ale nie schodzi,
    po OK znowu powraca i tak bez konca. Sprawdzilem to na Chrome i Firefox.
*/

//po wyjsciu z pola nastepuje "blur"
$(document).ready(function(){
    $("#name").blur(function(zdarzenie){
        alert(zdarzenie.type);
    });
});
//EFEKT: gdy przechodzimy z pola "Imię" wyswietla sie okienko z napisem "blur"

//po kliknieciu na jakikolwiek przycisk formularza typu submit 
//wyswietla sie okienko z napisem "submit"
$(document).ready(function(){
    $("form").submit(function(zdarzenie){
        alert(zdarzenie.type);
    });
});