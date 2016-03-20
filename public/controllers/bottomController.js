
    app.config(function($mdIconProvider) {
        $mdIconProvider
            .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
            .icon('upload', 'img/icons/upload.svg', 24)
            .icon('copy', 'images/content-copy.svg', 24)
            .icon('print', 'img/icons/print.svg', 24)
            .icon('hangout', 'images/hangouts.svg', 24)
            .icon('mail', 'images/email.svg', 24)
            .icon('message', 'images/message-text.svg', 24)
            .icon('copy2', 'images/content-copy.svg', 24)
            .icon('facebook', 'images/facebook-box.svg', 24)
            .icon('twitter', 'images/twitter-box.svg', 24);
    })
    app.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet, $mdToast) {
        $scope.alert = '';
        $scope.showListBottomSheet = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-list-template.html',
                controller: 'ListBottomSheetCtrl'
            }).then(function(clickedItem) {
                $scope.alert = clickedItem['name'] + ' clicked!';
            });
        };
        $scope.showGridBottomSheet = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'pages/bottomGrid.html',
                controller: 'GridBottomSheetCtrl',
                clickOutsideToClose: true
            }).then(function(clickedItem) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(clickedItem['name'] + ' clicked!')
                        .position('top right')
                        .hideDelay(1500)
                );
            });
        };
    })
    app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Share', icon: 'share-arrow' },
            { name: 'Upload', icon: 'upload' },
            { name: 'Copy', icon: 'copy' },
            { name: 'Print this page', icon: 'print' },
        ];
        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    app.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Hangout', icon: 'hangout' },
            { name: 'Mail', icon: 'mail' },
            { name: 'Message', icon: 'message' },
            { name: 'Copy', icon: 'copy2' },
            { name: 'Facebook', icon: 'facebook' },
            { name: 'Twitter', icon: 'twitter' },
        ];
        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    app.run(function($http, $templateCache) {
        var urls = [
            'public/bower_components/material-design-icons/social/svg/production/ic_share_48px.svg',
            'img/icons/upload.svg',
            'img/icons/copy.svg',
            'img/icons/print.svg',
            'img/icons/hangout.svg',
            'img/icons/mail.svg',
            'img/icons/message.svg',
            'img/icons/copy2.svg',
            './bower_components/material-design-icons/social/svg/production/ic_share_48px.svg',
            'img/icons/twitter.svg'
        ];
        angular.forEach(urls, function(url) {
            $http.get(url, {cache: $templateCache});
        });
    });