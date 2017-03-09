// JavaScript File
/* global $ */

// PRZYPISYWANIE KLAS CSS DO NASZYCH OBIEKTOW

// plik: /JQ_L03_05_CSS_klasy/script.js

// WAZNE: nowy plik CSS - wydrukować !!!

/* uzyjemy klasy ".highlight" z pliku CSS ktory do tej pory nie byl przypisany
    1. najpierw zmodyfikujemy akapit "opis1" przez jQuery
*/

$(document).ready(function(){
    
    //efekt - akapit "Joomla" zostanie podswietlony na niebiesko
    $("#opis1").addClass("highlight"); //Uwaga-nazwa klasy bez "."
    
    // teraz przypiszemy klase ".highlight" do <h3>
    $("h3").addClass("highlight");
    
    //sprawdzamy, czy jakis element ma klase "left"
    alert($("div:eq(5)").hasClass("left"));
    //wyswietla sie okienko "alert" z "true"
    
    /*teraz usuniemy klase - usuwamy klase "left" z elementu "div"
      wplynie to na wszystkie elementy div z klasa "left", ale chcemy to usunac
      tylko z elementu 6-go czyli (5) */
    $("div:eq(5)").removeClass("left");
    //usuwamy klase "left" z "div" (7)
    $("div:eq(7)").removeClass("left");
    
    //teraz bedziemy wlaczac i wylaczac klase ".highlight" przez klikniecie
    $("#opis3").click(function(){
        $(this).toggleClass("highlight"); //"this"-zmiana dotyczy obiektu
                                        //ktory to wywoluje
    });
})