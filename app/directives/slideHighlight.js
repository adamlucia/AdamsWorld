angular.module('mySite').directive('slideHighlight', ['$window', function ($window) {
    return {
        restrict: 'A',
        scope: {
            color: "@"
        },
        link: function (scope, element, attrs) {
            console.log('scope.color', scope.color);

            angular.element($window).bind("scroll", function() {
                console.log('element[0].offsetTop', element[0].offsetTop);
                //this.pageYOffset

               if (this.pageYOffset >= parseInt(scope.offset)) {
                   chameleonElement.css('background-color', `rgba(${scope.color}, ${element[0].offsetTop/this.pageYOffset})`);
                   chameleonElement.css('background-color', `rgba(${scope.color}, ${1 - this.pageYOffset / (element[0].offsetHeight/2)})`);
                   //element.css('opacity', element[0].offsetTop/this.pageYOffset)
               } else {

               }
           });
        }
    }
}]);
