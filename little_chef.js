$(document).ready(function() {
    $("#btnStart").click(function() {
        $(".starting").hide();
        $("#time").show();
        $("#score_para").show();
        OrangeJuice();
    });
});
//**********************************Music******************************************************
let backgroundMusic;
let muteBtn
function play(){
  var audio = new Audio('onclick.mp3');
            audio.play();  
}
function playMusic() {
    backgroundMusic = new Audio();
    backgroundMusic.src = "bensound-littleidea.mp3";
    backgroundMusic.volume = 0.5;
    backgroundMusic.pause();
    muteBtn = document.getElementById('mute-music');
    muteBtn.addEventListener('click', mute);

    function mute() {
        if (backgroundMusic.paused == true) {
            backgroundMusic.play();
            backgroundMusic.loop = true;
            muteBtn.innerHTML = "stop music";
        }
        else {
            backgroundMusic.pause();
            muteBtn.innerHTML = "play music";
        }
    }
}

window.addEventListener('load', playMusic);
//*********************************************************************************************
$(".ChalImg").click(function() {

    answer.push($(this).attr('src'));

});
//*************************************Result*********************************************
function functionAlert(msg, func) {

    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.show();
    $("#close_confirm").click(function() {

        confirmBox.hide();
        clearTimeout(timer);

        func();

    })

    $("#exit_confirm").click(function() {
        document.location.reload();
    })

}


//*************************************Arrays*********************************************
var orangeImgArray = ['images/oranges.png', 'images/water.png', 'images/sugar.jpeg', 'images/Juicer.png'];
var orange_challangeImgArray = ['images/oranges.png', 'images/water.png', 'images/tomato.png', 'images/sugar.jpeg', 'images/Juicer.png'];
var strawberryslushieImgArray = ['images/stwberrySyrp.png', 'images/sugar.jpeg', 'images/icecube.jpg', 'images/Juicer.png'];
var strawberryslushie_challangeImgArray = ['images/icecube.jpg', 'images/stwberrySyrp.png', 'images/oranges.png', 'images/sugar.jpeg', 'images/Juicer.png'];
var fruitsaladImgArray = ['images/fruitsalad/custard.jpg', 'images/fruitsalad/apple.png', 'images/fruitsalad/grapes.png', 'images/fruitsalad/oranges.png', 'images/fruitsalad/pineapple.png'];
var fruitsalad_challangeImgArray = ['images/fruitsalad/custard.jpg', 'images/fruitsalad/apple.png', 'images/fruitsalad/Onion.png', 'images/fruitsalad/grapes.png', 'images/fruitsalad/oranges.png', 'images/fruitsalad/pineapple.png'];


let tm;
var answer = [];
let timer;
let score = 0;
let scorebox = document.getElementById("score");

function makeImages(foodArray) {
    for (i = 0; i < foodArray.length; i++) {
        document.getElementById('img-' + i).src = foodArray[i]
    }
}

function makeImages_challange(foodArray) {
    for (i = 0; i < foodArray.length; i++) {
        document.getElementById('imgchallnge-' + i).src = foodArray[i]
    }
}
//******************************************************************************************

//********************************Counter***************************************************


function Countdown(duration, callback) {
    document.getElementById("time").textContent = duration;
    timer = setInterval(function() {
        duration--;
        document.getElementById("time").textContent = duration;

        if (duration == 0) {
            clearTimeout(timer);
            callback();
        }
    }, 1000);

}


//********************************Reseting Image******************************************************
function ResetImg() {
    answer = [];
    $("#imgchallnge-0").removeClass("imgchallnge-0-move");
    $("#imgchallnge-1").removeClass("imgchallnge-1-move");
    $("#imgchallnge-2").removeClass("imgchallnge-2-move");
    $("#imgchallnge-3").removeClass("imgchallnge-3-move");
    $("#imgchallnge-4").removeClass("imgchallnge-4-move");
    $("#imgchallnge-5").removeClass("imgchallnge-5-move");
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
    $(".starting").hide();
    $("#time").show();
    $("#score_para").show();
    makeImages(orangeImgArray);

    $("#item").text("Orange Juice");
    // $("#item-img").attr("src","images/orangejuice.jpg");
    $("#recipe-card").show();
    ResetImg();
    let countdown = new Countdown(8, OrangeJuiceChallange);
}

function OrangeJuiceChallange() {
    $("#recipe-card").hide();
    $("#strewbS_submit").hide();
    $("#OrangJ_submit").show();
    $("#fruitS_submit").hide();
    $("#challenge-card").show();
    $("#itemChallange").text("Select Ingredients for Orange Juice")
    makeImages_challange(orange_challangeImgArray);
    let countdown = new Countdown(15, TimeOut1);
}


function TimeOut1() {

    clearTimeout(timer);
    var audio = new Audio('wrong.mp3');
    audio.play();
    functionAlert("You missed this time,Try again", OrangeJuice);
    $("#challenge-card").hide();

    // setTimeout(OrangeJuice, 2000)

}


$("#OrangJ_submit").click(function() {
    clearTimeout(timer);
    var check = false;

    if (!Array.isArray(orangeImgArray) || !Array.isArray(answer) || orangeImgArray.length !== answer.length) {
        // clearTimeout(timer);

        $("#challenge-card").hide();
        var audio = new Audio('wrong.mp3');
        audio.play();
        functionAlert("You missed this time,Try again", OrangeJuice);

        ResetImg();
    }
    else {
        if (arrayContainsArray(orangeImgArray, answer) == true) {

            score += 5;
            $("#challenge-card").hide();
            functionAlert("Hey! You got it right, Your Score is :" + score, strawberryslushie);
            scorebox.textContent = score;



        }
        else {

            $("#challenge-card").hide();
            var audio = new Audio('wrong.mp3');
            audio.play();
            functionAlert("You missed this time,Try again", OrangeJuice);
        }

    }

});
//*************************Strewberry Slushi Challange*************************************************
function strawberryslushie() {

    $(".starting").hide();
    $("#time").show();
    $("#score_para").show();
    answer = [];
    makeImages(strawberryslushieImgArray);
    $("#item").text("Strawberry Slushie");
    //$("#item-img").attr("src","images/orangejuice.jpg");
    $("#recipe-card").show();
    ResetImg();
    let countdown = new Countdown(6, strawberryslushieChallange);

}

function strawberryslushieChallange() {
    $("#recipe-card").hide();
    $("#OrangJ_submit").hide();
    $("#strewbS_submit").show();
    $("#challenge-card").show();
    $("#itemChallange").text("Select Ingredients for strawberry slushie")
    makeImages_challange(strawberryslushie_challangeImgArray);
    let countdown = new Countdown(12, TimeOut2);
}

function TimeOut2() {
    clearTimeout(timer);
    var audio = new Audio('wrong.mp3');
    audio.play();
    functionAlert("You missed this time,Try again", strawberryslushie);

    $("#challenge-card").hide();

    //  setTimeout(strawberryslushie, 2000);


}


$("#strewbS_submit").click(function() {


    clearTimeout(timer);
    var check = false;

    if (!Array.isArray(strawberryslushieImgArray) || !Array.isArray(answer) || strawberryslushieImgArray.length !== answer.length) {
        clearTimeout(timer);
        $("#challenge-card").hide();
        var audio = new Audio('wrong.mp3');
        audio.play();
        functionAlert("You missed this time,Try again", strawberryslushie);
        ResetImg();
    }
    else {
        if (arrayContainsArray(strawberryslushieImgArray, answer) == true) {
            clearTimeout(timer);
            score += 5;
            $("#challenge-card").hide();
            functionAlert("Hey! You got it right, Your Score is :" + score, FruitSalad);
            scorebox.textContent = score;


        }
        else {
            clearTimeout(timer);
            $("#challenge-card").hide();
            var audio = new Audio('wrong.mp3');
            audio.play();
            functionAlert("You missed this time,Try again", strawberryslushie);
            ResetImg();
        }

    }

});

// //*************************Fruit Salad Challange*************************************************
function FruitSalad() {
    $(".starting").hide();
    $("#time").show();
    $("#score_para").show();
    answer = [];
    makeImages(fruitsaladImgArray);
    $("#item").text("Fruit Salad");
    // $("#item-img").attr("src","images/orangejuice.jpg");
    $("#recipe-card").show();
    ResetImg();
    let countdown = new Countdown(5, FruitSaladChallange);


}

function FruitSaladChallange() {

    $("#recipe-card").hide();
    $("#strewbS_submit").hide();
    $("#OrangJ_submit").hide();
    $("#fruitS_submit").show();
    $("#challenge-card").show();
    $("#itemChallange").text("Select Ingredients for Fruit Salad")
    makeImages_challange(fruitsalad_challangeImgArray);
    let countdown = new Countdown(10, TimeOut3);
}


function TimeOut3() {
    clearTimeout(timer);

    $("#challenge-card").hide();
    var audio = new Audio('wrong.mp3');
    audio.play();
    functionAlert("You missed this time,Try again", FruitSalad);


}


$("#fruitS_submit").click(function() {
    clearTimeout(timer);
    var check = false;
    if (!Array.isArray(fruitsaladImgArray) || !Array.isArray(answer) || fruitsaladImgArray.length !== answer.length) {
        clearTimeout(timer);

        $("#challenge-card").hide();
        var audio = new Audio('wrong.mp3');
        audio.play();
        functionAlert("You missed this time,Try again", FruitSalad);



        ResetImg();
    }
    else {
        if (arrayContainsArray(fruitsaladImgArray, answer) == true) {

            score += 5;
            $("#challenge-card").hide();

            var audio = new Audio('winning.mp3');
            audio.play();
            functionAlert("You win Little Chef, Your Score is :" + score, finall);
            scorebox.textContent = score;


        }
        else {
            $("#challenge-card").hide();
            var audio = new Audio('wrong.mp3');
            audio.play();
            functionAlert("You missed this time,Try again", FruitSalad);
        }
    }
});
//*************************Endingg function***********************************
function finall() {
    document.location.reload();

    $("#recipe-card").hide();
    $("#challenge-card").hide();
    $("#score_para").hide();
    $("#time").hide();
}


//*************************Image Movements************************************       

$("#imgchallnge-0").click(function() {
    $("#imgchallnge-0").addClass("imgchallnge-0-move");
});
$("#imgchallnge-1").click(function() {
    $("#imgchallnge-1").addClass("imgchallnge-1-move");
});
$("#imgchallnge-2").click(function() {
    $("#imgchallnge-2").addClass("imgchallnge-2-move");
});
$("#imgchallnge-3").click(function() {
    $("#imgchallnge-3").addClass("imgchallnge-3-move");
});
$("#imgchallnge-4").click(function() {
    $("#imgchallnge-4").addClass("imgchallnge-4-move");
});
$("#imgchallnge-5").click(function() {
    $("#imgchallnge-5").addClass("imgchallnge-5-move");
});
//****************************************************************
