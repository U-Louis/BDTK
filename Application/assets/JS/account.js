(function(){
    var id = getCookie("id");
    var arrListofBook = users.get("id")[listofbook]
    welcomeMsg(id);
    showInfo(id);
    contributionMsg(id);
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
    var contribution =  document.querySelector("#idcontribution");
    if (isUpdate == "true"){
        contribution.innerHTML = "Votre cotisation est à jour.";
        contribution.classList.add("bg-success");
    }else{
        contribution.innerHTML = "Votre cotisation n'est pas à jour.";
        contribution.classList.add("bg-danger");
    }
}

func