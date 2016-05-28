//JAVASCRIPT//
(function(){
"use strict";

console.log("app started.");

var index = document.getElementById("index");
var project = document.getElementById("project");
var about = document.getElementById("about");

index[0]="this is my homepage";
project[1]="project page";
about[2]="about me ";


if(index){
index.textContent = index[0];

}
if(project){
project.textContent = project[1];

	
}
if(aboutpara){
about.textContent = about[2];

	
}

})();
