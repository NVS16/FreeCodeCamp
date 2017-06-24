$(document).ready(function(){

$(".btn-default").click(function(){

$(".panel-group").html("");

var searchrqst = $("input").val();

var id;

var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchrqst +"&format=json&callback=?"; 
   $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data){
            for(idVal = 0; idVal < data[1].length; idVal++)
            {
                $(".panel-group").append("<a target = \"blank\"id = " + idVal + "><div class=\"panel panel-default\"><div class=\"panel-heading\">" + data[1][idVal] + "</div><div class=\"panel-body\">" + data[2][idVal] + "</div></div></a>");
                $("#" + idVal).attr("href", data[3][idVal]);
                $("#" + idVal).css("margin", "30px");
                //alert(data[3][1]);
                $("#" + idVal).hover(function(){
                    $(this).css("text-decoration", "none");
                    $(this).css("color", "#d9534f");
                    $(this).children(".panel").css("box-shadow", "5px 5px 15px #ccc");
                }, function(){
                    $(this).css("color", "#428bca");
                    $(this).children(".panel").css("box-shadow", "");
                });
             }
        },
        error : function(errorMessage){
        alert("Error!!") ;
        }
        
   });

});

});