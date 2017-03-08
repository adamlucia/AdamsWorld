angular.module('mySite').directive('chameleon', ['$window', function ($window) {
    return {
        restrict: 'A',
        scope: {
            offset: "@",
            color: "@"
        },
        link: function (scope, element, attrs) {

            //create chameleonElement and put if after element that the directive is on
            var chameleonElement = angular.element(`<div id="${ element[0].id }-chameleon"></div>`);

             //chameleon element height to directive element height
            chameleonElement.css('height', element[0].offsetHeight+'px');
            chameleonElement.css('position', 'relative');
            chameleonElement.css('top', '-'+element[0].offsetHeight+'px');
            chameleonElement.css('background-color', `rgba(${scope.color}, 1)`);
            chameleonElement.css('z-index', -1);



            //console.log('chameleonElement', chameleonElement);
            element.after(chameleonElement);
            element.css('z-index', 100)


            var elementOffsetHeight = element[0].offsetHeight;



            angular.element($window).bind("scroll", function() {
                console.log('$window.pageYOffset', $window.pageYOffset);

                console.log('element[0].pageYOffset', element[0].getBoundingClientRect().top);
                // element[0].offsetHeight/$window.pageYOffset
                console.log('element[0].offsetTop/$window.pageYOffset', element[0].offsetHeight/$window.pageYOffset);
                //console.log('this.pageYOffset', element[0].offsetTop/$window.pageYOffset);
                //console.log('element[0].offsetTop',`rgba(${scope.color}, ${element[0].offsetTop/this.pageYOffset})` );
                chameleonElement.css('background-color', `rgba(${scope.colr}, ${element[0].offsetHeight/$window.pageYOffset})`);
            //    if ($window.pageYOffset >= parseInt(scope.offset)) {
            //        console.log('in here');
            //        chameleonElement.css('background-color', `rgba(${scope.color}, ${$window.pageYOffset/element[0].offsetHeight})`);
            //        //element.css('opacity', element[0].offsetTop/this.pageYOffset)
            //    } else {
               //
            //    }
           });
        }
    }
}]);
