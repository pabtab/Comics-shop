app.controller('login', function($scope, localStorageService, $window, $rootScope, Data) {
    

    if(sessionStorage.getItem("logeado")) {
        
        sessionStorage.clear();
        $rootScope.menulogin = "Login";
    }
    else{
         $rootScope.menulogin = "Login";
         
        
    }

	$scope.logea = function(){
        //valida si hay usuarios registrados
        if(localStorageService.get("usuarios")){
            $scope.usuarios = JSON.parse(localStorageService.get("usuarios"));
           
           //Se recorre json de usuarios 
            for(var key in $scope.usuarios.users){
                var obj = $scope.usuarios.users[key];
                for(var login in obj){
                    
                    if((obj["usuario"] == $scope.usuario)&&(obj["contrasena"] == SHA1($scope.contrasena))){
        
                        sessionStorage.logeado = obj["usuario"];              

                        $window.location.href = '#comics';


                        break;
                    }
                }
               
            }


        }else{
            $window.location.href = '#registro';
           alert("Registrarse"); 
        }
    }

    
    

   

});