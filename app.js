(function(){
"use strict";

console.log("app started.");

var homepara = document.getElementById("home_para");
var projectpara = document.getElementById("project_para");
var aboutpara = document.getElementById("about_para");
var paras = [];
paras[0]="para for home para for home para for home para for home para for home para for home para for home para for home";
paras[1]=" para for prjects para for prjects para for prjects para for prjects para for prjects para for prjects para for prjects para for prjects";
paras[2]=" para for about para for about para for about para for about para for about para for about para for about para for about para for about para for about para for about para for about para for about para for about para for about";


if(homepara){
homepara.textContent = paras[0];

}
if(projectpara){
projectpara.textContent = paras[1];

	
}
if(aboutpara){
aboutpara.textContent = paras[2];

	
}

})();
