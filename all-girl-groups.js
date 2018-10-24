const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(logo);
app.appendChild(container); 


var request = new XMLHttpRequest();

request.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=categorymembers&cmtitle=Category:South_Korean_girl_groups&cmlimit=500&prop=extracts', true); 
    
request.onload = function () {
    
var data = JSON.parse(request.responseText);
    
var object = data.query.categorymembers;    
   
const card = document.createElement('div');
card.setAttribute('class', 'card');     
 
for(var prop in object){    
 
const h1 = document.createElement('h1');
h1.textContent = object[prop].title; 

    
    container.appendChild(card);
    card.appendChild(h1);
}


    
}

request.send();
    
    