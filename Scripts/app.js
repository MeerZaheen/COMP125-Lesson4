/*
* FileName: app.js
*
* @author Meer
* @date june 1, 2016
*
* StudentID: 300522487
* website: azure link
* @description: This file is the main javascript file for the website
*/
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
    
    // create a reference for sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if send button exists
    if(sendButton)
    // for assignment 2! - event listener
    sendButton.addEventListener("click", sendButtonClick);
    
    // event handler fucntion
    function sendButtonClick(event){
        console.log("clicked!");
    }
        
    // create a reference to the form field
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var contactNumber = document.getElementById("contactNumber");
    var message = document.getElementById("message");

    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    if (contactForm){
            // event listener with inline anonymous event handler function
    contactForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("submitted");
        showFormInput();
        contactForm.reset();
    });     
    }
    
    /**
     * This function shows the input from each form fild
     * on the console
     * 
     * @method showFormInput
     * @return {void}
     */
    
    // event handler function
    function showFormInput(){
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("Email: " + email.value);
        console.log("contactNumber: " + contactNumber.value);
        console.log("message: " + message.value);
    }
    
    
    // second way to define an array
    // var paragraphs = new Array();
    
    // data for my pages
    paragraphs[0] = "<span class='firstSentence'> This is my first paragraph.</span>It is only visible on the first page"
    paragraphs[1] = "<span class='firstSentence'> This is my second paragraph.</span>It is only visible on the second page"
    paragraphs[2] = "<span class='firstSentence'> This is my third paragraph.</span> It is only visible on the third page"
    


    // check to see if paragraph one exists
    var paragraphElementLength = paragraphElements.length;
    for(var index = paragraphElementLength; index >= 0; index--){
        // debugging technique #1
        //console.log("This is log");
        //console.debug("This is debug");
        //console.error("This is an error!");
        //console.info("This is info");
        //console.warn("This is a warning!");
        // to test a loop
        //console.assert(index < 3, "index out of bounds");
        if(paragraphElements[index]){
        paragraphElements[index].innerHTML = paragraphs[index];
        // innerHTML - turns text compatible to HTML
        }
    }
   // }
   // }
    if (paragraphElement[0]) {
        paragraphElement[0].textContent = paragraphs[0];
    }
    // check to see if paragraph two exists
    if (paragraphElement[1]) {
        paragraphElement[1].textContent = paragraphs[1];
    }
    // check to see if paragraph three exists
    if (paragraphElement[2]) {
        paragraphElement[2].textContent = paragraphs[2];
    }

})();