/**
 * Created by jmeyer on 8/11/2016.
 */

//Start with iffe and use strict
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                    ProductListCtrl]);
    
    function ProductListCtrl(productResource) {
        // assigning this to vm allows you to access the right this even in child functions
        // vm for view model
        var vm = this;

        productResource.query(function (data) {
            vm.products = data;
        });
        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }

    }
} ());