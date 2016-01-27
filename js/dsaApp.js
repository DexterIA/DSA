var app = angular.module('myApp', []);

app.controller('userCtrl', function ($scope) {
    $scope.message = 'sdfgsdfgsdfgsdfg';
    $scope.publicKey = 'Test public key\nTest public key\nTest public key\nTest public key';
    $scope.privateKey = 'Test private key\nTest private key\nTest private key\nTest private key';

    $scope.generateKeys = function () {

    };
});