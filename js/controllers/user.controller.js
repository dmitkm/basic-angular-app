/**
 * Created by Dmitry on 3/23/2016.
 */
angular
    .module("app")
    .controller("userCtrl",["$scope","userService","infoMessage",function($scope,userService,infoMessage) {
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
                    infoMessage.success("User update successfull");
                    $scope.$emit("editing");
                })
                .catch(function (err_data) {
                    infoMessage.error("UpdatedError: "+err_data.status +" "+ err_data.statusText);
                });


            $scope.isEditable=false;
        };

        $scope.deleteUser = function (user) {
            userService.deleteUser(user)
                .then(function (data) {
                    infoMessage.success("User delete successfull");
                    $scope.$emit("delete");
                })
                .catch(function (err_data) {
                    infoMessage.error("DeleteError: "+err_data.status +" "+ err_data.statusText);
                });


        };


    }]);