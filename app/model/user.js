// Shared User Constructor
JudoApp.factory("User", function(){
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        //this.roll     = plainObject.roll;
    };

    return User;
});

// Service that manges the active user
JudoApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var isManagerIn = function() {
        if(user.manager === "yes"){
            return true;
        } else {
            return false;
        }
        return user ? true : false;
    };

    var isAthleteIn = function() {
        if(user.athlete === "yes"){
            return true;
        } else {
            return false;
        }
        return user ? true : false;
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
        get: get
    };   
});