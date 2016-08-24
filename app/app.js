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
                               "ui.mask",
                               "ui.bootstrap",
                               "angularCharts",
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
                            abstract: true,
                            url: "/products/edit/:productId",
                            templateUrl: "app/products/productEditView.html",
                            controller: "ProductEditCtrl as vm",
                            resolve: {
                                productResource: "productResource",

                                product: function (productResource, $stateParams) {
                                    var productId = $stateParams.productId;
                                    return productResource.get({ productId: productId}).$promise;
                                }
                            }
                        })
                        .state("productEdit.info", {
                            url: "/info",
                            templateUrl: "app/products/productEditInfoView.html"
                        })
                        .state("productEdit.price", {
                            url: "/price",
                            templateUrl: "app/products/productEditPriceView.html"
                        })
                        .state("productEdit.tags", {
                            url: "/tags",
                            templateUrl: "app/products/productEditTagsView.html"
                        })
                        .state("productEdit.inventory", {
                            url: "/inventory",
                            templateUrl: "app/products/productEditInventoryView.html"
                        })
                        // Detailed View
                        .state("productDetail", {
                            url: "/products/:productId", // denotes a parameter that will be passed to the state
                            templateUrl: "app/products/productDetailView.html",
                            controller: "ProductDetailCtrl as vm",
                            resolve: {
                                productResource: "productResource",
                                
                                product: function (productResource, $stateParams) {
                                    var productId = $stateParams.productId;
                                    return productResource.get({ productId: productId}).$promise;
                                }
                            }
                        })
                        // Price Analytics using Angular-charts
                        .state("priceAnalytics", {
                            url: "/priceAnalytics",
                            templateUrl:"app/prices/priceAnalyticsView.html",
                            controller: "PriceAnalyticsCtrl",
                            resolve: {
                                productResource: "productResource",

                                products: function (productResource) {
                                    return productResource.query().$promise;
                                }
                            }
                        })
                }]

    );
}());