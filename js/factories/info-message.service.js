
angular
    .module("app")
    .factory('infoMessage', ["$rootScope","$timeout" ,function ($rootScope,$timeout) {
        $rootScope.msg=null;
        var service={
            success: successMessage,
            error  : errorMessage

        };


        return service;
        
        function successMessage (message) {
             $rootScope.msg={
                text : message,
                type : "success"
             };
             $timeout(clearMessage,5000);
            
        };


         function errorMessage (message) {
            $rootScope.msg={
                text : message,
                type : "error"
             };
             $timeout(clearMessage,5000);
        };

        //private method
        function clearMessage () {
            $rootScope.msg=null;
        };

    }]);