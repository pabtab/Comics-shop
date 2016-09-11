SPI.service('LoginService', function($q) {
    return {
        loginUser: function(nombre, pass) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            //Login quemado para simular un ingreso de usuarios
            if (nombre == 'admin' && pass == '123') {
                deferred.resolve('Bienvenido ' + nombre + '!');
            } else {
                deferred.reject('error');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})