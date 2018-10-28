const app = document.getElementById('root');
const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const card = document.createElement('div');
card.setAttribute('class', 'card');

const h2 = document.createElement('h2');
 const p = document.createElement('p');

app.appendChild(logo);
app.appendChild(container); 

document.getElementById("searchTerm")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("searchButton").click();
    }
});   

function myfunction(){


var mydata = document.getElementById("searchTerm").value;

  
    
    
    if($.inArray(mydata , girlgrouplist) != -1){
    console.log("Found");
}else{
    container.innerHTML = " ";
    logo.src = "random_not_found.jpg";
   
    return;
}
    
    var param = "&titles=" + mydata;
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&exintro=1";
    var image_url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original";
    
    
    
var request = new XMLHttpRequest();
var image_request = new XMLHttpRequest();    
request.open('GET', url+param , true); 
image_request.open('GET', image_url+param , true); 
    
image_request.onload = function(){
        var image_data = JSON.parse(image_request.responseText);
        var image_object = image_data.query.pages;
        for(var image_prop in image_object){
        var image_newdata = image_object[image_prop];
        break;
        }
    
        var image_source = image_newdata.original;
    
logo.src = image_newdata.original['source'];
    
} 

image_request.send();

    


    h2.textContent = mydata;
 
      
request.onload = function () {
    
    
    var data = JSON.parse(request.responseText);
    
    var object = data.query.pages;
    for(var prop in object){
        var newdata = object[prop];
        break;
    } 
    

   /* const card = document.createElement('div');
    card.setAttribute('class', 'card');
    

    const h2 = document.createElement('h2');
    h2.textContent = mydata;
 
    const p = document.createElement('p'); */
    
    p.innerHTML = newdata.extract;
   
       
    container.appendChild(card);
    card.appendChild(h2);
    card.appendChild(p);
    
  } 


request.send();
   
    
}