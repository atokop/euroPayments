var myAppModule = angular.module('myApp', []);
myAppModule.controller('userSelectController', function($scope, $http) {
  $scope.users = [{uid:0, name: "me", photo:"res/kwamina.png"}, {uid:1, name: "you"}]
  $scope.usersLoaded=false;

  //TODO: Replace with endpoint to load user data
  $http.get('file:////Users/kwamina/dev/euro_payments/poly/index.html').success(function(data) {
    $scope.usersLoaded = true;
    console.log($scope.users);
  }).
  error(function(data) {
    alert("unable to access backend");
  });
});
