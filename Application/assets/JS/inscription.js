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

// document.getElementById("btninscrire").addEventListener("submit",function(e){controlAdd(e)});


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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity() ) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
         if (!controlInputBirth(varElement["dateOfBirth"].value && varElement["dateOfBirth"].value!="")){
          document.querySelector(".invalid-date").classList.replace("d-none","d-inline");
          event.preventDefault()
          event.stopPropagation()
        }
        if (!controlInputNumberMobile(varElement["dateOfBirth"].value )){
          document.querySelector(".invalid-date").classList.replace("d-none","d-inline");
          event.preventDefault()
          event.stopPropagation()
        }
        if (!controlInputFixe(varElement["dateOfBirth"].value)){
          document.querySelector(".invalid-date").classList.replace("d-none","d-inline");
          event.preventDefault()
          event.stopPropagation()
        }
        
      }, false)
    })
})()