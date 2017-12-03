
JudoApp.controller("branchCtrl", function($scope, $http, $log, branchs) {
  if (branchs.getAll().length === 0) {
    $scope.branchs = [];
    $http.get("app/data/branch.json").then(function mySuccess(response) {
        // Updating the service with the data
        branchs.setBranchs(response.data);
        // Getting the data from the service
        $scope.branchs = branchs.getAll();
        }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
        })
  } else {
        $scope.branchs = branchs.getAll();
  }

      $scope.sortBy = function(prop) {
        $scope.orderProp = prop;
      }
      
})