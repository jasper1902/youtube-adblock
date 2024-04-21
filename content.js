let playbackRate = 1;
setInterval(checkVideoPlayer, 100);

function checkVideoPlayer() {
  let videoPlayer = document.getElementsByClassName("video-stream html5-main-video")[0];
  if (videoPlayer !== undefined) {
    handleAdContainer(videoPlayer)
    handleAdMessageContainer() 
    handleCompanionAdSlot()
    handleMastheadAd()
    handleAdSlotRenderer();
    handleReelShelfRenderer();
    skipAd();
  }
}

function handleAdContainer(videoPlayer) {
  let ad = document.getElementsByClassName("video-ads ytp-ad-module")[0];
  
  if (ad == undefined) {
    playbackRate = videoPlayer.playbackRate;
  }
  
  closeAble()
  hideSideAd()
  speedUpVideo(ad, videoPlayer)
  skipButton()
}

function closeAble() {
  let closeAble = document.getElementsByClassName("ytp-ad-overlay-close-button");
  for (let i = 0; i < closeAble.length; i++) {
    closeAble[i].click();
  }
}
function hideSideAd() {
  let sideAd = document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer sparkles-light-cta GoogleActiveViewElement")[0];
  if (sideAd !== undefined) {
    sideAd.style.display = "none";
  }

  let sideAd_ = document.getElementsByClassName("style-scope ytd-item-section-renderer sparkles-light-cta")[0];
  if (sideAd_ !== undefined) {
    sideAd_.style.display = "none";
  }
}
function speedUpVideo(adElement, player) {
  const adContainer = adElement;
  const adTextElement = document.querySelector(".ytp-ad-text[class*='ytp-ad-preview-text']");
  
  if (adContainer !== undefined && adContainer.children.length > 0 && adTextElement !== undefined) {
    player.playbackRate = 16;
    player.muted = true;
  }
}

function skipButton() {
  const skipButton = document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text")[0]
  if (skipButton !== undefined) {
    skipButton.click();
  }
}

function handleAdMessageContainer() {
  const adMessageContainer = document.getElementsByClassName("ytp-ad-message-container")[0];
  if (adMessageContainer !== undefined) {
    adMessageContainer.style.display = "none";
  }
}

function handleCompanionAdSlot() {
  const companionAdSlot = document.getElementsByClassName("style-scope ytd-companion-slot-renderer")[0]
  if (companionAdSlot!== undefined) {
    companionAdSlot.remove();
  }
}

function handleMastheadAd() {
  const mastheadAd = document.getElementById("masthead-ad");
  if (mastheadAd !== null) {
    mastheadAd.remove();
  }
}

function handleAdSlotRenderer() {
  const adSlotRenderer = document.getElementsByTagName("ytd-ad-slot-renderer");
  if (adSlotRenderer[0] !== undefined) {
    adSlotRenderer[0].remove();
  }
}

function handleReelShelfRenderer() {
  const reelShelfRenderer = document.getElementsByTagName("ytd-reel-shelf-renderer");
  if (reelShelfRenderer[0] !== undefined) {
    reelShelfRenderer[0].remove();
  }
}

function skipAd() {
  const skipAdButton = document.querySelector(".ytp-skip-ad-button");
  if (skipAdButton) {
    skipAdButton.click();
  }
}
