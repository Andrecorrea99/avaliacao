
var getPosts = function() {
  var posts = [
    {
      id: 1,
      title: 'Posts 1',
      image: 'post1.jpg',
      description: 'Primeiro Trabalho',
      body: 'Lista Posts e Projetos'
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'post7.jpg',
      description: 'engenharia software',
      body: 'Meu segundo post bla bla'
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'post8.jpg',
      description: 'Industria 4.0',
      body: 'Meu terceiro post bla bla'
    },
    
    {
      id: 4,
      title: 'Post 4',
      image: 'post9.jpg',
      description: 'Post qualquer',
      body: 'Meu quarto post bla bla'
    },
  ]

  return posts;
}

module.exports = {
  getPosts: getPosts
}