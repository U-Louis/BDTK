function testUser(key , inputuser){
    return users.get(key).username == inputuser;
    
}

function testPassword(key , inputpassword){
    return users.get(key).password == inputpassword;
}

function connectControl(inputuser , password) {
    for(const key of users.keys()){
        if (testUser(key , inputuser) && testPassword(key , password)){
            localStorage.setItem(key , users.get(key));
            
            return true;
        }
    }
    return false;
    }
