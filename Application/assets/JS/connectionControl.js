var idUser = ""
function testUser(key , inputuser){
    return users.get(key).username == inputuser;
    
}

function testPassword(key , inputpassword){
    return users.get(key).password == inputpassword;
}

function connectControl(inputuser , password) {
    for(const key of users.keys()){
        if (testUser(key , inputuser) && testPassword(key , password)){
            idUser = key;
            return true;
        }
    }
    return false;
    }
