# Little - Chef

Stream Two Project: Interactive Front-End Development - Code Institute.

This is a simple Kitchen game for children, with 3 stages and timer. It is inspired from the children's coocking game in Friv.com.


### Demo

A live demo can be found [here](https://femy16.github.io/Little_Chef/).

### Technologies
+ JavaScript
+ jQuery
+ HTML
+ CSS
+ Bootstrap (3.3.7)

### UX

This Game was modeled after the cooking games for children in firv.com, which my niece used to play. It was a game to make cakes by selecting ingredients from kitchen.

In this game I have used simple animations and sound effects. 

I have used full screen overlay navigation for the How to play section, which  explains how to play the game. 
The ingredients can be selected just by a click in desktops and by touch in touch screens. 

The game have 3 stages and each stage have 2 parts, 1st part shows the ingredients to make a dish which will be closed after some seconds and second part is the challange part in which we have to set the correct ingredients from given list of images with in given seconds.

For better user experience i have added game sounds like background music if needed, sounds when an ingredent is selected, when the selection is wrong and also a sucess sound at the end.

#### How to play

To start the game click on the right arrow red round  image button, which will take you to the first level first step which shows the recipe for fist dish and this will be closed after 10 seconds and by that time you have to memorize the ingredients, then comes the challenge card in which you have to select the ingredients from given set of ingredients
within 15 seconds. If you are right you will be shown a confirmation box which shows a message and score by clicking OK you will be taken to next stage of game, if you are wrong first stage will be repeated.by the end of third stage, game will be restarted.

#### Mobile

For a better gaming experience, turn your device to widescreen.

### Features

+ The timer controlls the display and hiding of recipe card and  challange card, two timers are used in this project .
+ The movement of ingredients image are done by css keyframes.
+ There are game sound effects, when an ingredent is selected, when the selected ingredents are wrong and also a sucess sound at the end of the game.
+ All the Images are displayed according to the screen size.
+ During the challenge if you make any mistake you can reset the challange by clicking the reset button, but the timer will not be reseted.

#### Features Left to Implement

+ Need to add more stages in the game. 
+ Must be able to store the high score.
+ When the game is finished it should return to the start without refreshing the page.

### Testing

All the tests for the game are done manually, timer was not working properly from the start, I continued testing and updating the code till both the timers worked properly. 

Tried to return to the start without refreshing the page, but the timer was getting complicated so fixed it by refreshing the page.
+ Responsive : The website has been tested in different viewports and it is responsive. But for a better gaming experience, turn your device to widescreen when taken in mobiles. 
+ Animations : the animations are working for all ingredients in the challange card.

### Credits

##### Media and Music

All images and background musics have been obtained through different searches through [Google](www.google.com).

### Acknowledgements

+ Inspiread from the games of this [site](http://frk.gamib.net/x/sarassweetcookingclass/x.html?z=0ivx).
