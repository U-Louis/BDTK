/*----------------------------Main Function------------------------------- */
(function() {
    // Initialisation
    var id = getCookie("id");
    var isAdherent = users.get(id)["status"].get("hasRightAdherent");
    var arrListofBook = users.get(id)["listofbook"];
    var tbody = document.querySelector("#idemprunt table tbody");
    var arrInfo = ["name", "firstname", "dateofbirth",
        "address1", "address2", "postalcode", "city",
        "email", "mobilenumber", "homenumber"
    ];
    //We get the satus of adherent in order to control if the user is an adherent



    //Traitment
    //Display a personalize welcoming message
    personalizeTitle(id, document.querySelector(".titlename"));
    // Write informations of the user
    showInfo(id, arrInfo);
    // Write a msg if the user is an Adherent
    contributionMsg(id);
    // Display the list of book borrowed if the user is an Adherent
    if (isAdherent) {
        document.querySelector("#idemprunt").classList.replace("d-none", "d-block");
        listOfBook(tbody, arrListofBook); // function in srcipt.js
    }

    firstLetter(id, document.querySelector("#inituser"))

}());


/*-------------------------------------Function------------------------------------ */

/**Write the name of user in the header
 * @function welcomeMsg
 * @param {String} id 
 */

/**Write information  in a table
 * @function showInfo
 * @param {String} id 
 */
function showInfo(id, array) {

    document.querySelector("#thid").innerHTML = id;
    for (index in array) {
        // We get the id of each row we need
        let thAct = "th" + array[index];
        // We get the key of info we need
        let info = array[index]
            // We write the value of info we got in the cell
        document.querySelector("#" + thAct).innerHTML = users.get(id)[info];

    }
}

/**Display a message if the user is an adherent informing him if his contribution is updated.
 * @function contributionMsg
 * @param {String} id 
 */
function contributionMsg(id) {
    //We get the status of his contribution
    var isUpdate = users.get(id)["status"].get("isUpTodate");
    //We get the satus of adherent in order to control if the user is an adherent
    var isAdherent = users.get(id)["status"].get("hasRightAdherent")
    var spanContribution = document.querySelector("#spancontribution"); //span where the message will be written
    var divContribution = document.querySelector("#divcontribution"); //di where is the span of message
    //We control the status of user
    if (isUpdate && isAdherent) {
        writeMsgWithBg(spanContribution, "Votre cotisation est à jour.", "bg-success");
        divContribution.classList.replace("d-none", "d-block")
    } else if (!isUpdate && isAdherent) {
        writeMsgWithBg(spanContribution, "Votre cotisation n'est pas à jour.", "bg-danger");
        divContribution.classList.replace("d-none", "d-block")
    }

}
/**
 * 
 * @param {String} selector query selector of HTMLElement where the message is written
 * @param {String} msg 
 * @param {String} bootstrapcolor The bootstrap class background color of the HTMLElement
 */
function writeMsgWithBg(selector, msg, bootstrapcolor) {
    selector.innerHTML = msg;
    selector.classList.add(bootstrapcolor);

}