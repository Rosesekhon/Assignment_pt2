/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

/* INDEX PAGE #1*/
function cleanUpIndex(){
    const element = document.querySelectorAll(".contact");
    for (let contact of element){
        contact.remove()
    }
}
  
/* INDEX #2*/
function createSingleIndex(single_obj){
    return`
        <a href="page3.html">
            <div class="contact">
                <p> ${single_obj.name}</p>
            </div>
        </a>

    `
} 

/* INDEX #3 */
function renderIndex(array_contact){
    const main = document.querySelectorAll(".index");
    array_contact.array.forEach(element => {
        console.log(createSingleIndex(element))
    });
}

const contactList = [
    {
        name : "Oliver Queen",
        phone : "778-555-1234",
        address : "101 Main St, Star City, USA",
        email: "greenarrow@watchtower.com",
    },
    {
        name :"Jessica Cruz",
        phone : "123-456-5555",
        address : "Portland Oregon",
        email : "greenlantern@watchtower.com",
    }
]

/* VEIW PAGE #1*/

function cleanUpView(){
    const element = document.querySelectorAll(".contactinfo")
    for (let contactinfo of element){
        contactinfo.remove()
    }
}

/* VEIW #2 */

function renderView(single_contact){

}





/* CREATE PAGE #1*/

function cleanUpCreate(){
    const element = document.querySelectorAll(".contactedit")
    for (let contactedit of element){
        contactedit.remove()
    }
}



/*  CREATE #2 */


