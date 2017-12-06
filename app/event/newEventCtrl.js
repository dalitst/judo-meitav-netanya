JudoApp.controller("NewEventCtrl", function ($scope, $location, events, activeUser, Event) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
        
        $scope.event = new Event({});
        console.log($scope.event);
    
        $scope.cancel = function () {
            $location.path("/events");
        }
    
        $scope.create = function () {
            events.add($scope.event);
            $location.path("/events");
        }
    });