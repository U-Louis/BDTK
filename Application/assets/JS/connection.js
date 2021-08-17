var username = document.querySelector("#inputuser");
var password = document.querySelector("#inputpassword");
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          if(!connectControl(username.value , password.value)){
            document.querySelector("#connectionerror").classList.replace("d-none" , "d-block");
            event.preventDefault();
          }
          form.classList.add('was-validated')
          document.cookie= "id="+idUser;
          
          
        }, false)
      })
     
  })()

  
