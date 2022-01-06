function preload() {

}
function setup() {
canvas= createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
}
function draw() {
image(video,0,0,640,480);
rect(30, 20, 55, 55, 20, 15, 10, 5);
}
