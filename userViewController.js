var myAppModule2 = angular.module('myApp');
myAppModule2.controller('userViewController', function($scope, $http) {
  $scope.userss = [{uid:0, name: "me", photo:"res/kwamina.png"}, {uid:1, name: "you"}, {uid:2, name: "them"}, {uid:2, name: "their"}]
  $scope.usersLoaded=false;

  //TODO: Replace with endpoint to load user data
  $http.get('file:////Users/kwamina/dev/euro_payments/poly/index.html').success(function(data) {
    $scope.usersLoaded = true;
  }).
  error(function(data) {
    alert("unable to access backend");
  });
});
