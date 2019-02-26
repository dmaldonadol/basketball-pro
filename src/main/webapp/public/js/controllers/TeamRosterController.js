/*************************************************************
 * @author Juan Francisco ( juan.maldonado.leon@gmail.com )
 * @desc Controlador PerfilEquipoController
 *************************************************************/
app.controller("TeamRosterController", ['$scope', '$http', '$routeParams', '$timeout',
function($scope, $http, $routeParams, $timeout)
{

	$scope.flagLoading = true;
	$scope.players = [];

	$scope.loadData = function(  )
	{
		$scope.flagLoading = true;

		var request =
		$http.get( CONSTANTS.contextPath + "/teams/n/" + $routeParams.nameURL + "/players" );
		request.success( function( response )
		{
			$scope.players = response;
			$scope.flagLoading = false;
			$timeout( $scope.loadPlayersSlider, 500 );

		} );
		request.error( function( error )
		{
		    console.log(error);
			$scope.flagLoading = false;
		});
	};


	$scope.loadPlayersSlider = function(){
	    var $slick_team_roster = $('.team-roster--slider');
        $slick_team_roster.slick({
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: 0,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: 0,
                        slidesToShow: 1
                    }
                }
            ]
        });

	};


	$scope.loadData();
}]);
