(function() {
    'use strict';

    angular.module('<%= moduleName %>')
        .service('<%= serviceName %>', ['Restangular',
            function <%= serviceName %>(Restangular) {
                var service = {

                };

                return service;
            }
        ]);
}());
