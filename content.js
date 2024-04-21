let originalVolume = 1;
let playbackRate = 1;

setInterval(checkVideoPlayer, 100);

function checkVideoPlayer() {
  const videoPlayer = document.getElementsByClassName("video-stream html5-main-video")[0];
  if (!videoPlayer) return;

  closeAds();
  handleAdContainer(videoPlayer);
  handleAdMessageContainer();
  handleCompanionAdSlot();
  handleMastheadAd();
  handleAdSlotRenderer();
  handleReelShelfRenderer();
  skipAd();
}

function closeAds() {
  const closeButtons = document.querySelectorAll(".ytp-ad-overlay-close-button");
  closeButtons.forEach(button => button.click());
}

function handleAdContainer(videoPlayer) {
  const adContainer = document.getElementsByClassName("video-ads ytp-ad-module")[0];
  if (!adContainer) {
    playbackRate = videoPlayer.playbackRate;
    return;
  }

  const skipButton = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");
  if (skipButton) {
    skipButton.click();
  }

  const adPreviewText = document.querySelector(".ytp-ad-text[class*='ytp-ad-preview-text']");
  if (adPreviewText) {
    videoPlayer.playbackRate = 16;
    videoPlayer.muted = true;
  }
}

function handleAdMessageContainer() {
  const adMessageContainer = document.querySelector(".ytp-ad-message-container");
  if (adMessageContainer) {
    adMessageContainer.style.display = "none";
  }
}

function handleCompanionAdSlot() {
  const companionAdSlot = document.querySelector(".style-scope.ytd-companion-slot-renderer");
  if (companionAdSlot) {
    companionAdSlot.remove();
  }
}

function handleMastheadAd() {
  const mastheadAd = document.getElementById("masthead-ad");
  if (mastheadAd) {
    mastheadAd.remove();
  }
}

function handleAdSlotRenderer() {
  const adSlotRenderer = document.querySelector("ytd-ad-slot-renderer");
  if (adSlotRenderer) {
    adSlotRenderer.remove();
  }
}

function handleReelShelfRenderer() {
  const reelShelfRenderer = document.querySelector("ytd-reel-shelf-renderer");
  if (reelShelfRenderer) {
    reelShelfRenderer.remove();
  }
}

function skipAd() {
  const skipAdButton = document.querySelector(".ytp-skip-ad-button");
  if (skipAdButton) {
    skipAdButton.click();
  }
}
