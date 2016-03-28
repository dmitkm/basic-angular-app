/**
 * Created by Dmitry on 3/23/2016.
 */

angular
    .module("app")
    .controller("usersCtrl",["$scope","userService", function($scope,userService){
        $scope.users=null;
        $scope.newUser={
            firstName:"",
            lastName: "",
            email:    "",
            phone:    ""
        };


        //show form for adding new Users
        $scope.showForm=function(){
            if($scope.userPanel==false){
                $scope.userPanel=true;
            }else{
                $scope.userPanel=false;
            }
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
                    $scope.getUsers();
                })
                .catch(function(err_data){
                    console.log("AddUserError: "+err_data.status +" :"+ err_data.statusText);
                });


        };

        init();


        $scope.$on("editing",function(){
            $scope.getUsers();
        });
        $scope.$on("delete",function(){
            $scope.getUsers();
        });


    }]);
