const app = document.getElementById('root');

//const logo = document.createElement('img');
//logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'news_container');

var link_array = new Array();
var thumbnail_array = new Array();
var title_array = new Array();
//app.appendChild(logo);
app.appendChild(container); 

var request = new XMLHttpRequest();
request.open('GET' , "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fhl%3Den%26gl%3Dus%26q%3Dallkpop%26um%3D1%26ie%3DUTF-8%26output%3Drss" , true);

request.onload = function(){
    
    var data = JSON.parse(request.responseText);
    var object = data.items;
    for(var prop in object){
        
        thumbnail_array.push(object[prop].thumbnail);
        
        var news_link = object[prop].guid.replace('tag:news.google.com,2005:cluster=','');
        link_array.push(news_link);
        var news_title = object[prop].title.replace(' - allkpop (press release) (blog)', ' ');
        title_array.push(news_title);
        
    }
    
    for(var i = 1 ; i < link_array.length ; ++i){
          const card = document.createElement('div');
        card.setAttribute('class','news_card');
        
       /* const thumbnail_container = document.createElement('div');
        thumbnail_container.setAttribute('class','thumbnail_container');
        const thumbnail = document.createElement('img');
        thumbnail.src = thumbnail_array[i];*/
        
        const news_headline = document.createElement('div');
        news_headline.setAttribute('class','news_headline');
        const a = document.createElement('a');
         a.setAttribute('href',link_array[i]);
         a.innerHTML = title_array[i];
        
        container.appendChild(card);
        //card.appendChild(thumbnail_container);
        card.appendChild(news_headline);
        //thumbnail_container.appendChild(thumbnail);
        news_headline.appendChild(a);
    }
    
    
}

request.send();
