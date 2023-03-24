video="";
status="";
objects=[];

function preload(){

video=createVideo("video.mp4");
video.hide();
} 



function setup(){

    canvas=createCanvas(300,200);
canvas.center();

}

function draw(){

image(video,0,0,300,200);


if(object[i].label==object_name){
objectDetector.detect(video,gotResult);
for(i=0;i<object.length;i++)
{
document.getElementById("status").innerHTML="status=detecting objects";
document.getElementById("number_of_objects").innerHTML="number of objects are detected are"+object.length;

fill("red");
percent=floor(object[i].confidence*100);
text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke("blue");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
    

}

function start(){

objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="detecting object";
input= document.getElementById("input");

}

function modelLoaded(){

console.log("model loaded");
status=true;


}

function gotResult(results,error){
if(error){
    console.error(error);
}

console.log(results);
objects=results;
}