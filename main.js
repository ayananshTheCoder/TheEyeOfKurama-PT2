var imageVar = "";

function preload()
{
    imageVar = loadImage('https://upload.wikimedia.org/wikipedia/commons/f/f8/Kyuubi_eye.svg');
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(50, 150)

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('black');
    image(imageVar, 110, 100, 300, 300);
}

function modelLoaded()
{
    console.log('ZE MODEL HAS BEEN LÖDED');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}