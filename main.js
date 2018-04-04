
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
}
