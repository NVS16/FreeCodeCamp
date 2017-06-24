$(document).ready(function(){

    var t, b, s, hour = 0, min = 25, sec = 0, myVar, percentage = 0;
    var isRunning = false;
    var isBreak = false;

    function setTime(t)
    {
        hour = Math.floor(t / 60);
        min = t % 60;
        sec = 0;
        $("#hour").html(hour);
        $("#min").html(min);
        $("#sec").html(sec);
    }


    
    
    $(".inc").click(function(){
        if(isRunning === false)
        {
        t = $(this).parent().siblings(".inputTime").val();
        t = parseInt(t);
        $(this).parent().siblings(".inputTime").val(t + 1);
        b = parseInt($("#break").val());
        s = parseInt($("#session").val());
        setTime(s);
        }
    });


    $(".dec").click(function(){
        if(isRunning === false){
        t = $(this).parent().siblings(".inputTime").val();
        t = parseInt(t);
        if(t !== 1)
        {
            $(this).parent().siblings(".inputTime").val(t - 1);
        }
        b = parseInt($("#break").val());
        s = parseInt($("#session").val());
        setTime(s);
        }
    });
    
    $("#start").click(function(){
        if(isRunning)
        {
            $(this).addClass("btn-success");
            $(this).removeClass("btn-primary");
            $(this).html("Start");
            isRunning = false;
            clearInterval(myVar);
        }
        else{
            isRunning = true;
            $(this).html("Pause");
            $(this).addClass("btn-primary");
            $(this).removeClass("btn-success");
        myVar = setInterval(function(){
            if((sec === 0) && ((min !== 0) || (hour !== 0)))
                sec = 59;
            else if(sec !== 0)
                sec--;
            $("#sec").html(sec.toString());
            if((sec === 59) && (min !== 0))
                {min--;}
            if((min === 0) && (hour !== 0))
                min = 59;
            if((min === 59) && (hour !== 0))
                {hour--;}
            if((hour === 0) && (min === 0) && (sec === 0))
            {
                if(isBreak)
                {
                    setTime(s);
                    isBreak = false;
                    $("#title").html("Session");
                }
                else
                {
                    setTime(b);
                    isBreak = true;
                    $("#title").html("Break!");
                }
                percentage = 0;
            }
            $("#min").html(min.toString());
            $("#hour").html(hour.toString());
        }, 1000);
        }
    });    
});