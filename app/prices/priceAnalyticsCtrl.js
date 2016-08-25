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
                     "$filter", // angular service for filtering data to order and limit list of products
                     "products", // as defined in resolve block of navigation state in app.js
                     "productService", // inject productService to be able to calculate margins
                     PriceAnalyticsCtrl]); // last element reference to controller function

    function PriceAnalyticsCtrl($scope, $filter, products, productService) {
        $scope.title="Price Analytics";

        // Computed property
        for (var i = 0; i < products.length; i ++) {
            products[i].marginPercent =
                productService.calculateMarginPercent(products[i].price, products[i].cost);

            products[i].marginAmount =
                productService.calculateMarginAmount(products[i].price, products[i].cost);
        }
        // order the products as per fictitious requirement of visually displaying top 5 products
        var orderedProductsAmount = $filter("orderBy")(products, "marginAmount");
        var filteredProductsAmount = $filter("limitTo")(orderedProductsAmount, 5);

        // populate angularCharts
        var chartDataAmount = [];
        for (var i = 0; i < filteredProductsAmount.length; i ++) {
            chartDataAmount.push({
                x: filteredProductsAmount[i].productName,
                y: [filteredProductsAmount[i].cost,
                    filteredProductsAmount[i].price,
                    filteredProductsAmount[i].marginAmount]
            });
        }

        // used by ac-data directive in view
        $scope.dataAmount = {
            series: ["Cost", "Price", "Margin Amount"],
            data: chartDataAmount
        };

        // config options as per chinmaymk.github.io/angular-charts/
        $scope.configAmount = {
            title: "Top $$ Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: 'right'
            }
        };

        var orderedProductsPercent = $filter("orderBy")(products, "marginPercent");
        var filteredProductsPercent = $filter("limitTo")(orderedProductsPercent, 10);

        var chartDataPercent = [];
        for (var i = 0; i < filteredProductsPercent.length; i ++) {
            chartDataPercent.push({
                x: filteredProductsPercent[i].productName,
                y: [filteredProductsPercent[i].marginPercent]
            });
        }

        $scope.dataPercent = {
            series: ["Margin %"],
            data: chartDataPercent
        };

        $scope.configPercent = {
            title: "Top %%  Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: 'right'
            }
        };

    }
}());