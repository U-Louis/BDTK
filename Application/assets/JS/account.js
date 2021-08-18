(function(){
    var id = getCookie("id");
    var arrListofBook = users.get(id)["listofbook"]
    welcomeMsg(id);
    showInfo(id);
    contributionMsg(id);
    showListOfBook(arrListofBook);
}());

function welcomeMsg(id){
    document.querySelector("#titlename").innerHTML = users.get(id)["firstname"];
}

function showInfo(id){
    var arrInfo = ["name", "firstname" , "dateofbirth" ,
    "address1" , "address2"  ,"postalcode" , "city" , 
    "email" , "mobilenumber" , "homenumber"];
    
    for(i in arrInfo){
        let thAct = "th" + arrInfo[i];
        let info = arrInfo[i]
        if(users.get(id)[info] == ""){
            document.querySelector("#"+thAct).innerHTML =  " ";
        }else{
            document.querySelector("#"+thAct).innerHTML =  users.get(id)[info];
        }
        
    }
}

function contributionMsg(id){
    var isUpdate = users.get(id)["status"].get("isUpdated");
    var isAdherent = users.get(id)["status"].get("hasRightAdherent")
    var spanContribution =  document.querySelector("#spancontribution");
    var divContribution = document.querySelector("#divcontribution")
    if (isUpdate == "true" && isAdherent == "true"){
        spanContribution.innerHTML = "Votre cotisation est à jour.";
        spanContribution.classList.add("bg-success");
        divContribution.classList.replace("d-none","d-block")
    }else if (isUpdate == "false" && isAdherent == "true"){
        spanContribution.innerHTML = "Votre cotisation n'est pas à jour.";
        spanContribution.classList.add("bg-danger");
        divContribution.classList.replace("d-none","d-block")
    }
}

function showListOfBook(list){
    var tbody = document.querySelector("#idemprunt table tbody")
    for(index in list){
        var tr = document.createElement("tr");
        tr.innerHTML = "test";
        tbody.appendChild(tr);
    }
    
}

/* <tbody>
<tr scope="row">
<td id="#">439</td>
<td>Montespa</td>
<td>06/12/2021</td>
</tr>
</tbody> */