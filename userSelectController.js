var myAppModule = angular.module('myApp', []);
myAppModule.controller('userSelectController', function($scope, $http) {
  $scope.users = [{name: "me"}, {name: "you"}]
  $scope.usersLoaded=false;

  //TODO: Replace with endpoint to load user data
  $http.get('file:////Users/kwamina/dev/euro_payments/poly/index.html').success(function(data) {
    $scope.usersLoaded = true;
  }).
  error(function(data) {
    alert("unable to access backend");
  });

});
