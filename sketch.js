let slideNum = 1;
	numOfSlides = 11,
	slide1, slide2;

function setup(){
  createCanvas(windowWidth,windowHeight);
  slide1 = loadImage('slides/slide-01.png');
  slide2 = loadImage('slides/slide-02.png');
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
	if(slideNum == 3){
		if((mouseX > 190) && (mouseY > 150) && (mouseX < 590) && (mouseY < 230)){
			slideNum = 4;
			console.log(slideNum);
		}
		if((mouseX > 190) && (mouseY > 350) && (mouseX < 590) && (mouseY < 430)){
			slideNum = 5;
			console.log(slideNum);
		}
	}

	if(slideNum == 8){
		if((mouseX > 190) && (mouseY > 150) && (mouseX < 590) && (mouseY < 230)){
			slideNum = 9;
			console.log(slideNum);
		}
		if((mouseX > 190) && (mouseY > 350) && (mouseX < 590) && (mouseY < 430)){
			slideNum = 10;
			console.log(slideNum);
		}
	}
}

function showSlide(){
	if(slideNum === 1){
		console.log("Slide: "+slideNum);
		image(slide1, 0, 0, windowWidth, slide1.height);
	}

	if(slideNum === 2){
		console.log("Slide: "+slideNum);
		image(slide2, 0, 0);
	}

	if(slideNum === 3){
		noFill()
		strokeWeight(4);
		stroke('#00ff88');
		rect(190, 150, 400, 80);

		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		text('rock',200,200, 400);

		noFill()
		strokeWeight(4);
		stroke('#00ff88');
		rect(190, 350, 400, 80);
		
		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');	
		text('⌐ rock',200,400, 400);
	}

	if(slideNum === 4){
		fill(255);
		textSize(50);
		textFont('Helvetica-Bold');
		text('Mary',200,200, 400);
	}
	
	if(slideNum === 5){
		fill(255);
		textSize(50);
		textFont('Helvetica-Bold');
		text('Rock person',200,200, 400);
	}

	if(slideNum === 6){
		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		text('easy',200,200, 400);

		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');	
		text('hard',200,400, 400);
	}

	if(slideNum === 7){
		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		text('Illusionism',200,200, 400);
	}

	if(slideNum === 8){
		noFill()
		strokeWeight(4);
		stroke('#00ff88');
		rect(190, 150, 400, 80);

		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		text('conceivable',200,200, 400);

		noFill()
		strokeWeight(4);
		stroke('#00ff88');
		rect(190, 350, 400, 80);
		
		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');	
		text('⌐ conceivable',200,400, 400);
	}

	if(slideNum === 9){
		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		text('meta-problem',200,200, 400);
	}

	if(slideNum === 10){
		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		text('strong examples of illusions',200,200, 800);
	}

	if(slideNum === 11){
		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		text('conclusion',200,200, 400);
	}
}