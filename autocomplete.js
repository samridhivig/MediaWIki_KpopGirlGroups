window.girlgrouplist = new Array(); 
var request = new XMLHttpRequest();
request.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=categorymembers&cmtitle=Category:South_Korean_girl_groups&cmlimit=500&prop=extracts', true); 
var mydata = document.getElementById("searchTerm").value;
request.onload = function () {

var data = JSON.parse(request.responseText);
    
 //var girlgrouplist = new Array();     
var object = data.query.categorymembers; 
    
for(var prop in object){
girlgrouplist.push(object[prop].title); 
}  
  
    

$(function(){
     var girlgrouplist = new Array();     
var object = data.query.categorymembers; 
    
for(var prop in object){
girlgrouplist.push(object[prop].title); 
}
  
    $( "#searchTerm" ).autocomplete({
        source: girlgrouplist
    });
});
       
}
request.send(); 
  