/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

/* INDEX PAGE */
function cleanUpIndex(){
    const element = document.querySelectorAll(".contact")
    for (let contact of element){
        contact.remove()
    }
    
    
}