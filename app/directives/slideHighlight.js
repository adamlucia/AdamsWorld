angular.module('mySite').directive('slideHighlight', ['$window', function ($window) {
    return {
        restrict: 'A',
        scope: {
        },
        link: function (scope, element, attrs) {

            element.css('margin', '0px 0px 0px -20px');
            element.css('display', 'inline-block');
            element.css('background-image', 'linear-gradient(to left, transparent, transparent 50%, #F3F315 50%, #F3F315)');
            element.css('background-position', '100% 0');
            element.css('background-size', '0% 100%');
            element.css('-webkit-transition', 'background-position .5s ease-in');
            element.css('-moz-transition', 'background-position .5s ease-in');
            element.css('-ms-transition', 'background-position .5s ease-in');
        	element.css('-o-transition', 'background-position .5s ease-in');
            element.css('transition', 'background-position .5s ease-in');

            var viewport = {
                top : $window.pageYOffset,
                left : $window.pageXOffset
            };
            viewport.right = viewport.left + $window.innerWidth;
            viewport.bottom = viewport.top + $window.innerHeight;

            angular.element($window).bind("scroll", function() {
                if(isOnScreen(viewport, element)){
                    element.css('background-size', '200% 100%');
                    element.css('background-position', '0 0');

                }
            });

           isOnScreen = function(viewport, element){
                bounds = element[0].getBoundingClientRect();
                return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < (bounds.top + 100) || viewport.top > bounds.bottom));
            };

        }
    }
}]);
