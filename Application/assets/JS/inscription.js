var varElement = { 
"name" : document.getElementById("inputnom"),
"firstName" : document.getElementById("inputprenom"),
"dateOfBirth" : document.getElementById("inputbirth"),
"address1" : document.getElementById("inputadresse1"),
"address2" : document.getElementById("inputadresse2"),
"postalCode" : document.getElementById("inputpostale"),
"email" : document.getElementById("inputemail"),
"mobile" : document.getElementById("inputmobile"),
"home" : document.getElementById("inputfixe")
};

// document.getElementById("btninscrire").addEventListener("submit",function(e){controlAdd(e)});
// varElement["dateOfBirth"].addEventListener("keyup", )

function controlInputText(inputTextToTest){
    var myReg = /\w{2,}/;
    return myReg.test(inputTextToTest);
    
}

function controlInputNumberMobile(mobilenumber){
    var myReg = /^0[6,7](\ \d{2}){4}$/;
    return myReg.test(mobilenumber);
}

function controlInputHome(homenumber){
  var myReg = /^0[1,2,3,4,5,9](\s\d{2}){4}$/;
  return myReg.test(homenumber);
}


function controlInputEmail(email){
  var myReg = /^(\w+\W*\w*)@\w{2,}.[a-zA-Z]{2,}/;
  return myReg.test(email);
}
 function controlInputBirth(birth){
   let myReg = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/gm;
   return myReg.test(birth);
 }
function controlInputAddress(address){
  var myReg =/((([\p{Latin}'.]*\s)\d*(\s[\p{Latin}']*)*,)*\d*(\s[\p{Latin}']*))+/;
  return myReg.test(address);
}
function controlInputPostal(postalcode){
  var myReg = /^\d{5}$/;
  return myReg.test(postalcode);
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity() ) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated')
        if (!controlInputBirth(varElement["dateOfBirth"].value) && varElement["dateOfBirth"].value!=""){
          document.querySelector("#invalid-date").classList.replace("d-none","d-inline");
          event.preventDefault();
          event.stopPropagation();
        }
        
        if (!controlInputAddress(varElement["address1"].value) && varElement["address1"].value!=""){
          document.querySelector("#invalid-address").classList.replace("d-none","d-inline");
          event.preventDefault();
          event.stopPropagation();
        }

        if (!controlInputPostal(varElement["postalCode"].value) && varElement["postalCode"].value!=""){
          document.querySelector("#invalid-code").classList.replace("d-none","d-inline");
          event.preventDefault();
          event.stopPropagation();
        }

        if (!controlInputEmail(varElement["email"].value) && varElement["email"].value!=""){
          document.querySelector("#invalid-email").classList.replace("d-none","d-inline");
          event.preventDefault();
          event.stopPropagation();
        }
        
        if (!controlInputNumberMobile(varElement["mobile"].value) && varElement["mobile"].value!=""){
          document.querySelector("#invalid-mobile").classList.replace("d-none","d-inline");
          event.preventDefault();
          event.stopPropagation();
        }

        if (!controlInputHome(varElement["home"].value) && varElement["home"].value!=""){
          document.querySelector("#invalid-home").classList.replace("d-none","d-inline");
          event.preventDefault();
          event.stopPropagation();
        }

     
      }, false)
    })
    
})()