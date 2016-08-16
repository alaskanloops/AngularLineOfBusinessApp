/**
 * Created by jmeyer on 8/15/2016.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
                    ProductDetailCtrl);

    function ProductDetailCtrl() {
        var vm = this;

        vm.product = {
            "productId": 4,
            "productName": "Game Music Creation",
            "productCode": "MUS-004",
            "releaseDate": "August 15, 2016",
            "description": "One hour of gaming music development.",
            "cost": 16.00,
            "price": 21.00,
            "category": "music",
            "tags": [ "music", "development"],
            "imageUrl": "http://simpleicon.com/wp-content/uploads/music-note-1-256x256.png"
        };

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());