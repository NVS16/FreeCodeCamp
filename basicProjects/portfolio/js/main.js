$(document).ready(function(){


    var tags = ["Web Developer", "Thinker", "Believer"], id = 0;

    
    setInterval(function(){


        if(id === 3)
            id = 0;


        
        
         $("#tag").fadeOut("slow");
         $("#tag").html(tags[id++]);
        
        
       
        

    }, 2000);
    

});