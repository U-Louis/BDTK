// var firstName = $('#firstName').text();
// var lastName = $('#lastName').text();
// var intials = $('#firstName').text().charAt(0) + $('#lastName').text().charAt(0);
// var profileImage = $('#profileImage').text(intials);

(function() {
    var id = getCookie("id");

    var isBibliothecaire = users.get(id)["status"].get("hasRightBibliothecaire");
    var isGestionnaire = users.get(id)["status"].get("hasRightGestionnaire");
    var isResponsable = users.get(id)["status"].get("hasRightResponsable");
    var isAdmin = users.get(id)["status"].get("hasRightAdmin");


    personalizeTitle(getCookie("id"), document.querySelector(".titlename"));

    firstLetter(id, document.querySelector("#idutilisateur"));

    // Hide buttons of librarian if the user is not a librarian
    if (!isBibliothecaire) {
        document.querySelector("#divbibliothecaire").classList.add("d-none");

    }
    // Hide buttons of gestionnaire if the user is not a gestionnaire
    if (!isGestionnaire) {
        document.querySelector("#divgestionnaire").classList.add("d-none");

    }
    // Hide buttons of manager if the user is not a manager
    if (!isResponsable) {
        document.querySelector("#divresponsable").classList.add("d-none");


    }
    // Hide buttons of admininistrator if the user is not an Admin
    if (!isAdmin) {
        document.querySelector("#divadmin").classList.add("d-none");

    }
    document.querySelector("#iddeco").addEventListener("click", function() {
        logOut();
    })
}())


//This function is in script.js file