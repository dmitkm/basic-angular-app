/**
 * Created by Dmitry on 3/9/2016.
 */
    angular.module("app",["ngAnimate"]);

    angular.module("app")
        .controller("mainCtrl",["$scope","userService",function($scope){

            $scope.sortField=undefined;
            $scope.reverse=false;


            $scope.sort=function(name){
              if ($scope.sortField===name){
                  $scope.reverse=!$scope.reverse
              }else{
                  $scope.sortField=name;
                  $scope.reverse=false;
              }
            };

            $scope.showForm=function(){
                if($scope.userPanel==false){
                    $scope.userPanel=true;
                }else{
                    $scope.userPanel=false;
                }
            };
}]);
