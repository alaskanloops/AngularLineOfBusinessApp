/**
 * Created by jmeyer on 8/12/2016.
 * A factory which creates a resource object that lets you interact with RESTful server-side data sources.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId")
    }

}());