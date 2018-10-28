const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

var id_Array = new Array();
var page_url = new Array();

app.appendChild(logo);
app.appendChild(container); 
var girlgrouplist = new Array();

var request = new XMLHttpRequest();


request.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=categorymembers&cmtitle=Category:South_Korean_girl_groups&cmlimit=500&prop=extracts', true); 
    
request.onload = function () {
    
var data = JSON.parse(request.responseText);
    
var object = data.query.categorymembers;    
   
for(var prop in object){  
    
girlgrouplist.push(object[prop].title);
 
id_Array.push(object[prop].pageid);
    
}
    
var j = 0; 
var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&inprop=url&pageids=";    
for(var i = 0 ; i < id_Array.length ; i++){
  var current = id_Array[i];
  GetMyResourceData(current);
}
   
function GetMyResourceData(current){
    var url_request = new XMLHttpRequest();   
    url_request.open('GET', url+id_Array[i] , true);
     url_request.onload = function () {
     var data = JSON.parse(url_request.responseText);
     var object = data.query.pages;
     page_url.push(object[current].fullurl);
         
         
     const card = document.createElement('div');
    card.setAttribute('class', 'card');  
    const h1 = document.createElement('h1');
    const a = document.createElement('a');
    a.setAttribute('class','test');
         
     if(object[current].fullurl == undefined){
         object[current].fullurl = " ";
     }    
   console.log(object[current].fullurl);
    a.setAttribute('href',object[current].fullurl);
    h1.textContent = girlgrouplist[j];
    container.appendChild(card);
    card.appendChild(h1);
    h1.appendChild(a);
        
     j += 1;    
       
 }
    url_request.send();
   
}    

   
    
     
/*for(var i = 0 ; i < girlgrouplist.length ; i++){   
    const card = document.createElement('div');
    card.setAttribute('class', 'card');  
    const h1 = document.createElement('h1');
    const a = document.createElement('a');
    a.setAttribute('class','test');
    
    a.setAttribute('href',page_url[i]);
    h1.textContent = girlgrouplist[i];
    container.appendChild(card);
    card.appendChild(h1);
    h1.appendChild(a);
   
}    */

 
}
   
request.send();
    
    