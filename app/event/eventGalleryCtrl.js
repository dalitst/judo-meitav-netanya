
JudoApp.controller("eventGalleryCtrl", function ($scope, $http, events, $location, activeUser) {

  
  // If the user is not logged in going back to home screen
  if (!activeUser.isLoggedIn()) {
    $location.path("/");
    return;
  }

  $scope.query = {name:""};

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

  $scope.isMoreThanOneDay = function (event) {
    if (event.fromDate !== event.toDate) {
      return true;
    } else {
      return false;
    }
  };

  $scope.isManager = function(){
    return activeUser.get().role === "Manager" ? true : false;
  }

  $scope.sortBy = function (prop) {
    $scope.orderProp = prop;
  }

  $scope.openDetails = function (event) {
    var index = $scope.events.indexOf(event);
    $location.path("/events/" + index)
  }

  $scope.openNew = function () {
    $location.path("/new")
  }


  $scope.filterByNameAndDates = function (event) {
    var currentfromDate = new Date(event.fromDate);
    var currenttoDate = new Date(event.toDate);

    if ((currentfromDate <= $scope.toDate && currentfromDate >= $scope.fromDate) &&
      (currenttoDate <= $scope.toDate && currenttoDate >= $scope.fromDate)) {
        if ($scope.query.name === "") {
          // We are in the date range and there is no search by name - return true
          return true;
        } else if (event.name.includes($scope.query.name)) {
          // We are in the date range and also the name is in the event name - return true
          return true;
        } else {
          // We are in the date range but the name is not in the event - return false
          return false;
        }
    } else {
      // We are not in the date range - return false
      return false;
    }
  }

  $scope.filterByDateRange = function (event) {
    var currentfromDate = new Date(event.fromDate);
    var currenttoDate = new Date(event.todate);

    if ((currentfromDate <= $scope.toDate && currentfromDate >= $scope.fromDate) &&
      (currenttoDate <= $scope.toDate && currenttoDate >= $scope.fromDate)) {
      return true;
    } else {
      return false;
    }
  }

})