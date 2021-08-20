var idUser = ""
var username = document.querySelector("#inputuser");
var password = document.querySelector("#inputpassword");
/**
 * Test in the map users if the username in the map is the same in the input inputuser
 * @param {String} key The key of the map
 * @param {String} inputuser The username you want to test
 * @returns {Boolean} return the result of the test
 */
function testUser(key, inputuser) {
    return users.get(key).username == inputuser;

}
/**Test the password of an key given
 * @function testPassword
 * @param {String} key Key of the map users 
 * @param {String} inputpassword The string you want to test
 * @returns {Boolean}
 */
function testPassword(key, inputpassword) {
    return users.get(key).password == inputpassword;
}

/**
 * Test the couple of value username and the password
 * @function connectControl
 * @param {String} inputuser 
 * @param {String} inputpassword 
 * @returns {Boolean}
 */
function connectControl(inputuser, inpupassword) {
    for (const key of users.keys()) {
        if (testUser(key, inputuser) && testPassword(key, inpupassword)) {
            idUser = key;
            document.cookie = "id=" + idUser + " ; samesite=lax";
            document.cookie = "connected=true ; samesite=lax";
            localStorage.setItem("id", idUser);
            localStorage.setItem("connected", "true");
            return true;
        }
    }
    return false;
}

// starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                if (!connectControl(username.value, password.value)) {
                    document.querySelector("#connectionerror").classList.replace("d-none", "d-block");
                    event.preventDefault();
                }
                form.classList.add('was-validated')


            }, false)
        })

})()