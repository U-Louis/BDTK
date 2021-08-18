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

/** removes elements if rights are not granted to the user connected
 * @param {String} rightsNeededMask : string of 6 {0-1] digits, 1 if he has the right
 * @param {Element} elementToRestrict : HTML element to remove
 */
function authorizeElement(rightsNeededMask, elementToRestrict) {
    //INIT
    let userRightsMask = "";
    //get cookie
    let userInfos = getCookie("id");
    //get user item
    let userItem = users.get(userInfos.toString());

    //PROCESS
    //assemble rights mask
    if (userItem.status.hasRightAdherent) { userRightsMask += "1" } else { userRightsMask += "0" };
    if (userItem.status.isUpToDate) { userRightsMask += "1" } else { userRightsMask += "0" };
    if (userItem.status.hasRightBibliothecaire) { userRightsMask += "1" } else { userRightsMask += "0" };
    if (userItem.status.hasRightGestionnaire) { userRightsMask += "1" } else { userRightsMask += "0" };
    if (userItem.status.hasRightResponsable) { userRightsMask += "1" } else { userRightsMask += "0" };
    if (userItem.status.hasRightAdmin) { userRightsMask += "1" } else { userRightsMask += "0" };

    //COMPARE
    //not a visitor rights (if user has at least 1(any) right)
    if (rightsNeededMask == "2") {
        if (!(parseFloat(userRightsMask) > 0)) {
            elementToRestrict.remove();
        }
    } else {
        //check rights if user is logged
        if (userRightsMask != rightsNeededMask) {
            elementToRestrict.remove();
        }
    }
}