


app.controller("UploadPrompter", function($scope) {

  $scope.isTint = false;
  $scope.isHolder = false;

  $scope.makeTint = function() {
    $scope.isTint = true;
    document.getElementsByTagName('body')[0].style.overflow = "hidden"
    // console.log(body)
    var dropper = document.getElementById('holder').style.display = "block";
    // var options = document.getElementById('uploadOptions').style.display = "block";
  }

})


app.controller("DND", function($scope, $http) {
  $scope.process = function() {
    var pic = document.querySelector('.PerfectPic').src
    var question = document.querySelector('#fashionQuestionInput').value
    var data = {pics: pic, questions: question}
    $http.post('/file-upload', data).success(function(data) {
      console.log(data)
    });

  }

})

// app.controller("DragDropCtrl", function($scope) {
//   $scope.tests = {
//                     filereader: typeof FileReader != 'undefined',
//                     dnd: 'draggable' in document.createElement('span'),
//                     formdata: !!window.FormData,
//                     progress: "upload" in new XMLHttpRequest
//                 };
//   $scope.support = {

//                     filereader: document.getElementById('filereader'),
//                     formdata: document.getElementById('formdata'),
//                     progress: document.getElementById('progress')
//                 };
//   $scope.acceptedTypes = {
//                     'image/png': true,
//                     'image/jpeg': true,
//                     'image/gif': true
//                 };
//   $scope.browserTest1 = $scope.tests[filereader] === false;
//   $scope.browserTest2 = $scope.tests[formdata] === false;
//   $scope.browserTest3 = $scope.tests[progress] === false;

//   $scope.onDrop = function (data, event) {
//     // Get custom object data.
//     var customObjectData = data['image/png']; // {foo: 'bar'}

//     var uriList = data['text/uri-list']; // http://mywebsite.com/..
//     // ...
//   };
//   // Drag over handler.
//   $scope.onDragOver = function (event) {
//     console.log(event)
//     // ...
//   };
// });





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