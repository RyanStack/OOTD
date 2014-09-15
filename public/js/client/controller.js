


app.controller("UploadPrompter", function($scope) {

  $scope.isTint = false;
  $scope.isHolder = false;

  $scope.makeTint = function() {
    $scope.isTint = true;
    var dropper = document.getElementById('holder').style.display = "block";
    var options = document.getElementById('uploadOptions').style.display = "block";
  }

})


app.controller("PercentFitUpload", function($scope) {
  $scope.process = function() {
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