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



/** === CATALOG === */
//Init
const LASTINDEXOFALBUMS = 629;
const LASTINDEXOFAUTEURS = 159;
const LASTINDEXOFSERIES = 114;
var BDCardWrapper = document.getElementById("BDCardWrapper");


/** == Search bars == */
//inputKeys : ref, titre, auteur, serie


/**Init */
var searchBarSuggestionsBox = document.getElementById("searchBarSuggestionsBox");
var searchBarInput = document.getElementById("searchBarInput");
var searchButton = document.getElementById("searchButton");
var searchData = searchBarInput.value;
var tempResults = [];



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

/** Assembler */
/**
 * 
 * @param {String} albumsKey : String containing a number, implicite conversion doesn't work everytime
 * @returns 
 */
function assembleItem(albumsKey) {
    if (albumsKey == undefined || albumsKey == null) {
        return "item doesn't exist";
    }

    //albums params
    let titre = albumsKey.titre;
    let numero = albumsKey.numero;
    let prix = albumsKey.prix; // remove ?

    //auteurs params
    let idAuteur = auteurs.get(albumsKey.idAuteur).nom;

    //series params
    let idSerie = series.get(albumsKey.idSerie).nom;

    //output
    return { titre: titre, numero: numero, prix: prix, idAuteur: idAuteur, idSerie: idSerie };
}


/** == BD card == */

function generateCard(albumsKey) {
    //clear box
    // BDCardWrapper.innerHTML = "";

    //Init
    let cardItem = assembleItem(albumsKey);

    //fill box


    let patern = document.createElement('div');
    patern.classList.add("card", "p-2", "rounded-0", "col-md-6");
    patern.style = "width: 100%;";

    let img = document.createElement('img');
    img.classList.add("card-img-top", "p-2");
    //   img.setAttribute('src', itemSource);
    //  img.setAttribute('alt', itemTitle);

    patern.appendChild(img)

    BDCardWrapper.appendChild(patern);
}

generateCard();