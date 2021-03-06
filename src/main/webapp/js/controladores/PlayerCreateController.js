/*************************************************************
 * @author Juan Francisco ( juan.maldonado.leon@gmail.com )
 * @desc Controlador PerfilEquipoController
 *************************************************************/
app.controller("PlayerCreateController", [ '$scope', '$http', '$location', '$routeParams',
function( $scope, $http, $location, $routeParams )
{
	$scope.player = {};
	$scope.oid = $routeParams.id;


	$scope.save = function(){

//		NProgress.configure({ parent: '#main' });
		NProgress.start();

		if( $routeParams.id )
			var request = $http.put( CONSTANTS.contextPath + "/teams/"+ $routeParams.id + "/players" , $scope.player );
		else
			var request = $http.put( CONSTANTS.contextPath + "/players/" );

		request.success( function( response )
		{
			//console.log( response );
			NProgress.done();

			if( $routeParams.id )
				$location.path('/team/' +  $routeParams.id  + "/players");
			else
				$location.path('/players');

		} );
		request.error( function( error )
		{
			console.log(error);
			$scope.errorMsg= "Ocurrio un error al ingresar el equipo, intente más tarde";
			$scope.diplayError = true;
			NProgress.done();
		});
	};

}]);
