var fs = require('fs');

var projectsFilePath = 'db/projects.json';

var loadFileProjects = function(){
  var fileData = fs.readFileSync(projectsFilePath, 'utf8');
  var projects = JSON.parse(fileData);

  return projects;
}

var saveFileProject = function(projects) { 
  var data = JSON.stringify(projects);
  fs.writeFileSync(projectsFilePath, data, 'utf8');
};

var getProjects = function(){
  var projects = loadFileProjects();
  return projects;
}

var saveProjetc = function(newProject) {
  var projects = loadFileProjects();
  projects.push(newProject);
  saveFileProject(projects);
}
    
  
  module.exports = {
    getProjects: getProjects
  }