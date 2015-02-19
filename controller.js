var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {

	//$scope.test = "This is Kevin's reddit app!";

	FirebaseService.getPosts().then(function() {
		$scope.posts = posts;
	})

	$scope.addPost = function() {
		FirebaseService.addPost($scope.newPost).then(function() {
			FirebaseService.getPosts();
		})
	}

	$scope.vote = function(postId, direction) {
		FirebaseService.vote(postId, direction);
		FirebaseService.getPosts();
	}

	// $scope.newPost = "hello";

});