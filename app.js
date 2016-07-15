var app = angular.module('reddit',['ngAnimate','ngMessages']);

app.controller('newPostController',post)

angular.
  module('reddit').
  filter('capitolize', function() {
    return function(input) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    };
  });

function post(){
  var np = this;

  np.posts = [
    {
      title: 'Using Angular',
      author: 'Bill Murray',
      img: 'http://fillmurray.com/200/200',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      score: 5,
      date: Date.now(),
      comments: [
        {
          author: 'jim',
          comment: 'I see'
        },
        {
          author: 'bob',
          comment: 'Me too, I also see.'
        }
      ]
    },
    {
      title: 'I am a Mad Man',
      author: 'Nick Cage',
      img: 'http://placecage.com/c/200/200',
      desc: "OH, NO! NOT THE BEES! NOT THE BEES! AAAAAHHHHH! OH, THEY'RE IN MY EYES! MY EYES! AAAAHHHHH! AAAAAGGHHH!",
      score: -4,
      date: 1468528486596,
      comments: [
        {
          author: 'michael bluth',
          comment: 'you suck'
        },
        {
          author: 'Bill Murray',
          comment: 'Yes, he does'
        }
      ]
    },
    {
      title: 'A',
      author: 'Bill Murray',
      img: 'http://placebear.com/200/200',
      desc: "this title is first alphabetically",
      score: 0,
      date: 1468528486596,
      comments: [
        {
          author: 'jim',
          comment: 'I see'
        },
      ]
    },
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
    post.showComments = true;
  }

  np.newPost = function(){
    console.log('adding new post');
    np.posts.push({
      title: np.title,
      author: np.author,
      img: np.img,
      desc: np.desc,
      score: 0,
      comments: [],
      date: Date.now()
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
