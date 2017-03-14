angular.module('mySite').directive('slideHighlight', ['$window', function ($window) {
    return {
        restrict: 'A',
        scope: {
            color: "@"
        },
        link: function (scope, element, attrs) {
            console.log('element', element);

            angular.element($window).bind("scroll", function() {

                if(isOnScreen(element)){
                    console.log(element[0].innerHTML, isOnScreen(element));
                    element.css('background-position', '0 0');
                }
           });

           isOnScreen = function(element){

                var viewport = {
                    top : $window.pageYOffset,
                    left : $window.pageXOffset
                };

                viewport.right = viewport.left + $window.innerWidth;
                viewport.bottom = viewport.top + $window.innerHeight;

                console.log('viewport', viewport);
                var bounds = {
                    top : this.pageYOffset,
                    left: this.pageXOffset
                };
                bounds = element[0].getBoundingClientRect();

                //+200 to slide when in view
                return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < (bounds.top + 200) || viewport.top > bounds.bottom));
            };

        }
    }
}]);
