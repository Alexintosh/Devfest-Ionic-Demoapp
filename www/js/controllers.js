angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeAbout= function() {
    $scope.modal.hide();
  };

  // Open the about modal
  $scope.about= function() {
    $scope.modal.show();
  };

})

.controller('CalendarCtrl', function($scope, days) {
	$scope.days = days;
})

.controller('PartnerCtrl', function($scope) {
	$scope.data = [
		{img:'google.png', name:'Google'},
		{img:'rotary.jpg', name:'Rotary club'},
		{img:'goowai.jpg', name:'Gooway'},
		{img:'startup.png', name:'StartUp Weekend Palermo'}
	];
})


.controller('HackCtrl', function($scope) {
})

.controller('IngressCtrl', function($scope) {
})

.controller('SpeechCtrl', function($scope, speech) {
	$scope.speech = speech;
});

