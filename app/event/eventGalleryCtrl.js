
JudoApp.controller("eventGalleryCtrl", function($scope, $http, $log, events) {
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
        
        
})