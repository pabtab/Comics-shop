app.controller('editarComic', function($scope, localStorageService, $window, Data) {
	
    $scope.titulo = '';
    $scope.urlImagen = '';
    $scope.url = '';
    $scope.descripcion = '';
    $scope.comentarios = '';

    if(sessionStorage.getItem("logeado")) {
       
        if(localStorageService.get("datosJSON")){
             $scope.submit = function(){
                $scope.datosjson = JSON.parse(localStorageService.get("datosJSON"));
                $scope.id = Data.getId();

                for(var key in $scope.datosjson.datos){
                    var obj = $scope.datosjson.datos[key];
                    for(var dat in obj){
                        
                        if(obj["id"] == $scope.id){
      
                            obj["title"] =  $scope.titulo;
                            obj["url"] = $scope.url;
                            obj["thumbnailUrl"] = $scope.urlImagen;
                            obj["descripcion"] = $scope.descripcion;
                            obj["comentarios"] = $scope.comentarios;

                            
                            localStorageService.set("datosJSON",JSON.stringify($scope.datosjson))

                            alert("Edicion con exito");

                            $window.location.href = '#comics';

                            break;
                         }
                     }
                
                }
             }
            

            }else{
                $window.location.href = '#comics';
           
            }

    }else{
        
         alert("logearse");        
        $window.location.href = '#login';
    }
      
	
});