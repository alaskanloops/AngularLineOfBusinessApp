/**
 * Created by jmeyer on 8/11/2016.
 */

//Start with iffe and use strict
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
            ProductListCtrl);
    
    function ProductListCtrl() {
        // assigning this to vm allows you to access the right this even in child functions
        // vm for view model
        var vm = this;
        vm.products = [
            {
                "productId": 1,
                "productName": "Web Development",
                "productCode": "WBDV-001",
                "releaseDate": "August 5, 2016",
                "description": "One hour of web development.",
                "cost": 23.00,
                "price": 35.00,
                "category": "development",
                "tags": [ "webdev", "development", "programming" ],
                "imageUrl": "http://www.osd.ie/wp-content/uploads/2011/01/Icon-Responsive-Design.png"
            },
            {
                "productId": 2,
                "productName": "Music Production",
                "productCode": "MUS-002",
                "releaseDate": "November 5, 2016",
                "description": "One hour of music creation.",
                "cost": 17.00,
                "price": 32.00,
                "category": "music",
                "tags": [ "music", "development", "production" ],
                "imageUrl": "http://simpleicon.com/wp-content/uploads/music-note-1-256x256.png"
            },
            {
                "productId": 3,
                "productName": "App Development",
                "productCode": "APDV-003",
                "releaseDate": "August 15, 2016",
                "description": "One hour of application development.",
                "cost": 32.00,
                "price": 46.00,
                "category": "development",
                "tags": [ "app", "development", "programming" ],
                "imageUrl": "https://static1.squarespace.com/static/54691977e4b0773873087bc2/t/54ab5fece4b08dbf5e1dd416/1420517356806/Doozy+Labs+Responsive+Website+Development+Icon"
            }];

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }

    }
} ());