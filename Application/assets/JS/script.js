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
/* var hasRightsAdherent = false;
var hasRightsBibliothecaire = false;
var hasRightsGestionnaire = false;
var hasRightsResponsable = false;
var hasRightsAdmin = false;




/**Get the storage in a cookie and return the value of the id.
 * @function getCookie
 * @returns Array
 */

function getCookie(name){
    var arrCookie = document.cookie.split("; ");
    for (var i = 0; i<arrCookie.length; i++){
        var cookiePair = arrCookie[i].split("=");
        if (name == cookiePair[0]){
            return decodeURIComponent(cookiePair[1]);
        }
    }
}

