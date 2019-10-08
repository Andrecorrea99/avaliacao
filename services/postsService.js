var fs = require('fs');

var postsFilePath = 'db/posts.json';

var loadFilePosts = function(){
  var fileData = fs.readFileSync(postsFilePath, 'utf8');
  var posts = JSON.parse(fileData);

  return posts;
}

var saveFilePost = function(posts) { 
  var data = JSON.stringify(posts);
  fs.writeFileSync(postsFilePath, data, 'utf8');
};

var getPosts = function(){
  var posts = loadFilePosts();
  return posts;
}

var savePost = function(newPost) {
  var posts = loadFilePosts();
  posts.push(newPost);
  saveFilePost(posts);
}


module.exports = {
  getPosts: getPosts,
  savePost: savePost
};