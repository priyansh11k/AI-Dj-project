harry = "";
beliver = "";
leftWristX = "";
leftWristY = "";
 rightWristX= "";
rightWristY = "";
scoreLeftWrist = 0;
song_beliver = "";


function preload(){
    harry = loadSound("music.mp3");
    beliver = loadSound("Believer.mp3");
}


function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose' , gotPoses);
}

function draw(){
image(video,0,0,600,500);
  
fill("#37ff00");
stroke("#ff0000");

song_beliver = beliver.isPlaying();
console.log(song_beliver);

if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,20);
harry.stop();
if(song_beliver = false){
beliver.play();

}
else{
document.getElementById("song_name").innerHTML = "Song name : Believer";
}
}
}

function modelLoaded(){
    console.log("Posenet is Ready");
    }

    function gotPoses(results){
    if(results.length > 0){
    console.log(results);
       
      scoreLeftWrist = results[0].pose.keypoints[9].score;
      console.log(scoreLeftWrist);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left wrist x = " + leftWristX + "left wrist y = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right wrist x = " + rightWristX + "right wrist y = " + rightWristY);

    }
    }