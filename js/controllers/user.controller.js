/**
 * Created by Dmitry on 3/23/2016.
 */
angular
    .module("app")
    .controller("userCtrl",["$scope","userService",function($scope,userService) {
        //users


        $scope.isEditable = false;


        $scope.edit = function() {
            $scope.isEditable =true;
        };


        $scope.editUserInfo = function (user) {
            //updateUser(user);
            userService.updateUser(user)
                .then(function (data) {
                    console.log("User update successfull");
                    $scope.$emit("editing");
                })
                .catch(function (err_data) {
                    console.log("UpdatedError: "+err_data.status +" "+ err_data.statusText);
                });


            $scope.isEditable=false;
        };

        $scope.deleteUser = function (user) {
            userService.deleteUser(user)
                .then(function (data) {
                    console.log("User delete successfull");
                    $scope.$emit("delete");
                })
                .catch(function (err_data) {
                    console.log("DeleteError: "+err_data.status +" "+ err_data.statusText);
                });


        };


    }]);