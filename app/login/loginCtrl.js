JudoApp.controller("LoginCtrl", function ($scope, $http, $location, User, activeUser) {
    
        // TODO: Delete this
        //$scope.email = "dalit.stolar@gmail.com";
        //$scope.password = "dalit123";

        $http.get("app/data/users.json").then(function (response) {
                $scope.users = [];
                for (var i = 0; i < response.data.length; i++) {
                    $scope.users.push(new User(response.data[i]));
                }
                console.log(JSON.stringify($scope.users));
        });

        $scope.failedAttempt = false;

        $scope.login = function() {
                var user = getLoggedInUser();
                if (user != null) {
                    activeUser.login(user);
                    $location.path("/events")
                } else {
                    $scope.failedAttempt = true;
                }
                console.log($scope.email + " " + $scope.password)
            }
                var getLoggedInUser = function() {
                for (var i = 0; i < $scope.users.length; i++) {
                    if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                        return $scope.users[i];
                    }
                }
                return null;
        }

        
        
})
