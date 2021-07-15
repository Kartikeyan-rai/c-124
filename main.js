function preload(){

}
function setup(){
   video=createCapture(VIDEO);
   video.size(600,550);
   video.position(50,70)
   canvas=createCanvas(600,500);
   canvas.position(740,100);
   poseNet=ml5.poseNet(video,modelLoded);
   poseNet.on('pose',gotposes);
}
function modelLoded(){
    console.log("poseNet is initialized")
}
function draw(){
   background('blue')
}
function gotposes(result){
    if(result.length > 0){
        console.log(result)
    }
}