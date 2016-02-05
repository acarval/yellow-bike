angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {
})


.controller('LoadingCtrl', function ($scope) {
})

.controller('AccountCtrl', function ($scope) {
    console.log("test 1");
    $scope.settings = {
        enableFriends: true
    };
})
.controller('MapCtrl', function($scope, $ionicSideMenuDelegate, $ionicLoading)
{
    //initialize 
    $ionicSideMenuDelegate.canDragContent(false)
    $scope.init = function () {
        var centers =
            [
            [0, 35.190328, -111.650786, "healf center"],
            [1, 35.187819, -111.657101, "Union"],
            [2, 35.178518, -111.655531, "Du bois center"]
            ];

        var image = {
            url: 'img/cycling.png',
        };

        var myOptions = {
            zoom: 10,
            center: { lat: -34.397, lng: 150.644 },
            scrollwheel: true
        };

        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var bounds = new google.maps.LatLngBounds();
        
        for (i = 0; i < centers.length; i++) {
            var LatLng = { lat: centers[i][1], lng: centers[i][2] };
            var marker = new google.maps.Marker({
                position: LatLng,
                map: map,
                icon: image,
                title: centers[i][3],
                zIndex: centers[i][0]
            });
            LatLng = new google.maps.LatLng(centers[i][1], centers[i][2]);
            bounds.extend(LatLng);
        };
        console.log(bounds);
        map.fitBounds(bounds);
        $scope.map = map;
    };
});