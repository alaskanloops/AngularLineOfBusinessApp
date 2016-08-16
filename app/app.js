/**
 * Created by jmeyer on 8/10/2016.
 * Module
 */
//function becomes self-executing
//immediately invoked function expression
//function expression within parentheses
(function () {
    "use strict"; // in strict mode, javascript will catch some common javascript errors and throw exception
      var app = angular.module("productManagement",
                              ["common.services",
                               "ui.router",
                               "productResourceMock"]);

    // add route state configuration for entire application
    app.config(["$stateProvider",
                "$urlRouterProvider",
                function ($stateProvider, $urlRouterProvider) {
                    // if an activated state has no function, or if there is no active state, then show home
                    $urlRouterProvider.otherwise("/");
                    $stateProvider
                        .state("home", {
                            url: "/",
                            templateUrl: "app/welcomeView.html"
                        })
                        // Products
                        .state("productList", {
                            url: "/products",
                            templateUrl: "app/products/productListView.html",
                            controller: "ProductListCtrl as vm"
                        })
                        // Update/Add
                        .state("productEdit", {
                            url: "/products/edit/:productId",
                            templateUrl: "app/products/productEditView.html",
                            controller: "ProductEditCtrl as vm"
                        })
                        // Detailed View
                        .state("productDetail", {
                            url: "/products/:productId", // denotes a parameter that will be passed to the state
                            templateUrl: "app/products/productDetailView.html",
                            controller: "ProductDetailCtrl as vm"
                        })
                }]

    );
}());