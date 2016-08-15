/**
 * Created by jmeyer on 8/10/2016.
 * Module
 */
//function becomes self-executing
//immediately invoked function expression
//function expression within parentheses
(function () {
    "use strict"; // in strict mode, javascript will catch some common javascript errors and throw exception
      var app = angular.module("productManagement", ["common.services"]);
}());