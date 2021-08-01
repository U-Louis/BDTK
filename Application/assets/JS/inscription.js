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

function controlInputNumberMobile(){
    var myReg = /^0[6,7](\ \d{2}){4}$/;
    return myReg.test(varElement["mobile"].value);

}
 function controlInputBirth(birth){
   let myReg = /^\d{2}\/\d{2}\/\d{4}$/
   return myReg.test(birth);
 }

function controlInputPostal(){
  var myReg = /^\d{2}\ \d{3}$/;
  return myReg.test(varElement["postalCode"].value);
}



function controlAdd(event){
    for (key in varElement){
      if(!controlInputText(varElement[key].value)){
        document.getElementById("alertname").innerHTML = "Vous devez remplir ce champ"
        event.preventDefault();
       };
      
      
    }
}