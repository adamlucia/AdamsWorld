'use strict';

angular.module('mySite')
.component('contact', {
    templateUrl: '/components/contact/contact.html',
    controller: ['$http', function($http) {
        this.contactMe = {
            name: '',
            email: '',
            phone: '',
            comments: ''
        };

        this.sendInfo = function() {
            console.log('sending info');
            $http({
              method: 'POST',
              url: '/sendEmail',
              data: JSON.stringify(this.contactMe)
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
