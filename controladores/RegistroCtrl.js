app.controller('registro', function($scope, localStorageService,$window) {
    $scope.nombre = "";
    $scope.apellidos = "";
    $scope.usuario = "";
    $scope.contrasena = "";
    $scope.correo = "";
     
     //Contrasena: Min 1 mayus, Min 2 numeros, min 1 caracter especial, Longitud minima 8 caracteres
     //ej: Ho14gok#
    $scope.expRegular = /^(?=(.*\d){2})(?=.*[a-z])(?=(.*[A-Z]){1})(?=.*[!@#$%])[0-9a-zA-Z!@#$%]{8,}/; 
    
    $scope.usuarios = [];

    $scope.registro = function(){
        //Valida si la contrase;a es valida para poder registrar 
        $scope.valida = $scope.expRegular.test($scope.contrasena);
        if($scope.valida){
            
        

         //valida si hay usuarios registrados
            if(localStorageService.get("usuarios")){
                $scope.usuarios = JSON.parse(localStorageService.get("usuarios"));
                $scope.usuarios.users.push({"nombre": $scope.nombre, "apellidos": $scope.apellidos, "usuario": $scope.usuario, "contrasena":SHA1($scope.contrasena), "correo":$scope.correo});
                localStorageService.set("usuarios", JSON.stringify($scope.usuarios));
            }else{
                //Inserta el primer usuario para el json usuarios
                $scope.usuarios = {users:[{"nombre": $scope.nombre, "apellidos": $scope.apellidos, "usuario": $scope.usuario, "contrasena":SHA1($scope.contrasena), "correo":$scope.correo}]};
                localStorageService.set("usuarios", JSON.stringify($scope.usuarios));
                
            }
            alert("Se ha registrado con exito");

            // Limpia formulario
            $scope.nombre = "";
            $scope.apellidos = "";
            $scope.usuario = "";
            $scope.contrasena = "";
            $scope.correo = "";

            $window.location.href = '#login';
        }else{
            alert("Contrasena invalida");
        }
                
    }

	
});