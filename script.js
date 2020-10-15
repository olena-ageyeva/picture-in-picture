const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select a media stream, pass to video element, the play
async function selectMediaStream() {
  try {
    const selectMediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = selectMediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("whoops, error here", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

//on load
selectMediaStream();
