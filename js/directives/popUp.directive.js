angular
    .module("app")
    .directive("popUp",function($document){
       return {
           restrict: 'E',
           scope:false,
           templateUrl:"popUpContent.html",
           link:function(scope,element,attr){
               var body = angular.element($document[0].body);


               scope.$watch("showPopUp",function(newValue){
                    if(newValue===true){
                        body.addClass("no-scroll");
                    }else{
                        body.removeClass("no-scroll");
                    }
               });

           }



       }
    });