'use strict';

angular.module('mySite')
.component('contact', {
    templateUrl: '/components/contact/contact.html',
    controller: ['$http', function($http) {
        this.test = 'blah';

        this.sendInfo = function() {
            console.log('sending info');
            $http({
              method: 'POST',
              url: '/sendEmail',
              data: JSON.stringify({'name':'name'})
            }).then(function successCallback(response) {
                console.log('sent');
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
          }
    }]
});
