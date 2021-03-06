angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('AccountCtrl', function ($scope) {
    console.log("test 1");
    $scope.settings = {
        enableFriends: true
    };
})
.controller('MapCtrl', function ($scope, $state, $cordovaGeolocation) {
    var options = { timeout: 10000, enableHighAccuracy: true };

    $cordovaGeolocation.getCurrentPosition(options).then(function (position) {

        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }, function (error) {
        console.log("Could not get location");
    });
});