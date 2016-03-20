app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        // route for the home page
        .when('/schedule', {
            templateUrl: 'pages/schedule.html',
            controller: 'scheduleController'
        });
});
app.config(function ($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue', {
            'default': '600',
            'hue-1': 'A700',
            'hue-2': '700',
            'hue-3': '800'
        })

    //theme for content page
    $mdThemingProvider.theme('contentPage')
        .primaryPalette('light-blue')
        .accentPalette('teal')
        .warnPalette('red')

    //theme for search element
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('light-blue',{
            'default':'50'
        })
        .primaryPalette('light-blue',{
            'default':'50'
        })

});


app.controller('AppController', function ($mdSidenav, $scope, $log) {
    var vm = this;

    vm.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    vm.openHome = function () {
        document.location.href = 'index.html#/';
    }

});