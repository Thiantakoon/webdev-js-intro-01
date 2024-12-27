"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const bookAnswerEl = document.getElementById("book-answer")
const activityAnswerEl = document.getElementById("activity-answer")
const submissionBtn = document.getElementById("submission-btn")


// Declare a constant variable named "book" and assign
// the name of your favorite book to that variable.

const book = Fragments
book = Fragments
console.log (book);

// Declare a mutable variable named "activity" and assign
// an activity to it.

let activity = Reading;
            activity = Writing;
            console.log (activity);

function updateBookSentence(This is my favourite bookk) {
    // Sets the text inside the element with the id of book answer. 
    // innerText is one of many properties on a HTML element.
    bookAnswerEl.innerText = book
}

function updateActivitySentence(Writing) {
    // Update this function 
    // (hint: it will be similiar to the previous function)

}

function render(Fragments) {
    // Finish writing this function
    updateBookSentence(Fragments);

}

submissionBtn.addEventListener("click", function () {
    // Calling the function that renders the update
    // when the button is clicked
    render(Fragments