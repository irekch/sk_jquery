// JavaScript File
/* global $ */

// JQUERY PLUGIN -EASING

// plik: /JQ_L10_03_Plugin_Easing/script.js

/* Easing polega na zmianie tempa animacji np. przyspieszenie w momencie startu 
   animacji i zwalnianie pod koniec. Plugin w wersji 1.3 znajduje się na stronie 
   http://plugins.jquery.com/jquery.easing/ natiomiast homepage tego plugin
   to http://gsgd.co.uk/sandbox/jquery/easing/ Na tej stronie opisany jest
   także sposób użycia plugin i demo plugin w akcji. PO lewej stronie mamy efekt
   wejścia "easeIn", a po prawej efekt wyjścia "easeOut". Być mmoże jest możliwym 
   zastosowanie innego plugin do easing. Zrobiłem download z homepage i link
   w pliku html. Zastosowałem plugin z najnowszą wersją jQuery jquery-3.1.1.min.js
   Na naszej stronie mamy akapit na zielonym tle, a pod spodem przycisk "Animacja"
   Nasz akapit ma id="akapit" natomiast przycisk ma id="animacja", użyjemy ich.
*/

$(document).ready(function(){
   $("#animacja").click(function(){
       $("#akapit").slideUp(2000, "easeOutExpo");
       //Efekt: pod koniec chowania się akapitu przez slide, zwalnia
   }) 
});
   