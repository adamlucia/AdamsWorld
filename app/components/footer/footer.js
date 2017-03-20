'use strict';

angular.module('mySite')
.component('footer', {
    templateUrl: '/components/footer/footer.html',
    controller: [function() {
        this.currentYear = new Date().getFullYear();

    }]
});
