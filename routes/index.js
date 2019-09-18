var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService');
var servicosService = require('../services/servicosService');

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

//mostra lista serviços
router.get('/servicos',function(req, res, next){
  var mservicos = servicosService.getServicos();
  res.render('servicos',{ title: 'Serviços',relacao_servicos: mservicos});
});

//mostra serviços especifico
router.get('/servicos/:servicoId', function(req, res, next){
  var servicoId = req.params.servicoId;
  var servicos = servicosService.getServicos();
  var servico = servicos.filter((servico) => servico.id == servicoId)[0];
  res.render('servico', { title: servico.title, servico: servico});
});

module.exports = router;
