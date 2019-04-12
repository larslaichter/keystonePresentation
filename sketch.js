let slideNum = 1,
	inconsolata;

function preload() {
  inconsolata = loadFont('assets/inconsolata.otf');
}

function setup(){
  createCanvas(windowWidth,windowHeight, WEBGL);
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}

function draw(){
	background(0);
	showSlide();
  	print(mouseIsPressed);

  	//show slide number
  	fill(255);
	text(slideNum, 10, 10, 70, 80);
}

function mouseClicked(event) {
	slideNum++;  
}


function showSlide(){
	if(slideNum === 1){
		fill(255);
		text(slideNum, 10, 10, 70, 80);
	}

	if(slideNum === 2){
		fill(255);
		text(slideNum, 10, 10, 70, 80);
	}
	

}
