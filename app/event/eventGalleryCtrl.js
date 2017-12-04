
JudoApp.controller("eventGalleryCtrl", function($scope, $http, events, $location, activeUser) {

      // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
      $location.path("/");
      return;
    }

    $scope.greetName = activeUser.get().firstName;
    if (events.getAll().length === 0) {
      $scope.events = [];
      $http.get("app/data/event.json").then(function mySuccess(response) {
          // Updating the service with the data
          events.setEvents(response.data);
          // Getting the data from the service


          $scope.events = events.getAll();
          }, function myError(response) {
          alert("error" + JSON.stringify(response.status));
          })
    } else {
          $scope.events = events.getAll();
    }

    $scope.fromDate = new Date("2017-09-01");
    $scope.toDate = new Date();

    $scope.isMoreThanOneDay=function(event){
      if (event.fromDate !== event.toDate) {
        return true;
      }else{
        return false;
      }
    };

    $scope.sortBy = function(prop) {
      $scope.orderProp = prop;
    }

    $scope.openDetails = function(index) {
      $location.path("/events/" + index)
    }
        
        
})