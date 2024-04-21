let originalVolume = 1;
let playbackRate = 1;

setInterval(() => {
  const videoPlayer = document.querySelector(".video-stream.html5-main-video");
  
  if (videoPlayer) {
    const adContainer = document.querySelector(".video-ads.ytp-ad-module");
    const closeButtons = document.querySelectorAll(".ytp-ad-overlay-close-button");
    const skipButton = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");
    const adMessageContainer = document.querySelector(".ytp-ad-message-container");
    const companionAdSlot = document.querySelector(".style-scope.ytd-companion-slot-renderer");
    const mastheadAd = document.getElementById("masthead-ad");
    const adSlotRenderer = document.querySelector("ytd-ad-slot-renderer");
    const reelShelfRenderer = document.querySelector("ytd-reel-shelf-renderer");

    closeButtons.forEach(button => button.click());

    if (adContainer === undefined) {
      playbackRate = videoPlayer.playbackRate;
    }

    if (skipButton) {
      skipButton.click();
    }

    if (adMessageContainer) {
      adMessageContainer.style.display = "none";
    }

    if (companionAdSlot) {
      companionAdSlot.remove();
    }

    if (adContainer && adContainer.children.length > 0) {
      const adPreviewText = document.querySelector(".ytp-ad-text[class*='ytp-ad-preview-text']");
      if (adPreviewText) {
        videoPlayer.playbackRate = 16;
        videoPlayer.muted = true;
      }
    }

    if (mastheadAd) {
      mastheadAd.remove();
    }

    if (adSlotRenderer) {
      adSlotRenderer.remove();
    }

    if (reelShelfRenderer) {
      reelShelfRenderer.remove();
    }

    const skipAdButton = document.querySelector(".ytp-skip-ad-button");
    if (skipAdButton) {
      skipAdButton.click();
    }
  }
}, 100);
