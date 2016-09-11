app.controller('addComics', function($scope, $rootScope, $http, localStorageService, $window) {
	
    $scope.titulo = '';
    $scope.urlImagen = '';
    $scope.url = '';
    $scope.descripcion = '';

    // Iniciar sesion para poder agregar comics nuevos
    if(sessionStorage.getItem("logeado")) {
       
        if( (localStorageService.get("datosJSON")) )
	    {
		$scope.datos = JSON.parse(localStorageService.get("datosJSON"));
		
		
		
	    }else{
                
            $http.get("datos.json")
            .success(function(data){
                
                $scope.datos = data; //Mejor con getters y setters ... Buenas practicas
            
                localStorageService.set("datosJSON",JSON.stringify($scope.datos));

            })
            .error(function(err){
                alert("Json invalido");
            
            })
       
        }      
        
        $scope.idDatos = $scope.datos.datos.length;
               
        $scope.submit = function(){
            if($scope.titulo && $scope.descripcion){
                $scope.idDatos++;
                $scope.datos.datos.push( {"id": $scope.idDatos, "title": $scope.titulo, "url": $scope.url, "descripcion": $scope.descripcion, "comentarios":"", "thumbnailUrl":$scope.urlImagen});
                localStorageService.set("datosJSON",JSON.stringify($scope.datos));
                alert("Se ha agregado en comic con exito");
                
                 $window.location.href = '#comics';
            }
            else{
                alert("No se pudo agregar el comic");
            }
         } 
              
    }else{
        
        alert("Por favor inicie sesion");        
        $window.location.href = '#login';
    }
      
	
});