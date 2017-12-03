var JudoApp = angular.module("JudoApp", ["ngRoute"]);

JudoApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
   })
   .when("/login", {
    templateUrl: "app/login/login.html",
    controller: "LoginCtrl"
   })
   .when("/branchs", {
    templateUrl: "app/branch/branch.html",
    controller: "branchCtrl"
   })
   .when("/events",{
    templateUrl: "app/event/eventGallery.html",
    controller: "eventGalleryCtrl"   
   })
   .when("/athletes",{
    templateUrl: "app/athlete/athlete.html"
   })
   .otherwise({
    redirectTo: "/"
   })
})

    JudoApp.controller("TestCtrl", function ($scope, User, activeUser, Branch, branchs) {
        var plainUser = {
            "email": "nir@nir.com",
            "password": "nir123",
            "firstName": "Nir",
            "lastName": "Channes",
        }

        var user = new User(plainUser);
        console.log(JSON.stringify(user));
        console.log(activeUser.isLoggedIn());
        activeUser.login(user);
        console.log(JSON.stringify(activeUser.get()));
        console.log(activeUser.isLoggedIn());
        activeUser.logout();
        console.log(activeUser.isLoggedIn());

//  JudoApp.controller("TestCtrl", function($scope, $http, $log, branchs) {
//      var branchsPlain = [{
//          "name":"אהרון דוידי אגמים",
//          "address": "שמורת נחל שניר 3",
//          "city":"נתניה",
//          "phone":"09-7664413",
//          "coach": "שני הרשקו",
//           "urlGoMap":"https://www.google.co.il/maps/place/%D7%90%D7%94%D7%A8%D7%95%D7%9F+%D7%93%D7%95%D7%99%D7%93%D7%99%E2%80%AD/@32.2900765,34.8533843,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4062cd9e4ad1:0xbe1590a9611ac915!8m2!3d32.290072!4d34.851201?hl=iw"
//      },
//      {
//          "name":"קולג'ים",
//          "address": "האוניברסיטה 1",
//          "city":"נתניה",
//          "phone":"09-8623692",
//          "coach":"מארט",
//          "urlGoMap":"https://www.google.co.il/maps/place/%D7%9E%D7%95%D7%A2%D7%93%D7%95%D7%9F+%D7%A1%D7%A4%D7%95%D7%A8%D7%98+%D7%A7%D7%95%D7%9C%D7%92'%D7%99%D7%9D%E2%80%AD/@32.307157,34.8802472,17z/data=!3m1!4b1!4m5!3m4!1s0x151d3feed89b2d75:0x9c0cda9b492e7ab2!8m2!3d32.3071525!4d34.8780639?hl=iw"
//      }]

//      branchs.setBranchs(branchsPlain);
//      console.log(branchs.getAll());

    // JudoApp.controller("TestCtrl",  function($scope, $http, $log, events) {
    //     var eventsPlain = [{
    //         "name":"גביע האיגוד - מס' 2",
    //         "city":"רעננה",
    //         "day":"ש",
    //         "fromDate":"24-11-2017",
    //         "toDate":"24-11-2017"
    //     },
    //     {
    //         "name":"טורניר החורף בג'ודו",
    //         "city":"פרדסיה",
    //         "day":"ו",
    //         "fromDate":"15-12-2017",
    //         "toDate":"15-12-2017"
    //     },
    //     {
    //         "name":"פסטיבל הג'ודו",
    //         "city":"אילת",
    //         "day":"ד-ש",
    //         "fromDate":"17-01-2018",
    //         "toDate":"20-01-2018"
    //     }] 

    //         events.setEvents(eventsPlain);
    //         console.log(events.getAll());

    // JudoApp.controller("TestCtrl",  function($scope, $http, $log, athletes) {
    //     var athletesPlain = [{
    //         "firstName":"מאיה",
    //         "lastName": "סטולר",
    //         "sex":"נ",
    //         "birthdate":"31-10-2008",
    //         "status":"פעיל",
    //         "egud": "כן"
    //     },
    //     {
    //         "firstName":"ישי",
    //         "lastName": "נקש",
    //         "sex":"ז",
    //         "birthdate":"31-03-2008",
    //         "status":"פעיל",
    //         "egud": "כן"
    //     },
    //     {
    //         "firstName":"עדן",
    //         "lastName": "שושן",
    //         "sex":"נ",
    //         "birthdate":"28-04-2009",
    //         "status":"פעיל",
    //         "egud": "לא"
    //     }]

    //     athletes.setAthletes(athletesPlain);
    //     console.log(athletes.getAll());

})