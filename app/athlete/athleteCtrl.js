JudoApp.controller("athleteCtrl", function ($scope, $location, athletes, $routeParams, Athlete) {
      // If the user is not logged in going back to home screen
  if (!activeUser.isLoggedIn()) {
    $location.path("/");
    return;
  }

  if (athletes.getAll().length === 0) {
    $scope.athletes = [];
    $http.get("app/data/athlete.json").then(function mySuccess(response) {
      // Updating the service with the data
      athletes.setAthletes(response.data);
      // Getting the data from the service


      $scope.athletes = athletes.getAll();
    }, function myError(response) {
      alert("error" + JSON.stringify(response.status));
    })
  } else {
    $scope.athletes = athletes.getAll();
  }

})