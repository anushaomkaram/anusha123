function loadJSON(file,callback){
var abc=new XMLHttpRequest();
abc.overrideMimeType("application/json");
abc.open("GET",file,true);
abc.onreadystatechange=function(){
  if(abc.readyState===4 && abc.status=="200"){
    callback(abc.responseText);
  }
};
abc.send();
}
loadJSON("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
carrer(data.carrer);
education(data.education);
skills(data.skills);
})
var right=document.querySelector(".content");
function carrer(car){
console.log(car.info);
var h3=document.createElement("h3");
h3.textContent="Carrer Objective";
right.appendChild(h3);
var hr=document.createElement("hr");
right.appendChild(hr);
var p=document.createElement("p");
 p.textContent=car.info;
 right.appendChild(p);
}
function education(edu){
 var h3=document.createElement("h3");
 h3.textContent="EDUCATION";
 right.appendChild(h3);
 var hr=document.createElement("hr");
 right.appendChild(hr);

 var ul=document.createElement("ul");
 right.appendChild(ul);
 for(var i=edu.length-1;i>=0;i--){
   console.log(edu[i].degree);
   var li=document.createElement("li");
 li.textContent=edu[i].degree;
 ul.appendChild(li);


var p=document.createElement("p");
p.textContent=edu[i].school;
li.appendChild(p);

var ul1=document.createElement("ul");
ul.appendChild(ul1);
for(j=0;j<edu[i].data.length;j++){
 var li1=document.createElement("li");
 li1.textContent=edu[i].data[j];
 ul1.appendChild(li1);


}
 }

}
function skills(skill){
 var h3=document.createElement("h3");
 h3.textContent="SKILLS";
 right.appendChild(h3);
 var hr=document.createElement("hr");
 right.appendChild(hr);

 var table=document.createElement("table");
 table.border="1";
 right.appendChild(table);
 let row="";
 for(var i=0;i<skills.length;i++){
   row+="<tr><td>"+skill[i].name+"</td><td>"+skill[i].info+"</td><td>"

 }
 table.innerHtml=row;

}
