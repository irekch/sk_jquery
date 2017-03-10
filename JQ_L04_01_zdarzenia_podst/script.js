// JavaScript File
/* global $ */

// ZDARZENIA, PODSTAWY - pzyklady zdarzen: klikniecie, najechanie kursorem

// plik: /JQ_L04_01_zdarzenia_podst/script.js


//zrobimy tak, aby po kliknieciu na element pojawile sie okienko z komunikatem

$(document).ready(function(){
    // po kliknieciu na zdjecie, pojawi sie okienko
    $("img").click(function(){
        alert("Zdjecie na klikniecie");
    });


    //mozna tez zdarzenie przypisac do konkretnego elementu z id
    $("#opis1").click(function(){
        alert("Kurs Joomla- na klikniecie");
    });
        
    //mozna rowniez przypisac zdarzenie do elementow z danej klasy
    $(".button").click(function(){
        alert("Kurs jQuery");
    });
    
    //zamiast pojedynczego, mozna uzyc doubleclick
    $("#opis2").dblclick(function(){
        alert("Kurs MySQL");
    });
});


//------------Rozdzielenie definicji funckji od wczytania------------

//efekt bedzie taki sam jak powyzej, ale mamy definicje funkcji
//oddzielona od jej wczytania
$(document).ready(function(){
    kliknij();
});

function kliknij(){
    $("#opis3").click(function(){
        alert("Kurs PHP");
    });
}

