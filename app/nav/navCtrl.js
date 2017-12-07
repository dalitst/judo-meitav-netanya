JudoApp.controller("navCtrl", function ($scope, activeUser, $location) {
    
    //$scope.isLoggedIn = activeUser.isLoggedIn();
    

    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };

    $scope.logout = function() {
        activeUser.logout();
        $location.path("/");
    }
});