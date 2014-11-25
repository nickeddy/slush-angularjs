(function() {
    'use strict';

    angular.module('<%= moduleName %>')
        .factory('<%= factoryName %>', ['dependency',
            function <%= factoryName %>(dependency) {

            }
        ]);
}());
