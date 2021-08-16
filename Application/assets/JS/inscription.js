/**----------------------------Initialisation----------------------------------
 * Declaration of variable
 */
var varElement = { 
"name" : document.getElementById("inputnom"),
"firstName" : document.getElementById("inputprenom"),
"dateOfBirth" : document.getElementById("inputbirth"),
"address1" : document.getElementById("inputadresse1"),
"address2" : document.getElementById("inputadresse2"),
"postalCode" : document.getElementById("inputpostale"),
"email" : document.getElementById("inputemail"),
"mobile" : document.getElementById("inputmobile"),
"home" : document.getElementById("inputhome")
};
//-------------------------------Event----------------------------------
// Link input with the event key up and control of inputs
varElement["dateOfBirth"].addEventListener("keyup", function(event){
  if (!controlInputBirth(varElement["dateOfBirth"].value) && varElement["dateOfBirth"].value!=""){
  document.querySelector("#invalid-date").classList.replace("d-none","d-inline");
  event.preventDefault();
  event.stopPropagation();
}else {
  document.querySelector("#invalid-date").classList.replace("d-inline","d-none");
}
})

varElement["mobile"].addEventListener("keyup", function(event){
  if (!controlInputNumberMobile(varElement["mobile"].value) && varElement["mobile"].value!=""){
  document.querySelector("#invalid-mobile").classList.replace("d-none","d-inline");
  event.preventDefault();
  event.stopPropagation();
}else {
  document.querySelector("#invalid-mobile").classList.replace("d-inline","d-none");
}
})

varElement["home"].addEventListener("keyup", function(event){
  if (!controlInputHome(varElement["home"].value) && varElement["home"].value!=""){
  document.querySelector("#invalid-home").classList.replace("d-none","d-inline");
  event.preventDefault();
  event.stopPropagation();
}else {
  document.querySelector("#invalid-home").classList.replace("d-inline","d-none");
}
})

varElement["email"].addEventListener("keyup", function(event){
  if (!controlInputEmail(varElement["email"].value) && varElement["email"].value!=""){
  document.querySelector("#invalid-email").classList.replace("d-none","d-inline");
  event.preventDefault();
  event.stopPropagation();
}else {
  document.querySelector("#invalid-email").classList.replace("d-inline","d-none");
}
})

varElement["address1"].addEventListener("keyup", function(event){
  if (!controlInputAddress(varElement["address1"].value) && varElement["address1"].value!=""){
  document.querySelector("#invalid-address1").classList.replace("d-none","d-inline");
  event.preventDefault();
  event.stopPropagation();
}else {
  document.querySelector("#invalid-address1").classList.replace("d-inline","d-none");
}
})
// -----------------------------Functions--------------------------------------
/**
 * Test de regular expression of the input of mobile number
 * @function controlInputNumberMobile
 * @param {String} mobilenumber
 * @returns {Boolean}
 */
function controlInputNumberMobile(mobilenumber){
    var myReg = /^0[6,7](\ \d{2}){4}$/;
    return myReg.test(mobilenumber);
}

/**
 * Test de regular expression of the input of home number
 * @function controlInputHome
 * @param {String} homenumber
 * @returns {Boolean}
 */
function controlInputHome(homenumber){
  var myReg = /^0[1,2,3,4,5,9](\s\d{2}){4}$/;
  return myReg.test(homenumber);
}

/**
 * Test de regular expression of the input of email
 * @function controlInputEmail
 * @param {String} email
 * @returns {Boolean}
 */
function controlInputEmail(email){
  var myReg = /^(\w+\W*\w*)@\w{2,}.[a-zA-Z]{2,}/;
  return myReg.test(email);
}

/**
 * Test de regular expression of the input of a date 
 * @function controlInputBirth
 * @param {String} birth
 * @returns {Boolean}
 */
 function controlInputBirth(birth){
   let myReg = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/gm;
   return myReg.test(birth);
 }

 /**
 * Test de regular expression of the input of an adsress
 * @function controlInputAddress
 * @param {String} adress
 * @returns {Boolean}
 */
function controlInputAddress(address){
  var myReg =/((([\p{Latin}'.]*\s)\d*(\s[\p{Latin}']*)*,)*\d*(\s[\p{Latin}']*))+/;
  return myReg.test(address);
}

/**
 * Test de regular expression of the input of postalcode
 * @function controlInputPostal
 * @param {String} postalcode
 * @returns {Boolean}
 */
function controlInputPostal(postalcode){
  var myReg = /^\d{5}$/;
  return myReg.test(postalcode);
}

// JavaScript for disabling form submissions if there are invalid fields or in the good format
/**
 * @function Noname
 * @param {None}
 */
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