app.controller('comics', function($scope,$http, $rootScope, $window, localStorageService, Data) {

    $scope.cantidad = 9;
    $scope.buscador = "";
    $rootScope.menulogin = "Login";



     if(sessionStorage.getItem("logeado")) {
        $rootScope.menulogin = "Logout";
    }
    else{
         $rootScope.menulogin = "Login";
    }


    //Valida si hay datos de comics
    if( (localStorageService.get("datosJSON")) )
	{
		$scope.datos = JSON.parse(localStorageService.get("datosJSON"));
		
		
		
	}else{

    
        // Si no hay datos traer los datos del json quemado
        $http.get("datos.json")
        .success(function(data){
            
            
            $scope.datos = data; //Mejor con getters y setters ... Buenas practicas
           
            localStorageService.set("datosJSON",JSON.stringify($scope.datos));
        })
        .error(function(err){
            alert("Json invalido");
        
        })

        
       
	}

    $scope.vermas = function(){
        $scope.cantidad = $scope.cantidad + 3;
    }

    $scope.editar = function(id)
    {
        
       $scope.edicion = Data.edit(id);
       $window.location.href = '#edit';

    }
    

    


});