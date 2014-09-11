


app.controller("PercentFitUpload", function($scope) {
  $scope.process = function() {
    console.log("tits")
    var DZ = Dropzone.forElement('.dropzone');
    DZ.processQueue();
  }

})

app.controller("PercentFitController", function($scope, $http) {
  $scope.picNumber = 0;
  $http.get('/images').success(function(data) {
    console.log(data)
    $scope.pics = data;
  });
  $scope.changePicNumber = function() {
    $scope.picNumber = $scope.picNumber + 1
  };
});
console.log("yo")