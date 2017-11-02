var num = 6;
var colors = generateRandomColor(num);

//selection
var centerBackground = document.querySelector("center");
var squares = document.querySelectorAll(".square");
var newColor = document.querySelector(".newColor");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var message = document.querySelector(".message");

//picking random number
var colorPicked = colors[Math.floor(Math.random()*num)];

//setting style of the h1
var h1 = document.querySelector("h1");
h1.textContent = colorPicked.toUpperCase();



//check whether the color was right choice



	//for loop to check the color picker
for (var i = 0; i < num; i++){
		
	squares[i].style.background = colors[i];
		
	squares[i].addEventListener("click", function(){
		var flag = false;
		if(this.style.background === colorPicked){
			centerBackground.style.background = colorPicked;
			flag = true;
		}
		else
			this.style.background = "#232323";
		if(flag === true){
			for(var i = 0; i < num ; i++){
				squares[i].style.background = colorPicked;
				message.textContent = "Correct!!";
			}
		}
	});
}


function generateRandomColor(numberOfColors){
	var arr=[];
	//add random colors to array
	for(var i=0; i < numberOfColors ; i++){
		var randomNumberColor="rgb("+
		Math.floor(Math.random()*255 + 1).toString()+", "+
		Math.floor(Math.random()*255 + 1).toString()+", "+
		Math.floor(Math.random()*255 + 1).toString()+")";
		arr.push(randomNumberColor);
	}
	//return that array
	return arr;
}

//creating effect on buttons
newColor.addEventListener("mouseover", function(){
	this.classList.add("hover");
});
newColor.addEventListener("mouseout", function(){
	this.classList.remove("hover");
});

easy.addEventListener("mouseover", function(){
	this.classList.add("hover");
});

easy.addEventListener("mouseout", function(){
	this.classList.remove("hover");
});

hard.addEventListener("mouseover", function(){
	this.classList.add("hover");
});
hard.addEventListener("mouseout", function(){
	this.classList.remove("hover");
});

//creating a flagEasy to declare in easy mode
var flagEasy = false;

//creating function for each button
//newColor button
newColor.addEventListener("click",function(){
	//chang background color of center
	centerBackground.style.background = "lightBlue";
	//generate colors
	colors = generateRandomColor(num);
	//pick a random color
	colorPicked = colors[Math.floor(Math.random()*num)];
	//changing h1 to be a new color
	h1.textContent = colorPicked.toUpperCase();
	// changing the squares background color
	
	//for loop to check the color picker
	for (var i = 0; i < num; i++){	
		squares[i].style.background = colors[i];
	}
	if(flagEasy === true){
		for(var i = 3; i < 6; i++){
			squares[i].style.background = "#232323";
		}
	}
	message.textContent = "";
});

//easy button
easy.addEventListener("click", function(){
	num = 3;
	flagEasy = true;
	//chang background color of center
	centerBackground.style.background = "lightBlue";
	//color generate
	colors = generateRandomColor(num);
	//generate random picked color
	colorPicked = colors[Math.floor(Math.random()*num)];
	//changing h1 to be a new color
	h1.textContent = colorPicked.toUpperCase();
	//for loop to check the color picker
	for (var i = 0; i < 6; i++){	
		if(i > 2){
			squares[i].style.background = "#232323";
		}
		else 
			squares[i].style.background = colors[i];
	}
	message.textContent = "";
});

hard.addEventListener("click", function(){
	num = 6;
	flagEasy = false;
	//chang background color of center
	centerBackground.style.background = "lightBlue";
	//generate colors
	colors = generateRandomColor(num);
	//pick a random color
	colorPicked = colors[Math.floor(Math.random()*num)];
	//changing h1 to be a new color
	h1.textContent = colorPicked.toUpperCase();
	// changing the squares background color
	
	//for loop to check the color picker
	for (var i = 0; i < num; i++){	
		squares[i].style.background = colors[i];
	}

	message.textContent = "";
});