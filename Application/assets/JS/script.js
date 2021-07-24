function makeMenu(){
    var menu =["Catalogue", "Mon compte", "accueil"];
    var ul = document.createElement("ul");
    var nameClass = "list-group-item"
    document.createAttribute("class")
    var nav = document.querySelector("nav")
    nav.appendChild(ul);
    
    for (i in menu){
        var li = document.createElement("li")
        // var a = document.createElement("a")
        li.setAttribute("class","list-group-item")
        //  document.querySelector("li").appendChild(a);
        document.querySelector("ul").appendChild(li);
       
        li.innerHTML = menu[i] ;
    }

}

makeMenu();

{/* <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */}