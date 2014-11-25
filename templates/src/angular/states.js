(function() {
    'use strict';

    angular.module('<%= moduleName %>')
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function stateConfig($stateProvider, $urlRouterProvider) {
                var states = [];

                angular.forEach(states, function(state) {
                    $stateProvider.state(state);
                });

            }
        ]);
}());
