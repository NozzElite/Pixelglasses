eyesX="";
eyesY="";

function preload(){
    pixel_glass=loadImage("https://i.postimg.cc/tC5RVrfL/pixel-glasses-removebg-preview.png");
}
function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
   video.hide();
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on("pose", gotPoses);
}
function draw()
{
image(video, 0, 0, 300, 300);
image(pixel_glass, eyesX, eyesY, 125, 80);
}
function take_snapshot()
{
    save('PixelGlassesImage.png');
}
function modelLoaded()
{
    console.log("Posenet is initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        eyesX=results[0].pose.leftEye.x-73;
        eyesY=results[0].pose.leftEye.y-40;
    }
}