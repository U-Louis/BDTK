/**----------------------------Initialisation----------------------------------
 * Declaration of variable
 */
var varElement = { 
"name" : document.querySelector("#inputname"),
"firstName" : document.querySelector("#inputfirstname"),
"dateOfBirth" : document.querySelector("#inputbirth"),
"address1" : document.querySelector("#inputadresse1"),
"address2" : document.querySelector("#inputadresse2"),
"postalCode" : document.querySelector("#inputpostale"),
"email" : document.querySelector("#inputemail"),
"mobile" : document.querySelector("#inputmobile"),
"home" : document.querySelector("#inputhome")
};
//-------------------------------Event----------------------------------
// Link input with the event key up and control of inputs

console.log(varElement.mobile);

varElement["mobile"].addEventListener("keyup", function(event){
  if (!controlInputNumberMobile(varElement["mobile"].value) && varElement["mobile"].value!=""){
  document.querySelector("#invalid-mobile").classList.replace("d-none","d-inline");
  event.preventDefault();
  event.stopPropagation();
}else {
  document.querySelector("#invalid-mobile").classList.replace("d-inline","d-none");
}
})

varElement["dateOfBirth"].addEventListener("keyup", function(event){
  if (!controlInputBirth(varElement["dateOfBirth"].value) && varElement["dateOfBirth"].value!=""){
  document.querySelector("#invalid-date").classList.replace("d-none","d-inline");
  event.preventDefault();
  event.stopPropagation();
  }else {
  document.querySelector("#invalid-date").classList.replace("d-inline","d-none");
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


// JavaScript for disabling form submissions if there are invalid fields or in the good format
/**
 * @function anonymous
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