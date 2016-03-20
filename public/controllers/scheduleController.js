
app.controller('scheduleController', function($scope, $log) {

        $scope.next = function() {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
        };
        $scope.previous = function() {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };

        var tabs = [
                { title: 'An I', content: "Tabs will become paginated if there isn't enough room for them."},
                { title: 'An II', content: "You can swipe left and right on a mobile device to change tabs."},
                { title: 'An III', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
                { title: 'An IV', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
                { title: '', content: ""}
            ],
            selected = null,
            previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 1;
        $scope.$watch('selectedIndex', function(current, old){
            previous = selected;
            selected = tabs[current];
            if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
            if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
        });

});
