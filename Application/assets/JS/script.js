/**Get the storage in a cookie and return the value of the id.
 * @function getCookie
 * @returns Array
 */

function getCookie(name) {
    var arrCookie = document.cookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var cookiePair = arrCookie[i].split("=");
        if (name == cookiePair[0]) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
}