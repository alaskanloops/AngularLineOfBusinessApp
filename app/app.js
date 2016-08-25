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
    // change default global exception handler to display message to user
    app.config(function ($provide) {
        $provide.decorator("$exceptionHandler",
        ["$delegate",
            function ($delegate) { // decorator function has a dependency on $delegate, providing original service to the method, allowing us to call base implementation of that service
                return function (exception, cause) {
                    exception.message = "Something went wrong! Please contact your administrator \n Message: " + exception.message;
                    $delegate(exception, cause);
                    alert(exception.message); // custom code to extend functionality by alerting user
                };
            }]);
    });

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
                            // resolve feature of navigation state retrieves data needed for page before navigating to new page
                            resolve: {
                                productResource: "productResource",
                                products: function (productResource) {
                                    return productResource.query(
                                        // function on success
                                        function (response) {
                                        // no code needed for success
                                        },
                                        // function on failure
                                        function (response) {
                                            if (response.status == 404) {
                                                alert("Error accessing resource: " + response.config.method + " " + response.config.url);
                                            } else {
                                                alert(response.statusText);
                                            }
                                    }).$promise;
                                }
                            }
                        })
                }]

    );
}());