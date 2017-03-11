angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

console.log('TEST');
  // $scope.getAll = function () {
    Links.getAll()
      .then(function (data) {
        console.log('LinksController - data - getAll', data);
        $scope.data.links = data;
        console.log('$scope.data', $scope.data);
        // $location.path('/links');
      })
      .catch(function (error) {
        console.error('ERROR ----->>', error);
      });
  // };

  // $scope.addOne = function () {
  //   Links.addOne($scope.data)
  //     .then(function (data) {
  //       console.log('data - LinksController - addOne', data);
  //       $scope.data = data;
  //       // $location.path('/links');
  //     })
  //     .catch(function (error) {
  //       console.error('ERROR ----->>', error);
  //     });
  // };

});
