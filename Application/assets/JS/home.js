
    // var firstName = $('#firstName').text();
    // var lastName = $('#lastName').text();
    // var intials = $('#firstName').text().charAt(0) + $('#lastName').text().charAt(0);
    // var profileImage = $('#profileImage').text(intials);



/**
 * @function firstLetter
 */
function firstLetter(){
    //Get the first name of the ID
    var nameOfUser = users.get(getCookie("id")).firstname;
    // Search first letter of the first name
    var matches = nameOfUser.match(/\b(\w)/g);
    //Join the letter
    var acronym = matches.join("");
    //Write letter in a HTML balise
   
    document.querySelector("#idutilisateur").innerHTML = acronym;
}

firstLetter();

document.querySelector("#iddeco").addEventListener("click",function(){
    document.cookie = "id=-100 ; samesite=lax";
    document.cookie = "connected=false";
    localStorage.setItem("connected","false")
})

