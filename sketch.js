let slideNum = 1,
	frameNum = 0,
	numOfSlides = 19,
	whatIsItLike,
	capture,
	slide1, slide2;

		

function setup(){
  createCanvas(windowWidth,windowWidth);
  slide1 = loadImage('slides/slide-01.png');
  slide2 = loadImage('slides/slide-02.png');

  whatIsItLike = createVideo('assets/bat.mp4');
  whatIsItLike.size(1280, windowWidth); //windowWidth, vid.height
  whatIsItLike.hide();

  capture = createCapture(VIDEO);
  capture.size(320, 240);
  whatIsItLike.hide();
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
		if (slideNum === 9){
			slideNum = 10; 
		}
	} else if (keyCode === 66) {	//B
		if (slideNum === 3){
			slideNum = 5; 
		}
		if (slideNum === 9){
			slideNum = 11; 
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
		text('Marry 👩🏽‍🔬',40,80, 400);

		filter('GRAY');
  		image(capture, 0, 0, 320, 240);
	}
	if(slideNum === 5){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('A rock person 🗿',40,80, 400);
	}
	if(slideNum === 6){
		whatIsItLike.stop()

		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('(easy 😎) × (hard 🤯)',420,(windowHeight/2)-35, 1000);
	}
	if(slideNum === 7){
		whatIsItLike.play();
		image(whatIsItLike, 0, 0);
  		//whatIsItLike.volume(0);

		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('What is it like? 🦇',650,(windowHeight)-70, 1000);
	}
	if(slideNum === 8){
		whatIsItLike.stop()

		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusionism',40,80, 400);
	}
	if(slideNum === 9){
		noFill()
		strokeWeight(8);
		if(frameNum%5==0){stroke('#00C9FF');}else{stroke('#FF00DB');}
		rect(190, 230, 400, 400);

		fill(255);	
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');
		text('concei- vable',220,450, 400);

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
		text('⌐ con- ceivable',850,450, 400);
	}
	if(slideNum === 10){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusion meta-problem',40,80, 600);
	}
	if(slideNum === 11){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusion example 1/3',40,80, 600);
	}
	if(slideNum === 12){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusion example 2/3',40,80, 600);
	}
	if(slideNum === 13){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusion example 3/3',40,80, 600);
	}
	if(slideNum === 14){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('What is an illusion?',40,80, 600);
	}
	if(slideNum === 15){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Property illusion 1/3',40,80, 600);
	}
	if(slideNum === 16){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Existence illusion 2/3',40,80, 600);
	}
	if(slideNum === 17){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Super-illusion 3/3',40,80, 600);
	}
	if(slideNum === 18){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Criteria',40,80, 600);
	}
	if(slideNum === 19){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Conclusion',40,80, 600);

		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('larslaichter.com/keystone',430,(windowHeight/2)-35, 1000);
	}
}



/*
NOTES

Illusions: 
	– visual: https://twitter.com/Keith_Laws/status/1066092338315968513/photo/1
 	– sound: https://soundcloud.com/whyy-the-pulse/an-audio-illusion
	– global: vision field
*/