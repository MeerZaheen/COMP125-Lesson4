/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    
    var paragraphElements = [];
    
    // refractor
    // var paragraphElements = [
    // document.getElementById("paragraphOne"),
    // document.getElementById("paragraphTwo"),
    // document.getElementById("paragraphThree")
    // ];

    paragraphElements[0] = document.getElementById("paragraphOne")
    paragraphElements[1] = document.getElementById("paragraphTwo")
    paragraphElements[2] = document.getElementById("paragraphThree")

    // define your paragraphs array (best way and most common)
    var paragraphs = [];
    
    // second way to define an array
    // var paragraphs = new Array();
    
    // data for my pages
    paragraphs[0] = "<span class='firstSentence'> This is my first paragraph.</span>It is only visible on the first page"
    paragraphs[1] = "<span class='firstSentence'> This is my second paragraph.</span>It is only visible on the second page"
    paragraphs[2] = "<span class='firstSentence'> This is my third paragraph.</span> It is only visible on the third page"
    


    // check to see if paragraph one exists
    var paragraphElementLength = paragraphElements.length-1;
    for(var index = paragraphElementLength; index >= 0; index--){
        console.log(index);
        if(paragraphElements[index]){
        paragraphElements[index].innerHTML = paragraphs[index];
        // innerHTML - turns text compatible to HTML
        }
    }
   // }
   // if (paragraphElement[0]) {
   //     paragraphElement[0].textContent = paragraphs[0];
   // }
    // check to see if paragraph two exists
   // if (paragraphElement[1]) {
   //     paragraphElement[1].textContent = paragraphs[1];
   // }
    // check to see if paragraph three exists
   // if (paragraphElement[2]) {
   //     paragraphElement[2].textContent = paragraphs[2];
   // }

})();