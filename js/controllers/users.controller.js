/**
 * Created by Dmitry on 3/23/2016.
 */

angular
    .module("app")
    .controller("usersCtrl",["$scope","userService","infoMessage","$window", function($scope,userService,infoMessage,$window){
        $scope.showPopUp=false;
        $scope.users=null;
        $scope.selectedId=-1;
        $scope.newUser={
            firstName:"",
            lastName: "",
            email:    "",
            phone:    ""
        };

        $scope.edit = function(id) {
            $scope.selectedId = id;
        };


        function init(){
            console.log("init()");
            $scope.getUsers();
        }


        //get users from server
        $scope.getUsers=function(){
            userService.getUsers()
                .then(function(users){
                    $scope.users=users;
                    console.log("Users loaded!");
                })
                .catch(function(err_data){
                    console.log("initUserError: "+err_data.status +" :"+ err_data.statusText);
                });
        };

        //add new user
        $scope.addUser=function(){
            var user={
                firstName :  $scope.newUser.firstName,
                lastName  :  $scope.newUser.lastName,
                email     :  $scope.newUser.email,
                telNumber :  $scope.newUser.phone
            };

            userService.addUser(user)
                .then(function(){
                    console.log("Add successfull!");
                    $scope.newUser={};
                    infoMessage.success("Add successfull!");
                    $scope.getUsers();
                    closePopUp();
                    $window.scrollTo(0, 0);
                })
                .catch(function(err_data){
                    infoMessage.error("AddUserError: "+err_data.status +" :"+ err_data.statusText);
                });


        };

        //update user
        $scope.editUserInfo = function (user) {

            userService.updateUser(user)
                .then(function (data) {
                    console.log("User update successfull");
                    infoMessage.success("User update successfull");
                    $scope.getUsers();
                    $window.scrollTo(0, 0);
                })
                .catch(function (err_data) {
                    infoMessage.error("UpdatedError: "+err_data.status +" "+ err_data.statusText);
                });
            $scope.selectedId=-1;
        };

        //delete user
        $scope.deleteUser = function (user) {
            userService.deleteUser(user)
                .then(function (data) {
                    infoMessage.success("User delete successfull");
                    $scope.getUsers();
                    $window.scrollTo(0, 0);
                })
                .catch(function (err_data) {
                    infoMessage.error("DeleteError: "+err_data.status +" "+ err_data.statusText);
                });

        };

        init();

        function closePopUp (){
            $scope.showPopUp=false;
        }

    }]);
