/**
 * makeMenu() crée  menu le menu.
 * Et met en place les lien des boutons.
 *
 * IN:NONE
 * OUT:NONE
 * */
/* function makeMenu(){
    var menu =["Catalogue", "Mon-compte", "Accueil"]
    var pageHTML = ["#","#","accueil-page.html"];
    var ul = document.createElement("ul");
    document.createAttribute("class")
    document.createAttribute("id")
    var nav = document.querySelector("nav")
    nav.appendChild(ul);
    
    for (i in menu){
      var li = document.createElement("li")
      var a = document.createElement("a")
      document.createAttribute("href")
      li.setAttribute("class","list-group-item")
      li.setAttribute("id",menu[i])
      let id="#"+menu[i];
      document.querySelector("ul").appendChild(li);
      document.querySelector(id).appendChild(a);
      document.querySelector(id+" a").innerHTML = menu[i]
      document.querySelector(id+" a").setAttribute("href",pageHTML[i]);

      
    }

}
makeMenu(); */

/** === LOGIN === */
//init
//status
var hasRightsAdherent = false;
var hasRightsBibliothecaire = false;
var hasRightsGestionnaire = false;
var hasRightsResponsable = false;
var hasRightsAdmin = false;



/** === CATALOG === */
//Init
const LASTINDEXOFALBUMS = 629;
const LASTINDEXOFAUTEURS = 159;
const LASTINDEXOFSERIES = 114;
var BDCardWrapper = document.getElementById("BDCardWrapper");
var selectedInputKey = "ref";
generateCard("2"); //remove me


/** == Search bars == */

/**Init */
var searchButton = document.getElementById("searchButton");
var searchBarSuggestionsBox = document.getElementById("refSearchBarSuggestionsBox");
var searchBarInput = document.getElementById("refInputResearchBar");
var searchData = titreInputResearchBar.value; //ajouter switch avec inputkey
var tempResults = [];

//inputKeys init
var refButton = document.getElementById("Ref-tab");
var titreButton = document.getElementById("Titre-tab");
var auteurButton = document.getElementById("Auteur-tab");
var serieButton = document.getElementById("Auteur-tab");
refButton.onclick = function() { selectInputKey("ref"); };
titreButton.onclick = function() { selectInputKey("titre"); };
auteurButton.onclick = function() { selectInputKey("auteur"); };
serieButton.onclick = function() { selectInputKey("serie"); };

/**sets the search bar and the suggestion box, accordingly to the inputKey
 * @param {String} inputKey : type of the parameter (ref, titre, auteur, serie)
 * return : change value of global vars searchBarSuggestionsBox and searchBarInput;
 */
function setSearchBarInputAndSuggestion(inputKey) {
    switch (inputKey) {
        case "ref":
            searchBarInput = document.getElementById("refInputResearchBar");
            searchBarSuggestionsBox = document.getElementById("refSearchBarSuggestionsBox");
            break;
        case "titre":
            searchBarInput = document.getElementById("titreInputResearchBar");
            searchBarSuggestionsBox = document.getElementById("titreSearchBarSuggestionsBox");
            break;
        case "auteur":
            searchBarInput = document.getElementById("auteurInputResearchBar");
            searchBarSuggestionsBox = document.getElementById("auteurSearchBarSuggestionsBox");
            break;
        case "serie":
            searchBarInput = document.getElementById("serieInputResearchBar");
            searchBarSuggestionsBox = document.getElementById("serieSearchBarSuggestionsBox");
            break;
        default:
            searchBarInput = document.getElementById("refInputResearchBar");
            searchBarSuggestionsBox = document.getElementById("refSearchBarSuggestionsBox");
    }
}

/** selects an input key for setting the right tab and research
 * sets up the research bar input box accordingly, by calling setSearchBarInputAndSuggestion()
 * @param {String} inputKey : type of the parameter (ref, titre, auteur, serie)
 * Output : changes the value of global var selectedInputKey
 */
function selectInputKey(inputKey) {
    switch (inputKey) {
        case "ref":
            selectedInputKey = "ref";
            setSearchBarInputAndSuggestion(inputKey);
            break;
        case "titre":
            selectedInputKey = "titre";
            setSearchBarInputAndSuggestion(inputKey);
            break;
        case "auteur":
            selectedInputKey = "auteur";
            setSearchBarInputAndSuggestion(inputKey);
            break;
        case "serie":
            selectedInputKey = "serie";
            setSearchBarInputAndSuggestion(inputKey);
            break;
        default:
            selectedInputKey = "ref";
            setSearchBarInputAndSuggestion("ref");
    }
}

/**adding an event (e) to the onkeyup event
 * @param {String} letters typed in searchBarInput
 */
searchBarInput.onkeyup = (e) => {
    searchData = e.target.value.toLowerCase(); //filling this var with all letters typed
    autoCompletion(searchData, '5');
}

/**Searches for close matches beetwin user input and database items
 * The data found is stored in the local {Array} tempResults
 * @param {String} data : updates everytime the user types
 * //param {String} inputKey : allows to change database tables and entry keys
 * @param {Number} numOfItemsReturned : number of items wanted for display
 */
function autoCompletion(data, /*inputKey,*/ numOfItemsReturned) {

    let found = false; //flag
    let k = 0; //iterator for number of items to return

    //Check if input bar is empty, if so, stop
    if (data == "") {
        searchBarSuggestionsBox.innerHTML = "";
        return;
    }

    //Run iterator trough database
    for (let i = 1; k < numOfItemsReturned; i++) {
        //End of iteration if no result
        if (i == LASTINDEXOFALBUMS + 1) {
            break;
        }

        //Init
        let j = i.toString();
        let target;

        //Leap over empty refs and pass to next iteration
        try {
            target = albums.get(j).titre.toLowerCase();
        } catch {
            continue;
        }

        //Compare targeted item of database with data from input passed as parameter, both data and target toLowerCased
        if (target != undefined && target.indexOf(data) != -1) {
            found = true;
            k++;
            tempResults.push(albums.get(j));
            displayTempResultsBox(true);
        }
    }

    //Notify if nothing is found
    if (!found) {
        displayTempResultsBox(false);
    }

    //clear the temporary results everytime to avoid multiplicating items
    tempResults = [];
}

/**Displays a list of the closest matches found by the function autoCompletion()
 * @param {Boolean} match : false when no match is found  
 */
function displayTempResultsBox(match) {
    //Clear box
    searchBarSuggestionsBox.innerHTML = "";

    //Fill box
    if (!match) {
        searchBarSuggestionsBox.innerHTML = '<em>Pas de correspondance ;-(</em>';
    } else {
        let tempResultItemPaternUl = document.createElement("ul");
        for (let i = 0; i < tempResults.length; i++) {
            let tempResultItemPaternLi = document.createElement("li");
            tempResultItemPaternLi.style.listStyle = "none";
            tempResultItemPaternLi.innerHTML = tempResults[i].titre;
            tempResultItemPaternUl.appendChild(tempResultItemPaternLi);
        }
        searchBarSuggestionsBox.appendChild(tempResultItemPaternUl);
    }
}

/** Item Assembler
 * Pulls all parameters of a ref from all database maps +img source url, and assembles them in one item
 * @param {String} albumsKey : String containing a number (!)implicite conversion doesn't work everytime
 *                 key of an item from database map named albums
 * @returns {Object} returns an object with all parameters, same parameter names as the database maps'
 */
function assembleItem(albumsKey) {
    try {
        //albums params
        let titre = albums.get(albumsKey).titre;
        let numero = albums.get(albumsKey).numero;
        let prix = albums.get(albumsKey).prix; // remove ?

        //auteurs params
        let idAuteur = auteurs.get(albums.get(albumsKey.toString()).idAuteur).nom;

        //series params
        let idSerie = series.get(albums.get(albumsKey.toString()).idSerie).nom;

        //img source URL
        let img = "../ressource/albums/" + idSerie + "-" + numero + "-" + titre + ".jpg";
        //output
        return { titre: titre, numero: numero, prix: prix, idAuteur: idAuteur, idSerie: idSerie, img: img };
    } catch {
        return { titre: "Cette Ref. n'existe pas", numero: "", prix: "", idAuteur: "", idSerie: "", img: "" };
    }
}


// == BD card ==

/** Generates and displays a card in the DOM
 * @param {String} albumsKey : String containing a number (!)implicite conversion doesn't work everytime
 *                 key of an item from database map named albums
 */
function generateCard(albumsKey) {
    //clear box
    BDCardWrapper.innerHTML = "";

    //Init
    var canBorrow = true; //A déclarer ailleurs, en global ou en param ici ?
    let cardItem = assembleItem(albumsKey);

    //fill box
    let patern = document.createElement('div');
    patern.classList.add("card", "p-2", "rounded-0", "col-md-6");
    patern.style = "width: 100%;";

    let img = document.createElement('img');
    img.classList.add("card-img-top", "p-2");
    img.setAttribute('src', cardItem.img);
    img.setAttribute('alt', cardItem.titre);

    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body");

    let h3Titre = document.createElement('h3');
    h3Titre.classList.add("card-title");
    h3Titre.innerHTML = cardItem.titre;

    let pRef = document.createElement('p');
    pRef.classList.add("card-text");
    pRef.innerHTML = "Ref. : ";
    let aPRef = document.createElement('span');
    aPRef.style.textDecoration = "underline";
    aPRef.style.cursor = "pointer";
    aPRef.onclick = function() { redirectResearch(albumsKey, "ref") };
    aPRef.innerHTML = albumsKey;
    pRef.appendChild(aPRef);

    let pAuteurs = document.createElement('p');
    pAuteurs.classList.add("card-text");
    pAuteurs.innerHTML = "Auteurs : ";
    let aPAuteurs = document.createElement('span');
    aPAuteurs.style.textDecoration = "underline";
    aPAuteurs.style.cursor = "pointer";
    aPAuteurs.onclick = function() { redirectResearch(cardItem.idAuteur, "auteur") };
    aPAuteurs.innerHTML = cardItem.idAuteur;
    pAuteurs.appendChild(aPAuteurs);

    let pSerie = document.createElement('p');
    pSerie.classList.add("card-text");
    pSerie.innerHTML = "Séries : ";
    let aPSerie = document.createElement('span');
    aPSerie.style.textDecoration = "underline";
    aPSerie.style.cursor = "pointer";
    aPSerie.onclick = function() { redirectResearch(cardItem.idSerie, "serie") };
    aPSerie.innerHTML = cardItem.idSerie;
    pSerie.appendChild(aPSerie);

    let pNumero = document.createElement('p');
    pNumero.classList.add("card-text");
    pNumero.innerHTML = "Numéro : " + cardItem.numero;

    let aBtnEmprunt = document.createElement('a');
    aBtnEmprunt.classList.add("btn", "btn-info", "float-end");
    aBtnEmprunt.setAttribute('data-bs-toggle', "modal");
    if (canBorrow) {
        aBtnEmprunt.setAttribute('data-bs-target', "#confirmBorrow");
    } else {
        aBtnEmprunt.setAttribute('data-bs-target', "#cancelBorrow");
    }
    aBtnEmprunt.innerHTML = "Emprunter";

    cardBody.appendChild(h3Titre);
    cardBody.appendChild(pAuteurs);
    cardBody.appendChild(pRef);
    cardBody.appendChild(pSerie);
    cardBody.appendChild(pNumero);
    cardBody.appendChild(aBtnEmprunt);

    patern.appendChild(img);
    patern.appendChild(cardBody);

    BDCardWrapper.appendChild(patern);
}

/** Selects a string with a click and throws a research with it as the research input
 * @param {String} input : a parameter from an item 
 * @param {String} inputKey : type of the parameter (ref, titre, auteur, serie)
 */
function redirectResearch(input, inputKey) {
    //Init
    let refTab = document.getElementById("Ref-tab");
    let titreTab = document.getElementById("Titre-tab");
    let auteurTab = document.getElementById("Auteur-tab");
    let serieTab = document.getElementById("Serie-tab");
    let refInputResearchBar = document.getElementById("refInputResearchBar");
    let titreInputResearchBar = document.getElementById("titreInputResearchBar");
    let auteurInputResearchBar = document.getElementById("auteurInputResearchBar");
    let serieInputResearchBar = document.getElementById("serieInputResearchBar");

    //select key and fill input
    switch (inputKey) {
        case "ref":
            refTab.click();
            serieInputResearchBar.value = input;
            break;
        case "titre":
            titreTab.click();
            refInputResearchBar.value = input;
            break;
        case "auteur":
            auteurTab.click();
            titreInputResearchBar.value = input;
            break;
        case "serie":
            serieTab.click();
            auteurInputResearchBar.value = input;
            break;
        default:
            refTab.click();
            serieInputResearchBar.value = input;
    }

    //launch search
    searchButton.click();
}