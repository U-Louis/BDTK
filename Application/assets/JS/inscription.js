var varElement = { 
"name" : document.getElementById("inputnom"),
"firstName" : document.getElementById("inputprenom"),
"dateOfBirth" : document.getElementById("inputbirth"),
"adress1" : document.getElementById("inputadresse1"),
"adress2" : document.getElementById("inputadresse2"),
"postalCode" : document.getElementById("inputpostale"),
"email" : document.getElementById("inputemail"),
"mobile" : document.getElementById("inputmobile"),
"fixe" : document.getElementById("inputfixe")
};

document.getElementById("btninscrire").addEventListener("click",function(e){controlAdd(e)});


function controlInputText(inputTextToTest){
    var myReg = /\w{2,}/;
    return myReg.test(inputTextToTest);
    
}

function controlInputNumber(){
    var myReg = /^0\d{9}$/;

}

function controlAdd(event){
    for (key in varElement){
      if(!controlInputText(varElement[key].value)){
        
        event.preventDefault();
      };
    }
}