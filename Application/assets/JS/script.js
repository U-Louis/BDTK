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
const LASTINDEXOFALBUMS = 629;
const LASTINDEXOFAUTEURS = 159;
const LASTINDEXOFSERIES = 114;


/** == Search bars == */

/**Init */
var searchBarSuggestionsBox = document.getElementById("searchBarSuggestionsBox");
var searchBarInput = document.getElementById("searchBarInput");
var searchButton =  document.getElementById("searchButton");
var searchData = searchBarInput.value;
var tempResults = [];


/**
 * adding an event (e) to the onkeyup event
 * @param {String} letters typed in searchBarInput
 */
searchBarInput.onkeyup = (e) => {
searchData = e.target.value.toLowerCase(); //filling this var with all letters typed
autoCompletion(searchData, '5');
}

/**
 * Searches for close matches beetwin user input and database items
 * @param {String} data : updates everytime the user types
 * //param {String} inputKey : allows to change database tables and entry keys
 * //inputKeys : ref, titre, auteur, serie
 * @param {Number} itemsReturned : number of items wanted for display
 */
function autoCompletion(data, /*inputKey,*/ itemsReturned){

let found = false; //flag
let k =0; //iterator for number of items to return

for (let i =1; k < itemsReturned  ; i++){

  if(i==LASTINDEXOFALBUMS+1){
    break;
  }  

  let j = i.toString();
  let target;

  try {
     target = albums.get(j).titre.toLowerCase();
  }
  catch {
 //console.log("Ref. "+i+" doesn't exist.");
    continue;
  }
 //console.log("Ref. "+i+ " checked");
    
  if(target != undefined && target.indexOf(data) != -1 ){
    found = true;
    k++;
    tempResults.push(albums.get(j));
    updateTempResultsBox();
    //console.log("Ref. "+i+" found !");
  }
}
if(!found){
  console.log("no match");
}

//clear the temporary results everytime to avoid multiplicating items
tempResults = [];

}

/**
 * displays a list of the closest matches found by autoCompletion()
 */
function updateTempResultsBox(){
//Clear box
searchBarSuggestionsBox.innerHTML = "";

//Fill box
let tempResultItemPaternUl = document.createElement("ul");
for(let i = 0; i< tempResults.length; i++){
  let tempResultItemPaternLi = document.createElement("li");
  tempResultItemPaternLi.style.listStyle = "none";
  tempResultItemPaternLi.innerHTML = tempResults[i].titre;
  tempResultItemPaternUl.appendChild(tempResultItemPaternLi);
}
searchBarSuggestionsBox.appendChild(tempResultItemPaternUl);
}



