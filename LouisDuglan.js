
var pics = [
	"imgs/cat_1.jpg",
	"imgs/cat_2.jpg",
	"imgs/cat_3.jpg",
	"imgs/cat_4.jpg"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 4) {
		counter = 0;
	}
	img.src = pics[counter];
	counter = counter + 1;
});
