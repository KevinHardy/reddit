var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {

	//$scope.test = "This is Kevin's reddit app!";

	$scope.getPosts = function() {
		FirebaseService.getPosts().then(function(posts) {
			$scope.posts = posts;
		})
	}

	$scope.addPost = function() {
		FirebaseService.addPost($scope.newPost).then(function() {
			FirebaseService.getPosts();
		})
	}

	$scope.vote = function(postId, direction) {
		// console.log($scope.posts[postId]);
		FirebaseService.vote(postId, direction, $scope.posts[postId].karma).then(function() {
			$scope.getPosts();
		})
	}

	$scope.submitComment = function(id, comment) {
		var commentObj = {};
		commentObj.text = comment;
		commentObj.timestamp = Date.now();
		FirebaseService.addComment(id, commentObj).then(function(data) {
			$scope.getPosts();
		})

	$scope.getPosts();	

});