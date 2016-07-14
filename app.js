var app = angular.module('reddit',[]);

app.controller('newPostController',post)

function post(){
  var np = this;

  np.posts = [
    {
      title: 'Using Angular',
      author: 'Bill Murray',
      img: 'http://fillmurray.com/200/200',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      score: 5,
      comments: []
    }
  ];

  var clearForm = function(){
    np.title = null;
    np.author = null;
    np.img = null;
    np.desc = null;
    np.addPost = false;
  }

  var clearComment = function(post){
    np.commentAuthor = null;
    np.commentText = null;
    post.addComment = false;
  }

  np.newPost = function(){
    console.log('adding new post');
    np.posts.push({
      title: np.title,
      author: np.author,
      img: np.img,
      desc: np.desc,
      score: 0,
      comments: []
    })
    console.log(np.posts);
    clearForm();
  }

  np.newComment = function(post){
    post.comments.push({
      author: np.commentAuthor,
      comment: np.commentText
    })
    console.log('new comment:',post.comments)
    clearComment(post);
  }
}
