let slideNum = 1,
	frameNum = 0,
	numOfSlides = 23,
	whatIsItLike,
	filterOn = true,
	playingA = false, playingB = false,
	slide1, slide2,
	illusion1, illusion2, darcy,
	illusionAudio1, illusionAudio2;

let xpos, ypos; // Starting position of Mary
let xspeed = 2.8; // Speed of the Mary
let yspeed = 2.2; // Speed of the Mary
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let flowerX = 200, flowerY = 200;
		
function setup(){
  createCanvas(windowWidth, windowHeight);
  slide1 = loadImage('slides/slide-01.png');
  slide2 = loadImage('slides/slide-02.png');

  illusion1 = loadImage('assets/illusion1.png');
  illusion2 = loadImage('assets/eye.jpg');
  darcy = loadImage('assets/darcy.png');

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
	//text(slideNum, width-55, 40, 70, 80);
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
		if (slideNum === 7){
			slideNum = 8; 
		}
		if (slideNum === 13){
			slideNum = 14; 
		}
		if (slideNum === 15){
			illusionAudio1.play();
			playingA = !playingA;
			if(playingB == true){playingB = !playingB;} 
		}
	} else if (keyCode === 66) {	//B
		if (slideNum === 7){
			slideNum = 9; 
		}
		if (slideNum === 13){
			slideNum = 15; 
		}
		if (slideNum === 15){
			illusionAudio2.play();
			playingB = !playingB;
			if(playingA == true){playingA = !playingA;} 
		}
	} else if (keyCode === 70) {	//F
		if (slideNum === 8){
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
	}
	if(slideNum === 4){
		fill(255);
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');
		text('🤷‍♂️',(windowWidth/2)-150,(windowHeight/2), 1000);
	}
	if(slideNum === 5){
		fill(255);
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');
		text('🤷‍♂️🐷',(windowWidth/2)-150,(windowHeight/2), 1000);

		noStroke();
		fill(0,0,0,127); 
		rect((windowWidth/2)-150,(windowHeight/2)-100, 100, 120);
	}
	if(slideNum === 6){
		fill(255);
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');
		text('🤷‍♂️🐷🤖',(windowWidth/2)-150,(windowHeight/2), 1000);

		noStroke();
		fill(0,0,0,127); 
		rect((windowWidth/2)-150,(windowHeight/2)-100, 200, 120);
	}
	if(slideNum === 7){
		textAlign(LEFT);
		noFill()
		strokeWeight(3);
		stroke('#fbd229'); 
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
		strokeWeight(3);
		stroke('#FF00DB');
		rect(810, 230, 400, 400);
		
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
	if(slideNum === 8){
		noStroke();
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('Mary',40,80, 400);
		
		// Update the position of the shape
 		xpos = xpos + xspeed * xdirection;
 		ypos = ypos + yspeed * ydirection;
	
 		// Test to see if the shape exceeds the boundaries of the screen
 		// If it does, reverse its direction by multiplying by -1
 		if(filterOn==true){
 			xpos = (windowWidth/2) - 50; 
 			ypos = (windowHeight/2) + 50; 
 			/*
	  		if (xpos > 920 - 60 || xpos < 520) {
	    		xdirection *= -1;
			}
			if (ypos > 650 - 10 || ypos < 300) {
			  	ydirection *= -1;
			} */
		} else {
			if (xpos > windowWidth - 80 || xpos < 0-10) {
	    		xdirection *= -1;
			}
			if (ypos > windowHeight + 10 || ypos < 80) {
			  	ydirection *= -1;
			}
		}

		fill(255);
		textSize(100);
		textFont('Helvetica-Bold');
		text('👩🏽‍🔬', xpos, ypos, 100);
  		text('🌹', windowWidth - windowWidth/4, windowHeight - windowHeight/3 -100, 100);

  		if(filterOn==true){
  			noFill()
			strokeWeight(3);
			stroke(255);
			rect(520, 250, 400, 400);
			noStroke();

  			filter(GRAY);
  		} 

  		noFill()
		strokeWeight(6);
		stroke('#fbd229'); 
		rect(0, 0, windowWidth, windowHeight);
	}
	if(slideNum === 9){
		noFill()
		strokeWeight(6);
		stroke('#FF00DB'); 
		rect(0, 0, windowWidth, windowHeight);


		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('A rock person',40,80, 400);

		// Update the position of the shape
 		xpos = xpos + xspeed * xdirection;
 		ypos = ypos + yspeed * ydirection;
	
 		// Test to see if the shape exceeds the boundaries of the screen
 		// If it does, reverse its direction by multiplying by -1
 		
		if (xpos > windowWidth - 80 || xpos < 0-10) {
	    	xdirection *= -1;
		}
		if (ypos > windowHeight + 10 || ypos < 80) {
		  	ydirection *= -1;
		}
		

		fill(255);
		textSize(100);
		textFont('Helvetica-Bold');
		text('🗿', xpos, ypos, 100);
	}
	if(slideNum === 10){
		whatIsItLike.stop()

		fill(255);
		noStroke();
		textSize(100);
		textAlign(CENTER);
		textFont('Helvetica-Bold');
		text('Easy problems 😎\nvs.\nThe hard problem 🤯',250,(windowHeight/2)-100, 1500);
	}
	if(slideNum === 11){
		whatIsItLike.play();
		image(whatIsItLike, 0, 0, windowWidth, windowHeight);
  		//whatIsItLike.volume(0);
	}
	if(slideNum === 12){
		whatIsItLike.stop()

		fill(255);
		textSize(100);
		textAlign(LEFT);
		textFont('Helvetica-Bold');
		text('Illusionism:\nConscious experience \nis an illusion. 🤩',230,350, 15000);
	}
	if(slideNum === 13){
		noFill()
		strokeWeight(3);
		stroke('#fbd229');
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
		strokeWeight(3);
		stroke('#FF00DB');
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
	if(slideNum === 14){
		noFill()
		strokeWeight(6);
		stroke('#fbd229'); 
		rect(0, 0, windowWidth, windowHeight);

		fill(255);
		textSize(100);
		noStroke();
		textFont('Helvetica-Bold');
		text('Illusion meta-problem:\nConceiving of the illusion\nof consciousness\nappears tricky. 😨',150,300, 15000);
	}
	if(slideNum === 15){
		noFill()
		strokeWeight(6);
		stroke('#FF00DB'); 
		rect(0, 0, windowWidth, windowHeight);

		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('Illusion example 2/3',40,80, 600);

		noFill()
		strokeWeight(3);
		if(playingA){stroke('#fbd229');}else{stroke('#FF00DB');};
		rect(190, 230, 400, 400);

		fill(255);
		noStroke();
		textSize(20);
		textFont('Helvetica-Bold');	
		text('A',210, 270, 400);

		noFill()
		strokeWeight(3);
		if(playingB){stroke('#fbd229');}else{stroke('#FF00DB');};
		rect(810, 230, 400, 400);
		
		fill(255);
		noStroke();
		textSize(20);
		textFont('Helvetica-Bold');	
		text('B',830, 270, 400);
	}
	if(slideNum === 16){
		noFill()
		strokeWeight(6);
		stroke('#FF00DB'); 
		rect(0, 0, windowWidth, windowHeight);

		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('Illusion example 3/3',40,80, 600);

		image(illusion2, 250, 150, illusion2.width*2, illusion2.height*2);
	}
	if(slideNum === 17){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('Criteria for conceivability',40,80, 1000);

		fill(255);
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');
		text('Conceivability criteria:',200,300, 1500);
		text('1. Definitional',200,400, 1000);
		text('2. Functional',200,500, 1000);
		text('3. Framework',200,600, 1000);
		text('4. Empirical',200,700, 1000);
	}
	if(slideNum === 18){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('What is an illusion? 🤩',40,80, 600);

		fill(255);
		noStroke();
		textSize(100);
		textFont('Helvetica-Bold');
		text('Tools:',300,300, 1000);
		text('An agent 😺',300,400, 1000);
		text('An object 🥛',300,500, 1000);
		text('Representations 🧠',300,600, 1000);
	}
	if(slideNum === 19){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('Property illusion 😻',40,80, 600);

		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		//text('Property illusion 😻',180,350, 1500);
		text('Property illusion 😻\n\n(∀😺)(∃🥛)(😻 P🥛 iff (🧠P🥛 and ¬P🥛) and/or (🧠 ¬P🥛 and P🥛))',100,200, 1500);
	}
	if(slideNum === 20){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('Existence illusion 🙀',40,80, 600);

		fill(255);
		noStroke();
		textSize(50);
		textFont('Helvetica-Bold');
		//text('Existence illusion 🙀',180,350, 1500);
		text('Existence illusion 🙀\n\n(∀😺)(∃🥛)(🙀🥛 iff (🧠E!🥛 and ¬E!🥛) and/or (🧠¬E!🥛 and E!🥛))',100,200, 1500);
	}
	if(slideNum === 21){
		fill(255);
		textSize(50);
		textFont('Helvetica-Bold');
		//text('Super-illusion 🤩',40,80, 600);

		//text('Tools: an agent 😺, an object 🥛',200,300, 1500);
		//text('Super-illusion 🤩',330,380, 1500);
		text('Super-illusion 🤩\n\n(∀😺)(∃🥛)(🤩 iff (😻 and/or 🙀) )',100,200, 1500);
	}
	if(slideNum === 22){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		//text('Criteria for conceivability',40,80, 1000);

		fill(255);
		noStroke();
		textSize(100);
		text('Conceivability criteria:',200,300, 1500);
		text('1. Definitional',200,400, 1000);
		text('2. Functional',200,500, 1000);
		text('3. Framework',200,600, 1000);
		text('4. Empirical',200,700, 1000);
	}
	if(slideNum === 23){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('👋',40,80, 600);

		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('Thanks to\nDarcy Otto\nQuest University',300,(windowHeight/2)-150, 1000);

		image(darcy, 300, (windowHeight/2) + 150, 110, 146);
	}
	if(slideNum === 23){
		fill(255);
		textSize(40);
		textFont('Helvetica-Bold');
		text('👋',40,80, 600);

		fill(255);
		noStroke();
		textSize(70);
		textFont('Helvetica-Bold');
		text('larslaichter.com/keystone',300,(windowHeight/2), 1000);
	}
}



/*
NOTES

TODO: 
- clarify physical vs non-physical
- make fonts larger 
- clarify what terms are mine 
- put color rectangle around option slides 
- introduce criteria before defining illusion 
– introduce philosophy in general 
– have TODO cards for the talk 
– add why does this matter slide 
– write out logic with words 
– stop bouncing Mary in the start 
– add a conclusion slide 


Illusions: 
	– visual: https://twitter.com/Keith_Laws/status/1066092338315968513/photo/1
 		https://www.theverge.com/2016/9/12/12885574/optical-illusion-12-black-dots
 	– sound: https://soundcloud.com/whyy-the-pulse/an-audio-illusion
	– global: vision field Qualitative representation of visual detail using a single glance of the eyes.
		https://www.cambridgeincolour.com/tutorials/cameras-vs-human-eye.htm
*/