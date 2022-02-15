harry = "";
beliver = "";
leftWristX = "";
leftWristY = "";
 rightWristX= "";
rightWristY = "";
scoreLeftWrist = 0;
song_beliver = "";
song_harry = "";
scoreRightWrist = "";



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

song_harry = harry.isPlaying();
console.log(song_harry);

if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,20);
harry.stop();
if(song_beliver == false){
beliver.play();
document.getElementById("song_name").innerHTML = "Song name : Believer";
}
}

if(scoreRightWrist>0.2){
  circle(rightWristX,rightWristY,20);
  beliver.stop();
  if(song_harry == false){
  harry.play();
  document.getElementById("song_name").innerHTML = "Song name : Harry Poter";
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

      scoreRightWrist = results[0].pose.keypoints[10].score;
      console.log(scoreRightWrist);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left wrist x = " + leftWristX + "left wrist y = " + leftWristY);



    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right wrist x = " + rightWristX + "right wrist y = " + rightWristY);

    }
    }