// JavaScript File
/* global $ */

// JQUEY PLUGIN - Lava Lamp - FOR MENUS

// plik: /JQ_L10_04_Plugin_LavaLamp/script.js

/* Plugin "Lava Lamp" znajduje się na stronie http://plugins.jquery.com/lavalamp/
   W najnowszej wersji 1.1.0 jest na homepage projektu. W tej wersji przerzucono
   się z animacji jQuery do CSS3. Tę wersję możemy tę wersję możemy sciagnac z:
   http://lavalamp.magicmediamuse.com/download.php współpracuje on z wersją
   jquery 3.1.1
   
   W kursie Strefa Kursow użyto innej wersji Lava Lamp ze strony:
   http://nixbox.com/projects/jquery-lavalamp/ w wersji 1.4.0 tego uzylem tutaj
   
   W naszym html mamy menu <div id="main"> z lista <ul id="menu"> z 5 pozycjami.
   Przy pomocy "lavalamp" dodamy podswietlenie aktywnych pozycji i animacje.
   W pliku css mamy klase "#menu li.backLava". Za jej pomoca robimy podswietlanie
   aktywnej pozycji menu. Chcemy przypisac lavalamp do calego menu z id="menu"
*/

$(document).ready(function(){
//    $("#menu").lavaLamp();
    //automatycznie zostala uruchomiona klasa backLava z css. Gdy najedziemy
    //kursorem, nastepuje podswietlenie, gdy odjedziemy, podswietlenie wraca na 
    //pozycje 1-go punktu menu
    
    //dodatkowo zastosujemy plugin easing, a konkretnie easeOut Bounce
    $("#menu").lavaLamp({fx:"easeOutBounce", speed: 1000, returnDelay: 2000}); 
    //fx: - gdy stosujemy efekt, parametr "speed" - predkosc dzialania
    //parametr "delay" - czas po jakim po odsunieciu kursora podswietlenie
    //wraca na pozycje "Start"
})