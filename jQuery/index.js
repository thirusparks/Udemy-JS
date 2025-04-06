var change = false;
$("h1").click(function(){
    if(!change){
        $("h1").css("color", "purple");
        change = true;
    } else {
        $("h1").css("color", "black");
        change = false;
    }
    
});

$("button").click(function(){  
    $("h1").css("color", "purple");
});

$(document).keypress(function(event){
    console.log(event.key);
    
    $("h1").text(event.key);
});

$("h1").append("<button>Sandhya</button>");