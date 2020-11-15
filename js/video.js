var video;

// video function
window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

// play function
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	// initial volumn level when video begins
	document.querySelector("#volume").innerHTML = "100%"
});

// pause function
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

// slow down function
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Video Speed: " + video.playbackRate);
});

// speed up function
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Video Speed: " + video.playbackRate);
});

// skip five seconds function
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5
	// when video hits end
	if (video.ended) {
		video.load();
		video.play();
		video.playbackRate =1;
	}
	console.log("Current location is " + video.currentTime)
});

// mute function
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		// console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true;
		// console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

// volume slider
document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log(volumeSlider.value);
	// volume of video
	var slider_volume = volumeSlider.value;
	//percent of that volume
	video.volume = slider_volume/100;
	document.querySelector("#volume").innerHTML = slider_volume + "%"
});

// black and white
document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("Grayscale")
});

// color
document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("Normal color")
});
