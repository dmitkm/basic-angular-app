/**
 * Created by Dmitry on 3/22/2016.
 */

angular
    .module("app")
    .factory("userService",['$http','$q', function($http,$q){
        var url="http://restapp-jvl.rhcloud.com/rest/v1/users/";
        var service={
            getUsers:getUsers,
            updateUser:updateUser,
            addUser:addUser,
            deleteUser:deleteUser
        };
        return service;

        function getUsers(){
            return $http.get(url).then(success,error);
        }
        function addUser(user){
            return $http.post(url,user).then(success,error);
        }
        function updateUser(user){
            return $http.put(url+user.id,user).then(success,error);
        }
        function deleteUser(user){
            return $http.delete(url+user.id,user).then(success,error);
        }
        //private methods
        function success(res){
            return res.data;
        }

        function error(err){
            return $q.reject(err);
            //return err.data;


        }
    }]);