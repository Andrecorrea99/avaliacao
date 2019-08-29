var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts().slice(0,3);
  res.render('index', { title: 'Blog', posts: posts });
});


//abre cada post especifico
router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;
  var posts = postsService.getPosts();
  var post = posts.filter((post) => post.id == postId)[0];
  res.render('post', { title: post.title, post: post });

});

//Mostra relaçao de posts
router.get('/posts',function(req, res, next){
  var yposts = postsService.getPosts();
  res.render('posts',{title: 'Posts', relacao_post: yposts});
});

//mostra relaçao de projetos
router.get('/projects',function(req, res, next){
  var xprojects = projectsService.getProjects();
  res.render('projects',{ title: 'Projetos',relacao_projetos: xprojects});
});

//abre projeto especifico
router.get('/projects/:projectId', function(req, res, next){
  var projectId = req.params.projectId;
  var projects = projectsService.getProjects();
  var project = projects.filter((project) => project.id == projectId)[0];
  res.render('project', { title: project.title, project: project});
});

module.exports = router;
