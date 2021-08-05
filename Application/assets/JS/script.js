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

/** == Search bars == */

/**Init */
var searchBarSuggestionsBox = document.getElementById("searchBarSuggestionsBox");
var searchBarInput = document.getElementById("searchBarInput");
var searchButton =  document.getElementById("searchButton");
var searchData = searchBarInput.value;
var tempResults = [];


/**
 * adding an event (e) to the onkeyup event
 * @param {String} letter typed in searchBarInput
 */
searchBarInput.onkeyup = (e) => {
searchData = e.target.value; //filling this var with all letters typed
autoCompletion(searchData, '5');
}


function autoCompletion(data, /*inputKey,*/ itemsReturned){
//inputKeys : ref, titre, auteur, serie

let found = false; //flag
let k =0; //iterator for number of items to return

for (let i =1; k < itemsReturned  ; i++){

  if(i==LASTINDEXOFALBUMS+1){
    break;
  }  

  let j = i.toString();
  let target;

  try {
     target = albums.get(j).titre;
  }
  catch {
    console.log("Ref. "+i+" doesn't exist.");
    continue;
  }
  console.log("Ref. "+i+ " checked");
    
  if(target != undefined && target.indexOf(data) != -1 ){
    found = true;
    k++;
    tempResults.push(albums.get(j));
    //updateTempResultsBox();
    console.log("found !");
  }
}
if(!found){
  console.log("no match");
}
}




