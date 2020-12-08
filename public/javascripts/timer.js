// https://www.createjs.com/tutorials/Getting%20Started/

function loadSound () {
    createjs.Sound.registerSound("assets/Notice1.m4a", "notice");
}

function playSound (soundID) {
    createjs.Sound.play(soundID);
}

var stage ;

var startTime;
var pie ;
var running = false;


function init() {

    stage = new createjs.Stage("timerCanvas");
    pie = new createjs.Shape();
    pie.minutes = 0;
    pie.minutesLeft = 0;
    pie.update = function(minutesLeft){
        this.graphics.clear()
        var top = Math.PI * 3/2
        var angle = top -(pie.minutesLeft * (Math.PI/30))
        pie.graphics.beginFill("rgba(255,0,0,1)").arc(250, 250, 142, angle, top, false).lineTo(250, 250).closePath();
    }
    pie.reset = function(){
        pie.minutesLeft = pie.minutes
    }
    pie.update(25)
    stage.addChild(pie);
    //drawMinuteMarker(stage)
    addClock(stage)
    stage.update()


}
function start(){
    pie.minutes = parseInt(document.getElementById("minutes").value)
    running = true;
    pie.startTime = new Date().getTime();
    pie.reset()
    document.getElementById("timerStart").innerHTML = "Stop"
    createjs.Ticker.addEventListener("tick", handleTick);
}
function stop(){
    running = false;
    createjs.Ticker.removeEventListener("tick", handleTick);
    document.getElementById("timerStart").innerHTML = "Start"
    pie.reset()
}
function setMinutes(){
    stop()
    pie.minutes = parseInt(document.getElementById("minutes").value)
    pie.reset()
    pie.update(pie.minutesLeft)
    stage.update()
}
function start_stop(){
    if (running){
         stop()
    } else {
        start()
    }
}

function handleTick(event) {
    var minutesPassed = ((new Date().getTime() - pie.startTime)/60000) // 60000
    pie.minutesLeft = pie.minutes - minutesPassed
    if (pie.minutesLeft <= 0){
        stop()
        playSound ("notice")
    }
    //console.log(pie.minutesLeft)
    pie.update(pie.minutesLeft)

    stage.update();
}


function drawMinuteMarker(stage){
    cont = stage.addChild(new createjs.Container()); // container to hold the clock
    cont.x = cont.y = 250; // center the container
    for(deg = 0; deg <= 360; deg+= 6) { // rotate to create 60 markers
        var radius = 1; // default size of markers
        if (deg % 30 == 0) radius = 2; // bigger ones for 5, 10, 15, ... minutes
        if (deg % 90 == 0) radius = 5; // even bigger markers for 15, 30, 45, 60 mins

        var s1 = new createjs.Shape();
        s1.graphics
            .beginFill("black").drawCircle(150,0,radius);
        s1.rotation = deg; // draw markers for all 60 minutes

        var s2 = new createjs.Shape();
        s2.graphics
            .beginFill("black").drawRect(145,0, 10,radius);
        cont.addChild(min);
        s2.rotation = deg; // draw markers for all 60 minutes


        cont.addChild(s2);
    }
}


// from https://salmanzg.wordpress.com/2012/12/22/html5-canvas-using-easeljs/
var stage, cont, min, hr, sec;

function addClock(stage) {
    cont = stage.addChild(new createjs.Container()); // container to hold the clock
    cont.x = cont.y = 250; // center the container

    drawMinuteMarker(stage)


// the minute hand
    min = new createjs.Shape();
    min.graphics
        .beginFill("black").drawRect(0,0, 135,3);
    cont.addChild(min);

// the hour hand
    hr = new createjs.Shape();
    hr.graphics
        .beginFill("black").drawRect(0,0, 75,5);
    cont.addChild(hr);

// the second hand
    sec = new createjs.Shape();
    sec.graphics
        .beginFill("black").drawRect(0,0, 140,1);
    cont.addChild(sec);

// window as tick listener
    createjs.Ticker.addEventListener("tick",clockTick);
}

function minToAngle(){
    return new Date().getMinutes()*6;
}
function hrToAngle(){
    return (new Date().getHours()-12)*30;
}
function secToAngle(){
    return new Date().getSeconds()*6;
}

function clockTick() {
    //cont.rotation += 1;  // try to uncomment this!
    sec.rotation = secToAngle() - 90;
    min.rotation = minToAngle()-90 + (6*(secToAngle()/360)) ;
    hr.rotation = hrToAngle()-90 + (30*(minToAngle()/360));
    stage.update();
}
