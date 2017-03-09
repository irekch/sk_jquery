// JavaScript File
/* global $ */

// ODCZYT I MODYFIKACJA ATRYBUTOW

//------------Odczyt Atrybutow---------------------
/*
$(document).ready(function(){
    // odczytujemy atrybut id "opis1" i wyswietlamy w okienku
    alert($("#opis1").attr("id"));
    
    //chcemy sprawdzic wartosc atrybutu size przy id "email"
    alert($("#email").attr("size"));
})
*/

//---------Modyfikacja Atrubutow-------------------

$(document).ready(function(){
    //chcemy przypisac atrybut do wszystkich naszych linkow
//    $("a").attr("href", "http://strefakursow.pl");
    
    //ale chcemy to dodac tylko do "Katalog" w naszym menu, czyli elementu 1
//    $("a:eq(1)").attr("href", "http://strefakursow.pl");
    
    //a teraz dodajemy atrybut do linkow w gornym menu
//    $("#nav a").attr("href", "http://strefakursow.pl");
    
    //mozemy dodawac kilka atrybutow na raz. Tutaj: po najechaniu na punkt menu
    //"Katalog" pokaze sie napis "katalog", a po kliknieciu otworzy sie 
    //nowe okno ze strona "strefakursow"
    $("a:eq(1)").attr({ href: "http://strefakursow.pl", title: "katalog",
        target: "_blank"
    });
})


//------------Usuwanie Atrybutu--------------------------

$(document).ready(function(){
    //Sytuacja: po najechaniu kursorem na akapit "Joomla" wyswietla sie
    //"Kurs Joomla" okreslony pod "title" w HTML - Chcemy to usunac
    //za pomoca jQuery
    $("#opis1").removeAttr("title");
    //Efekt: "Kurs Joomla" sie nie wyswietla
})
