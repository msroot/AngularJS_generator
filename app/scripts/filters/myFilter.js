'use strict';

angular.module('AngularJSGeneratorApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
