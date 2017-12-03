
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
  
        $scope.sortBy = function(prop) {
          $scope.orderProp = prop;
        }
        
function mydate() {
    alert("123");
    document.getElementById("dt").hidden = false;
    document.getElementById("ndt").hidden = true;
  }
  
  function mydate1() {
    d = new Date(document.getElementById("dt").value);
    dt = d.getDate();
    mn = d.getMonth();
    mn++;
    yy = d.getFullYear();
    document.getElementById("ndt").value = dt + "/" + mn + "/" + yy
    document.getElementById("ndt").hidden = false;
    document.getElementById("dt").hidden = true;
  }
})