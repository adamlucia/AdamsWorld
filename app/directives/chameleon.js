angular.module('mySite').directive('chameleon', ['$window', function ($window) {
    return {
        restrict: 'A',
        scope: {
            offset: "@",
            color: "@"
        },
        link: function (scope, element, attrs) {
            console.log('scope.color', scope.color);
            //create chameleonElement and put if after element that the directive is on
            var chameleonElement = angular.element(`<div id="${ element[0].id }-chameleon"></div>`);

            chameleonElement.css('height', element[0].offsetHeight+'px');
            chameleonElement.css('position', 'relative');
            chameleonElement.css('top', '-'+element[0].offsetHeight+'px');
            chameleonElement.css('background-color', `rgba(${scope.color}, 1)`);
            chameleonElement.css('z-index', -1);



            //console.log('chameleonElement', chameleonElement);
            element.after(chameleonElement);
            element.css('z-index', 100);
            var elementsTopOffset = element.topOffset;
            angular.element($window).bind("resize", function() {
                console.log('this.innerHeight', this.innerHeight);
                chameleonElement.css('height', this.innerHeight+'px');

                element.css('height', this.innerHeight+'px');
                chameleonElement.css('top', '-'+element[0].offsetHeight+'px');
            });
            angular.element($window).bind("scroll", function() {


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
