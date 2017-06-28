$(document).ready(function(){

    var id = "0", chName, chContent;

    var i;

    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", 
    "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

   

    $(".choice").click(function(){
        $("#" + id).parent().removeClass("active");
        $(this).parent().addClass("active");
        id = $(this).attr("id");
    });


   

    var url;
    
    channels.forEach(function(val){
            
            url = "https://wind-bow.glitch.me/twitch-api/streams/" + val;
            var myVar = $.getJSON(url, function(data){
                if(channels.indexOf(val) === 0)
                    $(".panel-group").html("");
                chName = val;
                if(data.stream !== null)
                {
                    //alert(details[i].channel.game);
                chContent = "<div class='panel panel-success online'><div class='panel-heading'><img src ="  + 
                data.stream.channel.logo + "width = '50px' height = '50px'> <a target = '_blank' href = " + data.stream.channel.url + ">"
                 + chName + "</a></div><div class='panel-body'>Game : " + data.stream.channel.game + "<br>Language : "
                  + data.stream.channel.language + "<br>Viewers : " + data.stream.viewers + "<br>Channel Views : "
                   + data.stream.channel.views + "<br>Channel Followers : " + data.stream.channel.followers + 
                   "</div></div>"
                }
                else
                {
                    
                    chContent = "<div class='panel panel-danger offline'><div class='panel-heading'>"
                    + chName + "</div><div class='panel-body'>Channel is Offline!</div></div>";
                }
            $(".panel-group").append(chContent);


            $(".panel").hover(function(){
                    $(this).css("text-decoration", "none");
                    $(this).css("color", "orange");
                    $(this).css("box-shadow", "5px 5px 15px #ccc");
                    $(this).css("font-size", "20px");
                }, function(){
                    $(this).css("font-size", "15px");
                    $(this).css("color", "#428bca");
                    $(this).css("box-shadow", "");
                });


            $(".choice").click(function(){
                if(channels.indexOf(val) === 7)
                {
                    id = parseInt($(this).attr("id"));

                    switch(id)
                    {
                        case 0 :  { 
                            $(".online").show();
                            $(".offline").show();
                        } break;
                        case 1 :  {$(".online").show();
                            $(".offline").hide();} break;
                        case 2 :  {$(".online").hide();
                            $(".offline").show();} break;
                    }
                }
            });
            
        });
    });
    
});