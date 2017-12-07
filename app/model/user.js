// Shared User Constructor
JudoApp.factory("User", function(){
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.role     = plainObject.role;
    };

    return User;
});

// Service that manges the active user
JudoApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var isManager = function() {
        if(isLoggedIn() && user.role === "Manager"){
            return true;
        } else {
            return false;
        }
    };

    var isAthlete = function() {
        if(isLoggedIn() && user.role === "Athlete"){
            return true;
        } else {
            return false;
        }
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get,
        isManager: isManager,
        isAthlete: isAthlete
    };   
});