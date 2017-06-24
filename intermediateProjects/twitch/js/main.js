$(document).ready(function(){

    

    var url = "https://wind-bow.glitch.me/twitch-api/streams/esl_sc2";
    $.ajax({
        type : 'GET',
        url : url,
        success : function(data){
            document.write(JSON.parse(data));
        },
        error : alert("Error")
    });

});