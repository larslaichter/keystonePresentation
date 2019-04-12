let slideNum = 1;
	numOfSlides = 10;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
	background(0);
	showSlide();
  	print(mouseIsPressed);

  	//show slide number
  	fill(255);
	text(slideNum, width-55, 40, 70, 80);
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		if (slideNum<numOfSlides){
			slideNum++;
		}
	} else if (keyCode === LEFT_ARROW) {	
		if (slideNum>1){
			slideNum--;
		}
	}
  	
}

function showSlide(){
	if(slideNum === 1){
		
	}

	if(slideNum === 2){
		
	}
	

}