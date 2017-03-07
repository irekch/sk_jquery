// JavaScript File

// FUNKCJA JQUERY

//plik: /JQ_L01_05_funkcjaJQuery/script.js

//zpis ponizej zapobiega sygnalizowaniu bledu ze stosowaniem $ w Cloud9
/* global $ */

/*
Znak "$" oznacza funkcje o nazwie "jQuery". tak wiec zamiast "$" moglibysmy zapisac
"jQuery" i efekt bedzie ten sam
*/

/*
//jQuery w zapisie nieco dluzszym
$(document).ready(function(){
    alert("Kurs Javascript with JQuery");
});
*/

/*
//to samo co powyzej, ale w skroconym zapisie
$(function(){
    alert("Kurs JS with JQuery krócej");
})
*/

//to samo, co powyzej ale ze zdefiniowaniem funkcji Javascript
function pokazOkno(){
    alert("Okienko z jQuery");
}
$(pokazOkno);