const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const playBtnIcon = playBtn.querySelector("i");
const muteBtn = document.getElementById("mute");
const muteBtnIcon = muteBtn.querySelector("i");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("volume");
const timeline = document.getElementById("timeline");
const deleteVideo = document.getElementById("deleteVideo");
const fullScreenBtn = document.getElementById("fullScreen");
const fullScreenIcon = fullScreenBtn.querySelector("i");
const videoContainer = document.getElementById("videoContainer");
const videoControls = document.getElementById("videoControls");
let controlsTimeout = null;
let controlsMoveTimeout = null;
let volumeValue = 0.5;
video.volume = volumeValue;
const handlePlayClick = (e) => {
  video.paused ? video.play() : video.pause();
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};
const handleMute = (e) => {
  if (video.muted) {
    video.muted = false;
    video.volume = volumeValue;
  } else {
    video.muted = true;
  }
  muteBtnIcon.classList = video.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
  volumeRange.value = video.muted ? 0 : volumeValue;
};
const handleVolumeInput = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  if (Number(value) === 0) {
    video.muted = true;
    muteBtn.innerText = "Unmute";
  }
  video.volume = value;
};
const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  if (Number(value) !== 0) {
    volumeValue = value;
  }
};
const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substring(11, 19);
const handleLoadedData = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};
const handleEnded = () => {
  playBtnIcon.classList = "fas fa-play";
  video.paused = video.pause();
};
const handleTimeUpdata = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
  if (video.readyState >= 2) {
    handleLoadedData();
  }
  timeline.value = Math.floor(video.currentTime);
};
const handleTimelineInput = (event) => {
  const {
    target: { value },
  } = event;
  video.currentTime = value;
};
const handelFullscreen = () => {
  const fullscreen = document.fullscreenElement;
  if (fullscreen) {
    document.exitFullscreen();
    fullScreenIcon.classList = "fas fa-expand";
  } else {
    videoContainer.requestFullscreen();
    fullScreenIcon.classList = "fas fa-compress";
  }
};
const hideControls = () => videoControls.classList.remove("showing");
const handleMouseMove = () => {
  if (controlsTimeout) {
    clearTimeout(controlsTimeout);
    controlsTimeout = null;
  }
  if (controlsMoveTimeout) {
    clearTimeout(controlsMoveTimeout);
    controlsMoveTimeout = null;
  }
  videoControls.classList.add("showing");
  controlsMoveTimeout = setTimeout(hideControls, 3000);
};
const handleMouseLeave = () => {
  controlsTimeout = setTimeout(() => {
    hideControls;
  }, 3000);
};

const handleVideoClick = (e) => {
  handlePlayClick();
};

const handleKeydownShortcut = (e) => {
  if (e.key === " ") {
    handlePlayClick();
  }
  if (e.key === ("m" || "M")) {
    handleMute();
  }
  if (e.key === ("f" || "F")) {
    handelFullscreen();
  }
};

const handleEnded = () => {
  const { id } = videoContainer.dataset;
  fetch(`/api/videos/${id}/view`, {
    method: "POST",
  });
};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleVolumeInput);
volumeRange.addEventListener("change", handleVolumeChange);
video.addEventListener("loadeddata", handleLoadedData);
video.addEventListener("ended", handleEnded);
video.addEventListener("timeupdate", handleTimeUpdata);
video.addEventListener("click", handleVideoClick);
video.addEventListener("ended", handleEnded);
videoContainer.addEventListener("mousemove", handleMouseMove);
videoContainer.addEventListener("mouseleave", handleMouseLeave);
timeline.addEventListener("input", handleTimelineInput);
fullScreenBtn.addEventListener("click", handelFullscreen);
document.addEventListener("keydown", handleKeydownShortcut);
