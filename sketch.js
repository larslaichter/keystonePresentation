let slideNum = 1;
	numOfSlides = 10,
	slide1;

function setup(){
  createCanvas(windowWidth,windowHeight);
  slide1 = loadImage('slides/slide-01.png');
}

function draw(){
	background(0);
	showSlide();
  	print(mouseIsPressed);

  	//show slide number
  	fill(255);
  	textSize(20);
  	textFont('Helvetica-Bold');
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

function mouseClicked() {
	console.log(slideNum + " " + mouseX + " " + mouseY);
	if(slideNum == 1){
		if((mouseX > 190) && (mouseY > 150) && (mouseX < 590) && (mouseY < 230)){
			slideNum = 3;
			console.log(slideNum);
		}
		if((mouseX > 190) && (mouseY > 350) && (mouseX < 590) && (mouseY < 430)){
			slideNum = 5;
			console.log(slideNum);
		}
	}
}

function showSlide(){
	if(slideNum === 1){
		noFill()
		strokeWeight(4);
		stroke('#00ff88');
		rect(190, 150, 400, 80);

		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		text('Option A',200,200, 400);

		noFill()
		strokeWeight(4);
		stroke('#00ff88');
		rect(190, 350, 400, 80);
		
		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');	
		text('Option B',200,400, 400);
	}

	if(slideNum === 2){
		fill(255);
		textSize(50);
		textFont('Helvetica-Bold');
		text('Slide ' + slideNum,200,200, 200);
	}
	
	if(slideNum === 3){
		console.log("Slide: "+slideNum);
		image(slide1, 0, 0);
	}

}