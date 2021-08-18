(function(){
    var id = getCookie("id");
    welcomeMsg(id);
    showInfo(id);
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