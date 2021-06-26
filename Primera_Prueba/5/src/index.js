const target = document.getElementById("sunmedia");

const createVideoElement = (videoLink) => {
  const video = document.createElement("video");
  video.src = videoLink;
  video.controls = true;
  video.autoplay = true;

  return video;
};

const videoElm = createVideoElement(
  "https://vod.addevweb.com/sunmedia/demos/v/normal.mp4"
);

window.addEventListener("load", () => {
  window.onscroll = onInsertVideoWhenTargetIsVisible = (target, videoElm) => {
    const startVideoPoint = document.getElementById("startVideo");
    const startVideoPointPosition = startVideoPoint.getBoundingClientRect();
    if (
      startVideoPointPosition.top >= 0 &&
      startVideoPointPosition.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      target.append(videoElm);
    }
  };
  onInsertVideoWhenTargetIsVisible(target, videoElm);
});
