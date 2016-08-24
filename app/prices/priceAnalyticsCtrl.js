/**
 * Created by jmeyer on 8/23/2016.
 */
(function () {
    "use strict";
    // start by looking up the module, and register controller. Because this is using Angular Charts, use classic controller syntax instead of 'as'
    angular
        .module("productManagement")
        .controller("PriceAnalyticsCtrl", // first parameter controller name
                    ["$scope", // second parameter a min-safe array containing each parameter injected into controller function.
                     "products", // as defined in resolve block of navigation state in app.js
                     "productService", // inject productService to be able to calculate margins
                     PriceAnalyticsCtrl]); // last element reference to controller function

    function PriceAnalyticsCtrl($scope, products, productService) {
        $scope.title="Price Analytics";

        // Computed property
        for (var i = 0; i < products.length(); i ++) {
            products[i].marginPercent =
                productService.calculateMarginPercent(products[i].price, products[i].cost);

            products[i].marginAmount =
                productService.calculateMarginAmount(products[i].price, products[i].cost);
        }
    }
}());