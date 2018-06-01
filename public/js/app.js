  /* global $ */
  
$(document).ready(function(){
    $.getJSON('/api/projects')
    .then(addProjects)
    .catch(function(err){
        console.log(err);
    })
    
    

    
      $('.dropdown-button').dropdown({

      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
    
    $('.carousel').carousel({
        dist:-50,
        shift:20,
        padding:60
    });

    
    $('.tooltipped').tooltip();
    
    $('.slider').slider({indicators:false});
   
    
}); 

function addProjects(projects){
    projects.forEach(function(project){
    addProject(project);
    })
}


function addProject(project){
    var newProject= $(
    `
    <div class="card grey lighten-4 hoverable z-depth-1">
        <div class="card-image z-depth-0">
            <img class="activator" src="${project.image}">
            <div>
            <a class="btn-floating halfway-fab fab-button-like waves-effect black white-text waves-light grey darken-3 z-depth-4"
            href="${project.github}" target="_blank"><i class="fa fa-github"></i></a>
            <a class="btn-floating halfway-fab waves-effect grey white-text waves-light z-depth-4"
            href="${project.liveapp}" target="_blank" onclick="Materialize.toast('hey, thanks for viewing ${project.title} :)', 4000 ,'rounded')"><i class="material-icons">open_in_new</i></a>
            </div>
          
        </div>
        
        <div class="card-action">
        <span class="card-title activator "><i class="material-icons left">more_vert</i>${project.title}</span>
        </div>
        
        <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${project.title}<i class="material-icons halfway-fab right">close</i></span>
        <p>${project.description}<div><a class="waves-effect waves-light btn-small white-text z-depth-2"
        href="${project.liveapp}" target="_blank">view app</a></div></p>
        </div>
        
    </div>
    `
        )
        $(".projects").append(newProject);
}