var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q) {

	this.getPosts = function(data) {

		return $http.get('https://devmtn.firebaseio.com/posts.json').then(function(result) {
			posts = result.data;
		})
	}

	this.addPost = function(post) {
		post.timestamp = Date.now();
		post.comments = [];
		post.karma = 0;
		post.id = guid();

		return $http.put('https://devmtn.firebaseio.com/posts/' + post.id + '.json', post);
	}

	var guid = function() {
	    var s4 = function() {
	      return Math.floor((1 + Math.random()) * 0x10000)
	        .toString(16)
	        .substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	      s4() + '-' + s4() + s4() + s4();
	}

	this.vote = function(postId, direction) {
		if(direction === 'up') {
	      post.karma++;
	    } else if(direction === 'down'){
	      post.karma--;
	    }

	    return $http.patch('https://devmtn.firebaseio.com/posts/' + postId + '.json', post)
	}
});