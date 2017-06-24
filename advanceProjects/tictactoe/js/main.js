$(document).ready(function(){
    var  i, j, indWinning, t, cpuInd, ctr,  cpuToInd = -1;
    var canClick = true;
    var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    
    function whoWon(t){
        canClick = false;
        if(t === 1)
        {
            alert("You Won!!");
        }
        else if(t === 2)
        {
            alert("CPU Won!!");
        }
    }
    function checkWin(t)
    {
        for(var x in win)
        {
            ctr = 0;
            for(var y in win[x])
            {
                if(grid[win[x][y]] === t)
                    ctr++;
            }
            if(ctr === 3)
            {    
                whoWon(t);}
        }
    }
    var isWinning = function(){
        for(var x in win)
        {
            ctr = 0;
            cpuInd = -1;
            for(var y in win[x])
            {
                if(grid[win[x][y]] === 2)
                    ctr++;
                else if(grid[win[x][y]] === 0)
                    {
                        cpuInd = win[x][y];
                    }
            }
            if((ctr === 2) && (cpuInd !== -1))
            {    
                return 2;
            }
        }
        for(var x in win)
        {
            cpuToInd = -1
            ctr = 0;
            /*if((t = win[x].indexOf(i)) !== -1)
            {
                //alert(t);
                switch(t)
                {
                    case 0 : {
                        if(grid[win[x][1]] === 1)
                            ctr++;
                        else if(grid[win[x][1]] === 0)
                            cpuToInd = win[x][1];
                        if(grid[win[x][2]] === 1)
                            ctr++;
                        else if(grid[win[x][2]] === 0)
                            cpuToInd = win[x][2];
                    } break;
                    case 1 : {
                        if(grid[win[x][0]] === 1)
                            ctr++;
                        else if(grid[win[x][0]] === 0)
                            cpuToInd = win[x][0];
                        if(grid[win[x][2]] === 1)
                            ctr++;
                        else if(grid[win[x][2]] === 0)
                            cpuToInd = win[x][2];} break;
                    case 2 : {
                        if(grid[win[x][0]] === 1)
                            ctr++;
                        else if(grid[win[x][0]] === 0)
                            cpuToInd = win[x][0];
                        if(grid[win[x][1]] === 1)
                            ctr++;
                        else if(grid[win[x][1]] === 0)
                            cpuToInd = win[x][1];} break;
                }
                //alert(ctr);
                if(ctr === 2)
                {
                    return 1;
                }
                else if(ctr === 1)
                {
                    return 0;
                }
                else
                {
                    cpuToInd = -1;
                }
        }*/

        
            for(var y in win[x])
            {
                if(grid[win[x][y]] === 1)
                    ctr++;
                else if(grid[win[x][y]] === 0)
                    cpuToInd = win[x][y];
            }
            if(ctr === 3)
            {
                return 1;
            }
            else if(ctr === 2)
            {
                return 0;
            }
            else
            {
                cpuToInd = -1;
            }
            
        
    }
        
    };
    function cpuMove()
    {
        if(t = isWinning())
        {
            switch(t)
            {
                case 1 : {
                    checkWin(1);
                } break;
                case 2 : {
                    //alert("finisher" + cpuInd);
                    grid[cpuInd] = 2;
                    $("#" + cpuInd.toString()).html("<i class = 'fa fa-circle'></i>");
                    checkWin(2);
                    
                } break;
            }
        }
        else if(cpuToInd === -1)
        {
            for(var x in grid)
            {
                if(grid[x] === 0)
                {
                    grid[x] = 2;
                    break;
                }
            }
            //alert("Any");
            $("#" + x.toString()).html("<i class = 'fa fa-circle'></i>");
            checkWin(2);
    }
        else
        {
            grid[cpuToInd] = 2;
            //alert("Blocker" + cpuToInd);
            $("#" + cpuToInd.toString()).html("<i class = 'fa fa-circle'></i>");
            checkWin(2);
        }
    }
    $("#reset").click(function(){
        grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        $("#0, #1, #2, #3, #4, #5, #6, #7, #8").html("");
        canClick = true;
    });
    $("td").click(function(){
        if(canClick)
        {i = parseInt($(this).attr("id"));
        if(grid[i] === 0)
        {grid[i] = 1;
        $(this).html("<i class = 'fa fa-circle-o'></i>");
        checkWin(1);
        if((grid.indexOf(0) === -1) && (canClick))
        {
            canClick = false;
            alert("Its a Draw!");
        }
        else if(canClick)
        cpuMove();}}
    });
});