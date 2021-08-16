/**
 * Test regular expression of the input of mobile number
 * @function controlInputNumberMobile
 * @param {String} mobilenumber
 * @returns {Boolean}
 */
 function controlInputNumberMobile(mobilenumber){
    var myReg = /^0[6,7](\ \d{2}){4}$/;
    return myReg.test(mobilenumber);
}

/**
 * Test regular expression of the input of home number
 * @function controlInputHome
 * @param {String} homenumber
 * @returns {Boolean}
 */
function controlInputHome(homenumber){
  var myReg = /^0[1,2,3,4,5,9](\s\d{2}){4}$/;
  return myReg.test(homenumber);
}

/**
 * Test regular expression of the input of email
 * @function controlInputEmail
 * @param {String} email
 * @returns {Boolean}
 */
function controlInputEmail(email){
  var myReg = /^(\w+\W*\w*)@\w{2,}.[a-zA-Z]{2,}/;
  return myReg.test(email);
}

/**
 * Test regular expression of the input of a date 
 * @function controlInputBirth
 * @param {String} birth
 * @returns {Boolean}
 */
 function controlInputBirth(birth){
   let myReg = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/gm;
   return myReg.test(birth);
 }

 /**
 * Test regular expression of the input of an adsress
 * @function controlInputAddress
 * @param {String} adress
 * @returns {Boolean}
 */
function controlInputAddress(address){
  var myReg =/((([\p{Latin}'.]*\s)\d*(\s[\p{Latin}']*)*,)*\d*(\s[\p{Latin}']*))+/;
  return myReg.test(address);
}

/**
 * Test regular expression of the input of postalcode
 * @function controlInputPostal
 * @param {String} postalcode
 * @returns {Boolean}
 */
function controlInputPostal(postalcode){
  var myReg = /^\d{5}$/;
  return myReg.test(postalcode);
}