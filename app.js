(function(){
    'use strict';
    angular.module("myApp", []).controller("myController", function($scope){
        $scope.checkDishes = function(){  
            var message = "";


            if($scope.dishes == undefined || $scope.dishes == ""){
                message = "Please enter data first.";
                $scope.myStyle = {"color": "red", "border-color": "red"};
            }
            else{
                var dishes = $scope.dishes.split(",");

                if(dishes.length > 3){
                    message = "Too much!";

                }
                else{
                    message = "Enjoy!";
                }
            $scope.myStyle = {"border-color": "green", "border-style" : "solid"};
            }
            $scope.message = message;
        
        }

    });
})();