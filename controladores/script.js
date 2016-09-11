
var app = angular.module('tiendaComics', ['ngRoute']);



app.controller('index', function($scope,$rootScope, Data) {
   if(sessionStorage.getItem("logeado")) {
        $rootScope.menulogin = "Logout";
    }
    else{
         $rootScope.menulogin = "Login";
    }
	
});




app.config(function($routeProvider) {
    $routeProvider
    .when("/index", {
        templateUrl : "index.html",
        
    })
    .when("/comics", {
        templateUrl : "vistas/comics.html",
        controller: "comics"
    })
    .when("/addComics", {
        templateUrl : "vistas/addComics.html",
        controller: "addComics"
    })
    .when("/registro", {
        templateUrl : "vistas/registro.html",
        controller: "registro"
    })
    .when("/login", {
        templateUrl : "vistas/login.html",
        controller: "login"
    })
    .when("/edit", {
        templateUrl : "vistas/editarComic.html",
        controller: "editarComic"
    });
    

});

app.factory('Data', function($rootScope){

    var idd = 0;
    $rootScope.menulogin = "Login";

    return {
        getId: function(){
            return idd;
        },
        edit: function(idDat){
            idd = idDat
            return idDat;
        }
    }

});

