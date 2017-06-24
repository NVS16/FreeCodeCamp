$(document).ready(function(){
 
  var quoteHolder = [];
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=",
   function(json){
    
      json.forEach(function(val){
        quoteHolder.push(val);
      });
      }); 
  $(".btn-quote").on("click", function(){
    
    var randomNumber = Math.floor(Math.random() * 29); 
  
    
$("h3").html(quoteHolder[randomNumber].content);
    $("footer").html(quoteHolder[randomNumber].title);
    $(".btn-tweet").click(function(){
      $(".a-twitter").attr("href", 'https://twitter.com/intent/tweet?hashtags=fccquotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteHolder[randomNumber].content + '" ' + quoteHolder[randomNumber].title));
    });
    
    });
  
  });
  
