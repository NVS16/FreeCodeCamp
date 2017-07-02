$(document).ready(function(){
    var sequence = [1, 3, 1, 0, 0, 2, 1, 3, 1, 1, 2, 0, 1, 1, 3, 2, 2, 2, 0, 0], playerArr = [];
    var id = 0, myVar, myVar1, i = 1, l = 1, idClicked, t = 0, canClick = false, toStrict = true;
    var prevStyle = ["background : green", "background : red", "background : yellow", "background : blue"];
    var toStart = true;
    
    function reset()
    {
        $("#count").html(0);
        toStart = true;
        playerArr = [];
        id = 0;
        l = 1;
        canClick = false;
        $("#start").html("Start");
        $("#info").html("It's Simon's turn!");
    }


    function playSound()
    {
        //alert(x);
        if(arguments.length === 0)
        var aud = document.getElementById("a" + idClicked);
        else
        var aud = document.getElementById("a" + arguments[0]);
        aud.play();
    }

    function check()
    {
        for(var k = 0; k < playerArr.length; k++)
        {
            if(playerArr[k] !== sequence[k])
            {
                canClick = false;
                alert("Simon Won!!");
                return;
                
                
            }
        }
        if(playerArr.length === l)
            simonChange();
    }

    function simonMove(limit)
    {
        setTimeout(function(){

            if(id === limit)
            { 
                $("#" + sequence[id - 1].toString()).attr("style", prevStyle[sequence[id - 1]]);
                if(l < 12)
                {
                    $("#info").html("It's your turn!");
                    canClick = true;
                }
                //alert(prevStyle[sequence[id - 1]]);
                 
            }
            else
            {       
                if(sequence[id] !== sequence[id - 1])  
                {
                    i = 1;
                    if(id)
                    $("#" + sequence[id - 1].toString()).attr("style", prevStyle[sequence[id - 1]]);       
                $("#" + sequence[id].toString()).attr("style", "background : black");
                playSound(id);
                }
                else
                {
                    i = 2;
                    colorRepeat();
                }
                id++;
                simonMove(l);
            }
            
    
        }, i * 1000);
    
    }  


function colorRepeat()
{
    $("#" + sequence[id - 1].toString()).attr("style", prevStyle[sequence[id - 1]]);
                    setTimeout(function(){
                        $("#" + sequence[id - 2].toString()).attr("style", "background : black");
                        playSound(id - 2);
                    }, 1000);
                    setTimeout(function(){
                        $("#" + sequence[id - 2].toString()).attr("style", prevStyle[sequence[id - 2]]);
                    }, 2000);
}


function simonChange()
{
                //alert("hello");
                $("#count").html(l);    
                if(l === 20)
                 {   alert("You Won!!");canClick = false;}
                else
                {
                    
                    playerArr = [];
                    l++;
                    id = 0;
                    $("#info").html("It's Simon's turn!");
                    simonMove(l);
                }
                canClick = false;
                
                    
            
            
            
}

$("td").click(function(){

    if(canClick)
    {
    idClicked = parseInt($(this).attr("id"));
    $("#" + idClicked.toString()).attr("style", "background : black");
    setTimeout(function(){
       $("#" + idClicked.toString()).attr("style", prevStyle[idClicked]); 
    }, 500);
    playerArr.push(idClicked);
    playSound();
    //alert(playerArr);
    check();
    }
});

$("#start").click(function(){
    if(toStart)
    {
        $(this).html("Reset");
        toStart = false;
        simonMove();
    }
    else
    {
        reset();
        
    }
});

/*$("#strict").click(function(){

    if(toStrict)
    {
        $(this).addClass("btn-danger");
        $(this).removeClass("btn-default");
        toStrict = false;
    }
    else
    {
        $(this).addClass("btn-default");
        $(this).removeClass("btn-danger");
        toStrict = true;
    }

});*/




});