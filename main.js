function preload() {

  }
  
function setup() {
  canvas = createCanvas(500,340);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500,340);
  video.hide();

  
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
 }
 

 function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0){
console.log(results);
lipstickX = results[0].pose.lipstick.x-10;
lipstickY = results[0].pose.lipstick.y-10;
console.log("lipstickX = " + lipstickX);
console.log("lipstickY = " + lipstickY);
    }

}

  

function draw() {
image(video,0,0,640,480);
  }
  
function take_snapshot(){    
    save('myFilterImage.png');
  }