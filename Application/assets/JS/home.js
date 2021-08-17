
    // var firstName = $('#firstName').text();
    // var lastName = $('#lastName').text();
    // var intials = $('#firstName').text().charAt(0) + $('#lastName').text().charAt(0);
    // var profileImage = $('#profileImage').text(intials);

/**Get the storage in a cookie and return the value of the id.
 * @function id
 * @returns Array
 */
var id = function(){
    var cookiePair = document.cookie.split("=");
    return cookiePair[1];
}
/**
 * @function firstLetter
 */
function firstLetter(){
    //Get the first name of the ID
    var nameOfUser = users.get(id()).firstname;
    // Search first letter of the first name
    var matches = nameOfUser.match(/\b(\w)/g);
    //Join the letter
    var acronym = matches.join("");
    //Write letter in a HTML balise
    document.querySelector("h2").innerHTML = acronym;
}

firstLetter();

