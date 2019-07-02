'use strict';

const video = document.querySelector('video#gum');


const constraints = {
    audio: {
        echoCancellation: {
            exact: hasEchoCancellation
        }
    },
    video: {
        width: 1280,
        height: 720
    }
};

function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
