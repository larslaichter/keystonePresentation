let slideNum = 1,
	frameNum = 0,
	numOfSlides = 19,
	whatIsItLike,
	filterOn = true,
	playingA = false, playingB = false,
	slide1, slide2,
	illusion1, illusion2,
	illusionAudio1, illusionAudio2;

let xpos, ypos; // Starting position of Mary
let xspeed = 2.8; // Speed of the Mary
let yspeed = 2.2; // Speed of the Mary
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

		
function setup(){
  createCanvas(windowWidth, windowHeight);
  slide1 = loadImage('slides/slide-01.png');
  slide2 = loadImage('slides/slide-02.png');

  illusion1 = loadImage('assets/illusion1.png');
  illusion2 = loadImage('assets/eye.jpg');

  whatIsItLike = createVideo('assets/bat.mp4');
  whatIsItLike.size(1280, windowWidth); //windowWidth, vid.height
  whatIsItLike.hide();

  illusionAudio1 = loadSound('assets/muffled.wav');
  illusionAudio2 = loadSound('assets/clear.wav');

  xpos = windowWidth / 2;
  ypos = windowHeight / 2;
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
		if (slideNum === 12){
			illusionAudio1.play();
			playingA = !playingA;
			if(playingB == true){playingB = !playingB;} 
		}
	} else if (keyCode === 66) {	//B
		if (slideNum === 3){
			slideNum = 5; 
		}
		if (slideNum === 9){
			slideNum = 11; 
		}
		if (slideNum === 12){
			illusionAudio2.play();
			playingB = !playingB;
			if(playingA == true){playingA = !playingA;} 
		}
	} else if (keyCode === 70) {	//B
		if (slideNum === 4){
			filterOn = !filterOn; 
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
		text('¬ rock',850,450, 400);
	}
	if(slideNum === 4){
		noStroke();
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Mary',40,80, 400);
		
		// Update the position of the shape
 		xpos = xpos + xspeed * xdirection;
 		ypos = ypos + yspeed * ydirection;
	
 		// Test to see if the shape exceeds the boundaries of the screen
 		// If it does, reverse its direction by multiplying by -1
 		if(filterOn==true){
	  		if (xpos > 920 - 60 || xpos < 520) {
	    		xdirection *= -1;
			}
			if (ypos > 650 - 10 || ypos < 200) {
			  	ydirection *= -1;
			}
		} else {
			if (xpos > windowWidth - 60 || xpos < 30) {
	    		xdirection *= -1;
			}
			if (ypos > windowHeight - 10|| ypos < 30) {
			  	ydirection *= -1;
			}
		}

		fill(255);
		textSize(60);
		textFont('Helvetica-Bold');
		text('👩🏽‍🔬', xpos, ypos, 60);

  		if(filterOn==true){
  			noFill()
			strokeWeight(8);
			stroke(255);
			rect(520, 250, 400, 400);
			noStroke();

  			filter(GRAY);
  		} else {
  			fill(255);
			textSize(60);
			textFont('Helvetica-Bold');
  			text('🌺', random(0, windowWidth), random(0, windowHeight), 60);
  		}
	}
	if(slideNum === 5){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('A rock person',40,80, 400);

		// Update the position of the shape
 		xpos = xpos + xspeed * xdirection;
 		ypos = ypos + yspeed * ydirection;
	
 		// Test to see if the shape exceeds the boundaries of the screen
 		// If it does, reverse its direction by multiplying by -1
 		
		if (xpos > windowWidth - 60 || xpos < 30) {
	    	xdirection *= -1;
		}
		if (ypos > windowHeight - 10|| ypos < 30) {
		  	ydirection *= -1;
		}
		

		fill(255);
		textSize(60);
		textFont('Helvetica-Bold');
		text('🗿', xpos, ypos, 60);
	}
	if(slideNum === 6){
		whatIsItLike.stop()

		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('(easy 😎) × (hard 🤯)',410,(windowHeight/2)-35, 1000);
	}
	if(slideNum === 7){
		whatIsItLike.play();
		image(whatIsItLike, 0, 0);
  		//whatIsItLike.volume(0);

		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('What is it like? 🦇',660,(windowHeight)-70, 1000);
	}
	if(slideNum === 8){
		whatIsItLike.stop()

		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusionism',40,80, 400);

		text('Claim: Conscious experience is an illusion. 🤩',330,480, 15000);
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
		text('¬ con- ceivable',850,450, 400);
	}
	if(slideNum === 10){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusion meta-problem',40,80, 600);

		text('Claim: Illusion of consciousness appears tricky. 😨',300,480, 15000);
	}
	if(slideNum === 11){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusion example 1/3',40,80, 600);

		image(illusion1, 500, 280, 469, 330);
	}
	if(slideNum === 12){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusion example 2/3',40,80, 600);

		noFill()
		strokeWeight(8);
		if(playingA == true){stroke('#FF00DB');}else{stroke(255);};
		rect(190, 230, 400, 400);

		fill(255);
		noStroke();
		textSize(20);
		textFont('Helvetica-Bold');	
		text('A',210, 270, 400);

		noFill()
		strokeWeight(8);
		if(playingB == true){stroke('#FF00DB');}else{stroke(255);};
		rect(810, 230, 400, 400);
		
		fill(255);
		noStroke();
		textSize(20);
		textFont('Helvetica-Bold');	
		text('B',830, 270, 400);
	}
	if(slideNum === 13){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Illusion example 3/3',40,80, 600);

		image(illusion2, 550, 300, 450, 313);
	}
	if(slideNum === 14){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('What is an illusion? 🤩',40,80, 600);

		fill(255);
		noStroke();
		textSize(40);
		textFont('Helvetica-Bold');
		text('Tools:',600,300, 1000);
		text('An agent 😺',600,400, 1000);
		text('An object 🐭',600,500, 1000);
		text('Representations 🧠',600,600, 1000);
	}
	if(slideNum === 15){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Property illusion 😻',40,80, 600);

		fill(255);
		noStroke();
		textSize(40);
		textFont('Helvetica-Bold');
		text('Tools: an agent 😺, an object 🐭, representations 🧠',180,350, 1500);
		text('(∀😺)(∃🐭)(😻P🐭 iff (🧠P🐭 and ¬P🐭) and/or (🧠 ¬P🐭 and P🐭))',180,450, 1500);
	}
	if(slideNum === 16){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Existence illusion 🙀',40,80, 600);

		fill(255);
		noStroke();
		textSize(40);
		textFont('Helvetica-Bold');
		text('Tools: an agent 😺, an object 🐭, representations 🧠',180,350, 1500);
		text('(∀😺)(∃🐭)(🙀🐭 iff (🧠E!🐭 and ¬E!🐭) and/or (🧠¬E!🐭 and E!🐭))',180,450, 1500);
	}
	if(slideNum === 17){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Super-illusion 🤩',40,80, 600);

		text('Tools: an agent 😺, an object 🐭',200,300, 1500);
		text('property illusion 😻, existence illusion 🙀',300,400, 1500);
		text('(∀😺)(∃🐭)(🤩 iff (😻 and/or 🙀))',200,500, 1500);
	}
	if(slideNum === 18){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('Criteria for conceivability',40,80, 1000);

		fill(255);
		noStroke();
		textSize(40);
		textFont('Helvetica-Bold');
		text('1. Definitional 🎯',700,400, 1000);
		text('2. Functional ⚙️',700,500, 1000);
		text('3. Framework 🖼',700,600, 1000);
		text('4. Empirical 🔬',700,700, 1000);
	}
	if(slideNum === 19){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('👋',40,80, 600);

		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('larslaichter.com/keystone',300,(windowHeight/2)-35, 1000);
	}
}



/*
NOTES

Illusions: 
	– visual: https://twitter.com/Keith_Laws/status/1066092338315968513/photo/1
 		https://www.theverge.com/2016/9/12/12885574/optical-illusion-12-black-dots
 	– sound: https://soundcloud.com/whyy-the-pulse/an-audio-illusion
	– global: vision field Qualitative representation of visual detail using a single glance of the eyes.
		https://www.cambridgeincolour.com/tutorials/cameras-vs-human-eye.htm
*/