//when add to watchlist button is clicked, changes the text to "Added to Watchlist"
const toWatchButton = document.getElementById("toWatchButton");  
 
toWatchButton.addEventListener("click", function () { 
toWatchButton.textContent = "Added to Watchlist"; 
}); 

//make images bigger when clicked and back to normal size when clicked again
const images = document.querySelectorAll("img");  
 
images.forEach(function (image) { 
image.addEventListener("click", function () { 
if (image.style.width === "500px") { 
image.style.width = "300px"; 
image.style.height = "200px"; 
} else { 
image.style.width = "500px"; 
image.style.height = "auto"; 
} 
}); 
});

//when watch trailer button is clicked, changes the text to "Trailer is playing"
const watchTrailerButton = document.getElementById("watchTrailerButton");
watchTrailerButton.addEventListener("click", function () {
    watchTrailerButton.textContent = "Trailer is playing";
});


//Playing trailer when watch trailer button is clicked

function play_video() {
    document.getElementById("trailer").play();
    document.getElementById("watchTrailerButton").textContent = "Trailer is playing";
};


