$(document).ready(function(){
    var sequence = [1, 3, 1, 2, 2, 1];
    var id = 0, myVar, myVar1;
    var prevStyle = ["background : green", "background : red", "background : yellow", "background : blue"];
    var isRunning = true;
    /*function simonMove()
    {
        //alert(id);
        for(id = 0; id < 6; id++)
        {setTimeout(function(){
            //alert("red");
            $("#" + sequence[id -1].toString()).attr("style", "background : black");
        }, id * 1000);

        setTimeout(function(){
            //alert("red");
            $("#" + sequence[id - 1].toString()).attr("style", prevStyle(sequence[id - 1]));
        }, id * 1000 + 300);
        }
    }

        simonMove();
    */
    if(isRunning)
    {
        myVar = setInterval(function(){
            if(id === 6)
            { 
                $("#" + sequence[id - 1].toString()).attr("style", prevStyle[sequence[id - 1]]);
                alert(prevStyle[sequence[id - 1]]);
                closeInterval(myVar);
                isRunning = false; 
            }
            else
            {
                if(id)
                    $("#" + sequence[id - 1].toString()).attr("style", prevStyle[sequence[id - 1]]);
                //alert(prevStyle);
                if(sequence[id] === sequence[id - 1])
                    {$("#" + sequence[id].toString()).attr("style", prevStyle[sequence[id]]);
                    //alert(prevStyle[sequence[id]]);
                    myVar1 = setInterval(function(){
                            $("#" + sequence[id - 1].toString()).attr("style", "background : black");
                            clearInterval(myVar1);
                    }, 500 * id);}
                else
                    $("#" + sequence[id].toString()).attr("style", "background : black");
                id++;
            }
        }, 2000);
    }

    

    

    

});