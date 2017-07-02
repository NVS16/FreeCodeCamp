$(document).ready(function(){
    var sequence = [1, 3, 1, 2, 2, 1, 0, 0, 2, 3, 1], playerArr = [];
    var id = 0, myVar, myVar1, i = 1, l = 1, idClicked, t = 0, canCheck = false, canRun = true;
    var prevStyle = ["background : green", "background : red", "background : yellow", "background : blue"];
    var isTurn = false;
    

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
                alert("Simon Wins!" + playerArr);
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
                    alert("Its your turn!");
                    
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
    $("#info").html("It's your turn!");
        
          
                //alert("hello");
                playerArr = [];
                l++;
                id = 0;
                $("#info").html("It's Simon's turn!");
                simonMove(l);
            
            
            
}

$("td").click(function(){

    idClicked = parseInt($(this).attr("id"));
    playerArr.push(idClicked);
    playSound();
    //alert(playerArr);
    check();

});


simonMove();


});