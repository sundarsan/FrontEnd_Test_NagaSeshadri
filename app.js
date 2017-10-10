var app = angular.module('myApp', ['ui.router']);
app.config(function($stateProvider) {
    $stateProvider
    	.state('app', {
            url: '/app',
            templateUrl: 'views/core.layout.html'
        })

    	.state('app.news', {
            name: 'news',
            url: '/news',
            templateUrl: 'views/news.html'
        })

        .state('app.analytics', {
            name: 'analytics',
            url: '/analytics',
            templateUrl: 'views/analytics.html'
        })

        .state('app.boardbrief', {
            name: 'boardbrief',
            url: '/boardbrief',
            template: '<p>Just plain board brief area<p>'
        })

         .state('app.briefcase', {
            name: 'briefcase',
            url: '/briefcase',
            template: '<p>Just plain briefcase area<p>'
        })

})