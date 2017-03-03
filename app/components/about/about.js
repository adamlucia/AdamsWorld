'use strict';

angular.module('mySite')
.component('about', {
    templateUrl: '/app/components/about/about.html',
    controller: [function() {
        this.name = 'shahar';
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.active = 0;
        var slides = this.slides = [
            {
                image: 'app/images/kitty.jpg',
                text: ['Nice image','Awesome photograph','That is so cool','I love that'],
                id: 0
            }
        ];

        var currIndex = 0;

    }]
});
