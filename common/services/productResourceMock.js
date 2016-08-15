/**
 * Created by jmeyer on 8/15/2016.
 * Used to mock data until back end service is built
 */
(function () {
    "use strict";

    var app = angular.module("productResourceMock",
                            ["ngMockE2E"]);

    // takes the function passed in as parameter and executes it
    // once the module is loaded
    app.run(function ($httpBackend) {
        // define default set of data (mocking data)
        var products = [
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
            },
            {
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
            },
            {
                "productId": 5,
                "productName": "App Development",
                "productCode": "APDV-003",
                "releaseDate": "August 15, 2016",
                "description": "One hour of application development.",
                "cost": 32.00,
                "price": 46.00,
                "category": "development",
                "tags": [ "app", "development", "programming" ],
                "imageUrl": "https://static1.squarespace.com/static/54691977e4b0773873087bc2/t/54ab5fece4b08dbf5e1dd416/1420517356806/Doozy+Labs+Responsive+Website+Development+Icon"
            },
            {
                "productId": 6,
                "productName": "App Development",
                "productCode": "APDV-003",
                "releaseDate": "August 15, 2016",
                "description": "One hour of application development.",
                "cost": 32.00,
                "price": 46.00,
                "category": "development",
                "tags": [ "app", "development", "programming" ],
                "imageUrl": "https://static1.squarespace.com/static/54691977e4b0773873087bc2/t/54ab5fece4b08dbf5e1dd416/1420517356806/Doozy+Labs+Responsive+Website+Development+Icon"
            },
            {
                "productId": 7,
                "productName": "App Development",
                "productCode": "APDV-003",
                "releaseDate": "August 15, 2016",
                "description": "One hour of application development.",
                "cost": 32.00,
                "price": 46.00,
                "category": "development",
                "tags": [ "app", "development", "programming" ],
                "imageUrl": "https://static1.squarespace.com/static/54691977e4b0773873087bc2/t/54ab5fece4b08dbf5e1dd416/1420517356806/Doozy+Labs+Responsive+Website+Development+Icon"
            }
        ];
        // define fake responses to the web service calls.
        // start with URL we're expecting to intercept (/api/products)
        var productUrl = "/api/products"

        // then define what should happen when a get request is sent to this URL
        $httpBackend.whenGET(productUrl).respond(products);



    })
}());