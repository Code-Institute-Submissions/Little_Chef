$(document).ready(function() {
    $("#btnStart").click(function() {
        $(".starting").hide();
        OrangeJuice();
       
        
    });
});

$(".ChalImg").click(function() {
      
      answer.push($(this).attr('src'));
     
    });
//*************************************Result*********************************************
 function functionAlert(msg, myYes) {
            var confirmBox = $("#confirm");
            confirmBox.find(".message").text(msg);
            // confirmBox.find(".yes").unbind().click(function() {
            //   confirmBox.hide();
            //   myYes();
            // });
            //confirmBox.find(".yes").click(myYes);
            confirmBox.show();
             confirmBox.hide(50000);
         }  
//*************************************Arrays*********************************************
var orangeImgArray = ['images/oranges.png','images/water.png','images/sugar.jpeg','images/Juicer.png'];
var orange_challangeImgArray=['images/oranges.png','images/water.png','images/tomato.png','images/sugar.jpeg','images/Juicer.png']
var strawberryslushieImgArray=['images/stwberrySyrp.png','images/sugar.jpeg','images/icecube.jpg','images/Juicer.png']
var strawberryslushie_challangeImgArray=['images/icecube.jpg','images/stwberrySyrp.png','images/oranges.png','images/sugar.jpeg','images/Juicer.png']

let tm;
var answer = [];
let timer;
let score=0;
let scorebox = document.getElementById("score");
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
//******************************************************************************************

//********************************Counter***************************************************


function Countdown(duration, callback) {
        document.getElementById("time").textContent = duration;
        timer = setInterval(function() {
            duration--;
            document.getElementById("time").textContent = duration;
        
            if(duration == 0) {
                clearTimeout(timer);
                callback();
            }
        }, 1000);  
        
    }


//********************************Reseting Image******************************************************
function ResetImg(){
    answer=[];
    $("#imgchallnge-0").removeClass("imgchallnge-0-move");
    $("#imgchallnge-1").removeClass("imgchallnge-1-move");
    $("#imgchallnge-2").removeClass("imgchallnge-2-move");
    $("#imgchallnge-3").removeClass("imgchallnge-3-move");
    $("#imgchallnge-4").removeClass("imgchallnge-4-move");
}

//*****************************array Comparison************************************
function arrayContainsArray(superset, subset) {
    if (0 === subset.length) {
        return false;
    }
    return subset.every(function(value) {
        return (superset.indexOf(value) >= 0);
    });
}

//****************************Orange Juice Challange**************************************
function OrangeJuice() {
    makeImages(orangeImgArray);
    $("#item").text("Orange Juice");
    // $("#item-img").attr("src","images/orangejuice.jpg");
    $("#recipe-card").show();
    ResetImg();
    let countdown = new Countdown(5, OrangeJuiceChallange);
   
}

function OrangeJuiceChallange(){
    
     $("#recipe-card").hide();
      $("#challenge-card").show();
      $("#itemChallange").text("Select Ingredients for Orange Juice")
     makeImages_challange(orange_challangeImgArray);
    let countdown = new Countdown(10, TimeOut1);
}


function TimeOut1(){
    
    document.getElementById("alert").innerHTML = "You missed this time,Try again";
            functionAlert();
    $("#challenge-card").hide();
    
    setTimeout(OrangeJuice, 2000)
  
    }


$("#OrangJ_submit").click(function() {
    clearTimeout(timer);
    var check = false;
   
    if (!Array.isArray(orangeImgArray) || !Array.isArray(answer) || orangeImgArray.length !== answer.length) 
    {
        
    document.getElementById("alert").innerHTML = "You missed this time,Try again";
    functionAlert();
    $("#challenge-card").hide();
    setTimeout(OrangeJuice, 2000)
          clearTimeout(timer);
    
    ResetImg();
    }
    else {
      if( arrayContainsArray(orangeImgArray, answer) == true)
        {
            
                       score+=5; 
            document.getElementById("alert").innerHTML = "Hey! You got it right, Your Score is :"+score;
            functionAlert();
           $("#challenge-card").hide();
            scorebox.textContent = score;
            setTimeout(strawberryslushie, 2000)
            
        }
        else {
            document.getElementById("alert").innerHTML = "You missed this time,Try again";
            functionAlert();
            $("#challenge-card").hide();
            setTimeout(OrangeJuice, 2000)
        
            
        }
        
    }

});
//*************************Strewberry Slushi Challange*************************************************
function strawberryslushie() {
    answer=[];
    makeImages(strawberryslushieImgArray);
    $("#item").text("Strawberry Slushie");
     //$("#item-img").attr("src","images/orangejuice.jpg");
    $("#recipe-card").show();
    ResetImg();
    let countdown = new Countdown(5, strawberryslushieChallange);
   
}
function strawberryslushieChallange(){
     $("#recipe-card").hide();
     $("#OrangJ_submit").hide();
     $("#strewbS_submit").show();
      $("#challenge-card").show();
      $("#itemChallange").text("Select Ingredients for strawberry slushie")
     makeImages_challange(strawberryslushie_challangeImgArray);
    let countdown = new Countdown(10, TimeOut2);
}
function TimeOut2(){
    
    document.getElementById("alert").innerHTML = "You missed this time,Try again";
            functionAlert();
    
     $("#challenge-card").hide();
     
     setTimeout(strawberryslushie, 2000);
     
     
    }


$("#strewbS_submit").click(function() {
    
    
    clearInterval(timer)
    var check = false;
   
    if (!Array.isArray(strawberryslushieImgArray) || !Array.isArray(answer) || strawberryslushieImgArray.length !== answer.length) {
       document.getElementById("alert").innerHTML = "You missed this time,Try again";
    functionAlert();
    $("#challenge-card").hide();
    setTimeout(strawberryslushie, 2000)
          clearTimeout(timer);
          
        ResetImg();
    }
    else {
      if( arrayContainsArray(strawberryslushieImgArray, answer) == true)
        {
            score+=5;
            document.getElementById("alert").innerHTML = "Hey! You got it right, Your Score is :"+score;
            functionAlert();
            scorebox.textContent = score;
            $("#challenge-card").hide();
            setTimeout(strawberryslushie, 2000);
        }
        else {
             document.getElementById("alert").innerHTML = "You missed this time,Try again";
            functionAlert();
            $("#challenge-card").hide();
            setTimeout(strawberryslushie, 2000);
        
            ResetImg();
        }
        
    }

});

//*************************Image Movements************************************       
        
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
