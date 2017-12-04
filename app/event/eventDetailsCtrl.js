JudoApp.controller("eventDetailsCtrl", function ($scope, $location, events, activeUser,  $routeParams, Event) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
        // Creating a copy of the event object so changes won't be reflected on the array
        $scope.event = new Event(events.getEventById($routeParams.eventIndex));
        console.log($scope.event);
    
        $scope.cancel = function() {
            $location.path("/events");
        }
    
        $scope.update = function() {
            events.update($routeParams.eventIndex, $scope.event);
            $location.path("/events");
        }
    
        $scope.remove = function() {
            events.remove($routeParams.eventIndex);
            $location.path("/events");
        }
        
    })