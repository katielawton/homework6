var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = "100%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Video Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Video Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5
	if (video.ended) {
		video.load();
		video.play();
		playbackRate =1;
	}
	console.log("Current location is " + video.currentTime)
});

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

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log(volumeSlider.value);
	// volume of video
	var slider_volume = volumeSlider.value;
	//percent of that volume
	video.volume = slider_volume/100;
	document.querySelector("#volume").innerHTML = slider_volume + "%"
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("Grayscale")
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("Normal color")
});
