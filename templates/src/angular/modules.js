(function() {
    'use strict';

    angular.module('<%= moduleName %>', [
            'templates',
            'ui.router',
            'restangular'
        ])
        .run(['$rootScope',
            function moduleRun($rootScope) {

            }
        ]);
}());
