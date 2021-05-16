noseX=0;
noseY=0;

function preload() {
    clown_nose=loadImage('https://i.postimg.cc/Vk6cw061/Bablu-ka-Mustach.png');
}

function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300 ,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses)
}               

function modelloaded() {
    console.log ('poseNet is initialized');
}

function gotPoses(results) {
 if (results.length> 0) {
     console.log (results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-5;
    console.log("noseX =" +noseX);
    console.log("noseY =" +noseY);
 }
}

function draw() {
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30)
}

function take_snapshot() {
    save('MyFilterImg.png');
}

