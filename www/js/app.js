// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.service('SpeechService', function($q) {
  return {
    days: [ { day: 'Sabato 18', id:1, speechs:[
    	{ id: 1, time: '15:00', title: 'Presentazione iniziale', author: ''},
    	{ id: 2, time: '15:20', title: 'Google Wear', author: 'Andrea Battaglia', img:'battaglia'},
    	{ id: 3, time: '16:00', title: 'Continuous Integration e High Quality Code', author: 'Daniele Mondello', img:'mondello'},
    	{ id: 4, time: '16:40', title: 'Arduino e node.js', author: 'Angelo Zaia', img:'zaia'},
    	{ id: 5, time: '18:00', title: 'Break', author: ''},
    	{ id: 6, time: '18:15', title: 'ServiceWorker', author: 'Sandro Paganotti', img:'paganotti'},
    	{ id: 7, time: '19:00', title: 'Polymer + Docker', author: 'Alex Vaghin', img:'vaghin'},
    	{ id: 8, time: '19:40', title: 'Lancio Hackathon', author: ''},
    	{ id: 9, time: '21:15', title: 'Cena', author: ''},
    ]},
    { day: 'Domenica 19', id:2, speechs:[
    	{ id: 10, time: '9:00', title: 'Material Design', author: 'Pietro Alberto Rossi', img: 'rossi'},
    	{ id: 11, time: '9:40', title: 'Gestione di un progetto, tecniche Agili', author: 'Elisa Barbagiovanni', img: 'barbagiovanni'},
    	{ id: 12, time: '10:20', title: ' Google Wear', author: 'Alfredo Morresi', img: 'morresi'},
    	{ id: 13, time: '11:00', title: 'Break', author: ''},
    	{ id: 14, time: '11:10', title: 'Polymer', author: 'Micheal Murabito', img: 'murabito'},
    	{ id: 15, time: '11:50', title: 'Il personal brand sui social Google+ Facebook', author: 'Erika Rotella', img: 'rotella'},
    	{ id: 16, time: '12:30', title: 'Google Analytics', author: 'Andrea Cardinale', img: 'cardinale'},
    	{ id: 17, time: '13:15', title: 'Pranzo', author: '', img: ''},
    	{ id: 18, time: '14:30', title: 'Spring Boot & AngularJS', author: 'Pietro Bonanno', img: 'bonanno'},
    	{ id: 19, time: '15:10', title: 'AngularJS', author: 'Alessio Delmonti ', img: 'delmonti'},
    	{ id: 20, time: '15:50', title: 'Android nei market Samsung', author: 'Simone Cascino', img: 'cascino'},
    	{ id: 21, time: '16:30', title: 'GoLang - AppEngine', author: 'Gabriele Baldoni', img: 'baldoni'},
    	{ id: 22, time: '17:10', title: 'Show Hackathon e Premiazioni', author: ''}
    ]}  ],
    getDays: function() {
      return this.days
    },
    getSpeech: function(speechId) {
      var dfd = $q.defer()
      this.days.forEach(function(day) {
      		day.speechs.forEach(function(speech){
			if (speech.id == speechId) {
				dfd.resolve(speech);
			}
		})
      })

      return dfd.promise
    }
  }
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
    .state('app.calendar', {
      url: "/calendar",
      views: {
        'menuContent' :{
          templateUrl: "templates/calendar.html",
          controller: 'CalendarCtrl',
	  resolve: {
	  	days: function(SpeechService) {
			return SpeechService.getDays()
		}
	   }
        }
      }
    })
    .state('app.hack', {
      url: "/hack",
      views: {
        'menuContent' :{
          templateUrl: "templates/hack.html",
          controller: 'HackCtrl'
        }
      }
    })
    .state('app.partner', {
      url: "/partners",
      views: {
        'menuContent' :{
          templateUrl: "templates/sponsor.html",
          controller: 'PartnerCtrl'
        }
      }
    })
    .state('app.ingress', {
      url: "/ingress",
      views: {
        'menuContent' :{
          templateUrl: "templates/ingress.html",
          controller: 'IngressCtrl'
        }
      }
    })

    .state('app.speech', {
      url: "/speech/:speechId",
      views: {
        'menuContent' :{
          templateUrl: "templates/speech.html",
          controller: 'SpeechCtrl',
	  resolve: {
		speech: function(SpeechService, $stateParams) {
			return SpeechService.getSpeech($stateParams.speechId);
		}
	   }
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/calendar');
});

