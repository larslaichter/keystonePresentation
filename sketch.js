let slideNum = 1,
	frameNum = 0,
	numOfSlides = 11,
	slide1, slide2;

		//whatIsItLike,

function setup(){
  createCanvas(windowWidth,windowHeight);
  slide1 = loadImage('slides/slide-01.png');
  slide2 = loadImage('slides/slide-02.png');

  //whatIsItLike = createVideo(['assets/bat.mp4']);
}

function draw(){
	frameNum++; 
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
	console.log(keyCode)
	if (keyCode === RIGHT_ARROW) {
		if (slideNum < numOfSlides){
			slideNum++;
		}
	} else if (keyCode === LEFT_ARROW) {	
		if (slideNum > 1){
			slideNum--;
		}
	} else if (keyCode === 65) {	//A
		if (slideNum === 3){
			slideNum = 4; 
		}
	} else if (keyCode === 66) {	//B
		if (slideNum === 3){
			slideNum = 5; 
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
		strokeWeight(8);
		if(frameNum%5==0){stroke('#00C9FF');}else{stroke('#FF00DB');}
		rect(190, 230, 400, 400);

		fill(255);	
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');
		text('rock',220,450, 400);

		fill(255);
		noStroke();
		textSize(20);
		textFont('Helvetica-Bold');	
		text('A',210, 270, 400);

		noFill()
		strokeWeight(8);
		if(frameNum%5==0){stroke('#FF00DB');}else{stroke('#00C9FF');}
		rect(810, 230, 450, 400);
		
		fill(255);
		noStroke();
		textSize(20);
		textFont('Helvetica-Bold');	
		text('B',830, 270, 400);

		fill(255);
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');	
		text('⌐ rock',850,450, 400);
	}
	if(slideNum === 4){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Mary 👩🏽‍🔬',40,80, 400);
	}
	if(slideNum === 5){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('A rock person 🗿',40,80, 400);
	}
	if(slideNum === 6){
		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('(easy 😎) × (hard 🤯)',500,(windowHeight/2)-35, 1000);
	}

	if(slideNum === 7){
		//whatIsItLike.loop();

		fill(255);
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');
		text('What is it like?',200,(windowHeight/2)-100, 1000);
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



/*
NOTES

Illusions: 
	– visual: https://twitter.com/Keith_Laws/status/1066092338315968513/photo/1
 	– sound: https://soundcloud.com/whyy-the-pulse/an-audio-illusion
	– global: vision field
*/