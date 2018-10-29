$(document).ready(function() {
    $("#btnStart").click(function() {
        $(".starting").hide(3000);
        OrangeJuice();
       
        let countdown = new Countdown(5, done);
    });
});

$(".ChalImg").click(function() {
      
      answer.push($(this).attr('src'));
     
    });
    
var orangeImgArray = ['images/oranges.png','images/water.png','images/sugar.jpeg','images/Juicer.png'];
var orange_challangeImgArray=['images/oranges.png','images/water.png','images/tomato.png','images/sugar.jpeg','images/Juicer.png']
var answer = [];



function makeImages(foodArray){
    for(i=0; i<foodArray.length; i++){
        document.getElementById('img-'+i).src=foodArray[i]
    }
}
function makeImages_challange(foodArray){
    for(i=0; i<foodArray.length; i++){
        document.getElementById('imgchallnge-'+i).src=foodArray[i]
    }
}




function OrangeJuice() {
    makeImages(orangeImgArray);
    $("#item").text("Orange Juice");
     $("#item-img").attr("src","images/orangejuice.jpg");
    $("#recipe-card").show(1000);
   
    
}
function OrangeJuiceChallange(){
    
    $("#time").show();
    $("#challenge-card").show(500);
   
}

function Countdown(duration, callback) {
        document.getElementById("time").textContent = duration;
        let timer = setInterval(function() {
            duration--;
            document.getElementById("time").textContent = duration;
            if(duration == 0) {
                clearInterval(timer);
                callback();
            }
        }, 1000);
    }




function done() {
     $("#recipe-card").hide();
      $("#challenge-card").show();
      $("#itemChallange").text("Select Ingredients for Orange Juice")
     makeImages_challange(orange_challangeImgArray);
    let countdown = new Countdown(10, done2);
}


function done2() {
    
    alert("Sorry Time Out,Try again");
     $("#challenge-card").hide();
     OrangeJuice();
     let countdown = new Countdown(5, done3);
     
}
function done3(){
     $("#recipe-card").hide();
      $("#challenge-card").show();
      $("#itemChallange").text("Select Ingredients for Orange Juice")
     makeImages_challange(orange_challangeImgArray);
     $("#imgchallnge-0").removeClass("imgchallnge-0-move");
     $("#imgchallnge-1").removeClass("imgchallnge-1-move");
     $("#imgchallnge-2").removeClass("imgchallnge-2-move");
     $("#imgchallnge-3").removeClass("imgchallnge-3-move");
     $("#imgchallnge-4").removeClass("imgchallnge-4-move");
    let countdown = new Countdown(10, done2);
}


function arrayContainsArray(superset, subset) {
    if (0 === subset.length) {
        return false;
    }
    return subset.every(function(value) {
        return (superset.indexOf(value) >= 0);
    });
}
$("#OrangJ_submit").click(function() {
    
    var check = false;
   
    if (!Array.isArray(orangeImgArray) || !Array.isArray(answer) || orangeImgArray.length !== answer.length) {
        alert("You missed this time,Try again");
 $("#challenge-card").hide();
          OrangeJuice();
        let countdown = new Countdown(5, done3);
    }
    else {
      if( arrayContainsArray(orangeImgArray, answer) == true)
        {
            alert("you are right");
            $("#challenge-card").hide();
        }
        else {
            alert("You missed this time,Try again");
            $("#challenge-card").hide();
             OrangeJuice();
        let countdown = new Countdown(5, done3);
            
        }
        
    }

});

       
        
$("#imgchallnge-0").click(function(){
    $("#imgchallnge-0").addClass("imgchallnge-0-move");
});
$("#imgchallnge-1").click(function(){
    $("#imgchallnge-1").addClass("imgchallnge-1-move");
});
$("#imgchallnge-2").click(function(){
    $("#imgchallnge-2").addClass("imgchallnge-2-move");
});
$("#imgchallnge-3").click(function(){
    $("#imgchallnge-3").addClass("imgchallnge-3-move");
});
$("#imgchallnge-4").click(function(){
    $("#imgchallnge-4").addClass("imgchallnge-4-move");
});