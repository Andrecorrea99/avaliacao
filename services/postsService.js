var fs = require('fs');

var postsFilePath = 'db/posts.json';

var loadFilePosts = function(){
  var fileData = fs.readFileSync(postsFilePath, 'utf8');
  var posts = JSON.parse(fileData);
}
  return posts;
}

var saveFilePost = function(newPost) { 
  var posts = loadFilePosts();
  posts.push(newPost);
  saveFilePost(posts);
}

module.exports = {
  getPosts: getPosts
  getPosts: getPosts,
  savePost: savePost
}